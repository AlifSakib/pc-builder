import Footer from "@/shared/footer/footer";
import Navbar from "@/shared/navbar/navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
