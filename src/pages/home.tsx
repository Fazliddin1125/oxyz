import FormComponent from "@/components/main/formComponent"
import MainComponent from "@/components/main/main"
import MapComponent from "@/components/main/mapComponent"
import { useEffect } from "react"

const HomePage = () => {
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("https://oxyz.onrender.com/api/quote", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })

                if (!res.ok) {
                    throw new Error("So‘rovda xatolik bor")
                }

                const data = await res.json()
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }

        getData()
    }, [])

    return (
        <div>
            <div className="mt-[10px] ml-[10px] mr-[10px]">
                <MainComponent />
                <MapComponent />
            <FormComponent />
            </div>
            
        </div>
    )
}

export default HomePage





