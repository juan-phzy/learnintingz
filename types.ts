export type UserProfile = {
  age: number;
  gender: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
};

export type UserPreferences = {
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  theme: string;
  languages: string[];
};

export type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  orderId: number;
  date: string;
  items: OrderItem[];
  total: number;
};

export type UserData = {
  id: number;
  name: string;
  isVerified: boolean;
  email: string;
  profile: UserProfile;
  preferences: UserPreferences;
  orders: Order[];
  createdAt: string;
  updatedAt: string;
};
