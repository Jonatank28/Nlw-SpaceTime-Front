import { Link } from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/logo.svg'

const Hero = () => {
    return (
        <div className="space-y-5">
            <Image src={logo} alt="Logo" />
            <div className="max-w-[420px] space-y-1">
                <h1 className="mt-5 text-[40px] font-bold leading-tight text-gray-50">
                    Sua cápsula do tempo
                </h1>
                <p className="text-lg leading-relaxed">
                    Colecione momentos marcantes da sua jornada e compartilhe
                    (se quiser) com o mundo!
                </p>
            </div>
            <Link
                href="#"
                className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600 transition-colors"
            >
                CADASTRAR LEMBRANÇA
            </Link>
        </div>
    )
}

export default Hero
