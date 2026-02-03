import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Menu Routes
  app.get(api.menu.list.path, async (req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  app.get(api.menu.get.path, async (req, res) => {
    const item = await storage.getMenuItem(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json(item);
  });

  // Reservation Routes
  app.post(api.reservations.create.path, async (req, res) => {
    try {
      const input = api.reservations.create.input.parse(req.body);
      const reservation = await storage.createReservation(input);
      res.status(201).json(reservation);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Reviews Routes
  app.get(api.reviews.list.path, async (req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  // Contact Routes
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingItems = await storage.getMenuItems();
  if (existingItems.length === 0) {
    console.log("Seeding database...");
    
    // Menu Items
    const menuItems = [
      {
        name: "Sky Signature BBQ Platter",
        description: "Assorted premium meats grilled to perfection, served with house special sauces.",
        price: 2200,
        category: "Grill",
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76690b67f61?auto=format&fit=crop&q=80",
        isFeatured: true
      },
      {
        name: "Grilled Tiger Prawns",
        description: "Jumbo tiger prawns marinated in lemon herb butter and charcoal grilled.",
        price: 2900,
        category: "Grill",
        imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80",
        isFeatured: true
      },
      {
        name: "Creamy Mushroom Risotto",
        description: "Arborio rice cooked with wild mushrooms, parmesan cheese, and truffle oil.",
        price: 1800,
        category: "Continental",
        imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80",
        isFeatured: false
      },
      {
        name: "Seasonal International Buffet",
        description: "An extensive spread of international cuisines available on weekends.",
        price: 3500,
        category: "Buffet",
        imageUrl: "https://images.unsplash.com/photo-1582254465498-6bc70419b607?auto=format&fit=crop&q=80",
        isFeatured: true
      },
      {
        name: "Charcoal Grilled Steaks",
        description: "Premium cuts of beef, seasoned and grilled to your preference.",
        price: 3000,
        category: "Grill",
        imageUrl: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80",
        isFeatured: true
      },
      {
        name: "House-Special Mocktails",
        description: "Refreshing non-alcoholic beverages crafted by our expert mixologists.",
        price: 450,
        category: "Beverages",
        imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80",
        isFeatured: false
      },
      {
        name: "Dessert Trio Selection",
        description: "A chef's selection of our three finest desserts.",
        price: 850,
        category: "Desserts",
        imageUrl: "https://images.unsplash.com/photo-1563729784474-d779b95f3ee7?auto=format&fit=crop&q=80",
        isFeatured: false
      }
    ];

    for (const item of menuItems) {
      await storage.createMenuItem(item);
    }

    // Reviews
    const reviews = [
      {
        name: "Rahim Ahmed",
        rating: 5,
        comment: "The view is absolutely stunning! Best rooftop dining experience in Dhaka.",
        date: "2023-10-15"
      },
      {
        name: "Sarah Khan",
        rating: 5,
        comment: "The BBQ platter was delicious. Great service and ambiance.",
        date: "2023-10-20"
      },
      {
        name: "Michael Chen",
        rating: 4,
        comment: "Excellent buffet spread. A bit pricey but worth it for the special occasion.",
        date: "2023-11-05"
      }
    ];

    for (const review of reviews) {
      await storage.createReview(review);
    }
    
    console.log("Database seeded successfully.");
  }
}
