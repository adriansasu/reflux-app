import { useAuth } from '@/contexts/AuthContext'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function Index() {
  const { isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.replace('/(tabs)')
      } else {
        router.replace('/login')
      }
    }
  }, [isAuthenticated, isLoading])

  if (isLoading) {
    return (
      <View className="flex-1 bg-gray-100 justify-center items-center">
        <ActivityIndicator
          size="large"
          color="#0CE484"
        />
      </View>
    )
  }

  // Show empty view while redirecting
  return <View className="flex-1 bg-gray-100" />
}
