import { useAppDispatch, useAppSelector } from "@/Hooks/redux/redux"
import { useSelector } from "react-redux"


const types = [
    { name: "все товары", id: 1 },
    { name: "горячее", id: 2 },
    { name: "акции", id: 3 },
    { name: "напитки", id: 4 }
  ]

const TypeContainer = () => {

    return (
        <div className="TypeContainer">
            <div className="TypeContainer-types">
            {types.map((type) => 
            <div key={type.id} onClick={()=> console.log('work')} className="TypeContainer-type ">{type.name}</div>
            )}
            </div>
                <div className="loader"></div>
        </div>
    )
}

export default TypeContainer
