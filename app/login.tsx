import { useAuth } from '@/contexts/AuthContext'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '', general: '' })
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const validateInputs = () => {
    const newErrors = { email: '', password: '', general: '' }
    let isValid = true

    if (!email.trim()) {
      newErrors.email = 'You need to add an email'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!password.trim()) {
      newErrors.password = 'You need to add a password'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleLogin = async () => {
    if (!validateInputs()) {
      return
    }

    setIsLoading(true)
    setErrors({ email: '', password: '', general: '' })

    try {
      await login({ email, password })
      router.replace('/(tabs)')
    } catch (error) {
      setErrors({
        ...errors,
        general: error instanceof Error ? error.message : 'Login failed',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View className="flex-1 justify-start px-8 pt-32">
        <View className="items-center mb-1">
          <Image
            source={require('@/assets/images/group.png')}
            className="w-64 h-64"
            resizeMode="contain"
          />
        </View>

        {errors.general ? (
          <View className="mb-4">
            <Text className="text-red-500 text-center text-base">
              {errors.general}
            </Text>
          </View>
        ) : null}

        <View className="mb-4">
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            className="bg-gray-100 rounded-[16px] px-4 py-[16px] text-base text-gray-800 border border-gray-100"
            placeholderTextColor="#575757"
          />
          {errors.email ? (
            <Text className="text-red-500 mt-2 text-sm ml-2">
              {errors.email}
            </Text>
          ) : null}
        </View>

        <View className="mb-8">
          <TextInput
            placeholder="Parola"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            className="bg-gray-100 rounded-[16px] px-4 py-[16px] text-base text-gray-800 border border-gray-100"
            placeholderTextColor="#575757"
          />
          {errors.password ? (
            <Text className="text-red-500 mt-2 text-sm ml-2">
              {errors.password}
            </Text>
          ) : null}
        </View>

        <TouchableOpacity
          onPress={handleLogin}
          disabled={isLoading}
          className={`${isLoading ? 'bg-gray-400' : 'bg-[#0CE484]'} rounded-[16px] py-[16px] items-center`}
          activeOpacity={0.8}
        >
          <Text className="text-black font-bold text-base tracking-wider">
            {isLoading ? 'LOGGING IN...' : 'LOGHEAZA-TE'}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
