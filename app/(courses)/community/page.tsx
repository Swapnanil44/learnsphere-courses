import DoubtsList from '@/components/DoubtList';
import PostDoubt from '@/components/PostDoubt';
import React from 'react';


function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Student Community Portal</h1>
      <DoubtsList />
      <PostDoubt />
    </div>
  );
}

export default App;
