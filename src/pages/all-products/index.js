import RootLayout from "@/components/layout/root-layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const AllProducts = ({ products }) => {
  return (
    <div className="bg-white font-dosis my-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Featured Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <Link key={product.id} href={`/featured-product/${product?._id}`}>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product?.image}
                    alt="product image"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

AllProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.URL}/api/products`);
    const data = res?.data || {};
    return {
      props: { products: data },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { error: "An error occurred while fetching data." },
    };
  }
};
