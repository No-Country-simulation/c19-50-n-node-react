import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('UserService');
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, image = '', ...userData } = createUserDto;
      const user = this.userRepository.create({
        ...userData,
        image,
        password: bcrypt.hashSync(password, 10),
      });

      await this.userRepository.save(user);
      delete user.password;

      return {
        ...user,
        token: this.getJwtToken({
          id: user.id,
          email: user.email,
          image: user.image,
        }),
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    // try {
    const { email, password } = loginUserDto;
    const user = await this.userRepository.findOne({
      where: { email },
      select: {
        email: true,
        password: true,
        image: true,
        id: true,
        roles: true,
      },
    });

    if (!user) throw new UnauthorizedException(`Credentials are not valid`);

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException(`Credentials are not valid`);

    // Excluir campos de la respuesta
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, password: userPassword, ...rest } = user;

    return {
      ...rest,
      token: this.getJwtToken({
        id: user.id,
        email: user.email,
        image: user.image || '',
        roles: user.roles,
      }),
    };

    // } catch (error) {
    //   this.handleDBExceptions(error);
    // }
  }

  async checkAuthStatus(user: User) {
    return {
      ...user,
      token: this.getJwtToken({
        id: user.id,
        email: user.email,
        image: user.image || '',
        roles: user.roles,
      }),
    };
  }

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);

    return token;
  }

  private handleDBExceptions(error: any) {
    if (error instanceof NotFoundException) {
      throw new NotFoundException(error.message);
    }

    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
