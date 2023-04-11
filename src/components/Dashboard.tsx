import List from "./List"
import Options from "./Options"
import type ICard from "@/types/card";
import type IOption from "@/types/option";

const characters: ICard[] = [
  {
    id: 1,
    name: "Luis Gonzales Camacho",
    description: "Añadido por Alejandro",
    selected: false,
  },
  {
    id: 1,
    name: "Diego Montalbán Beltrán",
    description: "Añadido por Alejandro",
    selected: true,
  }
]

const options: IOption[] = [
  { heading: "Agregar personaje", enabled: true },
  { heading: "Editar personaje", enabled: false },
  { heading: "Eliminar personaje", enabled: false },
  { heading: "Cuentas Creadas", enabled: true },
];

function Dashboard() {
  return (
    <section className='flex flex-col gap-4 mt-6 md:max-w-screen-lg md:mx-auto'>
      <div className="flex items-center justify-between bg-white border rounded-md select-none p-4 shadow-md">
        <h1 className="text-1xl font-medium">Bienvenido, Invitado</h1>
        <button>Iniciar Sessión</button>
      </div>
      <List data={characters} />
      <Options options={options} />
    </section>
  )
}

export default Dashboard