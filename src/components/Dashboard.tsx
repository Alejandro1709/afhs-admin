import { useEffect, useState } from "react";
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
    id: 2,
    name: "Diego Montalbán Beltrán",
    description: "Añadido por Alejandro",
    selected: false,
  }
]

const options: IOption[] = [
  { heading: "Agregar personaje", enabled: true },
  { heading: "Editar personaje", enabled: false },
  { heading: "Eliminar personaje", enabled: false },
  { heading: "Cuentas Creadas", enabled: true },
];

function Dashboard() {
  const [selected, setSelected] = useState<ICard[]>([]);

  useEffect(() => {
    console.log(selected);
  }, [selected])

  const handleSelect = (card: ICard) => {
    if (selected.some((item) => item.id === card.id)) {
      setSelected(selected.filter((item) => item.id !== card.id));
    } else {
      setSelected([...selected, card]);
    }
  };

  const dynamicOptions: IOption[] = options.map((option) => {
    if (selected.length === 1) {
      return { ...option, enabled: true };
    }
    return option;
  });

  return (
    <section className='flex flex-col gap-4 mt-6 md:max-w-screen-lg md:mx-auto'>
      <div className="flex items-center justify-between bg-white border rounded-md select-none p-4 shadow-md">
        <h1 className="text-1xl font-medium">Bienvenido, Invitado</h1>
        <button>Iniciar Sessión</button>
      </div>
      <List data={characters} onClick={handleSelect} />
      <Options options={dynamicOptions} />
    </section>
  )
}

export default Dashboard