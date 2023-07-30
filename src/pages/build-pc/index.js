import RootLayout from "@/components/layout/root-layout";
import axios from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";

const BuildPc = ({ data: categories }) => {
  const selected = useSelector((state) => state.pcBuilder);
  console.log(selected[0]);
  const handleCompleteBuild = (items) => {
    if (Object.keys(items).length < 5) {
      alert("Please select at least five item from each category");
      return;
    }
  };
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
                  {selected[0]?.items[category?.category] ? (
                    <div className="text-center  w-full">
                      <div>{selected[0]?.items[category?.category]?.name}</div>
                    </div>
                  ) : (
                    <div>
                      <p>{category?.title}</p>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button
            onClick={() => handleCompleteBuild(selected[0]?.items)}
            className="bg-green-500 text-white px-20 py-2 rounded hover:border hover:bg-white hover:text-black transition-colors duration-200 delay-75"
          >
            Complete Build
          </button>
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
