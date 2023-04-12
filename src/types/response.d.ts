export interface AuthResponse {
  name: string
  email: string
  role: 'admin' | 'user'
  token: string
}