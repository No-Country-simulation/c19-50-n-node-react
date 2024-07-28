import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite-dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { RoleProtected } from '../auth/decorators';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '../auth/guards/user-role.guard';

@Controller('favorites')
@ApiTags('Favorites')
export class FavoritesController {
  constructor(
    @Inject(FavoritesService) private favoritesService: FavoritesService,
  ) {}

  @ApiBearerAuth()
  @RoleProtected('user', 'super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @Get('/')
  async findAll() {
    try {
      return this.favoritesService.findAll();
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @ApiBearerAuth()
  @RoleProtected('user', 'super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @Get('/')
  async findOne(
    @Query('userId') userId: string,
    @Query('postId') postId: string,
  ) {
    try {
      return this.favoritesService.findOne(userId, postId);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.NOT_FOUND, {
        cause: error,
      });
    }
  }

  @ApiBearerAuth()
  @RoleProtected('user', 'super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @Post('/')
  async create(@Body() favorite: CreateFavoriteDto) {
    try {
      return this.favoritesService.create(favorite);
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }

  @ApiBearerAuth()
  @RoleProtected('user', 'super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @Get('/by-user/:id')
  async findFavoritesByUserId(@Param('id') userId: string) {
    try {
      return this.favoritesService.findFavoritesByUserId(userId);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.NOT_FOUND, {
        cause: error,
      });
    }
  }

  @Get('/by-post/:id')
  async findFavoritesByPostId(@Param('id') postId: string) {
    try {
      return this.favoritesService.findFavoritesByPostId(postId);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.NOT_FOUND, {
        cause: error,
      });
    }
  }

  @ApiBearerAuth()
  @RoleProtected('user', 'super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @Delete('/')
  async delete(
    @Query('userId') userId: string,
    @Query('postId') postId: string,
  ) {
    try {
      return this.favoritesService.delete(userId, postId);
    } catch (error: any) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        { cause: error },
      );
    }
  }
}
