import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Questions } from './questions.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionsService } from './questions.service';
import { response } from 'express';
import { RespondQuestionDto } from './dto/respond-question.dto';
import { RoleProtected } from 'src/auth/decorators';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from 'src/auth/guards/user-role.guard';

@Controller('questions')
@ApiTags('Questions')
export class QuestionsController {
  constructor(
    @Inject(QuestionsService) private questionsService: QuestionsService,
    @InjectRepository(Questions)
    private questionsRepository: Repository<Questions>,
  ) {}

  @ApiBearerAuth()
  @RoleProtected('user', 'super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @Post('/')
  async create(@Body() question: CreateQuestionDto) {
    try {
      return this.questionsService.create(question);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/by-post/:id')
  async finByPostId(@Param('id') id: string) {
    try {
      return this.questionsService.finByPostId(id);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/by-user/:id')
  async finByUserId(@Param('id') id: string) {
    try {
      return this.questionsService.finByUserId(id);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/by-post-user/:postId/:userId')
  async finByPostIdUserId(
    @Param('postId') postId: string,
    @Param('userId') userId: string,
  ) {
    try {
      return this.questionsService.finByPostIdUserId(postId, userId);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.questionsService.findOne(id);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @RoleProtected('user', 'super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @Patch('/respond/:id')
  async respond(@Param('id') id: string, @Body() response: RespondQuestionDto) {
    try {
      return this.questionsService.update(id, response);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @ApiBearerAuth()
  @RoleProtected('user', 'super-user', 'admin')
  @UseGuards(AuthGuard(), UserRoleGuard)
  @Delete(':id')
  async answer(@Param('id') id: string) {
    try {
      return this.questionsService.delete(id);
    } catch (error: any) {
      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
