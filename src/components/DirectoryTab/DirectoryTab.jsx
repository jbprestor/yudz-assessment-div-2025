import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AssessorsDirectory() {
  const handleSort = (columnIndex) => {
    console.log(`Sorting by column ${columnIndex}`);
    // Implement sorting logic here
  };

  return (
    <div id="directory" className="tab-content">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-secondary">Caraga Assessors Directory</h2>
        <button className="bg-primary hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg flex items-center">
          <FontAwesomeIcon icon={['fas', 'file-import']} className="mr-2" />
          Import CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={['fas', 'search']} className="text-gray-400" />
            </div>
            <input
              type="text"
              id="directory-search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-secondary focus:border-transparent search-box"
              placeholder="Search assessors..."
            />
          </div>
          <div className="flex space-x-2">
            <select
              id="directory-region-filter"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="">All Regions</option>
              <option value="Caraga">Caraga</option>
            </select>
            <select
              id="directory-lgu-filter"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="">All LGUs</option>
              <option value="Rosario">Rosario</option>
              <option value="Butuan">Butuan</option>
              <option value="Surigao">Surigao</option>
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
                  LGU <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(2)}
                >
                  LGU Type <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(3)}
                >
                  First Name <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(4)}
                >
                  MI <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(5)}
                >
                  Last Name <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(6)}
                >
                  Suffix <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(7)}
                >
                  Designation <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(8)}
                >
                  Position <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(9)}
                >
                  Sex <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort(10)}
                >
                  Email <FontAwesomeIcon icon={['fas', 'sort']} className="ml-1" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Caraga</td>
                <td className="px-6 py-4">Rosario</td>
                <td className="px-6 py-4">Municipality</td>
                <td className="px-6 py-4">Maria</td>
                <td className="px-6 py-4">C.</td>
                <td className="px-6 py-4">Santos</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">Municipal Assessor</td>
                <td className="px-6 py-4">Department Head</td>
                <td className="px-6 py-4">Female</td>
                <td className="px-6 py-4">msantos@rosario.gov.ph</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Caraga</td>
                <td className="px-6 py-4">Butuan</td>
                <td className="px-6 py-4">City</td>
                <td className="px-6 py-4">Juan</td>
                <td className="px-6 py-4">B.</td>
                <td className="px-6 py-4">Dela Cruz</td>
                <td className="px-6 py-4">Jr.</td>
                <td className="px-6 py-4">City Assessor</td>
                <td className="px-6 py-4">Department Head</td>
                <td className="px-6 py-4">Male</td>
                <td className="px-6 py-4">jdelacruz@butuan.gov.ph</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">Caraga</td>
                <td className="px-6 py-4">Surigao</td>
                <td className="px-6 py-4">City</td>
                <td className="px-6 py-4">Ana</td>
                <td className="px-6 py-4">M.</td>
                <td className="px-6 py-4">Reyes</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">City Assessor</td>
                <td className="px-6 py-4">Department Head</td>
                <td className="px-6 py-4">Female</td>
                <td className="px-6 py-4">areyes@surigao.gov.ph</td>
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
        <h3 className="text-xl font-bold mb-4 text-secondary">Add New Assessor</h3>
        <form className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="first-name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="middle-initial"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Middle Initial
            </label>
            <input
              type="text"
              id="middle-initial"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="suffix"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Suffix
            </label>
            <input
              type="text"
              id="suffix"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="designation"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="position"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="sex"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Sex
            </label>
            <select
              id="sex"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-secondary hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-lg"
            >
              Add Assessor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}