import {Controller, HttpException, HttpStatus, Inject} from "@nestjs/common";
import {FavoritesService} from "./favorites.service";
import {CreateFavoriteDto} from "./dto/create-favorite-dto";


@Controller('favorites')
export class FavoritesController {
    
    constructor(@Inject(FavoritesService) private favoritesService: FavoritesService) {}
    
    
    async findAll() {
        try {
            return this.favoritesService.findAll();
        }catch (error: any) {
            throw new HttpException(
                'server error',
                HttpStatus.INTERNAL_SERVER_ERROR,
                { cause: error },
            );
        }
    }
    
    async findOne(id: number) {
        try {
            return this.favoritesService.findOne(id);
        } catch (error: any) {
            throw new HttpException(
                'server error',
                HttpStatus.NOT_FOUND,
                { cause: error },
            );
        }
    }
    
    async create(favorite: CreateFavoriteDto) {
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
    
    async findFavoritesByUserId(userId: number) {
        try {
            return this.favoritesService.findFavoritesByUserId(userId);
        } catch (error: any) {
            throw new HttpException(
                'server error',
                HttpStatus.NOT_FOUND,
                { cause: error },
            );
        }
    }
    
    async findFavoritesByPostId(postId: number) {
        try {
            return this.favoritesService.findFavoritesByPostId(postId)
        }catch (error: any) {
            throw new HttpException(
                'server error',
                HttpStatus.NOT_FOUND,
                { cause: error },
            );
        }
    }
}