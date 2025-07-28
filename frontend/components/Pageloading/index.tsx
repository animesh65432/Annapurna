import React from 'react'
import { LoaderCircle } from "lucide-react"

export default function Pageloading() {
    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] min-h-dvh flex justify-center items-center">
            <LoaderCircle className='h-10 w-10 animate-spin text-green-900' />
        </div>
    )
}
