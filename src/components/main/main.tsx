import Navbar from "./navbar"

const MainComponent = () => {
  return (
    <div className=" w-full h-[calc(100vh-20px)]  rounded-[16px] bg-[url('/main.png')] bg-cover bg-center bg-no-repeat" >
        <Navbar/>
    </div>
  )
}

export default MainComponent