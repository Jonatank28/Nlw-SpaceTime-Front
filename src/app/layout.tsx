import './globals.css'
import { ReactNode } from 'react'
import {
    Roboto_Flex as Roboto,
    Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
    subsets: ['latin'],
    weight: ['600', '700'],
    variable: '--font-bai-jamjuree',
})

export const metadata = {
    title: 'Nlw Space Time',
    description: 'Uma capsula do tempo contruida com Next.js e Tailwindcss',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-br">
            <body
                className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}
            >
                {children}
            </body>
        </html>
    )
}
