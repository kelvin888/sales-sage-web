"use client"
import React, { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient()


const TanstackProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient} >
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider >
    )
}

export default TanstackProvider