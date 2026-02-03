import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReservationSchema } from "@shared/schema";
import { useCreateReservation } from "@/hooks/use-reservations";
import { SectionHeading } from "@/components/SectionHeading";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { z } from "zod";

// Frontend validation schema (can extend base schema if needed)
const formSchema = insertReservationSchema.extend({
  guests: z.coerce.number().min(1, "At least 1 guest required"),
});

export default function ReservationsPage() {
  const mutation = useCreateReservation();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: 2,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://pixabay.com/get/g7c9c1a310877c14ad37f3ad704d3e3652b1158e12afbd08e8d4accac7ba474eaee93e3bda376e0e83b6508434f2119fc6cd98cc8d24eecaca4819db68b83e182_1280.jpg" 
          alt="Restaurant Ambience"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Reserve Your Table" subtitle="Book Now" />

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="bg-white/5 border-white/10 text-white focus:border-primary h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+880..." 
                            {...field} 
                            className="bg-white/5 border-white/10 text-white focus:border-primary h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Date */}
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date"
                            {...field} 
                            className="bg-white/5 border-white/10 text-white focus:border-primary h-12 [color-scheme:dark]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Time */}
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-primary h-12">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                            {["12:00", "13:00", "14:00", "15:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map(time => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Guests */}
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80 uppercase text-xs tracking-wider">Guests</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="1"
                            {...field} 
                            className="bg-white/5 border-white/10 text-white focus:border-primary h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-primary text-black hover:bg-white h-14 uppercase tracking-widest font-semibold text-sm transition-all duration-300 mt-8"
                >
                  {mutation.isPending ? "Confirming..." : "Confirm Reservation"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
