import type { Config } from "tailwindcss";


const config: Config = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],


  theme: {

    extend: {


      colors: {

        matte: {

          DEFAULT: "#0b0b0b",

          800: "#0f0f0f",

          900: "#050505"

        },


        pinterest: {

          500:"#e60023"

        },


        silver: {

          100:"#e6e6e6",

          300:"#a8a8a8"

        }

      },



      keyframes: {


        fadeIn: {

          "0%":{

            opacity:"0",

            transform:"translateY(10px)"

          },


          "100%":{

            opacity:"1",

            transform:"translateY(0)"

          }

        }

      },



      animation: {


        fadeIn:

        "fadeIn .4s ease-out both"


      },



      boxShadow: {


        "soft-glass":

        "0 8px 30px rgba(2,6,23,.65)",


        "red-glow":

        "0 0 25px rgba(230,0,35,.45)"

      },



      borderRadius: {

        "xl-2":"1.125rem"

      }

    }

  },


  plugins:[]

};


export default config;
