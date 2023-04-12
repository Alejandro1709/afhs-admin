import { useState } from "react"
import Layout from "@/components/Layout"
import LoginForm from "@/components/LoginForm"
import RegisterForm from "@/components/RegisterForm"

function LoginPage() {
  const [login, setLogin] = useState<boolean>(true)

  const handleToggleLogin = () => {
    setLogin(true)
  }

  const handleToggleRegister = () => {
    setLogin(false)
  }

  return (
    <Layout title="AFHS | Login">
      <div className="flex flex-col gap-4 items-center justify-center md:max-w-screen-md md:mx-auto">
        <div className="flex flex-row items-center gap-2 w-full mt-6">
          <button className="w-full p-2 text-white bg-indigo-500 focus:bg-indigo-600 hover:bg-indigo-600 focus:outline-none" onClick={handleToggleLogin}>Login</button>
          <button className="w-full p-2 text-white bg-indigo-500 focus:bg-indigo-600 hover:bg-indigo-600 focus:outline-none" onClick={handleToggleRegister}>Sign Up</button>
        </div>
        {login ? <LoginForm /> : <RegisterForm />}
      </div>
    </Layout>
  )
}

export default LoginPage