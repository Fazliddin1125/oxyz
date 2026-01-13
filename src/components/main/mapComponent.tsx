import Obutton from "../shared/obutton";

const MapComponent = () => {
    return (
        <div className="w-full h-screen  mt-[10px] flex justify-center items-center">
            <div className="relative w-[1200px] h-[514px] flex flex-col justify-center items-center gap-[10px] md:gap-[30px] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-[url('/worldmap.png')] bg-cover bg-center bg-no-repeat opacity-30 -z-10"
                ></div>
                <div className="w-[255px] md:w-full  font-manrope md:text-[48px] text-[28px] font-semibold text-center leading-tight">
                    Ваше спокойствие — наша работа
                </div>
                <div className="text-center font-manrope font-normal max-w-[800px]">
                    Сделать международную логистику понятной, надёжной и спокойной. <br /> 
                    Чтобы вы могли доверить нам груз — и не волноваться.
                </div>

                <Obutton text={"Узнать больше о нас"} />
            </div>
        </div>
    );
};

export default MapComponent;