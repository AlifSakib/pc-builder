import RootLayout from "@/components/layout/root-layout";
import Featured from "@/components/ui/featured/featured";
import FeatureCategories from "@/components/ui/featured/featured-cat";
import Hero from "@/components/ui/hero-section/hero";
import axios from "axios";

const HomePage = ({ data, data2 }) => {
  console.log(data);
  return (
    <div>
      <Hero />
      <Featured all_featured_products={data} />
      <FeatureCategories categories={data2} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/products/products");
    const res2 = await axios.get("http://localhost:3000/api/categories/categories");
    const data = res?.data || {};
    const data2 = res2?.data || {};
    return {
      props: { data: data, data2: data2 },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { error: "An error occurred while fetching data." },
    };
  }
};
