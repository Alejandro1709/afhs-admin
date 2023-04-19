import axios from "axios"
import type { AuthResponse } from "@/types/response"
import type ICharacter from "@/types/character"

export const handleCreate = async (formData: ICharacter, user: AuthResponse) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return await axios.post('https://admin.afhsapi.com/api/characters', { ...formData, token: user.token }, config)
}