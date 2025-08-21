import { loginApi, logoutApi } from '@/api/login-api'
import { LoginRequest, User } from '@/api/types'
import { TOKEN_KEY, USER_KEY } from '@/constants'

import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  isLoading: boolean
  login: (credentials: LoginRequest) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadStoredAuth()
  }, [])

  const loadStoredAuth = async () => {
    try {
      const [storedToken, storedUser] = await Promise.all([
        AsyncStorage.getItem(TOKEN_KEY),
        AsyncStorage.getItem(USER_KEY),
      ])

      if (storedToken && storedUser) {
        setToken(storedToken)
        setUser(JSON.parse(storedUser))
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error('Failed to load stored auth:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (credentials: LoginRequest) => {
    try {
      const response = await loginApi(credentials)

      if (response.success) {
        const { user: userData, token: userToken } = response.data

        setUser(userData)
        setToken(userToken)
        setIsAuthenticated(true)

        await Promise.all([
          AsyncStorage.setItem(TOKEN_KEY, userToken),
          AsyncStorage.setItem(USER_KEY, JSON.stringify(userData)),
        ])
      } else {
        throw new Error(response.message || 'Login failed')
      }
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      if (token) {
        await logoutApi(token)
      }
    } catch (error) {
      console.error('Logout API call failed:', error)
    } finally {
      setIsAuthenticated(false)
      setUser(null)
      setToken(null)

      await Promise.all([
        AsyncStorage.removeItem(TOKEN_KEY),
        AsyncStorage.removeItem(USER_KEY),
      ])
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
