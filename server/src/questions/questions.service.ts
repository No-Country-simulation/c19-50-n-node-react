import {Injectable} from "@nestjs/common";
import {Questions} from "./questions.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { RespondQuestionDto } from "./dto/respond-question.dto";


@Injectable()
export class QuestionsService {
    constructor(@InjectRepository(Questions) private questionsRepository: Repository<Questions>) {}
 
    async create(question: CreateQuestionDto) {
        try { 
            const newQuestion = this.questionsRepository.create(question);
            await this.questionsRepository.save(newQuestion);
            return newQuestion;
        } catch (error: any) {
            throw new Error("server error");
        }
    }
    
    async finByPostId(id: string) {
        return this.questionsRepository.find({
            where: {postId: id},
            relations: ['user']
        });
    }

    async finByUserId(id: string) {
        return this.questionsRepository.find({
            where: {userId: id},
            relations: ['post']
        });
    }

    async finByPostIdUserId(postId: string, userId: string) {
        return this.questionsRepository.find({
            where: {postId: postId, userId: userId},
            relations: ['user', 'post']
        });
    }
    
    async findOne(id: string) {
        return this.questionsRepository.findOne({
            where: {id: id},
            relations: ['user', 'post']
            });
    }
        
    
    async update(id: string, response: RespondQuestionDto) {
        return this.questionsRepository.update(id, {
            responded_at: new Date(),
            answer: response.answer
        });
    }

    async delete(id: string) {
        return this.questionsRepository.delete(id);
    }
    
}