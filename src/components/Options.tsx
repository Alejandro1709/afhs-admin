import Option from "./Option"
import type IOption from "@/types/option";

type OptionProps = {
  options: IOption[]
};

function Options({ options }: OptionProps) {
  return (
    <ul className='grid grid-cols-2 gap-2'>
      {options.map((option) => (
        <Option key={option.heading} heading={option.heading} enabled={option.enabled} />
      ))}
    </ul>
  )
}

export default Options