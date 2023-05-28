'use client'
import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react'
import logo from '../assets/logo.svg'
import api from '../../services/api'
import { useEffect } from 'react'

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
            {/* Left */}
            <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
                {/* Blur */}
                <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
                {/* Stripes */}
                <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
                {/* SignIn */}
                <Link href="#" className="flex items-center gap-3 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
                        <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <p className="text-sm leading-snug max-w-[140px] hover:text-gray-50 transition-colors">
                        <span className="underline">Crie sua conta</span> e
                        salve suas memórias!
                    </p>
                </Link>
                {/* Hero */}
                <div className="space-y-5">
                    <Image src={logo} alt="Logo" />
                    <div className="max-w-[420px] space-y-1">
                        <h1 className="mt-5 text-[40px] font-bold leading-tight text-gray-50">
                            Sua cápsula do tempo
                        </h1>
                        <p className="text-lg leading-relaxed">
                            Colecione momentos marcantes da sua jornada e
                            compartilhe (se quiser) com o mundo!
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 transition-colors"
                    >
                        CADASTRAR LEMBRANÇA
                    </Link>
                </div>
                {/* Copyright */}
                <div className="text-sm leading-relaxed text-gray-200">
                    Feito com 💜 no NLW da{' '}
                    <Link
                        className="underline hover:text-gray-100"
                        href="https://www.rocketseat.com.br/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {' '}
                        Rocketseat
                    </Link>
                </div>
            </div>
            {/* Right */}
            <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
                <div className="flex flex-1 items-center justify-center">
                    <p className="text-center leading-relaxed w-[360px]">
                        Você ainda não registrou nenhuma lembrança,{' '}
                        <Link href="#" className="underline hover:text-gray-50">
                            comece a criar agora!
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}
