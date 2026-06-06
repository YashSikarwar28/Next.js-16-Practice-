//validating the data using zod to make sure the entered form data is according to the schema defined

import z from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(120, { message: "Name must be less than 120 characters" }),
  slug: z
    .string()
    .min(3, { message: "Slug is required" })
    .max(120, { message: "Slug must be less than 120 characters" }),
  tagline: z.string().max(200, { message: "Tagline required" }),
  description: z.string().optional(),
  websiteUrl: z.string().min(3, { message: "url is reuqired" }),
});
