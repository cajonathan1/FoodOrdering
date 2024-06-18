import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/app/providers/AuthProvider";
import { InsertTables } from "@/app/types";

export const useInsertOrderItems = () => {
    const queryClient = useQueryClient();
    const { session } = useAuth();
    const userId = session?.user.id
  
    return useMutation({
      async mutationFn(data: InsertTables<'order_items'>) {
        const { error, data: newProduct } = await supabase
        .from('order_items')
        .insert({ ...data, user_id: userId })
        .select()
        .single();
  
        if (error) {
          throw new Error(error.message);
        }
        return newProduct;
      },
      async onSuccess() {
        await queryClient.invalidateQueries(['products']);
      },
    });
  };