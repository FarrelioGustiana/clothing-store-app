import { ProductCard } from '@components/home/ProductCard';
import Product from '@models/product';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface NewestTabProps {
  products: Product[];
  onProductPress: (product: Product) => void;
  onFavoritePress: (product: Product) => void;
}

export const NewestTab: React.FC<NewestTabProps> = ({
  products,
  onProductPress,
  onFavoritePress,
}) => {
  // Sort products by newest first (you can add a dateAdded field to Product type)
  const sortedProducts = [...products].sort((a, b) => b.id.localeCompare(a.id));

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

