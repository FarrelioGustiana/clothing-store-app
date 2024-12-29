import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useColorScheme } from '@hooks/useColorScheme';

interface TabBarProps {
  tabs: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
}

export const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, onTabPress }) => {
  const colors = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    tab: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      marginRight: 8,
    },
    activeTab: {
      backgroundColor: colors.accent,
    },
    tabText: {
      fontSize: 14,
      color: colors.secondary,
    },
    activeTabText: {
      color: colors.background,
      fontWeight: '500',
    },
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => onTabPress(tab)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

