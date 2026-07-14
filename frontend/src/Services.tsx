// src/pages/Services.tsx
const Services = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <section className="bg-gradient-to-br from-slate-900 via-orange-700 to-slate-800 text-white py-16 sm:py-20 md:py-24 shadow-lg shadow-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-300">What We Offer</p>
        <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">Our Services</h1>
        <p className="mx-auto mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base leading-6 sm:leading-8 text-slate-200">
          Comprehensive HR solutions designed to solve complex workforce challenges and drive business growth
        </p>
      </div>
    </section>

    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 bg-white/90 p-6 sm:p-8 shadow-2xl shadow-slate-400/5 backdrop-blur-xl">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">Payroll</p>
            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900">Payroll Management</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1">
              Single-point PAN India payroll outsourcing with 100% compliance, automated salary processing, and real-time analytics for error-free disbursement.
            </p>
            <a 
              href="/payroll" 
              className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
            >
              Read More →
            </a>
          </article>

          <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">Accounting</p>
            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900">Accounting Services</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1">
              Complete financial management including system design, implementation, budgeting, MIS reporting, and strategic financial analysis for informed decision-making.
            </p>
            <a 
              href="/accounting" 
              className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
            >
              Read More →
            </a>
          </article>

          <article className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">ESI & PF</p>
            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900">ESI & PF Compliance</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1">
              End-to-end statutory compliance management for Employee State Insurance and Provident Fund, ensuring timely filings and full regulatory adherence.
            </p>
            <a 
              href="/esi-pf" 
              className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
            >
              Read More →
            </a>
          </article>

          <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">Recruitment</p>
            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900">RPO & Staffing</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1">
              Recruitment Process Outsourcing with flexible staffing solutions, from temporary to permanent placements, serving diverse industries across PAN India.
            </p>
            <a 
              href="/recruitment" 
              className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
            >
              Read More →
            </a>
          </article>

          <article className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">HR Advisory</p>
            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900">HR Consulting</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1">
              Strategic HR advisory services for startups and enterprises, including policy development, organizational design, and end-to-end HR function management.
            </p>
            <a 
              href="/hr-advisory" 
              className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
            >
              Read More →
            </a>
          </article>

          <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">Compliance</p>
            <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-slate-900">Compliance Management</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1">
              Comprehensive statutory compliance solutions covering PF, ESI, PT, TDS, and labor laws with automated deadline management and risk mitigation.
            </p>
            <a 
              href="/compliance" 
              className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
            >
              Read More →
            </a>
          </article>
        </div>

        <div className="mt-8 sm:mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600">Why Choose Us</p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">The Mascot Advantage</h2>
          </div>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-3 sm:mb-4 flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-xl sm:text-2xl">🎯</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">End-to-End Solutions</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">Complete HR lifecycle management</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 sm:mb-4 flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-xl sm:text-2xl">📊</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">Technology-Driven</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">AI-enabled platforms & analytics</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 sm:mb-4 flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-xl sm:text-2xl">🛡️</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">100% Compliance</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">Statutory adherence guaranteed</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 sm:mb-4 flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-xl sm:text-2xl">🌍</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">PAN India Reach</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">100+ locations nationwide</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  
);

export default Services;