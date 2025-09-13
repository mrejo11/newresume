// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "مهدی رضایی - مهندس مکانیک",
  description: "رزومه مهدی رضایی - مهندس مکانیک ",
  icons: {
    icon: "/tablogo.png", // مسیر favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-vazir text-right bg-gray-100 text-gray-800">
        {children}
      </body>
    </html>
  );
}
