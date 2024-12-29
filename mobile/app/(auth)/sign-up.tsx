import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ArrowLeft, X } from 'lucide-react-native';
import { router } from 'expo-router';
import { useColorScheme } from '@hooks/useColorScheme';
import { InputField } from '@components/InputField';

export default function SignUp() {
  const colors = useColorScheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: '10%'
    },
    scrollView: {
      flexGrow: 1,
      rowGap: 10
    },
    content: {
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10%',
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      marginRight: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
    },
    button: {
      backgroundColor: colors.accent,
      paddingVertical: 15,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    footerText: {
      color: colors.secondary,
      fontSize: 14,
    },
    footerLink: {
      color: colors.accent,
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 5,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <ArrowLeft color={colors.text} size={24} />
              </TouchableOpacity>
              <Text style={styles.title}>Create your account</Text>
            </View>
          </View>
          <InputField label="Name" value={name} onChangeText={setName} />
          <InputField label="Email" value={email} onChangeText={setEmail} />
          <InputField label="Password" value={password} onChangeText={setPassword} secureTextEntry />
          <TouchableOpacity style={styles.button} onPress={() => console.log('Sign up pressed')}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/sign-in')}>
              <Text style={styles.footerLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

