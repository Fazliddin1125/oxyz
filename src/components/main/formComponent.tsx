import { useState } from "react"

const FormComponent = () => {
    const [step, setStep] = useState(0)
    return (
        <div className="w-full  md:h-screen flex justify-center items-center">
            <div className="max-w-[1240px]   flex flex-col gap-[30px] p-[5px]">
                <div className="md:text-[48px] text-[28px] leading-[120%] tracking-normal mx-auto  font-semibold text-center max-w-[854px] text-[#1A1A18] " >
                    Оставьте заявку и получите расчет доставки вашего груза
                </div>

                <div className="md:max-h-[600px] rounded-[24px] overflow-hidden w-[373px] mx-auto  md:w-[1240px] grid md:grid-cols-2 grid-cols-1 relative justify-center bg-[#F7F7F6] items-center p-[10px] gap-[10px]  " >
                    <div className="bg-cover bg-center z-9 bg-no-repeat bg-[url('/worldmap.png')] absolute w-full h-full  opacity-30"></div>
                    <div className="w-full gap-[30px]  p-[50px] flex flex-col  z-10 justify-between rounded-[17px] bg-[#FFFFFF] ">
                        <div className="flex flex-col gap-[50px] ">
                            <div className="flex h-[405px] flex-col justify-between items-center gap-[50px]" >
                                {step == 0 ? 
                                <div className="w-full  flex flex-col gap-[20px]" >
                                    <div className="flex max-h-[82px] flex-col gap-[10px]">
                                        <div className="font-manrope" >Откуда</div>
                                        <input type="text" className=" p-[20px] rounded-[8px] border-[#CAC9C5] border w-full outline-0 " placeholder="Ташкент" />
                                    </div>
                                    <div className="flex max-h-[82px] flex-col gap-[10px]">
                                        <div className="font-manrope">Куда</div>
                                        <input type="text" className=" p-[20px] rounded-[8px] border-[#CAC9C5] border w-full outline-0 " placeholder="Москва" />
                                    </div>
                                </div> : 
                                step==1 ? 
                                <div className="w-full flex flex-col gap-[20px]" >
                                    <div className="flex max-h-[82px] flex-col gap-[10px]">
                                        <div className="font-manrope" >Какой груз</div>
                                        <input type="text" className=" p-[20px] rounded-[8px] border-[#CAC9C5] border w-full outline-0 " placeholder="Цемент" />
                                    </div>
                                    <div className="flex max-h-[82px] flex-col gap-[10px]">
                                        <div className="font-manrope">Вес груза</div>
                                        <input type="text" className=" p-[20px] rounded-[8px] border-[#CAC9C5] border w-full outline-0 " placeholder="10 тонн" />
                                    </div>
                                    <div className="flex max-h-[82px] flex-col gap-[10px]">
                                        <div className="font-manrope">Вид транспорта</div>
                                        <input type="text" className=" p-[20px] rounded-[8px] border-[#CAC9C5] border w-full outline-0 " placeholder="Фура" />
                                    </div>
                                </div> : 
                                <div className="w-full flex flex-col gap-[20px]" >
                                    <div className="flex flex-col gap-[10px]">
                                        <div className="font-manrope" >Имя</div>
                                        <input type="text" className=" p-[20px] rounded-[8px] border-[#CAC9C5] border w-full outline-0 " placeholder="Введите ваше имя" />
                                    </div>
                                    <div className="flex flex-col gap-[10px]">
                                        <div className="font-manrope">Номер телефона</div>
                                        <input type="text" className=" p-[20px] rounded-[8px] border-[#CAC9C5] border w-full outline-0 " placeholder="+998" />
                                    </div>
                                </div>    
                            }
                                <div onClick={()=>{
                                    if(step>=2){
                                        setStep(0)
                                    }else{
                                        setStep(step+1)
                                    }
                                }} className="bg-[#F07C00] cursor-pointer text-[20px] font-medium text-[#FFFFFF] w-full text-center p-[20px] rounded-[8px] ">
                                    {step!=2 ? "Далее": "Расчитать стоимость"} 
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-[10px] w-full">
                            <div className="flex flex-col gap-[5px] " >
                                <div>Локация</div>
                                <div className={`w-full rounded-[10px]  ${step==0 ? "bg-[#F07C00]" : "bg-[#FFEEC5]"} h-[6px]`}></div>
                            </div>
                            <div className="flex flex-col gap-[5px] " >
                                <div>Груз</div>
                                <div className={`w-full rounded-[10px]  ${step==1 ? "bg-[#F07C00]" : "bg-[#FFEEC5]"} h-[6px]`}></div>
                            </div>
                            <div className="flex flex-col gap-[5px] " >
                                <div>Заказчик</div>
                                <div className={`w-full rounded-[10px]  ${step==2 ? "bg-[#F07C00]" : "bg-[#FFEEC5]"} h-[6px]`}></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full z-10  md:h-full h-[500px] flex md:justify-end justify-center items-start  relative overflow-hidden">
                        <img src="/girl.png" className="md:w-[595px] w-full  z-10 absolute top-0 md:right-[-80px]" alt="A girl photo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormComponent 