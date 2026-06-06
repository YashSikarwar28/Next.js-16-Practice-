//submit products page

import ProductSubmitForm from "@/components/products/product-submit-form";
import SectionHeader from "@/components/ui/common/section-header";
import { SparkleIcon } from "lucide-react";

export default function SubmitPage() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Submit your Project"
            icon={SparkleIcon}
            description="Share your project"
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <ProductSubmitForm />
        </div>
      </div>
    </section>
  );
}
