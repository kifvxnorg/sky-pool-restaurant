import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { MenuItemCard } from "@/components/MenuItemCard";
import { useMenu } from "@/hooks/use-menu";
import { Loader2 } from "lucide-react";

const CATEGORIES = ["All", "Continental", "Buffet", "Grill", "Beverages", "Desserts"];

export default function MenuPage() {
  const { data: menuItems, isLoading } = useMenu();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = menuItems?.filter(
    item => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Culinary Excellence" 
          subtitle="Our Menu" 
        />

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm uppercase tracking-wider ${
                activeCategory === cat
                  ? "border-primary bg-primary text-black font-semibold"
                  : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : (
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems?.map((item) => (
                <MenuItemCard key={item.id} item={item} index={0} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!isLoading && filteredItems?.length === 0 && (
          <div className="text-center text-white/50 py-20">
            <p>No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
