import Card from "./Card";
import type ICard from "@/types/card";

type ListProps = {
  data: ICard[];
};

function List({ data }: ListProps) {
  return (
    <section className="bg-white border h-[500px] overflow-scroll">
      {data.map((card) => (
        <Card key={card.id} character={card} />
      ))}
    </section>
  )
}

export default List