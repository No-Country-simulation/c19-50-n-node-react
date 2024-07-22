import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Order } from '../entities/order.entity';

export function OrderResponses() {
  return applyDecorators(
    ApiResponse({
      status: 201,
      description: 'Order was created.',
      type: Order,
    }),
    ApiResponse({
      status: 200,
      description: 'Request was successful.',
      type: Order,
    }),
    ApiResponse({ status: 400, description: 'Bad request.' }),
    ApiResponse({ status: 403, description: 'Forbidden. Token related.' }),
    ApiResponse({ status: 404, description: 'Not found.' }),
    ApiResponse({ status: 500, description: 'Internal server error.' }),
  );
}
