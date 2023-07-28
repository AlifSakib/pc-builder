import RootLayout from "@/components/layout/root-layout";
import Featured from "@/components/ui/featured/featured";
import Hero from "@/components/ui/hero-section/hero";
import axios from "axios";

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Hero />
      <Featured all_featured_products={data} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await axios.get("http://localhost:5000/featured");
    const data = res?.data || {};
    console.log(res);
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
  }
};
