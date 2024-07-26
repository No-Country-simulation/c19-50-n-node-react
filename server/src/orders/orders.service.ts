import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { Order } from './entities/order.entity';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger('OrdersService');

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto, user: User) {
    try {
      const post = await this.orderRepository.findOne({
        where: { id: createOrderDto.post_id },
      });

      if (!post) {
        throw new BadRequestException('Post not found');
      }

      const order = this.orderRepository.create({
        created_at: createOrderDto.created_at ?? new Date(),
        user: user,
        post: post,
      });

      await this.orderRepository.save(order);

      return order;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    try {
      const orders = await this.orderRepository.find();

      if (!orders) {
        throw new BadRequestException('Orders not found');
      }

      return orders;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findOne(id: string) {
    try {
      const order = await this.orderRepository.findOne({
        where: { id },
      });

      if (!order) {
        throw new NotFoundException(`Order with id: ${id} not found`);
      }

      return order;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto, user: User) {
    try {
      const order = await this.findOne(id);

      const updatedOrder = {
        ...order,
        ...updateOrderDto,
        user,
        updated_at: new Date(),
      };

      await this.orderRepository.save(updatedOrder);

      return updatedOrder;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    try {
      const { affected } = await this.orderRepository.delete(id);

      if (affected === 0) {
        throw new NotFoundException(`Order not found for id: ${id}`);
      }
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any) {
    if (error instanceof NotFoundException) {
      throw new NotFoundException(error.message);
    }

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
