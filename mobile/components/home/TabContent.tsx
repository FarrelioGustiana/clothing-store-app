import { AllTab } from '@components/home/AllTab';
import { ManTab } from '@components/home/ManTab';
import { NewestTab } from '@components/home/NewestTab';
import { PopularTab } from '@components/home/PopularTab';
import { WomanTab } from '@components/home/WomanTab';
import Product from '@models/product';
import React from 'react';
import { View } from 'react-native';

interface TabContentProps {
  activeTab: string;
  products: Product[];
  onProductPress: (product: Product) => void;
  onFavoritePress: (product: Product) => void;
}

export const TabContent: React.FC<TabContentProps> = ({
  activeTab,
  products,
  onProductPress,
  onFavoritePress,
}) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'All':
        return (
          <AllTab
            products={products}
            onProductPress={onProductPress}
            onFavoritePress={onFavoritePress}
          />
        );
      case 'Newest':
        return (
          <NewestTab
            products={products}
            onProductPress={onProductPress}
            onFavoritePress={onFavoritePress}
          />
        );
      case 'Popular':
        return (
          <PopularTab
            products={products}
            onProductPress={onProductPress}
            onFavoritePress={onFavoritePress}
          />
        );
      case 'Man':
        return (
          <ManTab
            products={products}
            onProductPress={onProductPress}
            onFavoritePress={onFavoritePress}
          />
        );
      case 'Woman':
        return (
          <WomanTab
            products={products}
            onProductPress={onProductPress}
            onFavoritePress={onFavoritePress}
          />
        );
      default:
        return (
          <AllTab
            products={products}
            onProductPress={onProductPress}
            onFavoritePress={onFavoritePress}
          />
        );
    }
  };

  return <View>{renderTabContent()}</View>;
};

