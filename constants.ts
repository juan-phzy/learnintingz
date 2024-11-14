import { UserData } from "./types";

// this is for blah
export const sampleuser:UserData = {
  id: 1,
  name: "John Doe",
  isVerified: true,
  email: "john.doe@example.com",
  profile: {
    age: 28,
    gender: "male",
    address: {
      street: "123 Elm Street",
      city: "Somewhere",
      state: "CA",
      zip: "90210",
      country: "USA",
    },
  },
  preferences: {
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    theme: "dark",
    languages: ["en", "fr", "es"],
  },
  orders: [
    {
      orderId: 101,
      date: "2024-11-12",
      items: [
        {
          productId: "A123",
          name: "Widget",
          price: 19.99,
          quantity: 2,
        },
        {
          productId: "B456",
          name: "Gadget",
          price: 29.99,
          quantity: 1,
        },
      ],
      total: 69.97,
    },
  ],
  createdAt: "2024-01-15T10:30:00Z",
  updatedAt: "2024-11-13T15:00:00Z",
};