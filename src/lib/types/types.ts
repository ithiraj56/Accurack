export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  price: number;
  description: string;
  status: string;
}

export interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  date: string;
}

export type Vendor = {
  id: string;
  name: string;
  contact: string;
  email: string;
  address?: string;
  createdAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Manager" | "Staff";
  status: "Active" | "Suspended";
  joinedAt: string;
}; 