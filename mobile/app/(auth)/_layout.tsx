import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen options={{headerShown: false}} name='sign-in' />
      <Stack.Screen options={{headerShown: false}} name='sign-up' />
    </Stack>
  )
}