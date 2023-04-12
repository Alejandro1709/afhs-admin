function RegisterForm() {
  return (
    <form className="flex flex-col gap-2 bg-white border p-4 w-full" autoComplete="false">
      <h1 className="text-2xl font-medium">Crear Cuenta</h1>
      <p className="text-red-500">Error will go here</p>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" id="name" className="border p-2 focus:outline-none" placeholder="John Doe" required />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="border p-2 focus:outline-none" placeholder="johndoe@mail.com" required />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" className="border p-2 focus:outline-none" placeholder="********" required minLength={6} />
      </div>
      <button className="w-full p-2 text-white bg-indigo-500 focus:bg-indigo-600 hover:bg-indigo-600 focus:outline-none mt-4">Crear Cuenta</button>
    </form>
  )
}

export default RegisterForm