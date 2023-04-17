import { useState } from "react";
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router";
import { handleLogin } from "@/services/characters";
import { type AxiosError } from "axios";
import { type AuthResponse } from "@/types/response";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter()

  const handleLoginn = async () => {
    const { data } = await handleLogin(email, password)

    return data
  }

  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: handleLoginn,
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

    if (!email || !password) return

    mutate()
  };

  return (
    <form className="flex flex-col gap-2 bg-white border p-4 w-full" autoComplete="false" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-medium">Iniciar Sessión</h1>
      <p className="text-red-500">{error?.message}</p>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="border p-2 focus:outline-none" placeholder="johndoe@mail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" className="border p-2 focus:outline-none" placeholder="********" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button disabled={isLoading} className="w-full p-2 text-white bg-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed focus:bg-indigo-600 hover:bg-indigo-600 focus:outline-none mt-4">Iniciar Sessión</button>
    </form>
  )
}

export default LoginForm