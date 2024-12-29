import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Shirt } from 'lucide-react-native';
import { useColorScheme } from '@hooks/useColorScheme';
import PantsIcon from '@/assets/icons/PantsIcon';
import DressIcon from '@/assets/icons/DressIcon';
import JacketIcon from '@/assets/icons/JacketIcon';

interface CategoryItemProps {
  type: 'shirt' | 'pant' | 'dress' | 'jacket';
  label: string;
  onPress: () => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ type, label, onPress }) => {
  const colors = useColorScheme();

  const getIcon = () => {
    const iconProps = {
      size: 24,
      color: colors.text,
      strokeWidth: 1.5
    };

    switch (type) {
      case 'shirt':
        return <Shirt {...iconProps} />;
      case 'pant':
        return <PantsIcon {...iconProps} />;
      case 'dress':
        return <DressIcon {...iconProps} />;
      case 'jacket':
        return <JacketIcon {...iconProps} />;
    }
  };

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginRight: 20,
    },
    iconContainer: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: colors.accentLight,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    label: {
      fontSize: 14,
      color: colors.text,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        {getIcon()}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

