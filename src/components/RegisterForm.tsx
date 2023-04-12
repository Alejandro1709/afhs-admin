import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { type AuthResponse } from "@/types/response";
import axios, { type AxiosError } from "axios";

function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter()

  const handleLogin = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post("https://admin.afhsapi.com/api/auth/register", { name, email, password }, config)

    return data
  }

  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: handleLogin,
    onSuccess: (data: AuthResponse) => {
      sessionStorage.setItem('user', JSON.stringify(data))
      router.push('/')
    },
    onError: (error: AxiosError) => {
      console.log('error', error.message)
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !email || !password) return

    mutate()
  };

  return (
    <form className="flex flex-col gap-2 bg-white border p-4 w-full" autoComplete="false" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-medium">Crear Cuenta</h1>
      {error && <p className="text-red-500">{error.message}</p>}
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" id="name" className="border p-2 focus:outline-none" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="border p-2 focus:outline-none" placeholder="johndoe@mail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" className="border p-2 focus:outline-none" placeholder="********" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="w-full p-2 text-white bg-indigo-500 focus:bg-indigo-600 hover:bg-indigo-600 focus:outline-none mt-4">Crear Cuenta</button>
    </form>
  )
}

export default RegisterForm