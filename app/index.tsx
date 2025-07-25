import { useAuth } from '@/contexts/AuthContext'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'

export default function Index() {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    // Handle authentication-based routing
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        router.replace('/(tabs)')
      } else {
        router.replace('/login')
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [isAuthenticated])

  // Show empty view while redirecting
  return <View className="flex-1 bg-gray-100" />
}
