import Link from "next/link"

function Navigation() {
  return (
    <div className="flex justify-center items-center h-16 bg-white border-b">
      <div className="flex flex-row justify-between items-center w-full mx-6 md:mx-16">
        <Link href='/'>
          <h1 className="text-2xl">AFHS Admin Panel</h1>
        </Link>
        <a href="https://afhsapi.com" className="p-2 bg-slate-200 rounded-md font-medium hover:bg-slate-300">Ir a la app</a>
      </div>
    </div>
  )
}

export default Navigation