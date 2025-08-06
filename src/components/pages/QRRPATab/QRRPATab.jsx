import { useState } from 'react';

export default function QRRPATracking() {
  const handleSort = (idx) => console.log(`Sort by column ${idx}`);

  const submissions = [
    { lgu: 'Rosario', quarter: 'Q1 2024', date: '03/15/2024', reviewer: 'Juan Dela Cruz', status: 'Approved', remarks: 'Complete submission' },
    { lgu: 'Butuan', quarter: 'Q1 2024', date: '03/20/2024', reviewer: 'Maria Santos', status: 'For Clarification', remarks: 'Missing Annex A' },
    { lgu: 'Surigao', quarter: 'Q1 2024', date: '03/25/2024', reviewer: '-', status: 'Pending', remarks: 'Under review' },
  ];

  return (
    // Use "block" (or add an "active" class) so the tab actually shows
    <div id="qrrpa" className="block">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-secondary">QRRPA Submission Tracking</h2>
        <div className="flex space-x-3">
          <button className="bg-primary hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg flex items-center">
            <i className="fas fa-file-export mr-2" />
            Export
          </button>
          <button className="bg-secondary hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg flex items-center">
            <i className="fas fa-plus mr-2" />
            Add Submission
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
              placeholder="Search QRRPA records..."
            />
          </div>
          <div className="flex space-x-2">
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary">
              <option value="">All LGUs</option>
              <option>Rosario</option><option>Butuan</option><option>Surigao</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary">
              <option value="">All Status</option>
              <option>Pending</option><option>For Clarification</option><option>Approved</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-secondary">
              <option value="">All Quarters</option>
              <option>Q1</option><option>Q2</option><option>Q3</option><option>Q4</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-white uppercase bg-secondary">
              <tr>
                {['LGU Name', 'Quarter', 'Submission Date', 'Reviewer', 'Status', 'Remarks', 'Actions'].map((col, idx) => (
                  <th key={idx} className="px-6 py-3 cursor-pointer" onClick={() => handleSort(idx)}>
                    {col} <i className="fas fa-sort ml-1" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {submissions.map((s, i) => (
                <tr key={i} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{s.lgu}</td>
                  <td className="px-6 py-4">{s.quarter}</td>
                  <td className="px-6 py-4">{s.date}</td>
                  <td className="px-6 py-4">{s.reviewer}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${s.status === 'Approved' ? 'bg-green-100 text-green-800' : s.status === 'For Clarification' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{s.remarks}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-secondary mr-3"><i className="fas fa-edit" /></button>
                    <button className="text-red-500 hover:text-red-700"><i className="fas fa-trash-alt" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-700">
            Showing <b>1</b> to <b>{submissions.length}</b> of <b>{submissions.length}</b> entries
          </span>
          <div className="flex space-x-2">
            <button disabled className="px-3 py-1 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 border rounded-lg bg-primary text-gray-900 font-medium">1</button>
            <button disabled className="px-3 py-1 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-secondary">Submission Statistics</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3 text-gray-700">Status Distribution</h4>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              {[{ color: 'bg-green-500', label: 'Approved', pct: '33%' },
                { color: 'bg-yellow-500', label: 'For Clarification', pct: '33%' },
                { color: 'bg-gray-400', label: 'Pending', pct: '33%' }].map(({ color, label, pct }) => (
                <div key={label} className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
                    <span className="text-sm">{label}</span>
                  </div>
                  <span className="text-sm font-medium">{pct}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3 text-gray-700">Quarterly Submissions</h4>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              {[{ q: 'Q1 2024', count: 3 }, { q: 'Q4 2023', count: 5 }, { q: 'Q3 2023', count: 4 }].map(({ q, count }) => (
                <div key={q} className="flex justify-between mb-2">
                  <span className="text-sm">{q}</span>
                  <span className="text-sm font-medium">{count} submissions</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}