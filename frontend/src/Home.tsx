import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <section id="home" className="bg-gradient-to-br from-slate-900 via-orange-700 to-slate-800 text-white py-12 sm:py-16 md:py-20 lg:py-24 shadow-lg shadow-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-300">Workforce Solutions</p>
        <h1 className="mt-3 sm:mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight">Mascot Management</h1>
        <p className="mx-auto mt-3 sm:mt-4 md:mt-5 max-w-3xl text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-slate-200 px-2">
          Your Trusted Partner for End-to-End HR, Payroll, Compliance & Staffing Solutions
        </p>
      </div>
    </section>

    <section id="about" className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 bg-white/90 p-4 sm:p-6 md:p-8 shadow-2xl shadow-slate-400/5 backdrop-blur-xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">About Us</p>
            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">Building Future-Ready Workforces</h2>
          </div>
          <div className="space-y-3 sm:space-y-4 md:space-y-6 text-slate-600 leading-5 sm:leading-6 md:leading-7 text-sm sm:text-base lg:text-lg">
            <p>
              Mascot Management is a leading workforce solutions provider, combining technology-driven platforms and deep industry expertise to build agile, future-ready enterprises. We shape workforce ecosystems at scale, spanning diverse staffing models to bring structure, continuity, and resilience to complex talent environments.
            </p>
            <p>
              We deliver flexible, large-scale staffing solutions aligned to evolving business needs. From workforce planning and onboarding to deployment and compliance, we help maintain operational continuity across locations. Trusted by leading enterprises, we manage end-to-end recruitment with a focus on efficiency and productivity.
            </p>
            <p>
              Our comprehensive suite of services integrates staffing, payroll, compliance, and skill development, improving visibility and driving productivity. We create structured, inclusive platforms where large workforces are supported and enabled to thrive, ensuring our clients stay ahead in today's dynamic business landscape.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="clients" className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">Our Clients</p>
          <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">Trusted by Leading Organizations</h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Proudly partnering with industry leaders across diverse sectors
          </p>
        </div>
        <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-4 sm:grid-cols-4 md:grid-cols-4">
          <a href="https://www.exideindustries.com/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-2 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center min-h-[60px] sm:min-h-[100px] md:min-h-[120px] hover:border-orange-300">
            <img src="/logos/exide.png" alt="Exide Industries Limited Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain mb-0 sm:mb-2" />
            <p className="hidden sm:block text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">Exide Industries Limited</p>
          </a>
          <a href="https://iffdc.in/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-2 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center min-h-[60px] sm:min-h-[100px] md:min-h-[120px] hover:border-orange-300">
            <img src="/logos/iffdc.gif" alt="Indian Farm Forestry Development Corporation Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain mb-0 sm:mb-2" />
            <p className="hidden sm:block text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">Indian Farm Forestry Development Corporation</p>
          </a>
          <a href="https://www.bosch.in/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-2 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center min-h-[60px] sm:min-h-[100px] md:min-h-[120px] hover:border-orange-300">
            <img src="/logos/bosch.png" alt="Bosch Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain mb-0 sm:mb-2" />
            <p className="hidden sm:block text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">Bosch Limited</p>
          </a>
          <a href="https://www.powergrid.in/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-2 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center min-h-[60px] sm:min-h-[100px] md:min-h-[120px] hover:border-orange-300">
            <img src="/logos/powergrid.png" alt="Power Grid Corporation of India Limited Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain mb-0 sm:mb-2" />
            <p className="hidden sm:block text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">Power Grid Corporation of India Limited</p>
          </a>
          <a href="https://indianairforce.nic.in/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-2 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center min-h-[60px] sm:min-h-[100px] md:min-h-[120px] hover:border-orange-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-orange-600 to-orange-700 rounded-full mb-0 sm:mb-2">
              <span className="text-white font-bold text-xs sm:text-sm md:text-base">IAF</span>
            </div>
            <p className="hidden sm:block text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">Indian Air Force</p>
          </a>
          <a href="https://archfin.com/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-2 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center min-h-[60px] sm:min-h-[100px] md:min-h-[120px] hover:border-orange-300">
            <img src="/logos/archfinance.png" alt="Arch Finance Limited Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain mb-0 sm:mb-2" />
            <p className="hidden sm:block text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">Arch Finance Limited</p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-2 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center min-h-[60px] sm:min-h-[100px] md:min-h-[120px] hover:border-orange-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-700 rounded-full mb-0 sm:mb-2">
              <span className="text-white font-bold text-xs sm:text-sm md:text-base">IC</span>
            </div>
            <p className="hidden sm:block text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">Inventivo Creations</p>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 bg-white p-2 sm:p-4 md:p-5 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center min-h-[60px] sm:min-h-[100px] md:min-h-[120px] hover:border-orange-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-teal-600 to-teal-700 rounded-full mb-0 sm:mb-2">
              <span className="text-white font-bold text-xs sm:text-sm md:text-base">RS</span>
            </div>
            <p className="hidden sm:block text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">RS Bhatnagar & Company</p>
          </a>
        </div>
      </div>
    </section>

    <section id="services" className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">Our Services</p>
          <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">Comprehensive Workforce Solutions</h2>
          <p className="mt-2 sm:mt-3 md:mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            End-to-end HR services designed to solve complex workforce challenges and drive business growth
          </p>
        </div>
        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">Payroll</p>
            <h3 className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 leading-tight">Payroll Management</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1 leading-relaxed">
              Single-point PAN India payroll outsourcing with 100% compliance, automated salary processing, and real-time analytics for error-free disbursement.
            </p>
            <Link to="/payroll" className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition">Read More →</Link>
          </article>

          <article className="flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">Accounting</p>
            <h3 className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 leading-tight">Accounting Services</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1 leading-relaxed">
              Complete financial management including system design, implementation, budgeting, MIS reporting, and strategic financial analysis for informed decision-making.
            </p>
            <Link to="/accounting" className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition">Read More →</Link>
          </article>

          <article className="flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">ESI & PF</p>
            <h3 className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 leading-tight">ESI & PF Compliance</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1 leading-relaxed">
              End-to-end statutory compliance management for Employee State Insurance and Provident Fund, ensuring timely filings and full regulatory adherence.
            </p>
            <Link to="/esi-pf" className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition">Read More →</Link>
          </article>

          <article className="flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">Recruitment</p>
            <h3 className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 leading-tight">RPO & Staffing</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1 leading-relaxed">
              Recruitment Process Outsourcing with flexible staffing solutions, from temporary to permanent placements, serving diverse industries across PAN India.
            </p>
            <Link to="/recruitment" className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition">Read More →</Link>
          </article>

          <article className="flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">HR Advisory</p>
            <h3 className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 leading-tight">HR Consulting</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1 leading-relaxed">
              Strategic HR advisory services for startups and enterprises, including policy development, organizational design, and end-to-end HR function management.
            </p>
            <Link to="/hr-advisory" className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition">Read More →</Link>
          </article>

          <article className="flex flex-col rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition hover:shadow-md h-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">Compliance</p>
            <h3 className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 leading-tight">Compliance Management</h3>
            <p className="mt-2 sm:mt-3 text-slate-600 text-sm sm:text-base flex-1 leading-relaxed">
              Comprehensive statutory compliance solutions covering PF, ESI, PT, TDS, and labor laws with automated deadline management and risk mitigation.
            </p>
            <Link to="/compliance" className="mt-3 sm:mt-4 inline-block text-sm font-semibold text-orange-600 hover:text-orange-700 transition">Read More →</Link>
          </article>
        </div>
      </div>
    </section>

    <section className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 bg-slate-900 p-4 sm:p-6 md:p-8 shadow-2xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-300">Industries We Serve</p>
            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">Across Diverse Sectors</h2>
          </div>
          <div className="grid gap-2 sm:gap-3 md:gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">FMCG & Retail</p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">IT & ITES</p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">Manufacturing</p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">BFSI</p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">Healthcare</p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">Logistics</p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">E-Commerce</p>
            </div>
            <div className="rounded-xl sm:rounded-2xl bg-white/10 p-3 sm:p-4 md:p-6 text-center backdrop-blur-sm min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">Telecom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;