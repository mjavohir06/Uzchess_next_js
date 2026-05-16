import { steptype } from "../../LoginMain";

export function NextTo(step:steptype,setStep:(promp:steptype)=>void) {
    return setStep({type:step.type,step:(step.step+1)})
}