const Footer = () => (
  <footer className="bg-gray-900 text-white py-10 sm:py-12 md:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Contact Us</h3>

        <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 md:mb-10">
          <p className="text-gray-300 text-sm sm:text-base">Email: mascotman@gmail.com</p>
          <p className="text-gray-300 text-sm sm:text-base">Phone: +91-9650771201</p>
          <p className="text-gray-300 text-sm sm:text-base px-2">Address: 191, Gali Batashan, Chawri Bazar, Delhi - 110006.</p>
        </div>

        <div className="flex justify-center px-4">
          <a
            href="https://www.linkedin.com/company/133553905/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gray-800 hover:bg-gray-700 transition px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg"
          >
            <span className="hidden sm:inline">Connect with us on</span>
            <span className="sm:hidden">Connect on</span>
            <span className="text-blue-400 font-semibold">LinkedIn</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>

    <div className="mt-8 sm:mt-10 md:mt-14 border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-500">
      © 2024. All Rights Reserved to Mascot Management
    </div>
  </footer>
);

export default Footer;
