import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDTO } from './dtos/create.dto';
import { UpdatePostDTO } from './dtos/update.dto';
import { RoleProtected } from '../auth/decorators';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '../auth/guards/user-role.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  findAll() {
    try {
      return this.postsService.findAll();
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Get('/pagination')
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Página de la paginación',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
    description: 'Límite de elementos por página',
  })
  pagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    try {
      return this.postsService.paginate({ page, limit });
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: string,
  ) {
    try {
      return this.postsService.findOne(id);
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @ApiBearerAuth()
  @Post()
  @RoleProtected('super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Create a post',
    required: true,
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          example: 'Taller de Fotografía en las Sierras',
          description: 'Título de la publicación',
        },
        content: {
          type: 'string',
          example: 'Únete a nuestro taller práctico de fotografía...',
          description: 'Contenido de la publicación',
        },
        category: {
          type: 'number',
          example: 1,
          description: 'ID de la categoría',
        },
        price: {
          type: 'number',
          example: 10000,
          description: 'Precio de la publicación',
        },
        date: {
          type: 'string',
          example: '2023-10-05',
          format: 'date',
          description: 'Fecha de la publicación',
        },
        latitude: {
          type: 'number',
          example: -31.4212,
          description: 'Latitud de la ubicación',
        },
        longitude: {
          type: 'number',
          example: -64.2179,
          description: 'Longitud de la ubicación',
        },
        address: {
          type: 'string',
          example: 'Cerro Blanco, Córdoba, Argentina',
          description: 'Dirección de la publicación',
        },
        image: {
          type: 'string',
          format: 'binary',
          description: 'Subir una imagen',
        },
      },
    },
  })
  async create(
    @UploadedFile() image: Express.Multer.File,
    @Body() createPostDTO: CreatePostDTO,
  ) {
    try {
      if (!image) {
        throw new Error('File is required');
      }

      return this.postsService.create(createPostDTO, image);
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @ApiBearerAuth()
  @Put(':id')
  @RoleProtected('super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    description:
      'Si no quieren editar un campo en particular, borren el contenido del mismo y dejen SIN TILDAR el "Send empty value"!',
  })
  @ApiBody({
    description: 'Actualizar una publicación',
    required: false,
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          example: 'Taller de Fotografía en las Sierras',
          description: 'Título de la publicación',
        },
        content: {
          type: 'string',
          example: 'Únete a nuestro taller práctico de fotografía...',
          description: 'Contenido de la publicación',
        },
        category: {
          type: 'number',
          example: 1,
          description: 'ID de la categoría',
        },
        price: {
          type: 'number',
          example: 10000,
          description: 'Precio de la publicación',
        },
        date: {
          type: 'string',
          example: '2023-10-05',
          format: 'date',
          description: 'Fecha de la publicación',
        },
        latitude: {
          type: 'number',
          example: -31.4212,
          description: 'Latitud de la ubicación',
        },
        longitude: {
          type: 'number',
          example: -64.2179,
          description: 'Longitud de la ubicación',
        },
        address: {
          type: 'string',
          example: 'Cerro Blanco, Córdoba, Argentina',
          description: 'Dirección de la publicación',
        },
        image: {
          type: 'string',
          format: 'binary',
          description: 'Subir una imagen',
        },
      },
    },
  })
  update(
    @Param('id')
    id: string,
    @UploadedFile() image: Express.Multer.File,
    @Body() updatePostDTO: UpdatePostDTO,
  ) {
    try {
      return this.postsService.update(id, updatePostDTO, image);
    } catch (error: any) {
      throw new HttpException(
        'error del servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @ApiBearerAuth()
  @Delete(':id')
  @RoleProtected('super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  delete(
    @Param('id')
    id: string,
  ) {
    try {
      return this.postsService.delete(id);
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
}
