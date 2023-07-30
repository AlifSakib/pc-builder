import RootLayout from "@/components/layout/root-layout";
import { addToPcBuild } from "@/redux/features/pc-build/pc-build-slice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const CategoryProducts = ({ products, category }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  if (!products) {
    return (
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          No products found
        </h1>
      </div>
    );
  }

  const handleAddToPcBuild = (product) => {
    dispatch(addToPcBuild(product));
    // can you navigate("/build-pc");
    router.push("/build-pc");
  };

  return (
    <div className="my-32">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {category}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
              <div key={product.id}>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToPcBuild(product)}
                  className="text-center w-full bg-indigo-700 text-white py-px rounded hover:bg-indigo-500"
                >
                  Add to Builder
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;

CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  console.log("Requested category ID:", params?.id);

  const res = await fetch(`http://localhost:3000/api/categories/${params?.id}`);
  const data = await res.json();
  console.log("Fetched category data:", data);

  return {
    props: {
      products: data?.products,
      category: data?.category,
    },
  };
};
