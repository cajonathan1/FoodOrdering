import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export const useAdminOrderList = () => {
    return useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
          const { data, error } = await supabase.from('orders').select('*');
          if (error) {
            throw new Error(error.message);
          }
          return data;
        },
      });
};