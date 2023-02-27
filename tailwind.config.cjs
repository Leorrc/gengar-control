/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                gengar: '#5d5984',
                amarelo: '#dfa500',
                redOpacity: '#E6D4D7',
                greenOpacity: '#D0DFD7',
                blueLight: '#6933ff',

                greenDark: '#015F43',
                green: '#00875F',
                greenLight: '#00B37E',
                red: '#AA2834',
                redLight: '#F75A68',

                background: '#202024',
                shape: '#29292E',
                shape2: '#323238',
                place: '#7C7C8A',
                place2: '#121214',

                titles: '#E1E1E6',
                textBody: '#C4C4CC',
                white: '#FFFFFF',

                roxo: '#6610f2'
            },
            fontFamily: {
                display: ['Poppins, sans-serif']
            },
            spacing: {
                leo: ['0, 0.5rem']
            }
        }
    },
    plugins: []
}