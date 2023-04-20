import Layout from '@/components/Layout'
import CreateForm from '@/components/CreateForm'

function NewCharacterPage() {
  return (
    <Layout title='AFHS | Nuevo' description='Agrega un nuevo personaje a la API de AFHS'>
      <section className='flex flex-col gap-2 mt-4'>
        <h1 className='text-3xl'>Nuevo personaje</h1>
        <CreateForm />
      </section>
    </Layout>
  )
}

export default NewCharacterPage