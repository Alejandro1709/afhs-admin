import Card from "./Card";
import type ICard from "@/types/card";

type ListProps = {
  data: ICard[];
  onClick: (card: ICard) => void;
};

function List({ data, onClick }: ListProps) {
  return (
    <section className="bg-white border h-[500px] overflow-scroll">
      {data.map((card) => (
        <Card key={card.id} character={card} onClick={onClick} />
      ))}
    </section>
  )
}

export default List