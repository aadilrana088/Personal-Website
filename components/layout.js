import Head from "next/head";
import Header from "./Header/Header";
export const siteTitle = "Next.js Sample Website";
export default function Layout({ children }) {
    return (
        <div className="main">
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Header />
            <main>{children}</main>
            footer
        </div>
    );
}
