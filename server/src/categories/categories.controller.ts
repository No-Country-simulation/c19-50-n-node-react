import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
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
    @Param('id')
    id: string,
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

  @ApiBearerAuth()
  @Post()
  @RoleProtected('super-user', 'admin')
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

  @ApiBearerAuth()
  @Put(':id')
  @RoleProtected('super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  update(
    @Param('id')
    id: string,
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

  @ApiBearerAuth()
  @Delete(':id')
  @RoleProtected('super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  delete(
    @Param('id')
    id: string,
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
