import React from 'react'

const Footer = () => {
  return (
    <div>
      <section
        className="w-full py-16 px-4 sm:px-6 lg:px-8 flex justify-center bg-background-light dark:bg-background-dark border-t border-[#e2e8e4] dark:border-gray-800"
      >
        <div className="w-full max-w-lg text-center">
          <div className="mb-6 flex justify-center">
            <span
              className="material-symbols-outlined text-4xl text-primary animate-bounce"
              >mail</span
            >
          </div>
          <h2 className="text-3xl font-bold text-text-main dark:text-white mb-3">
            Join the Garden Club
          </h2>
          <p className="text-text-sub dark:text-gray-400 mb-8">
            Receive seasonal updates, gardening tips, and exclusive offers
            straight to your inbox.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              className="h-12 flex-1 rounded-xl border border-gray-200 bg-white px-4 text-text-main placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-background-dark dark:text-white"
              placeholder="Your email address"
              type="email"
            />
            <button
              className="h-12 rounded-xl bg-text-main px-6 font-bold text-white transition-colors hover:bg-black dark:bg-white dark:text-background-dark dark:hover:bg-gray-200"
              type="button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      {/*<!-- Footer -->*/}
      <footer
        className="w-full bg-white py-12 px-4 dark:bg-[#102216] border-t border-[#e2e8e4] dark:border-gray-800"
      >
        <div
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl"
              >yard</span
            >
            <span className="text-lg font-bold text-text-main dark:text-white"
              >Wildflower Garden</span
            >
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="text-sm font-medium text-text-sub hover:text-primary transition-colors dark:text-gray-400"
              href="#"
              >Our Story</a
            >
            <a
              className="text-sm font-medium text-text-sub hover:text-primary transition-colors dark:text-gray-400"
              href="#"
              >Sustainability</a
            >
            <a
              className="text-sm font-medium text-text-sub hover:text-primary transition-colors dark:text-gray-400"
              href="#"
              >Shipping &amp; Returns</a
            >
            <a
              className="text-sm font-medium text-text-sub hover:text-primary transition-colors dark:text-gray-400"
              href="#"
              >Contact</a
            >
          </div>
          <div className="flex gap-4">
            <a
              className="text-text-sub hover:text-primary dark:text-gray-400 transition-colors"
              href="#"
            >
              <span className="sr-only">Instagram</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewbox="0 0 24 24"
              >
                <path
                  clip-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400">
          © 2024 Wildflower Garden Shop. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
