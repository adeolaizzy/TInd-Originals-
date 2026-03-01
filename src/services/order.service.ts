import { createMutation } from './api/mutation';

interface OrderItem {
    name: string;
    price: number;
    size: string;
    quantity: number;
}

interface OrderRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    items: OrderItem[];
    total: number;
    paymentReference: string;
}

interface OrderResponse {
    message: string;
    order: {
        userId: string;
        items: (OrderItem & { _id: string })[];
        total: number;
        paymentReference: string;
        _id: string;
        createdAt: string;
        __v: number;
    };
}

export const useCreateOrder = createMutation<OrderResponse>({
    url: '/orders',
    method: 'POST',
});
