import axios from "axios"

export const handleLogin = async (email: string, password: string) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return await axios.post("https://admin.afhsapi.com/api/auth/login", { email, password }, config)
}

export const handleRegister = async (name: string, email: string, password: string) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return await axios.post("https://admin.afhsapi.com/api/auth/register", { name, email, password }, config)
}
