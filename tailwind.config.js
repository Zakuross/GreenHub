/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
    content: ['./src/**/*.{vue,js,ts}'],
    plugins: [daisyui],
    daisyui: {
        themes: [
          {
              mytheme: {
                  "primary": "#0c4a6e",
                  "secondary": "#CE8D0E",
                  "accent": "#fcd34d",
                  "neutral": "#191e1b",
                  "base-100": "#ffffff",
                  "info": "#00b9d4",
                  "success": "#00d7a1",
                  "warning": "#c45e00",
                  "error": "#ff6082",
              },
        },
        ],
    },
};