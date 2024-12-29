import { useColorScheme } from '@hooks/useColorScheme';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CartScreen() {
  const colors = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    text: {
      fontSize: 20,
      color: colors.text,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart Screen</Text>
    </View>
  );
}

