import { useState } from 'react';
import PendingApprovals from '../PendingApprovals';

export default function SupervisorDashboard() {
  const [activeTab, setActiveTab] = useState('approvals');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Supervisor Dashboard</h1>
      
      <div className="flex border-b mb-4">
        <button
          className={`py-2 px-4 ${activeTab === 'approvals' ? 'border-b-2 border-indigo-500' : ''}`}
          onClick={() => setActiveTab('approvals')}
        >
          Pending Approvals
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'users' ? 'border-b-2 border-indigo-500' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          User Management
        </button>
      </div>

      {activeTab === 'approvals' && <PendingApprovals />}
      {activeTab === 'users' && <div>User Management Component</div>}
    </div>
  );
}