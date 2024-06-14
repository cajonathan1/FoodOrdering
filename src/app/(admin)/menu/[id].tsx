import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { Stack, router, Link } from "expo-router";
import { defaultPizzaImage } from '@/app/components/ProductListItem';
import { useState } from 'react';
import Button from '@/app/components/Button';
import { useCart } from '@/app/providers/CartProvider';
import { PizzaSize } from '@/app/types';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useProduct } from '@/api/products';


const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL'];


const ProductDetailsScreen = () => {
  const { id: idString } = useLocalSearchParams();
  if (!idString) {
    return <Text>Error: No product ID found.</Text>;
  }
  const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);

  const {data: product, error, isLoading } = useProduct(id);

  const { addItem } = useCart();

  const router = useRouter(); 

  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');
  
  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push('/cart');
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }
  
  if (error) {
    return <Text>Failed to fetch products</Text>
  }

  return (
    <View style={styles.container}>

<Stack.Screen 
    options={{ 
      title: 'Menu', 
      headerTitleAlign: 'center', 
      headerRight: () => (
        <Link href={`/(admin)/menu/create?id=${id}`} asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="pencil"
                size={25}
                color={Colors.light.tint}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      ),  
    }}
  />


      <Stack.Screen options={{ title: product?.name, headerTitleAlign: 'center'}}/>

      <Image source={{  uri: product.image || defaultPizzaImage}} style={styles.image}/>

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;