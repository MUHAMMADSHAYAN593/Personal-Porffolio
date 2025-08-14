export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          © {new Date().getFullYear()} Shayan
        </span>

        {/* Email */}
        <a
          href="mailto:muhammadshayanakhlaq@gmail.com"
          className="text-sm hover:text-blue-500 transition"
        >
          muhammadshayanakhlaq@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex gap-4">
          {/* Twitter */}
          <a
            href="https://twitter.com/knyttneve"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.12 12.84 12.84 0 01-9.33-4.73 4.5 4.5 0 001.39 6.05 4.52 4.52 0 01-2.05-.56v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.53 4.53 0 004.22 3.14A9.06 9.06 0 012 19.54 12.79 12.79 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.36 8.36 0 0023 3z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-shayan-akhlaq-b98872283/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M4.98 3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM.5 8.5h4.9v13H.5v-13zM8.5 8.5h4.69v1.78h.07c.65-1.23 2.24-2.53 4.61-2.53 4.93 0 5.84 3.24 5.84 7.45V21.5h-4.9v-6.38c0-1.52-.03-3.47-2.12-3.47-2.13 0-2.46 1.66-2.46 3.37v6.48H8.5v-13z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/muhammadshayan593"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.96.1-.76.41-1.26.74-1.55-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.44-2.71 5.41-5.29 5.69.42.37.79 1.1.79 2.23v3.31c0 .31.21.67.8.56A10.52 10.52 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
