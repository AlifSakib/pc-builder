import Footer from "@/shared/footer/footer";
import Navbar from "@/shared/navbar/navbar";

const RootLayout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
