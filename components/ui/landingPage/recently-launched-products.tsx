import { Calendar1Icon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "../common/empty-states";

export default function RecentlyLauchedProducts() {
  
    const recentlyLaunched = [
    {
      id: 1,
      name: "Kit",
      description: "Kit Discription",
      tags: ["SaaS", "AI", "Pricing"],
      votes: 615,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Kit",
      description: "Kit Discription",
      tags: ["SaaS", "AI", "Pricing"],
      votes: 415,
      isFeatured: false,
    },
  ];

  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched Products"
          icon={RocketIcon}
          description="Most recently launched products"
        />

        {recentlyLaunched.length>0?(
            <div className="grid-wrapper">
                {recentlyLaunched.map((product)=><ProductCard key={product.id} product={product}/>)}
            </div>
        ):(
            <EmptyState message="No products launched" icon={Calendar1Icon}/>
        )}

      </div>
    </section>
  );
}
