/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        //Primary
        Purple: "hsl(259, 100%, 65%)",
        "Light-red": "hsl(0, 100%, 67%)",
        //Neutral
        White: "hsl(0, 0%, 100%)",
        "Off-white": "hsl(0, 0%, 94%)",
        "Light-grey": "hsl(0, 0%, 86%)",
        "Smokey-grey": "hsl(0, 1%, 44%)",
        "Off-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        bold: "700",
        extraBold: "800",
      },
    },
  },
  plugins: [],
};
