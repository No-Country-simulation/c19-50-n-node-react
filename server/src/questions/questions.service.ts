import {Injectable} from "@nestjs/common";
import {Questions} from "./questions.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";


@Injectable()
export class QuestionsService {
    constructor(@InjectRepository(Questions) private questionsRepository: Repository<Questions>) {}
 
    async create() {
        try {
            return this.questionsRepository.save({});
        } catch (error: any) {
            throw new Error("server error");
        }
    }
    
    async findAll() {
        return 'This action returns all questions';
    }
    
    async findOne(id: string) {
        return 'This action returns a #${id} question';
    }
    
    async update(id: string) {
        return 'This action updates a #${id} question';
    }
    
}