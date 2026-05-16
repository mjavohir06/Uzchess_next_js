import {NavBar} from "@/components/shared/Header/NavBar/NavBar";
import {LeftSide} from "@/components/shared/Header/LeftSide/LeftSide";
import {RightSide} from "@/components/shared/Header/RightSide/RightSide";

export default function Header() {
  return (
    <header className={`header`}>
      <LeftSide/>
      <NavBar/>
      <RightSide/>
    </header>
  )
}