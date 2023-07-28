import Link from "next/link";

const FeatureCategories = ({ categories }) => {
  return (
    <div>
      <div className="relative px-4 py-16 mx-auto container md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              Featured Categories
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories?.map((category) => (
            <Link key={category?.id} href="/">
              <div className="px-10 h-20 flex items-center justify-center text-center transition duration-300 transform bg-gray-900 rounded-lg shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                <p className="font-semibold text-gray-200 ">
                  {category?.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCategories;
