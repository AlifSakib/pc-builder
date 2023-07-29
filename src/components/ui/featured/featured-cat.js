import Link from "next/link";

const FeatureCategories = ({ categories }) => {
  return (
    <div className="mx-auto py-16 max-w-2xl px-4 sm:px-6  lg:max-w-7xl ">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Featured Categories
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/product-category/${category?.id}`}>
            <div className="group relative border rounded-lg transition-all duration-150 hover:translate-x-2 hover:bg-indigo-600 text-gray-700 hover:text-white">
              <div className="my-4 flex justify-center">
                <h3 className="text-sm  text-center">{category.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeatureCategories;
