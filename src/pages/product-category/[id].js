import RootLayout from "@/components/layout/root-layout";
import Image from "next/image";
import Link from "next/link";

const ProductUnderCategory = ({ products, category }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6  lg:max-w-7xl font-dosis">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {category}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Link key={product.id} href={`/featured-product/${product?._id}`}>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.image}
                  alt={"Image"}
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
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
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
  );
};

export default ProductUnderCategory;

ProductUnderCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/api/categories`);
  const data = await res.json();
  console.log("Fetched categories data:", data);

  const paths = data.map((category) => {
    return {
      params: { id: category.id.toString() },
    };
  });

  console.log("Generated paths:", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log("Requested category ID:", params?.id);

  const res = await fetch(`${process.env.URL}/api/categories/${params?.id}`);
  const data = await res.json();
  console.log("Fetched category data:", data);

  return {
    props: {
      products: data?.products,
      category: data?.category,
    },
  };
};

// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   console.log("Requested category ID:", params?.id);

//   const res = await fetch(`http://localhost:3000/api/categories/${params?.id}`);
//   const data = await res.json();
//   console.log("Fetched category data:", data);

//   return {
//     props: {
//       products: data,
//     },
//   };
// };
