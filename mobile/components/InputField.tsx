import { useColorScheme } from '@hooks/useColorScheme';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TextInputProps, Animated, TextStyle } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, value, ...props }) => {
  const colors = useColorScheme();
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  const styles = StyleSheet.create({
    inputContainer: {
      marginBottom: 20,
      paddingTop: 18,
    },
    input: {
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 4,
      padding: 10,
      fontSize: 16,
      color: colors.text,
    },
    inputFocused: {
      borderColor: colors.accent,
    },
    labelContainer: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      paddingHorizontal: 14,
      justifyContent: 'center',
    },
    label: {
      fontSize: 16,
      color: colors.secondary,
    },
  });

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: (isFocused || value) ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute',
    left: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 0],
    }),
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 0],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.secondary, colors.accent],
    }),
    backgroundColor: colors.background,
    paddingHorizontal: 4,
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        {...props}
      />
      <View style={styles.labelContainer} pointerEvents="none">
        <Animated.Text style={labelStyle as any}>
          {label}
        </Animated.Text>
      </View>
    </View>
  );
};

