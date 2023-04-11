import type ICard from "@/types/card";

type CardProps = {
  character: ICard;
};

function Card({ character }: CardProps) {
  return (
    <article className="flex flex-row justify-between items-center bg-slate-200 p-4 odd:bg-slate-100 transition-all">
      <div className="flex flex-row items-center gap-3">
        <div className="h-14 w-14 bg-gray-400 rounded-md" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">{character.name}</h1>
          <h1 className="text-1xl font-medium">{character.description}</h1>
        </div>
      </div>
      <div>
        <button className={`p-2 ${character.selected ? 'bg-blue-400 text-white' : 'bg-white border'} rounded-lg`}>
          {character.selected ? 'Seleccionado' : 'Seleccionar'}
        </button>
      </div>
    </article>
  )
}

export default Card