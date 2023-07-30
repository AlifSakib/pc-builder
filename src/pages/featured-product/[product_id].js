import RootLayout from "@/components/layout/root-layout";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const FeaturedProductDetails = ({ product }) => {
  if (!product) return <div>Loading...</div>;
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const reviews = { href: "#", average: 4, totalCount: 117 };
  return (
    <div>
      {/* <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col mt-10">
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
      </div> */}
      <div className="mx-auto  mt-20 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <Image
            src={product.image}
            alt={"image"}
            className="h-full w-full object-cover object-center"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <Image
            src={product.image}
            alt={"image"}
            className="h-full w-full object-cover object-center"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <Image
            src={product.image}
            alt={"image"}
            className="h-full w-full object-cover object-center"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Product info */}
      <div className="mx-auto max-w-2xl font-dosis px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product.name}
          </h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">
            {product.price}$
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
              <Link
                href={"/"}
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {reviews.totalCount} reviews
              </Link>
            </div>
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          </div>
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
  const res = await fetch("https://pc-builder-alifsakib.vercel.app/api/products");
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
    `${process.env.URL}/api/products/${params?.product_id}`
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
