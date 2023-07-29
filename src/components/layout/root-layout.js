import Footer from "@/shared/footer/footer";
import Navbar from "@/shared/navbar/navbar";
import { Inter, Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dosis",
});

const RootLayout = ({ children }) => {
  return (
    <div
      className={`${dosis.variable} `}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
