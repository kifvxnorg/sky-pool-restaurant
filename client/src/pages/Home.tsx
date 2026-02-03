import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { MenuItemCard } from "@/components/MenuItemCard";
import { useMenu } from "@/hooks/use-menu";
import { useReviews } from "@/hooks/use-reviews";

export default function Home() {
  const { data: menuItems } = useMenu();
  const { data: reviews } = useReviews();

  // Get featured items (first 3)
  const featuredItems = menuItems?.filter(item => item.isFeatured).slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background - using Unsplash for cinematic vibe */}
        {/* luxury rooftop bar night view */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
            alt="Rooftop Dining"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary tracking-[0.3em] uppercase mb-4 text-sm md:text-base font-medium"
          >
            Welcome to the height of luxury
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-8 tracking-tight"
          >
            Live the Sky High <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] via-[#F8E9A1] to-[#D4A373]">Dining Experience</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/reservations">
              <a className="px-8 py-4 bg-primary text-black font-semibold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
                Reserve a Table
              </a>
            </Link>
            <Link href="/menu">
              <a className="px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all duration-300">
                View Menu
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="A Symphony of Flavors Above the City" 
                subtitle="Our Story" 
                alignment="left"
              />
              <p className="text-white/70 leading-relaxed mb-8 text-lg">
                Sky Pool Restaurant offers unforgettable rooftop dining with panoramic views of Dhaka. 
                Whether you're here for our signature steaks, exotic mocktails, or the stunning sunset 
                over Gulshan, every moment is crafted to perfection.
              </p>
              <Link href="/about">
                <a className="inline-flex items-center text-primary uppercase tracking-widest text-sm hover:text-white transition-colors group">
                  Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative z-10">
                {/* elegant plated food fine dining */}
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                  alt="Fine Dining"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-full h-full border border-primary/20 -z-0 rounded-lg hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-6">
          <SectionHeading title="Signature Dishes" subtitle="Taste the Extraordinary" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {featuredItems.length > 0 ? (
              featuredItems.map((item, idx) => (
                <MenuItemCard key={item.id} item={item} index={idx} />
              ))
            ) : (
              // Loading state skeletons
              [1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-white/5 animate-pulse rounded-lg" />
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/menu">
              <a className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-medium">
                View Full Menu
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-24 relative overflow-hidden">
        {/* Background texture/image */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading title="Guest Experiences" subtitle="What People Say" />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {reviews?.slice(0, 3).map((review, idx) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 p-8 rounded-lg border border-white/5 backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-gray-600"}`} 
                    />
                  ))}
                </div>
                <p className="text-white/80 italic mb-6">"{review.comment}"</p>
                <div>
                  <h4 className="font-serif text-lg text-white">{review.name}</h4>
                  <span className="text-xs text-white/40 uppercase tracking-wider">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
