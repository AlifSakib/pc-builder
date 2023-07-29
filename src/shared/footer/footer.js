import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 font-dosis">
      <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <Link href="/">
          <h1>Pc Builder Genie</h1>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <Link
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Overview
          </Link>

          <Link
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Features
          </Link>

          <Link
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Pricing
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Careers
          </Link>

          <Link
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Help
          </Link>

          <Link
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Privacy
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
          © Copyright 2023 Alif Sakib.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
