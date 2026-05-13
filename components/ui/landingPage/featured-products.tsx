import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import { Button } from "../button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";

const featuredProducts=[
  {
    id:1,
    name:"Kit",
    description:"Kit Discription",
    tags:["SaaS","AI","Pricing"],
    votes:615,
    isFeatured:true,
  },
  {
    id:2,
    name:"Kit",
    description:"Kit Discription",
    tags:["SaaS","AI","Pricing"],
    votes:415,
    isFeatured:false,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week"
          />
          <Button variant="outline" className="hidden sm:flex" asChild>
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
            {featuredProducts.map((product)=><ProductCard product={product} key={product.id}/>)}
        </div>
      </div>
    </section>
  );
}
