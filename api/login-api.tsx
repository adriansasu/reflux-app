import { API_BASE_URL } from '../constants'
import { LoginRequest, LoginResponse, LogoutResponse } from './types'

export const loginApi = async (
  credentials: LoginRequest,
): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 123', // change this when we know how to add
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Login failed')
    }

    return data
  } catch (error) {
    throw new Error(`Login failed: ${error}`)
  }
}

export const logoutApi = async (token: string): Promise<LogoutResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Logout failed')
    }

    return data
  } catch (error) {
    throw new Error(`Logout failed: ${error}`)
  }
}
