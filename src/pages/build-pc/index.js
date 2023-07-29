import RootLayout from "@/components/layout/root-layout";
import axios from "axios";
import Link from "next/link";

const BuildPc = ({ data: categories }) => {
  return (
    <div className="my-20">
      <div className="mx-auto py-16 max-w-2xl px-4 sm:px-6  lg:max-w-7xl ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Select Category
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/build-pc/${category?.id}`}>
              <div className="group relative border rounded-lg transition-all duration-150 hover:translate-x-2 hover:bg-indigo-600 text-gray-700 hover:text-white">
                <div className="my-4 flex justify-center">
                  <h3 className="text-sm  text-center">{category.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildPc;

BuildPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/categories");
    const data = res?.data || {};
    console.log(data);

    return {
      props: { data: data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { error: "An error occurred while fetching data." },
    };
  }
};
