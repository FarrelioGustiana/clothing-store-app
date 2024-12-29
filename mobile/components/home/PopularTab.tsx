import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProductCard } from '@components/home/ProductCard';
import Product from '@models/product';

interface PopularTabProps {
  products: Product[];
  onProductPress: (product: Product) => void;
  onFavoritePress: (product: Product) => void;
}

export const PopularTab: React.FC<PopularTabProps> = ({
  products,
  onProductPress,
  onFavoritePress,
}) => {
  // Sort products by rating
  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);

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
      {sortedProducts.map((product) => (
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

