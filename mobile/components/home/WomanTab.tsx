import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProductCard } from '@components/home/ProductCard';
import Product from '@models/product';

interface WomanTabProps {
  products: Product[];
  onProductPress: (product: Product) => void;
  onFavoritePress: (product: Product) => void;
}

export const WomanTab: React.FC<WomanTabProps> = ({
  products,
  onProductPress,
  onFavoritePress,
}) => {
  // Filter products for women's category
  const womensProducts = products.filter(
    (product) => product.category.toLowerCase() === 'women'
  );

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 16,
      gap: 16,
    },
  });

  return (
    <View style={styles.container}>
      {womensProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          rating={product.rating}
          onPress={() => onProductPress(product)}
          onFavorite={() => onFavoritePress(product)}
          isFavorite={product.isFavorite}
        />
      ))}
    </View>
  );
};

