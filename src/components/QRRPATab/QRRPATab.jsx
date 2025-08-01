import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function QRRPATracking() {
  const handleSort = (columnIndex) => {
    console.log(`Sorting by column ${columnIndex}`);
    // Implement sorting logic here
  };

  return (
    <div id="qrrpa" className="tab-content">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-secondary">QRRPA Submission Tracking</h2>
        <div className="flex space-x-3">
          <button className="bg-primary hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg flex items-center">
            <FontAwesomeIcon icon={['fas', 'file-export']} className="mr-2" />
            Export
          </button>
          <button className="bg-secondary hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg flex items-center">
            <FontAwesomeIcon icon={['fas', 'plus']} className="mr-2" />
            Add Submission
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={['fas', 'search']} className="text-gray-400" />
            </div>
            <input
              type="text"
              id="qrrpa-search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-secondary focus:border-transparent search-box"
              placeholder="Search QRRPA records..."
            />
          </div>
          <div className="flex space-x-2">
            <select
              id="qrrpa-lgu-filter"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="">All LGUs</option>
              <option value="Rosario">Rosario</option>
              <option value="Butuan">Butuan</option>
              <option value="Surigao">Surigao</option>
            </select>
            <select
              id="qrrpa-status-filter"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="Pending">Pending</option>
              <option value="For Clarification">For Clarification</option>
              <option value="Approved">Approved</option>
            </select>
            <select
              id="qrrpa-quarter-filter"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="">All Quarters</option>
              <option value="Q1">Q1</option>
              <option value="Q2">Q2</option>
              <option value="Q3">Q3</option>
              <option value="Q4">Q4</option>
            </select>
          </div>
        </div>

        <div className="table-container">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-white uppercase bg-secondary">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(0)}
                >
                  LGU Name <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(1)}
                >
                  Quarter <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(2)}
                >
                  Submission Date <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(3)}
                >
                  Reviewer <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(4)}
                >
                  Status <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(5)}
                >
                  Remarks <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Rosario</td>
                <td className="px-6 py-4">Q1 2024</td>
                <td className="px-6 py-4">03/15/2024</td>
                <td className="px-6 py-4">Juan Dela Cruz</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Approved
                  </span>
                </td>
                <td className="px-6 py-4">Complete submission</td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-secondary mr-3">
                    <FontAwesomeIcon icon={['fas', 'edit']} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Butuan</td>
                <td className="px-6 py-4">Q1 2024</td>
                <td className="px-6 py-4">03/20/2024</td>
                <td className="px-6 py-4">Maria Santos</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    For Clarification
                  </span>
                </td>
                <td className="px-6 py-4">Missing Annex A</td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-secondary mr-3">
                    <FontAwesomeIcon icon={['fas', 'edit']} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Surigao</td>
                <td className="px-6 py-4">Q1 2024</td>
                <td className="px-6 py-4">03/25/2024</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">Under review</td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:text-secondary mr-3">
                    <FontAwesomeIcon icon={['fas', 'edit']} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> entries
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-3 py-1 border rounded-lg bg-primary text-gray-900 font-medium">1</button>
            <button className="px-3 py-1 border rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed" disabled>
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-secondary">Submission Statistics</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3 text-gray-700">Status Distribution</h4>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Approved</span>
                </div>
                <span className="text-sm font-medium">33%</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm">For Clarification</span>
                </div>
                <span className="text-sm font-medium">33%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-sm">Pending</span>
                </div>
                <span className="text-sm font-medium">33%</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3 text-gray-700">Quarterly Submissions</h4>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Q1 2024</span>
                <span className="text-sm font-medium">3 submissions</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Q4 2023</span>
                <span className="text-sm font-medium">5 submissions</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Q3 2023</span>
                <span className="text-sm font-medium">4 submissions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}