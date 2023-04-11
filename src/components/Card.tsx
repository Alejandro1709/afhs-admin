import type ICard from "@/types/card";
import { useState } from "react";

type CardProps = {
  character: ICard;
};

function Card({ character }: CardProps) {
  const [selected, setSelected] = useState<boolean>(character.selected || false);

  return (
    <article className="flex flex-row justify-between items-center bg-slate-200 p-4 odd:bg-slate-100 transition-all">
      <div className="flex flex-row items-center gap-3">
        <div className="h-12 w-12 md:h-14 md:w-14 bg-gray-400 rounded-md" />
        <div className="flex flex-col">
          <h1 className="md:text-2xl font-bold md:font-semibold">{character.name}</h1>
          <h1 className="text-1xl font-medium">{character.description}</h1>
        </div>
      </div>
      <div className="transition-all">
        <button className={`p-2 ${selected ? 'bg-blue-400 text-white' : 'bg-white border'} rounded-lg`} onClick={() => setSelected(!selected)}>
          {selected ? 'Seleccionado' : 'Seleccionar'}
        </button>
      </div>
    </article>
  )
}

export default Card