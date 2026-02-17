import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "excerpt", label: "Excerpt (Preview Text)", required: true, ui: { component: "textarea" } },
          { type: "datetime", name: "date", label: "Date", required: true },
          { type: "string", name: "category", label: "Category", options: ["Parts", "Car Meets", "How-To", "Story", "Events"], required: true },
          { type: "image", name: "image", label: "Featured Image" },
          { type: "rich-text", name: "body", label: "Content", isBody: true },
        ],
      },
      {
        name: "shop",
        label: "Shop Items",
        path: "content/shop",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Product Name", required: true },
          { type: "number", name: "price", label: "Price ($)", required: true },
          { type: "string", name: "condition", label: "Condition", options: ["New", "Excellent", "Rebuilt", "Good", "Working"], required: true },
          { type: "string", name: "compatibility", label: "Compatibility", options: ["Previa", "Estima", "Both"], required: true },
          { type: "string", name: "category", label: "Category", options: ["Exterior", "Interior", "Performance", "Suspension", "Maintenance"], required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "image", name: "images", label: "Product Images", list: true },
          { type: "boolean", name: "rare", label: "Mark as Rare Find" },
        ],
      },
      {
        name: "howto",
        label: "How-To Guides",
        path: "content/howto",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Guide Title", required: true },
          { type: "string", name: "excerpt", label: "Short Description", required: true },
          { type: "string", name: "category", label: "Category", options: ["Performance", "Exterior", "Interior", "Suspension", "Maintenance"], required: true },
          { type: "number", name: "difficulty", label: "Difficulty (1-5 stars)", required: true },
          { type: "string", name: "time", label: "Time Required", required: true },
          { type: "string", name: "videoUrl", label: "YouTube Video URL (optional)" },
          { type: "image", name: "heroImages", label: "Hero Images (for cover/thumbnail)", list: true },
          { type: "boolean", name: "featured", label: "Feature This Guide" },
          {
            type: "object",
            name: "tools",
            label: "Tools & Materials",
            fields: [
              { type: "string", name: "description", label: "Tools Description", ui: { component: "textarea" } },
              { type: "image", name: "images", label: "Tools Images", list: true },
            ],
          },
          {
            type: "object",
            name: "steps",
            label: "Steps",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Step Title", required: true },
              { type: "rich-text", name: "content", label: "Step Instructions", required: true },
              { type: "image", name: "images", label: "Step Images", list: true },
            ],
          },
        ],
      },
      {
        name: "rides",
        label: "My Rides",
        path: "content/rides",
        format: "json",
        fields: [
          { type: "string", name: "year", label: "Year", required: true },
          { type: "string", name: "model", label: "Model", required: true },
          { type: "string", name: "market", label: "Market (USDM/JDM)", options: ["USDM", "JDM Import"], required: true },
          { type: "string", name: "engine", label: "Engine", required: true },
          { type: "string", name: "transmission", label: "Transmission", required: true },
          { type: "string", name: "drivetrain", label: "Drivetrain", required: true },
          { type: "string", name: "color", label: "Color", required: true },
          { type: "string", name: "modifications", label: "Modifications (one per line)", ui: { component: "textarea" } },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Main Photo" },
          { type: "number", name: "displayOrder", label: "Display Order (1, 2, 3...)", required: true },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "md",
        match: { include: "about" },
        fields: [
          { type: "string", name: "title", label: "Page Title", required: true },
          { type: "rich-text", name: "body", label: "Content", isBody: true },
        ],
      },
      {
        name: "gallery",
        label: "Gallery",
        path: "content/gallery",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Photo Title", required: 
true },
          { type: "string", name: "caption", label: "Caption/Description", 
ui: { component: "textarea" } },
          { type: "string", name: "category", label: "Category", options: 
["Car Meets", "Mods & Builds", "Daily Life", "Events", "Road Trips", 
"Other"], required: true },
          { type: "datetime", name: "date", label: "Date Taken", required: 
true },
          { type: "image", name: "images", label: "Photos", list: true, 
required: true },
          { type: "number", name: "displayOrder", label: "Display Order", 
required: true },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        match: { include: "site" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "image", name: "heroImage", label: "Homepage Hero Image" },
          { type: "image", name: "aboutImage", label: "About Page Hero Image" },
          { type: "string", name: "instagramHandle", label: "Instagram Handle (without @)" },
          { type: "string", name: "email", label: "Contact Email" },
        ],
      },
    ],
  },
});
