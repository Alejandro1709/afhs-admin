"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import axios from "axios";
import type ICharacter from "@/types/character";

type ListProps = {
  onClick: (character: ICharacter) => void;
};

function List({ onClick }: ListProps) {

  const [data, setData] = useState<ICharacter[]>([])

  const handleFetch = async () => {
    const { data } = await axios.get("https://admin.afhsapi.com/api/characters");
    return data;
  }

  const { isLoading, error } = useQuery<ICharacter[]>({
    queryKey: ["characters"],
    queryFn: handleFetch,
    onError: (error) => {
      console.log('error', error)
    },
    onSuccess: (data) => {
      setData(data)
    }
  })

  return (
    <section className="bg-white border h-[500px] overflow-scroll">
      {isLoading && <p>Loading...</p>}
      {data && data.length > 0 ? data.map((card: ICharacter) => (
        <Card key={card._id} character={card} onClick={onClick} />
      )) : null}
    </section>
  )
}

export default List