import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ShirtIcon } from 'lucide-react-native';
import { router } from 'expo-router';
import { useColorScheme } from '@hooks/useColorScheme';

export default function Index() {
  const colors = useColorScheme();

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      padding: 20,
      position: 'relative'
    },
    brandContainer: {
      alignItems: 'center',
      gap: 20,
    },
    imgContainer: {
      height: 80,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
      backgroundColor: colors.accent,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      color: colors.text,
    },
    subtitle: {
      textAlign: 'center',
      maxWidth: '80%',
      color: colors.secondary,
      fontSize: 16,
    },
    buttonsContainer: {
      width: '100%',
      position: 'absolute',
      bottom: '5%'
    },
    button: {
      backgroundColor: colors.accent,
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
      alignItems: 'center',
      marginBottom: 15,
    },
    buttonText: {
      color: colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.accent,
    },
    secondaryButtonText: {
      color: colors.accent,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.brandContainer}>
        <View style={styles.imgContainer}>
          <ShirtIcon color={colors.background} size={40} strokeWidth={2} />
        </View>
        <Text style={styles.title}>Farrelio & Co.</Text>
        <Text style={styles.subtitle}>
          Elevate your style with our curated collection of modern essentials.
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => router.push('/sign-in')}
        >
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>
            I already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

