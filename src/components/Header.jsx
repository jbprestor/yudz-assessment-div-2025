export default function Header({ activeTab, handleTabChange }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="https://blgf.gov.ph/wp-content/uploads/2021/03/BLGF-Logo-2021.png"
            alt="BLGF Logo"
            className="h-12 blgf-logo"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">James Bryan</h1>
            <p className="text-sm text-gray-600">Real Estate Appraiser & Civil Service Professional</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-1">
          <button
            onClick={(e) => handleTabChange('home')}
            className={`tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition ${
              activeTab === 'home' ? 'bg-primary text-gray-900' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={(e) => handleTabChange('directory')}
            className={`tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition ${
              activeTab === 'directory' ? 'bg-primary text-gray-900' : ''
            }`}
          >
            Assessors Directory
          </button>
          <button
            onClick={(e) => handleTabChange('smv')}
            className={`tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition ${
              activeTab === 'smv' ? 'bg-primary text-gray-900' : ''
            }`}
          >
            SMV Profiling
          </button>
          <button
            onClick={(e) => handleTabChange('qrrpa')}
            className={`tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition ${
              activeTab === 'qrrpa' ? 'bg-primary text-gray-900' : ''
            }`}
          >
            QRRPA Submission
          </button>
        </nav>
        <button className="md:hidden text-gray-700" id="mobile-menu-btn">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className="md:hidden hidden bg-white shadow-lg absolute w-full" id="mobile-menu">
        <div className="flex flex-col space-y-1 p-2">
          <button
            onClick={(e) => handleTabChange('home')}
            className="tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition text-left"
          >
            Home
          </button>
          <button
            onClick={(e) => handleTabChange('directory')}
            className="tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition text-left"
          >
            Assessors Directory
          </button>
          <button
            onClick={(e) => handleTabChange('smv')}
            className="tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition text-left"
          >
            SMV Profiling
          </button>
          <button
            onClick={(e) => handleTabChange('qrrpa')}
            className="tab-btn px-4 py-2 rounded-md font-medium text-gray-700 hover:bg-primary hover:text-gray-900 transition text-left"
          >
            QRRPA Submission
          </button>
        </div>
      </div>
    </header>
  );
}