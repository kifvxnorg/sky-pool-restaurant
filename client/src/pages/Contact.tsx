import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-contact";
import { SectionHeading } from "@/components/SectionHeading";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const mutation = useSendMessage();

  const form = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.605389437152!2d90.4132338!3d23.7970725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70752538965%3A0xb15c441b6540d513!2sSky%20Pool%20Restaurant!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Sky+Pool+Restaurant+Six+Seasons+Hotel+Gulshan+2+Dhaka";

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get in Touch" subtitle="Contact & Location" />

        <div className="grid lg:grid-cols-12 gap-12 mt-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl border border-gold/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-gold/10 transition-colors" />
              
              <h3 className="text-3xl font-serif text-gold mb-8">Sky Pool Restaurant</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group/item">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold group-hover/item:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-white/60 leading-relaxed">
                      Six Seasons Hotel, 15th Floor,<br/>
                      House 19, Road 96, Gulshan 2,<br/>
                      Dhaka 1212, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group/item">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold group-hover/item:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+8801987009810" className="text-white/60 hover:text-gold transition-colors">+880 1987-009810</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group/item">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold group-hover/item:scale-110 transition-transform">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Hours</h4>
                    <p className="text-white/60">12:00 PM – 11:00 PM Daily</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <Button 
                  asChild
                  className="bg-gold text-black hover:bg-gold-light transition-all active-elevate-2 font-bold uppercase tracking-wider h-12"
                >
                  <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 h-4 w-4" />
                    Directions
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-gold/50 text-gold hover:bg-gold/10 transition-all active-elevate-2 font-bold uppercase tracking-wider h-12"
                >
                  <a href="tel:+8801987009810">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl border border-white/5"
            >
              <h3 className="text-xl font-serif text-white mb-6">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-white/5 border-white/10 text-white focus:border-gold/50 transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email Address" {...field} className="bg-white/5 border-white/10 text-white focus:border-gold/50 transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea placeholder="Message" {...field} className="bg-white/5 border-white/10 text-white focus:border-gold/50 transition-colors min-h-[100px]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={mutation.isPending}
                    className="w-full bg-white text-black hover:bg-gold transition-all font-bold uppercase tracking-widest"
                  >
                    {mutation.isPending ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 h-full min-h-[500px] relative group"
          >
            <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold/30 transition-colors duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-black/20 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500" />
              <iframe
                title="Sky Pool Restaurant Location"
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.2) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 z-20">
                <a 
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-white/10 flex items-center space-x-2 text-sm hover:bg-gold hover:text-black transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

