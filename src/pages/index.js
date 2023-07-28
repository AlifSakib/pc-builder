import RootLayout from "@/components/layout/root-layout";

const HomePage = () => {
  return <h1>Home Page</h1>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
