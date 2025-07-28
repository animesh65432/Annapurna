"use client"
import ExploreComponent from "@/components/Explore"
import { ExploreProvider } from "@/context"

export default function Explore() {
    return (
        <ExploreProvider>
            <ExploreComponent />
        </ExploreProvider>
    )
}
