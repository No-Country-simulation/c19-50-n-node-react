import { Injectable } from '@nestjs/common';
import {Favorites} from "./favotites.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateFavoriteDto} from "./dto/create-favorite-dto";


@Injectable()
export class FavoritesService {
    
    constructor(@InjectRepository(Favorites) private favoritesRepository: Repository<Favorites>) {}
    async findAll(): Promise<Favorites[]> {
        return await this.favoritesRepository.find();
    }
    async findOne(id: number): Promise<Favorites> {
        return await this.favoritesRepository.findOne({
            where: { id }
        })
    }
    async create(favorite: CreateFavoriteDto): Promise<Favorites> {
        const newFavorite = this.favoritesRepository.create(favorite);
        return await this.favoritesRepository.save(newFavorite);
    }
    async delete(id: number): Promise<void> {
        await this.favoritesRepository.delete(id);
    }
    async findFavoritesByUserId(userId: number): Promise<Favorites[]> {
        return await this.favoritesRepository.find({
            where: { userId }
        })
        
    }
    
    async findFavoritesByPostId(postId: number): Promise<Favorites[]> {
        return await this.favoritesRepository.find({
            where: { postId }
        })
    }

}