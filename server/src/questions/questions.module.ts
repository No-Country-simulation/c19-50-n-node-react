import { Module } from '@nestjs/common';
import {Questions} from "./questions.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {QuestionsController} from "./questions.controller";
import {QuestionsService} from "./questions.service";

@Module({
    imports: [TypeOrmModule.forFeature([Questions])],
    controllers: [QuestionsController ],
    providers: [QuestionsService],
})
export class QuestionsModule {}
