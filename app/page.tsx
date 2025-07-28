import Header from "@/components/Header"
import HeroSlider from "@/components/HeroSlider"
import AnimatedAboutSection from "@/components/AnimatedAboutSection"
import EnhancedProductsSection from "@/components/EnhancedProductsSection"
import EnhancedIndustriesSection from "@/components/EnhancedIndustriesSection"
import AnimatedBlogSection from "@/components/AnimatedBlogSection"
import EnhancedTestimonialsSection from "@/components/EnhancedTestimonialsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <AnimatedAboutSection />
      <EnhancedProductsSection />
      <EnhancedIndustriesSection />
      <AnimatedBlogSection />
      <EnhancedTestimonialsSection />
      <Footer />
    </main>
  )
}
