import { Toaster } from '@/components/ui/sonner'
import React from 'react'

const ToastProvider = () => {
    return (
        <Toaster
            theme="light"
            richColors
            position="top-right"
            className="bg-neutral-100 shadow-lg"
        />
    )
}

export default ToastProvider
