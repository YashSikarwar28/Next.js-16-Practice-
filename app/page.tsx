import FeaturedProducts from "@/components/ui/landingPage/featured-products";
import HeroSection from "@/components/ui/landingPage/hero-section";
import RecentlyLauchedProducts from "@/components/ui/landingPage/recently-launched-products";

export default function Home() {
  return <div>
    <HeroSection/>
    <FeaturedProducts/>
    <RecentlyLauchedProducts/>
  </div>
}