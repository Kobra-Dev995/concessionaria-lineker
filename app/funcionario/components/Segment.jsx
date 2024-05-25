'use client'
import { useSelectedLayoutSegment } from "next/navigation"

export default function Segment() {
    const segment = useSelectedLayoutSegment()
    return <p>{segment}</p>
}