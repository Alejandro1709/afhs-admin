"use client";

import { useEffect, useState } from "react";
import List from "./List"
import Options from "./Options"
import ICharacter from "@/types/character";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import type IOption from "@/types/option";

const options: IOption[] = [
  { heading: "Agregar personaje", enabled: true },
  { heading: "Editar personaje", enabled: false },
  { heading: "Eliminar personaje", enabled: false },
  { heading: "Cuentas Creadas", enabled: true },
];

function Dashboard() {
  const [selected, setSelected] = useState<ICharacter[]>([]);

  useEffect(() => {
    console.log(selected);
  }, [selected])

  const handleSelect = (character: ICharacter) => {
    if (selected.some((item) => item._id === character._id)) {
      setSelected(selected.filter((item) => item._id !== character._id));
    } else {
      setSelected([...selected, character]);
    }
  };

  const dynamicOptions: IOption[] = options.map((option) => {
    if (selected.length === 1) {
      return { ...option, enabled: true };
    }
    return option;
  });

  const { user } = useAuth()

  return (
    <section className='flex flex-col gap-4 mt-6 md:max-w-screen-lg md:mx-auto'>
      <div className="flex items-center justify-between bg-white border rounded-md select-none p-4 shadow-md">
        <h1 className="text-1xl font-medium">Bienvenido, {user?.name}</h1>
        {user ? <button>Cerrar Sessión</button> : <Link href='/auth/login'>Iniciar Sessión</Link>}
      </div>
      <List onClick={handleSelect} />
      <Options options={dynamicOptions} />
    </section>
  )
}

export default Dashboard