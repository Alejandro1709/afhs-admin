import Layout from '@/components/Layout'
import useAuth from '@/hooks/useAuth'
import Link from 'next/link'

function NewCharacterPage() {

  const { user } = useAuth()

  return (
    <Layout title='AFHS | Nuevo'>
      <section className='flex flex-col gap-2 mt-4'>
        <h1 className='text-3xl'>Nuevo personaje</h1>
        <form className='flex flex-col gap-2'>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">(*) Nombre:</label>
            <input className='p-2 border' type="text" name="name" id="name" placeholder='Joel Gonzales' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="actor">(*) Actor:</label>
            <input className='p-2 border' type="text" name="actor" id="actor" placeholder='Erick Elera' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="image">URL de la imágen:</label>
            <input className='p-2 border' type="text" name="actor" id="actor" placeholder='https://...' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="birthdate">Fecha de nacimiento:</label>
            <input className='p-2 border' type="text" name="birthdate" id="birthdate" placeholder='Junio 18, 1978' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="work">Ocupación:</label>
            <input className='p-2 border' type="text" name="work" id="work" placeholder='Compositor,Mototaxista' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="otherWork">Otras Ocupaciones:</label>
            <input className='p-2 border' type="text" name="otherWork" id="otherWork" placeholder='Mecánico' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status">(*) Estado:</label>
            <select className='p-2 border' name="status" id="status" required>
              <option value="" hidden defaultValue="">-- Seleccionar --</option>
              <option value="VIVO">Vivo</option>
              <option value="MUERTO">Muerto</option>
              <option value="DESCONOCIDO">Desconocido</option>
              <option value="DESAPARECIDO">Desaparecido</option>
              <option value="LUCHITO">Luchito</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="gender">(*) Género:</label>
            <select className='p-2 border' name="gender" id="gender" required>
              <option value="" hidden defaultValue="">-- Seleccionar --</option>
              <option value="HOMBRE">Hombre</option>
              <option value="MUJER">Mujer</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="height">Altura (m):</label>
            <input className='p-2 border' type="text" name="height" id="height" placeholder='167' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nicknames">Apodos:</label>
            <input className='p-2 border' type="text" name="nicknames" id="nicknames" placeholder='Niño con cara de pez,La Leyenda' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="catchphrases">Frases:</label>
            <input className='p-2 border' type="text" name="catchphrases" id="catchphrases" placeholder='Cua cua cua cuan,Superame pues,Ah que lindo' required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="autor">Autor:</label>
            <input className='p-2 border' type="text" name="autor" id="autor" value={`${user?.name || "Erick Elera"} (${user?.email || "erick@mail.com"})`} disabled />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <button className='p-2 bg-blue-500 hover:bg-blue-600 text-white' type="submit">Guardar</button>
            <Link href="/" className='p-2 bg-red-500 text-center hover:bg-red-600 text-white' type="button">Cancelar</Link>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default NewCharacterPage