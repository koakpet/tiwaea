import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import FontAwesomeConfig from "./FontAwesome";

// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

export const metadata = {
  title: "Tammy's International Women in Agrculture Empowerment Association",
  description:
    "TIWAEA provides agriculture outreach, and education fuelled by sisterhood aimed at improving the agricultural productivity and sustainability of small-scale farmers in the World.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig />
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
