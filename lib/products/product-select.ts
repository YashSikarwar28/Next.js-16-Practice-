//2:06

//selecting products from database

import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function getFeaturedProducts() {
  const productsdata = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved")).orderBy(desc(products.voteCount));

    return productsdata
}
