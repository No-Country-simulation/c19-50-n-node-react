import {Controller, Get, Param, Patch, Post} from '@nestjs/common';

@Controller('questions')
export class QuestionsController {
    
    
    @Post()
    async create() {
        return 'This action adds a new question';
    }
    
    @Get()
    async findAll() {
        return 'This action returns all questions';
    }
    
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return 'This action returns a #${id} question';
    }
    
    @Patch(':id')
    async update(@Param('id') id: string) {
        return 'This action updates a #${id} question';
    }
    
}