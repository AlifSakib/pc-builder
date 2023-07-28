import Image from "next/image";
import Link from "next/link";

const Featured = ({ all_featured_products }) => {
  return (
    <div className="px-4 py-10 mx-auto container  ">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">Featured Products</span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
        {all_featured_products?.map((product) => (
          <Link key={product.id} href={`/featured-product/${product?._id}`}>
            <div className="group relative">
              <div className="aspect-h-1 relative aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  width={300}
                  height={300}
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={product?.image}
                  alt=""
                />
                <div className="absolute top-4 right-4">
                  <p className="text-sm bg-teal-500 px-4 rounded-lg font-medium text-gray-900">
                    {product.category}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Stock -{product.stock}
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
      <div className="text-center">
        <Link
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          View All
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Featured;

// Path: src/pages/featured-product/[product_id].js
