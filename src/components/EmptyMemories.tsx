import Link from 'next/link'
import React from 'react'

const EmptyMemories = () => {
    return (
        <div className="flex flex-1 items-center justify-center">
            <p className="text-center leading-relaxed w-[360px]">
                Você ainda não registrou nenhuma lembrança,{' '}
                <Link href="#" className="underline hover:text-gray-50">
                    comece a criar agora!
                </Link>
            </p>
        </div>
    )
}

export default EmptyMemories
