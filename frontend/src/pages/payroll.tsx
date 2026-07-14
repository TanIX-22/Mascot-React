// src/pages/Payroll.tsx
const Payroll = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <section className="bg-gradient-to-br from-slate-900 via-orange-700 to-slate-800 text-white py-12 sm:py-16 md:py-20 lg:py-24 shadow-lg shadow-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-300">Payroll Services</p>
        <h1 className="mt-3 sm:mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight">Payroll Management</h1>
        <p className="mx-auto mt-3 sm:mt-4 md:mt-5 max-w-3xl text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-slate-200 px-2">
          Single Point PAN India Payroll Outsourcing with 100% Compliance
        </p>
      </div>
    </section>

    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 md:py-16">
      <div className="rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 bg-white/90 p-4 sm:p-6 md:p-8 shadow-2xl shadow-slate-400/5 backdrop-blur-xl">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6 md:p-8 shadow-sm">
            <p className="hidden sm:block text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">Overview</p>
            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">PAN India Payroll Outsourcing</h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-5 sm:leading-6 md:leading-7 text-slate-600">
              Payroll Outsourcing at single point for <strong>PAN INDIA LOCATIONS</strong>.
            </p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-5 sm:leading-6 md:leading-7 text-slate-600">
              The proposed solution will enable company to maintain high level of information security,
              a comprehensive employee master manager, automate salary banding, and maintain 100% compliance,
              and error-free payroll calculation and disbursement.
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm">
            <p className="hidden sm:block text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-orange-600">Features</p>
            <h2 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">Payroll Management Services (PMS)</h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-5 sm:leading-6 md:leading-7 text-slate-600">The proposed Payroll Management solution will offer following features and benefits:</p>
            <ul className="mt-3 sm:mt-4 md:mt-6 space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base text-slate-600">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Point of Contact</span>
                <span className="leading-relaxed"><strong>Single Point of Contact</strong></span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Online</span>
                <span className="leading-relaxed">Online Employee Master Data maintenance</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Login</span>
                <span className="leading-relaxed">Individual Login for HO, department head &amp; employee.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Compliance</span>
                <span className="leading-relaxed">Online System for Compliance Management to employees- PF, ESI, transfer, withdrawal forms (e.g. Form-13, 19, etc.)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Policies</span>
                <span className="leading-relaxed">Level Wise Policies, Benefits and Exclusion Management</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Attendance</span>
                <span className="leading-relaxed">Attendance Collation from Multiple locations (currently getting from 18 states)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Process</span>
                <span className="leading-relaxed">Highly Standardized Processes for New Employee, Exceptional Inputs, Employee Leaving &amp; Exit, Other Requests</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Calculation</span>
                <span className="leading-relaxed">Error-free Payroll Calculation</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Deductions</span>
                <span className="leading-relaxed">Deductions Calculations - Loans, Welfare Funds, Advances, etc.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Increment</span>
                <span className="leading-relaxed">Increment Management</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Incentive</span>
                <span className="leading-relaxed">Incentive Management</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Tax</span>
                <span className="leading-relaxed">Income Tax Computation</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Leave</span>
                <span className="leading-relaxed">Leave Management &amp; Overtime Computation</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Statutory</span>
                <span className="leading-relaxed">Statutory Compliance Computation</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">PT</span>
                <span className="leading-relaxed">Professional Tax</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Slip</span>
                <span className="leading-relaxed">Monthly Pay-slip Generation (Hard Copy &amp; Soft copy)</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Register</span>
                <span className="leading-relaxed">Comprehensive Pay Register</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Settlement</span>
                <span className="leading-relaxed">Full &amp; Final Settlement</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">TDS</span>
                <span className="leading-relaxed">Individual Tax Summary and consolidated TDS Report</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Investment</span>
                <span className="leading-relaxed">Investment Declaration</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">Form-16</span>
                <span className="leading-relaxed">Annual Form-16</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 rounded-full bg-emerald-100 px-2 sm:px-3 py-1 text-xs font-semibold text-emerald-700">MIS</span>
                <span className="leading-relaxed">Various MIS &amp; Reports</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Payroll;