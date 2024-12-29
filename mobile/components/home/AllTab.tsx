import React from 'react';
import { View, StyleSheet } from 'react-native';
import Product from '@models/product';
import { ProductCard } from '@components/home/ProductCard';

type AllTabProps = {
  products: Product[];
  onProductPress: (product: Product) => void;
  onFavoritePress: (product: Product) => void;
}

export const AllTab: React.FC<AllTabProps> = ({
  products,
  onProductPress,
  onFavoritePress,
}) => {
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
      {products.map((product) => (
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

