import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import Layout from '@/components/Layout'
import useAuth from '@/hooks/useAuth'
import Link from 'next/link'
import axios, { type AxiosError } from 'axios'
import type ICharacter from '@/types/character'
import { useRouter } from 'next/router'

function NewCharacterPage() {

  const { user } = useAuth()

  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    actor: '',
    image: '',
    birthdate: '',
    work: '',
    otherWork: '',
    status: '',
    gender: '',
    height: '',
    nicknames: '',
    catchphrases: '',
  })

  const handleCreate = async () => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user?.token}`
      }
    }

    if (!user) return

    const { data } = await axios.post('/api/characters', formData, config)

    return data
  }

  const { mutate, isLoading, error } = useMutation({
    mutationKey: ['create'],
    mutationFn: handleCreate,
    onSuccess: (data: ICharacter) => {
      router.push('/')
    },
    onError: (error: AxiosError) => {
      console.log(error)
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutate()
  }

  return (
    <Layout title='AFHS | Nuevo'>
      <section className='flex flex-col gap-2 mt-4'>
        <h1 className='text-3xl'>Nuevo personaje</h1>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">(*) Nombre:</label>
            <input className='p-2 border' type="text" name="name" id="name" placeholder='Joel Gonzales' required value={formData.name} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="actor">(*) Actor:</label>
            <input className='p-2 border' type="text" name="actor" id="actor" placeholder='Erick Elera' required value={formData.actor} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="image">URL de la imágen:</label>
            <input className='p-2 border' type="text" name="image" id="image" placeholder='https://...' value={formData.image} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="birthdate">Fecha de nacimiento:</label>
            <input className='p-2 border' type="text" name="birthdate" id="birthdate" placeholder='Junio 18, 1978' value={formData.birthdate} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="work">Ocupación:</label>
            <input className='p-2 border' type="text" name="work" id="work" placeholder='Compositor,Mototaxista' value={formData.work} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="otherWork">Otras Ocupaciones:</label>
            <input className='p-2 border' type="text" name="otherWork" id="otherWork" placeholder='Mecánico' value={formData.otherWork} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status">(*) Estado:</label>
            <select className='p-2 border' name="status" id="status" required value={formData.status} onChange={handleChange}>
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
            <select className='p-2 border' name="gender" id="gender" required value={formData.gender} onChange={handleChange}>
              <option value="" hidden defaultValue="">-- Seleccionar --</option>
              <option value="HOMBRE">Hombre</option>
              <option value="MUJER">Mujer</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="height">Altura (m):</label>
            <input className='p-2 border' type="text" name="height" id="height" placeholder='167' required value={formData.height} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nicknames">Apodos:</label>
            <input className='p-2 border' type="text" name="nicknames" id="nicknames" placeholder='Niño con cara de pez,La Leyenda' required value={formData.nicknames} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="catchphrases">Frases:</label>
            <input className='p-2 border' type="text" name="catchphrases" id="catchphrases" placeholder='Cua cua cua cuan,Superame pues,Ah que lindo' required value={formData.catchphrases} onChange={handleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="autor">Autor:</label>
            <input className='p-2 border' type="text" name="autor" id="autor" value={`${user?.name || "Erick Elera"} (${user?.email || "erick@mail.com"})`} disabled />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <button disabled={isLoading} className='p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white' type="submit">Guardar</button>
            <Link href="/" className='p-2 bg-red-500 text-center hover:bg-red-600 text-white' type="button">Cancelar</Link>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default NewCharacterPage