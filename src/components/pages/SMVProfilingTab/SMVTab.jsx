import { useState } from 'react';

export default function SMVProfiling() {
  const handleSort = (idx) => console.log(`Sorting by column ${idx}`);

  const records = [
    {
      region: 'Caraga', type: 'Municipality', lgu: 'Rosario', income: '4th',
      resNo: '2023-001', approved: '03/15/2023', grYear: 2023, implYear: 2024,
      delayReason: '-', due: 'No', yearsDue: 0, status: 'Completed'
    },
    {
      region: 'Caraga', type: 'City', lgu: 'Butuan', income: '1st',
      resNo: '2022-005', approved: '06/22/2022', grYear: 2022, implYear: 2023,
      delayReason: '-', due: 'No', yearsDue: 0, status: 'Completed'
    },
    {
      region: 'Caraga', type: 'City', lgu: 'Surigao', income: '2nd',
      resNo: '2021-012', approved: '11/10/2021', grYear: 2021, implYear: 2022,
      delayReason: 'Budget constraints', due: 'Yes', yearsDue: 2, status: 'Pending'
    }
  ];

  const summary = { total: 13, completed: 9, pending: 4 };

  return (
    // Make sure the tab is visible
    <div id="smv" className="block">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-secondary">SMV Profiling</h2>
        <div className="flex space-x-3">
          <button className="bg-primary hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg flex items-center">
            <i className="fas fa-file-export mr-2" /> Export
          </button>
          <button className="bg-secondary hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg flex items-center">
            <i className="fas fa-plus mr-2" /> Add Record
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-secondary"
              placeholder="Search SMV records..."
            />
          </div>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary">
              <option value="">All Regions</option>
              <option>Caraga</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary">
              <option value="">All LGUs</option>
              <option>Rosario</option><option>Butuan</option><option>Surigao</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary">
              <option value="">All Status</option>
              <option>Completed</option><option>Pending</option><option>Delayed</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-white uppercase bg-secondary">
              <tr>
                {['Region', 'Type', 'LGU Name', 'Income Class', 'Resolution No.', 'Approved Date', 'GR Year', 'Implementation Year', 'Delayed Reason', 'Due', 'Years Due', 'Status (2024)'].map((col, idx) => (
                  <th key={idx} className="px-6 py-3 cursor-pointer" onClick={() => handleSort(idx)}>
                    {col} <i className="fas fa-sort ml-1" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{r.region}</td>
                  <td className="px-6 py-4">{r.type}</td>
                  <td className="px-6 py-4">{r.lgu}</td>
                  <td className="px-6 py-4">{r.income}</td>
                  <td className="px-6 py-4">{r.resNo}</td>
                  <td className="px-6 py-4">{r.approved}</td>
                  <td className="px-6 py-4">{r.grYear}</td>
                  <td className="px-6 py-4">{r.implYear}</td>
                  <td className="px-6 py-4">{r.delayReason}</td>
                  <td className="px-6 py-4">{r.due}</td>
                  <td className="px-6 py-4">{r.yearsDue}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        r.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-700">
            Showing <b>1</b> to <b>{records.length}</b> of <b>{records.length}</b> entries
          </span>
          <div className="flex space-x-2">
            <button disabled className="px-3 py-1 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 border rounded-lg bg-primary text-gray-900 font-medium">1</button>
            <button disabled className="px-3 py-1 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-secondary">SMV Profiling Summary</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-primary bg-opacity-10 p-4 rounded-lg flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Total LGUs</p>
              <h3 className="text-2xl font-bold text-secondary mt-1">{summary.total}</h3>
            </div>
            <div className="bg-primary p-3 rounded-lg">
              <i className="fas fa-city text-white" />
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <h3 className="text-2xl font-bold text-green-800 mt-1">{summary.completed}</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <i className="fas fa-check-circle text-green-800" />
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending/Delayed</p>
              <h3 className="text-2xl font-bold text-yellow-800 mt-1">{summary.pending}</h3>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <i className="fas fa-exclamation-circle text-yellow-800" />
            </div>
          </div>
        </div>

        <h4 className="font-medium mb-3 text-gray-700">Completion Rate by LGU Type</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h5 className="font-medium mb-2">Municipalities</h5>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '70%' }} />
            </div>
            <p className="text-sm text-gray-500 mt-1">7 out of 10 completed</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h5 className="font-medium mb-2">Cities</h5>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '100%' }} />
            </div>
            <p className="text-sm text-gray-500 mt-1">3 out of 3 completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}