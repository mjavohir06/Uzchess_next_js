import Image from "next/image";

interface Props {
  label: string;
  icon: string;
  onClick: () => void;
}

export const Button = ({label, icon, onClick}: Props) => {
  return (
    <button
      onClick={onClick}
      className={"flex w-fit shrink-0 gap-2 py-2.5 px-6 rounded-lg bg-(--blue) hover:cursor-pointer active:scale-[0.98]"}>
      <p className={"shrink-0"}>{label}</p>
      <Image src={icon} alt={'login icon'} width={24} height={24} className={"w-6 h-6 shrink-0"}/>
    </button>
  );
};