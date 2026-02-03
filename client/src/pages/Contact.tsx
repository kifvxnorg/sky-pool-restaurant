import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-contact";
import { SectionHeading } from "@/components/SectionHeading";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get in Touch" subtitle="Contact Us" />

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-serif text-white mb-6">Visit Sky Pool</h3>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Address</h4>
                <p className="text-white/60">Six Seasons Hotel, 15th floor,<br/>House 19, Road 96, Gulshan 2, Dhaka 1212</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Phone</h4>
                <p className="text-white/60">+880 1987-009810</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Opening Hours</h4>
                <p className="text-white/60">Daily: 12:00 PM – 11:00 PM</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 mt-8">
              <p>Google Map Integration Here</p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl h-fit"
          >
            <h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-white/5 border-white/10 text-white" />
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
                      <FormLabel className="text-white/80">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="bg-white/5 border-white/10 text-white" />
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
                      <FormLabel className="text-white/80">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" {...field} className="bg-white/5 border-white/10 text-white min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-primary text-black hover:bg-white uppercase tracking-widest font-semibold"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
