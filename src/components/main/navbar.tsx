import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="p-[20px]" >
            <div className=" navbar  flex justify-between items-center">
                <Link to={"/"} ><div className="logo w-[160px] h-[40px] cursor-pointer">
                    <img className="w-full h-full" src="/logo.png" alt="Logo" />
                </div></Link>

                <div className="nav-links flex justify-center gap-[5px] ">
                    <div className="w-[183px]  hidden md:flex mr-[15px]  rounded-[8px]  flex-col justify-center items-center h-[50px]">
                        <div className="font-manrope font-normal flex justify-center items-center gap-[5px]">
                           <div className="w-[6px] h-[6px] bg-[#00FF00] rounded-full "></div> 
                           <div className="text-[#FFFFFF]">Пн-Сб, с 9:00 до 18:00</div>
                        </div>
                        <div className="font-manrope font-bold text-[#FFFFFF] ">
                            +99890-823-22-32
                        </div>
                    </div>
                    <div className="w-[50px] bg-[#FFFFFF33] cursor-pointer rounded-[8px] hidden md:flex justify-center items-center h-[50px]">
                        <img className="w-[24px] h-[24px]" src="./russia.png" alt="Russia-Flag" />
                    </div>
                    <div className="w-[50px] bg-[#FFFFFF33] cursor-pointer rounded-[8px] hidden md:flex justify-center items-center h-[50px]">
                        <img className="w-[24px] h-[24px]" src="./whatsapp.png" alt="Whatsapp_logo" />
                    </div>
                    <div className="w-[50px] bg-[#FFFFFF33] cursor-pointer rounded-[8px] hidden md:flex justify-center items-center h-[50px]">
                        <img className="w-[24px] h-[24px]" src="./telegram.png" alt="Telegram_logo" />
                    </div>
                    <div className="text-manrope font-normal w-[114px] cursor-pointer bg-[#FFFFFF] text-[#1A1A18] gap-[5px] rounded-[8px] flex justify-center items-center h-[50px]">
                        Меню <img src="./Vector.png" alt="Vector" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar