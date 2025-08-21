export interface LoginRequest {
  email: string
  password: string
}

export interface User {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
  roles: {
    id: number
    name: string
    guard_name: string
    created_at: string
    updated_at: string
  }
}

export interface LoginResponse {
  success: boolean
  data: {
    user: User
    token: string
  }
  message: string
}

export interface LogoutResponse {
  success: boolean
  data: []
  message: string
}
