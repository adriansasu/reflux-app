import { useAuth } from '@/contexts/AuthContext'
import { router } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen() {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    // Use setTimeout to ensure logout state is updated before navigation
    setTimeout(() => {
      router.replace('/login')
    }, 100)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tabName}>Home</Text>
      <Text style={styles.welcomeText}>
        Welcome! You are successfully logged in.
      </Text>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  tabName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})
