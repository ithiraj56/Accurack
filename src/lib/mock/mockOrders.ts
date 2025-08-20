import { Order } from '../types/types';

export const mockOrders: Order[] = [
  {
    id: 1,
    orderNumber: 'ORD-1001',
    customerName: 'Alice Johnson',
    status: 'Pending',
    total: 89.99,
    date: '2025-08-18'
  },
  {
    id: 2,
    orderNumber: 'ORD-1002',
    customerName: 'Bob Smith',
    status: 'Shipped',
    total: 156.75,
    date: '2025-08-17'
  },
  {
    id: 3,
    orderNumber: 'ORD-1003',
    customerName: 'Carol Williams',
    status: 'Delivered',
    total: 234.50,
    date: '2025-08-15'
  },
  {
    id: 4,
    orderNumber: 'ORD-1004',
    customerName: 'David Brown',
    status: 'Cancelled',
    total: 67.25,
    date: '2025-08-16'
  },
  {
    id: 5,
    orderNumber: 'ORD-1005',
    customerName: 'Emma Davis',
    status: 'Pending',
    total: 312.00,
    date: '2025-08-19'
  }
]; 