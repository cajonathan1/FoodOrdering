import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export const useProductList = () => {
    return useQuery({
        queryKey: ['product'],
        queryFn: async () => {
          const { data, error } = await supabase.from('products').select('*');
          if (error) {
            throw new Error(error.message);
          }
          return data;
        },
      });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
};

export const useInsertProduct = () => {
  return useMutation({
    async mutationFn(data: any) {
      const { error, data: newProduct } = await supabase.from('products').insert({
        name: data.name,
        image: data.image,
        price: data.price,
      })
      .single();

      if (error) {
        throw new Error(error.message);
      }
      return newProduct;
    },
  })
};