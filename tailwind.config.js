const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                reach: {
                    darkBlue: '#001E35',
                    red: '#E72735',
                    yellow: '#FFD65B',
                    lightGrey: '#f3f3f3',
                    grey: '#c2c3ca',
                },
                transparent: 'transparent',
                current: 'currentColor',
                teal: colors.teal,
                purple: colors.purple,
                rose: colors.rose,
                green: colors.green,
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
