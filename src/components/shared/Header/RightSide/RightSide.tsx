"use client";
import {Divider} from "@/components/shared/Header/Divider";
import {Actions} from "@/components/shared/Header/RightSide/Actions";
import {Button} from "@/components/shared/Button";
import LoginWiev from "@/components/Loginpack/LoginWiev";
import { useState } from "react";

export const RightSide = () => {

  const [open,setOpen]=useState(false)

  return (
    <section className={"flex gap-5 items-center ml-5"}>
      <Actions/>
      <Divider/>
      <Button label={'Kirish'} icon={'/icons/login.svg'} onClick={() => {setOpen(true)
      }}/>
      <LoginWiev type="login" open={open} setopen={setOpen}/>
    </section>
  );
};
