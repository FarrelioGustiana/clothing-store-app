import { ProductCard } from '@components/home/ProductCard';
import Product from '@models/product';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ManTabProps {
  products: Product[];
  onProductPress: (product: Product) => void;
  onFavoritePress: (product: Product) => void;
}

export const ManTab: React.FC<ManTabProps> = ({
  products,
  onProductPress,
  onFavoritePress,
}) => {
  // Filter products for men's category
  const mensProducts = products.filter(
    (product) => product.category.toLowerCase() === 'men'
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
      {mensProducts.map((product) => (
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

