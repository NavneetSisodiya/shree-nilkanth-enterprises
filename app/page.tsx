import Header from "@/components/Header"
import Script from "next/script";
import HeroSlider from "@/components/HeroSlider"
import AnimatedAboutSection from "@/components/AnimatedAboutSection"
import EnhancedProductsSection from "@/components/EnhancedProductsSection"
import EnhancedIndustriesSection from "@/components/EnhancedIndustriesSection"
import AnimatedBlogSection from "@/components/AnimatedBlogSection"
import EnhancedTestimonialsSection from "@/components/EnhancedTestimonialsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-neutral-900">
      <Header />
       {/* Botpress Scripts */}
     <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" defer></script>
<script src="https://files.bpcontent.cloud/2025/08/22/08/20250822081759-GKAKHIP7.js" defer></script>
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
