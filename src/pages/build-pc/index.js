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
    <div className="my-20 font-dosis">
      <div className="mx-auto py-16 max-w-2xl px-4 sm:px-6  lg:max-w-7xl ">
        <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">
          Build Your PC
        </h2>
        <p className="text-xs font-bold tracking-tight text-center text-gray-900">
          Please Select Your Components
        </p>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <p>Total Price : {selected[0]?.totalPrice}$</p>
          </div>
          <div>
            <p>Total Selected Items : {selected[0]?.totalItems}</p>
          </div>
          <div className="flex gap-4">
            <button className="border p-2 rounded-lg bg-green-500 text-white hover:bg-indigo-500">
              Print
            </button>
            <button className="border p-2 rounded-lg bg-green-500 text-white hover:bg-indigo-500">
              Download
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/build-pc/${category?.id}`}>
              <div className="group relative border shadow rounded-lg transition-all duration-150 hover:translate-x-2 hover:bg-indigo-600 text-gray-700 hover:text-white">
                <div>
                  <div className=" flex justify-center ">
                    {selected[0]?.items[category?.category] ? (
                      <div className="text-center py-4 flex justify-center gap-4 rounded-lg shadow  w-full bg-green-500 text-white">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          {selected[0]?.items[category?.category]?.name}
                        </div>
                      </div>
                    ) : (
                      <div className="py-4">
                        <p>{category?.title}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button
            onClick={() => handleCompleteBuild(selected[0]?.items)}
            className="bg-green-500 text-white px-20 py-2 rounded-lg hover:border hover:bg-white hover:text-black transition-colors duration-200 delay-75"
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
