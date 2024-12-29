import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Heart, Star } from 'lucide-react-native';
import { useColorScheme } from '@hooks/useColorScheme';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  onPress: () => void;
  onFavorite: () => void;
  isFavorite?: boolean;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  rating,
  onPress,
  onFavorite,
  isFavorite = false,
}) => {
  const colors = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      width: CARD_WIDTH,
      marginBottom: 16,
    },
    imageContainer: {
      width: '100%',
      height: CARD_WIDTH * 1.2,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 8,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    favoriteButton: {
      position: 'absolute',
      top: 8,
      right: 8,
      backgroundColor: colors.background,
      borderRadius: 20,
      padding: 8,
    },
    details: {
      paddingHorizontal: 4,
    },
    name: {
      fontSize: 16,
      color: colors.text,
      marginBottom: 4,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    rating: {
      fontSize: 14,
      color: colors.secondary,
      marginLeft: 4,
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.text,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <TouchableOpacity style={styles.favoriteButton} onPress={onFavorite}>
          <Heart
            size={20}
            color={colors.accent}
            fill={isFavorite ? colors.accent : 'transparent'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.ratingContainer}>
          <Star size={16} color={colors.accent} fill={colors.accent} />
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

