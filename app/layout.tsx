import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | Lee++",
        default: "Lee++",
    },
    description: "Software engineering, infrastructure, and other things.",
    category: "technology",
    publisher: "Lee Presswood",
    creator: "Lee Presswood",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            nosnippet: false,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="/icons/favicon.ico" sizes="any" />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
