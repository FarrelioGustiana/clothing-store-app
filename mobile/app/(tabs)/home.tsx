import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { MapPin, Search, Settings } from 'lucide-react-native';
import Product from '@models/product';
import { useColorScheme } from '@hooks/useColorScheme';
import { CategoryItem } from '@components/home/CategoryItem';
import { TabBar } from '@components/home/TabBar';
import { TabContent } from '@components/home/TabContent';

const categories = [
  { type: 'shirt', label: 'T-Shirt' },
  { type: 'pant', label: 'Pants' },
  { type: 'dress', label: 'Dress' },
  { type: 'jacket', label: 'Jacket' },
] as const;

const tabs = ['All', 'Newest', 'Popular', 'Man', 'Woman'];

// Mock products data
const products: Product[] = [
  { id: '1', name: 'Brown Jacket', price: 83.97, rating: 4.9, image: '/placeholder.svg?height=200&width=150', category: 'men' },
  { id: '2', name: 'Brown Suite', price: 120.00, rating: 5.0, image: '/placeholder.svg?height=200&width=150', category: 'men' },
  { id: '3', name: 'Yellow Shirt', price: 45.99, rating: 4.7, image: '/placeholder.svg?height=200&width=150', category: 'women' },
  { id: '4', name: 'Black Dress', price: 89.99, rating: 4.8, image: '/placeholder.svg?height=200&width=150', category: 'women' },
];

export default function HomeScreen() {
  const colors = useColorScheme();
  const [activeTab, setActiveTab] = useState('Newest');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      padding: 16,
      gap: 16,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    location: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    locationText: {
      fontSize: 16,
      color: colors.text,
      fontWeight: '500',
    },
    profileImage: {
      width: 32,
      height: 32,
      borderRadius: 16,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    searchInput: {
      flex: 1,
      height: 44,
      backgroundColor: colors.background,
      borderRadius: 22,
      paddingHorizontal: 16,
      fontSize: 16,
      color: colors.text,
      borderWidth: 1,
      borderColor: colors.border,
    },
    filterButton: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: colors.accent,
      justifyContent: 'center',
      alignItems: 'center',
    },
    banner: {
      margin: 16,
      height: 160,
      backgroundColor: colors.accentLight,
      borderRadius: 12,
      padding: 16,
      overflow: 'hidden',
    },
    bannerContent: {
      flex: 1,
      justifyContent: 'space-between',
    },
    bannerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 4,
    },
    bannerSubtitle: {
      fontSize: 14,
      color: colors.secondary,
      marginBottom: 16,
    },
    shopButton: {
      backgroundColor: colors.accent,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      alignSelf: 'flex-start',
    },
    shopButtonText: {
      color: colors.background,
      fontWeight: '500',
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
    },
    seeAll: {
      fontSize: 14,
      color: colors.secondary,
    },
    categories: {
      paddingLeft: 16,
      marginBottom: 24,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <TouchableOpacity style={styles.location}>
            <MapPin size={20} color={colors.text} />
            <Text style={styles.locationText}>New York, USA</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: '/placeholder.svg?height=32&width=32' }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={colors.secondary}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Settings size={20} color={colors.background} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <View>
            <Text style={styles.bannerTitle}>New Collection</Text>
            <Text style={styles.bannerSubtitle}>
              Discount 50% for{'\n'}the first transaction
            </Text>
          </View>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Category</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          {categories.map((category) => (
            <CategoryItem
              key={category.type}
              type={category.type}
              label={category.label}
              onPress={() => {}}
            />
          ))}
        </ScrollView>
      </View>

      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Flash Sale</Text>
        </View>
        <TabBar
          tabs={tabs}
          activeTab={activeTab}
          onTabPress={setActiveTab}
        />
        <TabContent
          activeTab={activeTab}
          products={products}
          onProductPress={(product) => {
            console.log('Product pressed:', product);
          }}
          onFavoritePress={(product) => {
            console.log('Favorite pressed:', product);
          }}
        />
      </View>
    </ScrollView>
  );
}

