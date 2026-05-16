import Image from "next/image";

interface Props {
  icon: string;
  onClick: () => void
}

export const Action = ({icon, onClick}: Props) => {
  return (
    <button onClick={onClick}  className={"w-6 h-6 hover:cursor-pointer active:scale-[0.98]"}>
      <Image src={icon}
             alt={'search icon'}
             width={24}
             height={24}
             className={"w-6 h-6"}/>
    </button>
  );
};