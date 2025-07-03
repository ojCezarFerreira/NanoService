'use client'

import { useLayoutEffect } from 'react'

export function LazyGlobalStyles() {
    useLayoutEffect(() => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = '/global.css'
        document.head.appendChild(link)
        return () => {
            document.head.removeChild(link)
        }
    }, [])

    return null
}
