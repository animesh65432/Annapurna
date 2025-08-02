import Header from '@/components/Header'
import { Card, CardContent } from '@/components/ui/card'
import { ChefHat } from 'lucide-react'
import React from 'react'

export default function NotFound() {
    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] flex min-h-dvh overflow-y-auto w-full flex-col gap-10 lg:gap-8">
            <Header />
            <div className="w-[59vw] sm:w-[70vw] md:w-[45vw] xl:w-[35vw] ml-auto mr-auto">
                <Card>
                    <CardContent className="flex items-center justify-center p-12">
                        <div className="text-center">
                            <ChefHat className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-600">Dish not found</h3>
                            <p className="text-sm text-gray-500">The dish you're looking for doesn't exist.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
