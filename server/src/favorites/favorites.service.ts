import { Injectable } from '@nestjs/common';
import {Favorites} from "./favorites.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateFavoriteDto} from "./dto/create-favorite-dto";


@Injectable()
export class FavoritesService {
    
    constructor(@InjectRepository(Favorites) private favoritesRepository: Repository<Favorites>) {}
    async findAll(): Promise<Favorites[]> {
        return await this.favoritesRepository.find();
    }

    async findOne(userId: string, postId: string): Promise<Favorites> {
        return await this.favoritesRepository.findOne({
            where: { userId, postId }
        })
    }

    async create(favorite: CreateFavoriteDto): Promise<Favorites> {
        const newFavorite = this.favoritesRepository.create(favorite);
        return await this.favoritesRepository.save(newFavorite);
    }

    async delete(userId: string, postId: string): Promise<void> {
        await this.favoritesRepository.delete({ userId, postId });
    }

    async findFavoritesByUserId(userId: string): Promise<Favorites[]> {
        return await this.favoritesRepository.find({
            where: { userId },
            relations: ['post']
        })
    }

    async findFavoritesByPostId(postId: string): Promise<Favorites[]> {
        return await this.favoritesRepository.find({
            where: { postId },
            relations: ['user']
        })
    }

}