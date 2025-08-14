"use client";

export default function ContactPage() {
  return (
    <section className="text-gray-600 dark:text-gray-300 body-font relative">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Karachi+(Muhammad%20Shayan)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
            Have a project in mind or just want to say hi? Fill out the form
            below, and I’ll get back to you as soon as possible.
          </p>

          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none 
                         text-gray-700 dark:text-gray-200 py-1 px-3 leading-8 transition-colors 
                         duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              className="w-full bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base 
                         outline-none text-gray-700 dark:text-gray-200 py-1 px-3 resize-none leading-6 
                         transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>

          <button className="text-white bg-indigo-500 border-0 py-2 px-6 
                             focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send Message
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            I value your time — expect a reply within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
