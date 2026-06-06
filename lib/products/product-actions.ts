//creating server actions - getting the data -> validating the data -> adding the data

"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./product-validation";
import { db } from "@/db";
import { products } from "@/db/schema";

export const addProducts = async (formData: FormData) => {
  try {
    console.log(FormData);
    const { userId } = await auth();
    if (!userId) {
      return null;
    }

    const user = await currentUser();
    const userEmail = user?.emailAddresses?.[0]?.emailAddress ?? "null"; //getting the email
    const rawFormData = Object.fromEntries(formData.entries());

    //validating the data
    const validatedData = productSchema.safeParse(rawFormData);

    if (!validatedData.success) {
      return "Not successful";
    }

    const { name, slug, tagline, description, websiteUrl } = validatedData.data;

    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      websiteUrl,
      status: "Pending",
      submittedBy: userEmail,
    });
  } catch (error) {
    console.log(error);
  }
};
