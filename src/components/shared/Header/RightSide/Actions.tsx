"use client"
import {Action} from "@/components/shared/Header/RightSide/Action";
import Bildirishnoma from "../../Bildiridhnoma.tsx";
import { useState } from "react";

export const Actions = () => {
  const [open,setopen]=useState(false)
  return (
    <div className={"flex gap-6"}>
      <Action icon={'/icons/search-white.svg'} onClick={() => {
      }}/>

      <Action icon={'/icons/cart-empty.svg'} onClick={() => {
      }}/>

      <Action icon={'/icons/notifications.svg'} onClick={() => {setopen(true)
      }}/>
      <Bildirishnoma open={open} setopen={setopen}/>
    </div>
  );
};