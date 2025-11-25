import React, { useState } from 'react';

function DoctorDashboard() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'John Doe',
      age: 45,
      condition: 'Hypertension',
      lastVisit: '2024-01-15',
      testResults: [
        { test: 'Blood Pressure', result: '140/90 mmHg', date: '2024-01-15' },
        { test: 'Blood Sugar', result: '110 mg/dL', date: '2024-01-15' }
      ],
      diagnosis: '',
      prescription: ''
    }
  ]);

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [diagnosis, setDiagnosis] = useState('');
  const [prescription, setPrescription] = useState('');

  const handleSaveDiagnosis = (patientId) => {
    setPatients(patients.map(patient => 
      patient.id === patientId ? { ...patient, diagnosis } : patient
    ));
    setDiagnosis('');
  };

  const handleSendPrescription = (patientId) => {
    setPatients(patients.map(patient => 
      patient.id === patientId ? { ...patient, prescription } : patient
    ));
    setPrescription('');
    alert('Prescription sent to patient and pharmacy');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Doctor's Dashboard</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Patient List</h3>
          {patients.map(patient => (
            <div key={patient.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{patient.name}</h4>
                  <p className="text-sm text-gray-600">Age: {patient.age} | Condition: {patient.condition}</p>
                  <p className="text-sm text-gray-500">Last Visit: {patient.lastVisit}</p>
                </div>
                <button
                  onClick={() => setSelectedPatient(patient)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPatient && (
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-4">Patient Details - {selectedPatient.name}</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Test Results</h4>
              {selectedPatient.testResults.map((test, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded mb-2">
                  <p className="font-medium">{test.test}</p>
                  <p>Result: {test.result}</p>
                  <p className="text-sm text-gray-500">Date: {test.date}</p>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Chief Complaint</h4>
              <textarea
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                placeholder="Enter Complaint..."
                rows="3"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSaveDiagnosis(selectedPatient.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2"
              >
                Save Complaint
              </button>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Diagnosis</h4>
              <textarea
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                placeholder="Enter diagnosis..."
                rows="3"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSaveDiagnosis(selectedPatient.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2"
              >
                Save Diagnosis
              </button>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Prescription</h4>
              <textarea
                value={prescription}
                onChange={(e) => setPrescription(e.target.value)}
                placeholder="Enter prescription..."
                rows="3"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendPrescription(selectedPatient.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2"
              >
                Send to Patient & Pharmacy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorDashboard;