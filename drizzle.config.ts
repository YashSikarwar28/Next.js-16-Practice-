import "dotenv/config";
import { defineConfig } from "drizzle-kit";

//checking purpose
console.log("Database URL : ",process.env.DATABASE_URL);

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
