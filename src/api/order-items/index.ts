import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/providers/AuthProvider";
import { InsertTables } from "@/app/types";

export const useInsertOrderItems = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      async mutationFn(items: InsertTables<'order_items'>[]) {
        const { error, data: newProduct } = await supabase
        .from('order_items')
        .insert(items)
        .select()
  
        if (error) {
          throw new Error(error.message);
        }
        return newProduct;
      },
    });
  };