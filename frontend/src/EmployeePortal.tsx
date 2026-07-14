import React, { useState } from 'react';

type PortalData = {
  employee: Record<string, unknown>;
  personal: Record<string, unknown>;
  documents: Record<string, unknown>;
};

const EmployeePortal = () => {
  const [userId, setUserId] = useState('Mascot@');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [portalData, setPortalData] = useState<PortalData | null>(null);
  const [activeTab, setActiveTab] = useState<'professional' | 'personal' | 'documents'>('professional');

  const labelMap: Record<string, string> = {
    employee_name: 'Name',
    name: 'Name',
    emp_code: 'Employee Code',
    ifsc: 'IFSC Code',
    ifsc_code: 'IFSC Code',
    pan: 'PAN',
    pan_url: 'PAN',
    uan: 'UAN',
    date_of_joining: 'Date of Joining',
    joining_date: 'Date of Joining',
    dateOfJoining: 'Date of Joining',
    work_location: 'Work Location',
    location: 'Work Location',
    photo: 'Profile Photo',
    photo_url: 'Profile Photo',
    department: 'Department',
    designation: 'Designation',
    manager: 'Manager',
    date_of_birth: 'Date of Birth',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    aadhaar: 'Aadhaar',
    aadhaar_url: 'Aadhaar',
    aadhaar_card: 'Aadhaar Card',
    aadhaar_card_url: 'Aadhaar Card',
    passport: 'Passport',
    passport_url: 'Passport',
    passport_photo: 'Passport Photo',
    passport_photo_url: 'Passport Photo',
    bank_proof: 'Bank Proof',
    bank_proof_url: 'Bank Proof',
    salary_slip: 'Salary Slip',
    salary_slip_url: 'Salary Slip',
    offer_letter: 'Offer Letter',
    offer_letter_url: 'Offer Letter',
    joining_letter: 'Joining Letter',
    joining_letter_url: 'Joining Letter',
    experience_letter: 'Experience Letter',
    experience_letter_url: 'Experience Letter',
    relieving_letter: 'Relieving Letter',
    relieving_letter_url: 'Relieving Letter',
  };

  const formatLabel = (key: string) => {
    // Remove _url suffix for clean labels
    const cleanKey = key.replace(/_url$/, '');
    if (labelMap[cleanKey]) return labelMap[cleanKey];
    if (labelMap[key]) return labelMap[key];
    return cleanKey
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const renderValue = (value: unknown) => {
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-700">
          {value.map((item, index) => (
            <li key={index}>{typeof item === 'object' ? JSON.stringify(item) : item}</li>
          ))}
        </ul>
      );
    }

    if (typeof value === 'object' && value !== null) {
      return <pre className="whitespace-pre-wrap text-xs sm:text-sm leading-5 sm:leading-6 text-slate-700 font-mono bg-slate-50 p-3 sm:p-4 rounded-xl text-[10px] sm:text-xs">{JSON.stringify(value, null, 2)}</pre>;
    }

    const stringValue = String(value);

    // Check if it's a URL
    if (stringValue.startsWith('http://') || stringValue.startsWith('https://')) {
      return (
        <a
          href={stringValue}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-orange-600 hover:text-orange-700 transition break-all"
        >
          <span className="truncate max-w-[150px] sm:max-w-[200px]">View Document</span>
          <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      );
    }

    return <span className="text-xs sm:text-sm leading-5 sm:leading-6 text-slate-700 font-medium break-words">{stringValue}</span>;
  };

  const renderDetails = (data: Record<string, unknown>) => {
    const entries = Object.entries(data).filter(([, value]) => value !== null && value !== undefined && value !== '');

    if (!entries.length) {
      return (
        <div className="col-span-full rounded-2xl bg-white p-8 sm:p-12 text-center text-slate-500 shadow-sm border border-slate-200">
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
            <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-slate-100 flex items-center justify-center">
              <svg className="h-6 w-6 sm:h-8 sm:w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.707.293H19a2 2 0 012-2V7a2 2 0 01-2-2h-2" />
              </svg>
            </div>
            <p className="text-base sm:text-lg font-medium">No records available</p>
            <p className="text-xs sm:text-sm text-slate-400">No data found for this section</p>
          </div>
        </div>
      );
    }

    return entries
      .filter(([key]) => {
        // Don't show photo in detailed sections since it's already in the main profile
        if (key === 'photo') return false;
        return true;
      })
      .map(([key, value]) => (
        <div key={key} className="group rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition hover:shadow-lg hover:border-orange-300">
          <div className="flex items-start justify-between gap-3 sm:gap-4">
            <div className="flex-1">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-orange-600 mb-1 sm:mb-2">{formatLabel(key)}</p>
              <div className="mt-1 sm:mt-2">
                {renderValue(value)}
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-orange-100 transition">
                <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400 group-hover:text-orange-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setPortalData(null);

    if (!userId.trim() || !password.trim()) {
      setError('Please enter both User ID and password.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId.trim(), password: password.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.detail || data.message || 'Invalid credentials or server error.');
        return;
      }

      if (data.success) {
        setPortalData({
          employee: data.employee || {},
          personal: data.personal || {},
          documents: data.documents || {},
        });
        setActiveTab('professional');
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch {
      setError('Unable to reach the backend. Is the backend server running?');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    setPortalData(null);
    setUserId('Mascot@');
    setPassword('');
    setError('');
    setActiveTab('professional');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {!portalData ? (
          <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
            <div className="w-full max-w-2xl px-4">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 mb-4 sm:mb-6">
                  <svg className="h-8 w-8 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Employee Portal</h2>
                <p className="text-sm sm:text-base text-slate-600">Sign in to access your employee dashboard</p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">User ID</label>
                    <input
                      value={userId}
                      onChange={(event) => setUserId(event.target.value)}
                      type="text"
                      placeholder="Mascot@EMP_CODE"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">Password</label>
                    <input
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      placeholder="•••••••••"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-slate-300 bg-slate-50 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:from-orange-700 hover:to-orange-800 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/30 text-sm sm:text-base"
                  >
                    {loading ? 'Signing In...' : 'Sign In'}
                  </button>
                </form>

                <div className="mt-4 sm:mt-6 text-center">
                  <p className="text-xs sm:text-sm text-slate-500">
                    Contact HR if you need assistance accessing your account
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl text-white">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  {portalData.employee.photo || portalData.employee.photo_url ? (
                    <img
                      src={String(portalData.employee.photo || portalData.employee.photo_url)}
                      alt="Profile"
                      className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border-4 border-white/30 shadow-lg"
                    />
                  ) : (
                    <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg">
                      {String(portalData.employee.employee_name || portalData.employee.name || 'E').charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {String(portalData.employee.employee_name || portalData.employee.name || 'Employee')}
                  </h2>
                  <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
                    {String(portalData.employee.designation || portalData.employee.role || 'Employee')}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
                    <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                      <span className="text-orange-300 font-medium">Employee Code:</span>
                      <span className="text-white ml-1 sm:ml-2">{String(portalData.employee.emp_code || 'N/A')}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                      <span className="text-orange-300 font-medium">Department:</span>
                      <span className="text-white ml-1 sm:ml-2">{String(portalData.employee.department || 'N/A')}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white text-xs sm:text-sm font-medium transition"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2">
              <div className="flex flex-col sm:flex-row gap-2">
                {[
                  { id: 'professional', label: 'Professional', icon: '👔' },
                  { id: 'personal', label: 'Personal', icon: '👤' },
                  { id: 'documents', label: 'Documents', icon: '📄' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'professional' | 'personal' | 'documents')}
                    className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-base sm:text-lg">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activeTab === 'professional' && 'Professional Information'}
                  {activeTab === 'personal' && 'Personal Details'}
                  {activeTab === 'documents' && 'Document Records'}
                </h3>
                <p className="text-slate-600 mt-1 text-sm sm:text-base">
                  {activeTab === 'professional' && 'View your employment details and professional information'}
                  {activeTab === 'personal' && 'View your personal information and contact details'}
                  {activeTab === 'documents' && 'View your document records and compliance information'}
                </p>
              </div>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {activeTab === 'professional' && renderDetails(portalData.employee)}
                {activeTab === 'personal' && renderDetails(portalData.personal)}
                {activeTab === 'documents' && renderDetails(portalData.documents)}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EmployeePortal;