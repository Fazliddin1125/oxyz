import {  ChevronRight } from "lucide-react"


type OButtonProps = {
    text: string
}

const Obutton = ({text}:OButtonProps) => {
  return (
    <div className="w-[304px] flex justify-between p-[5px] items-center rounded-[8px]  h-[64px] bg-[#F07C00]" >
        <div className="w-[250px] text-[#FFFFFF] text-[20px]  text-manrope text-center" >{text}</div>
        <div className="w-[54px] h-[54px] bg-[#FFFFFF] rounded-[4px] flex justify-center items-center"><ChevronRight/></div>
    </div>
  )
}

export default Obutton