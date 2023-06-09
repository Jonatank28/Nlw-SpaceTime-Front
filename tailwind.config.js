/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'var(--font-roboto)',
                alt: 'var(--font-bai-jamjuree)',
            },
            colors: {
                gray: {
                    50: '#eaeaea',
                    100: '#bebebf',
                    200: '#9e9ea0',
                    300: '#727275',
                    400: '#56565a',
                    500: '#2c2c31',
                    600: '#28282d',
                    700: '#1f1f23',
                    800: '#18181b',
                    900: '#121215',
                },
                purple: {
                    50: '#f3eefc',
                    100: '#d8cbf7',
                    200: '#c6b2f3',
                    300: '#ab8eee',
                    400: '#9b79ea',
                    500: '#8257e5',
                    600: '#764fd0',
                    700: '#5c3ea3',
                    800: '#48307e',
                    900: '#372560',
                },
                orange: {
                    50: '#ffefeb',
                    100: '#ffccc2',
                    200: '#ffb4a4',
                    300: '#ff927b',
                    400: '#ff7d61',
                    500: '#ff5c3a',
                    600: '#e85435',
                    700: '#b54129',
                    800: '#8c3320',
                    900: '#6b2718',
                },
                yellow: {
                    50: '#fff9ec',
                    100: '#ffebc4',
                    200: '#ffe2a7',
                    300: '#ffd47f',
                    400: '#ffcc66',
                    500: '#ffbf40',
                    600: '#e8ae3a',
                    700: '#b5882d',
                    800: '#8c6923',
                    900: '#6b501b',
                },
                green: {
                    50: 'rgb(230, 251, 239)',
                    100: 'rgb(177, 241, 206)',
                    200: 'rgb(140, 235, 182)',
                    300: 'rgb(87, 226, 149)',
                    400: 'rgb(54, 220, 129)',
                    500: 'rgb(4, 211, 97)',
                    600: 'rgb(4, 192, 88)',
                    700: 'rgb(3, 150, 69)',
                    800: 'rgb(2, 116, 53)',
                    900: 'rgb(2, 89, 41)',
                },
            },
            blur: {
                full: '194px',
            },
            backgroundImage: {
                stripes: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent) '
            },
            backgroundSize: {
                stripes: '100% 8px',
            },
        },
    },
    plugins: [],
}
