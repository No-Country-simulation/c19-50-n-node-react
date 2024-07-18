import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { RoleProtected } from 'src/auth/decorators';
import { AuthGuard } from '@nestjs/passport';
import { CreateCategoryDTO } from './dtos/create.dto';
import { UserRoleGuard } from 'src/auth/guards/user-role.guard';
import { UpdateCategoryDTO } from './dtos/update.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    try {
      return this.categoriesService.findAll();
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
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    try {
      return this.categoriesService.findOne(id);
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Post()
  @RoleProtected('admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  create(@Body() createCategoryDTO: CreateCategoryDTO) {
    try {
      return this.categoriesService.create(createCategoryDTO);
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Put(':id')
  @RoleProtected('admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Body() updateCategoryDTO: UpdateCategoryDTO,
  ) {
    try {
      return this.categoriesService.update(id, updateCategoryDTO);
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @Delete(':id')
  @RoleProtected('admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  delete(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    try {
      return this.categoriesService.delete(id);
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
}
