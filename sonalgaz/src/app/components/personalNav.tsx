import { ComboboxDemo } from "./combo";
import { EnvelopeOpenIcon, PersonIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { AlertDemo2 } from "./notfication";

export function ButtonWithIcon() {
  return (
    <Button className="p-2 m-4">
      <PersonIcon className="mr-2 h-4 w-4" /> Add Employee
    </Button>
  )
}

export function ButtonOutline() {
  return (<><Button className="p-2 m-4" variant="outline">
  Monthly Report</Button></>)
}

export default function PersonalNav(){

    return(
        <>
        
        <div className=" bg-transparent flex justify-between items-center">
           <AlertDemo2/>
            <div className="mr-8">
          <ButtonWithIcon/>
          <ButtonOutline/>   
            </div>
                 </div>
        </>
    )
}