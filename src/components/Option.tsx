import Link from "next/link";

type OptionProps = {
  heading: string;
  enabled?: boolean;
  isLink?: boolean;
  link?: string;
};

function Option({ heading, enabled = false, isLink = false, link = '/' }: OptionProps) {
  return isLink ? (
    <Link href={link}>
      <li className={`flex items-center justify-center border rounded-md p-4 shadow-md ${enabled ? 'hover:scale-90 transition-all cursor-pointer bg-white' : 'cursor-not-allowed bg-gray-100'}`}>
        <h1 className="text-1xl">{heading}</h1>
      </li>
    </Link>
  ) : (
    <li className={`flex items-center justify-center border rounded-md p-4 shadow-md ${enabled ? 'hover:scale-90 transition-all cursor-pointer bg-white' : 'cursor-not-allowed bg-gray-100'}`}>
      <h1 className="text-1xl">{heading}</h1>
    </li>
  )
}

export default Option