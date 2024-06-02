import PaymentForm from '@/components/PaymentForm';
import React from 'react';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center">
      <PaymentForm />
    </div>
  );
}

export default App;
