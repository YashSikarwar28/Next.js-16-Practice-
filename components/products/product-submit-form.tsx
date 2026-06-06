//product submission form
"use client";

import { Form } from "radix-ui";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormField } from "../forms/form-field";
import { Button } from "../ui/button";
import { SparkleIcon } from "lucide-react";
import React from "react";
import { addProducts } from "@/lib/products/product-actions";

export default function ProductSubmitForm() {

    const handleSubmit = async (formData:FormData) => {
        await addProducts(formData)
    }

  return (
    <form className="space-y-6" action={handleSubmit}>
      <FormField
        label="Product name"
        name="name"
        id="name"
        placeholder="My Awesome Project"
        required
        onChange={() => {}}
        error=""
      />
      <FormField
        label="Slug"
        name="Slug"
        id="slug"
        placeholder="My Awesome Project"
        required
        onChange={() => {}}
        error=""
      />
      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A brief catchy description"
        required
        onChange={() => {}}
        error=""
      />
      <FormField
        label="Website URL"
        name="website url"
        id="website url"
        placeholder="Your website url"
        required
        onChange={() => {}}
        error=""
      />
      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, Productivity, SAAS"
        required
        onChange={() => {}}
        error=""
      />
      <Button type="submit" size="lg" className="w-full">
        <SparkleIcon className="size-4"/>
        Submit Product
      </Button>
    </form>
  );
}
