'use client'
import Link from 'next/link'
import api from '../../services/api'
import { useEffect } from 'react'
import Copyright from '@/components/Copyright'
import Hero from '@/components/Hero'
import SignIn from '@/components/SignIn'
import EmptyMemories from '@/components/EmptyMemories'

export default function Home() {
    //! Cria uma nova memoria no banco de dados
    // useEffect(() => {
    //     const data = {
    //         coverUrl: 'https://picsum.photos/200/300',
    //         content: 'Esse é o conteudo da memoria',
    //         isPublic: '1',
    //         userID: '2',
    //     }
    //     const getMemories = async () => {
    //         api.post('/memory', data)
    //             .then((response) => {
    //                 console.log(response)
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    //     }
    //     getMemories()
    // }, [])

    return (
        <main className="grid grid-cols-2 min-h-screen">
            <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
                <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
                <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
                <SignIn />
                <Hero />
                <Copyright />
            </div>
            <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
                <EmptyMemories />
            </div>
        </main>
    )
}
