// src/pages/Contact.tsx
const Contact = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <section className="bg-gradient-to-br from-slate-900 via-orange-700 to-slate-800 text-white py-16 sm:py-20 md:py-24 shadow-lg shadow-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-300">Get In Touch</p>
        <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mx-auto mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base leading-6 sm:leading-8 text-slate-200">
          Reach out to us for any HR, Payroll, Compliance, or Recruitment needs
        </p>
      </div>
    </section>

    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white/90 p-6 sm:p-8 shadow-2xl shadow-slate-400/5 backdrop-blur-xl">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">Email</p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">Email Us</h2>
              <a href="mailto:mascotman@gmail.com" className="mt-2 sm:mt-3 inline-block text-base sm:text-lg font-semibold text-orange-600 hover:text-orange-700 transition">
                mascotman@gmail.com
              </a>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                For general inquiries and partnership opportunities
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">Phone</p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">Call Us</h2>
              <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-base sm:text-lg text-slate-600">
                <p>+91-9650771201</p>
                <p>+91-9899728700</p>
              </div>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                Mon-Sat: 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">Address</p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">Corporate Office</h2>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg text-slate-600">
                191, Gali Batashan, Chawri Bazar, Delhi - 110006
              </p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                Our headquarters in the heart of Delhi
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">Connect</p>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">Follow Us</h2>
              <a 
                href="https://www.linkedin.com/company/133553905/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 sm:mt-3 inline-flex items-center gap-2 sm:gap-3 rounded-3xl bg-slate-900 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Connect with us on LinkedIn ↗
              </a>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600">
                Stay updated with our latest news and insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Contact;