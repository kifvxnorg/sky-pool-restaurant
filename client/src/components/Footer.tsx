import { Instagram, Facebook, Twitter, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white">
              SKY <span className="text-primary">POOL</span>
            </h3>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Experience the pinnacle of dining with breathtaking views, 
              exquisite continental cuisine, and an atmosphere of pure luxury above the clouds.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>Six Seasons Hotel, 15th floor,<br/>House 19, Road 96, Gulshan 2,<br/>Dhaka 1212</span>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+880 1987-009810</span>
              </li>
              <li className="flex items-center space-x-3 text-white/70">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Daily: 12:00 PM – 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif text-white">Newsletter</h4>
            <p className="text-white/60">Subscribe for exclusive offers and events.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary w-full"
              />
              <button className="px-6 py-3 bg-primary text-black font-semibold uppercase text-xs tracking-widest hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Sky Pool Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
