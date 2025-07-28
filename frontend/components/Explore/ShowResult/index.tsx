import React from 'react'
import { useExploreContext } from "@/context"
import Dish from '../Dish'
export default function ShowResult() {
    const { dish } = useExploreContext()
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml-auto mr-auto pt-5 w-[85%] sm:w-[80%] lg:w-[85%] gap-5'>
            {
                dish.map((d, index) => <Dish index={index} key={d.name} name={d.name} img={d.img} variant={d.variant} />)
            }
        </div>
    )
}
