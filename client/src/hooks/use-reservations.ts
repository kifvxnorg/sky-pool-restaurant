import { useMutation } from "@tanstack/react-query";
import { api, type InsertReservation } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateReservation() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertReservation) => {
      const res = await fetch(api.reservations.create.path, {
        method: api.reservations.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.reservations.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to create reservation");
      }
      
      return api.reservations.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Reservation Confirmed",
        description: "We look forward to hosting you at Sky Pool.",
      });
    },
    onError: (error) => {
      toast({
        title: "Reservation Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
