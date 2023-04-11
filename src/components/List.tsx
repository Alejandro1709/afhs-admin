import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { API_URL } from "@/config";
import type ICharacter from "@/types/character";

type ListProps = {
  onClick: (character: ICharacter) => void;
};

function List({ onClick }: ListProps) {

  const handleFetch = async () => {
    const response = await fetch(API_URL as string);
    const data = await response.json();

    return data;
  }

  const { data, isLoading, error } = useQuery<ICharacter[]>({ queryKey: ["characters"], queryFn: handleFetch })

  return (
    <section className="bg-white border h-[500px] overflow-scroll">
      {isLoading && <p>Loading...</p>}
      {data ? data.map((card: ICharacter) => (
        <Card key={card._id} character={card} onClick={onClick} />
      )) : null}
    </section>
  )
}

export default List