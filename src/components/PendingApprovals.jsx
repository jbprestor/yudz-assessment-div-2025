import { useState, useEffect } from 'react';
import { supabase } from './supabase/Supabase';

export default function PendingApprovals() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const { data, error } = await supabase
        .from('records')
        .select('*')
        .eq('status', 'pending');

      if (error) console.error('Error fetching records:', error);
      else setRecords(data || []);
    };

    fetchRecords();
  }, []);

  const handleApprove = async (id) => {
    const { error } = await supabase
      .from('records')
      .update({ status: 'approved' })
      .eq('id', id);
    
    if (!error) setRecords(records.filter(record => record.id !== id));
  };

  const handleReject = async (id) => {
    const { error } = await supabase
      .from('records')
      .update({ status: 'rejected' })
      .eq('id', id);
    
    if (!error) setRecords(records.filter(record => record.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pending Approvals</h2>
      {records.length === 0 ? (
        <p>No pending approvals</p>
      ) : (
        <ul className="space-y-3">
          {records.map(record => (
            <li key={record.id} className="flex justify-between items-center p-3 border rounded-lg">
              <div>
                <h3 className="font-medium">{record.title}</h3>
                <p className="text-sm text-gray-500">Submitted by: {record.employer_name}</p>
              </div>
              <div className="space-x-2">
                <button 
                  onClick={() => handleApprove(record.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button 
                  onClick={() => handleReject(record.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}