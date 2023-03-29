import "../styles/global.scss";

import localFont from "next/font/local";

const roboto = localFont({
    src: [
        {
            path: "../assets/fonts/Roboto-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../assets/fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/Roboto-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../assets/fonts/Roboto-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/Roboto-Bold.ttf",
            weight: "700",
            style: "bold",
        },
    ],
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <main className={roboto.className}>
        <Component {...pageProps} />
    </main>;
}
