import { useState } from 'react';
import RecordForm from '../RecordForm';

export default function EmployerDashboard({ user }) {
  const [activeTab, setActiveTab] = useState('new');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Employer Dashboard</h1>
      
      <div className="flex border-b mb-4">
        <button
          className={`py-2 px-4 ${activeTab === 'new' ? 'border-b-2 border-indigo-500' : ''}`}
          onClick={() => setActiveTab('new')}
        >
          New Record
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'records' ? 'border-b-2 border-indigo-500' : ''}`}
          onClick={() => setActiveTab('records')}
        >
          My Records
        </button>
      </div>

      {activeTab === 'new' && <RecordForm userId={user.id} />}
      {activeTab === 'records' && <div>My Records Component</div>}
    </div>
  );
}