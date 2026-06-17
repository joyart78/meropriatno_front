import type { Metadata } from "next";
import localFont from "next/font/local";
import { StoreProvider } from "./providers/StoreProvider";
import "./globals.css";

const masiva = localFont({
  src: "../../public/fonts/Masiva-Bold.ttf",
  variable: "--font-masiva",
});

const montserrat = localFont({
  src: "../../public/fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Мероприятно — организация мероприятий в Москве",
    template: "%s | Мероприятно",
  },
  description:
    "Организация мероприятий в Москве: свадьбы, корпоративы, дни рождения, выпускные. Команда профессионалов с 12+ лет опыта превратит вашу идею в незабываемое событие.",
  keywords: [
    "организация мероприятий Санкт-Петербург",
    "свадьба под ключ Санкт-Петербург",
    "корпоратив Санкт-Петербург",
    "event агентство Санкт-Петербург",
    "праздник под ключ",
    "праздник",
  ],
  openGraph: {
    title: "Мероприятно — организация мероприятий в Москве",
    description:
      "Организация мероприятий в Москве: свадьбы, корпоративы, дни рождения, выпускные. 500+ проведённых событий.",
    url: "https://meropriyatno.ru",
    siteName: "Мероприятно",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Мероприятно",
    description:
      "Организация мероприятий в Москве: свадьбы, корпоративы, дни рождения, выпускные.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://meropriyatno.ru"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Мероприятно",
    url: "https://meropriyatno.ru",
    logo: "https://meropriyatno.ru/favicon.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Санкт-Петербург",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-904-481-51-50",
      contactType: "customer service",
    },
    sameAs: ["https://vk.ru/club237604919", "https://t.me/VikaInk"],
  };

  return (
    <html lang="ru" className={`${masiva.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
