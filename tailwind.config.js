module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                comicYellow: '#FFD600',
                comicRed: '#FF1744',
                comicBlue: '#2979FF',
            },
            fontFamily: {
                comic: ['"Comic Neue"', 'cursive'],
            },
        },
    },
    plugins: [require("daisyui")],
};