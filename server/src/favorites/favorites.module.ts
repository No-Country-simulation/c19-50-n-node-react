import { Module } from '@nestjs/common';
import {Favorites} from "./favotites.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {FavoritesController} from "./favorites.controller";
import {FavoritesService} from "./favorites.service";

@Module({
    imports: [TypeOrmModule.forFeature([Favorites]) ],
    controllers: [FavoritesController],
    providers: [FavoritesService],
})
export class FavoritesModule {}
