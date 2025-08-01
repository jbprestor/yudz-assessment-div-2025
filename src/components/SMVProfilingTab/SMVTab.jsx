import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SMVProfiling() {
  const handleSort = (columnIndex) => {
    console.log(`Sorting by column ${columnIndex}`);
    // Implement sorting logic here
  };

  return (
    <div id="smv" className="tab-content">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-secondary">SMV Profiling</h2>
        <div className="flex space-x-3">
          <button className="bg-primary hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg flex items-center">
            <FontAwesomeIcon icon={['fas', 'file-export']} className="mr-2" />
            Export
          </button>
          <button className="bg-secondary hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg flex items-center">
            <FontAwesomeIcon icon={['fas', 'plus']} className="mr-2" />
            Add Record
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
              id="smv-search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-secondary focus:border-transparent search-box"
              placeholder="Search SMV records..."
            />
          </div>
          <div className="flex space-x-2">
            <select
              id="smv-region-filter"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="">All Regions</option>
              <option value="Caraga">Caraga</option>
            </select>
            <select
              id="smv-lgu-filter"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="">All LGUs</option>
              <option value="Rosario">Rosario</option>
              <option value="Butuan">Butuan</option>
              <option value="Surigao">Surigao</option>
            </select>
            <select
              id="smv-status-filter"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Delayed">Delayed</option>
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
                  Region <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(1)}
                >
                  Type <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(2)}
                >
                  LGU Name <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(3)}
                >
                  Income Class <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(4)}
                >
                  Resolution No. <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(5)}
                >
                  Approved Date <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(6)}
                >
                  GR Year <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(7)}
                >
                  Implementation Year <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(8)}
                >
                  Delayed Reason <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(9)}
                >
                  Due <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(10)}
                >
                  Years Due <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(11)}
                >
                  Status (2024) <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Caraga</td>
                <td className="px-6 py-4">Municipality</td>
                <td className="px-6 py-4">Rosario</td>
                <td className="px-6 py-4">4th</td>
                <td className="px-6 py-4">2023-001</td>
                <td className="px-6 py-4">03/15/2023</td>
                <td className="px-6 py-4">2023</td>
                <td className="px-6 py-4">2024</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">No</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Completed
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Caraga</td>
                <td className="px-6 py-4">City</td>
                <td className="px-6 py-4">Butuan</td>
                <td className="px-6 py-4">1st</td>
                <td className="px-6 py-4">2022-005</td>
                <td className="px-6 py-4">06/22/2022</td>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">2023</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">No</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Completed
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Caraga</td>
                <td className="px-6 py-4">City</td>
                <td className="px-6 py-4">Surigao</td>
                <td className="px-6 py-4">2nd</td>
                <td className="px-6 py-4">2021-012</td>
                <td className="px-6 py-4">11/10/2021</td>
                <td className="px-6 py-4">2021</td>
                <td className="px-6 py-4">2022</td>
                <td className="px-6 py-4">Budget constraints</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    Pending
                  </span>
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
        <h3 className="text-xl font-bold mb-4 text-secondary">SMV Profiling Summary</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">Total LGUs</p>
                <h3 className="text-2xl font-bold text-secondary mt-1">13</h3>
              </div>
              <div className="bg-primary p-3 rounded-lg">
                <FontAwesomeIcon icon={['fas', 'city']} className="text-white" />
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <h3 className="text-2xl font-bold text-green-800 mt-1">9</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FontAwesomeIcon icon={['fas', 'check-circle']} className="text-green-800" />
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending/Delayed</p>
                <h3 className="text-2xl font-bold text-yellow-800 mt-1">4</h3>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <FontAwesomeIcon icon={['fas', 'exclamation-circle']} className="text-yellow-800" />
              </div>
            </div>
          </div>
        </div>

        <h4 className="font-medium mb-3 text-gray-700">Completion Rate by LGU Type</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h5 className="font-medium mb-2">Municipalities</h5>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">7 out of 10 completed</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h5 className="font-medium mb-2">Cities</h5>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">3 out of 3 completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}