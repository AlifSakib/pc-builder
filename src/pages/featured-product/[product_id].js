import RootLayout from "@/components/layout/root-layout";
import Image from "next/image";

const FeaturedProductDetails = ({ product }) => {
  if (!product) return <div>Loading...</div>;
  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col mt-10">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
              {product?.name}
            </h2>
            <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
              {product?.description}
            </p>
            <div className="flex justify-center gap-10 items-center">
              <div className="mb-2 text-sm text-gray-600 md:mb-2">
                Price - ${product?.price}
              </div>
              <div className="mb-2 text-sm text-gray-600 md:mb-2">
                Reviews - {product?.rating}
              </div>
            </div>
            <div className="mb-10 text-center md:mb-16 lg:mb-20">
              <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <Image
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={product?.image}
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductDetails;

FeaturedProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { product_id: product._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `http://localhost:3000/api/products/${params?.product_id}`
  );
  const data = await res.json();
  return {
    props: { product: data },
  };
};


// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   console.log(params);
//   const res = await fetch(
//     `http://localhost:3000/api/products/${params?.product_id}`
//   );
//   const data = await res.json();
//   return {
//     props: { product: data },
//   };
// };