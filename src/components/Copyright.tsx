import Link from 'next/link'

const Copyright = () => {
    return (
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
    )
}

export default Copyright
