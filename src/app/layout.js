import "./globals.css";

export const metadata = {
  title: "Auth App",
  description: "Authentication App using Next.js 13 and MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#09122C_0.1px,transparent_1px)] [background-size:32px_32px] dark:bg-gray-900 dark:bg-[radial-gradient(#374151_1px,transparent_1px)]">
        {children}
      </body>
    </html>
  );
}
