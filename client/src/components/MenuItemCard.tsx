import { motion } from "framer-motion";
import type { MenuItem } from "@shared/schema";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#111] border border-white/5 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        {/* Using a placeholder if imageUrl is missing or invalid in demo */}
        <img 
          src={item.imageUrl || "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"} 
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
      </div>
      
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-medium text-white group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="text-primary font-bold">
            ৳{item.price.toLocaleString()}
          </span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <button className="text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
          Order Now <span className="w-4 h-[1px] bg-primary block"></span>
        </button>
      </div>
    </motion.div>
  );
}
