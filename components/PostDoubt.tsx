"use client"
import React, { useState } from 'react';

function PostDoubt() {
  const [doubt, setDoubt] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle doubt submission logic here
    console.log('Doubt submitted:', doubt);
    setDoubt('');
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded">
        <label className="block mb-2 text-xl">Post a Doubt</label>
        <textarea
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
          className="w-full p-2 bg-gray-700 text-white rounded mb-4"
          rows={4}
          placeholder="Describe your doubt here..."
        />
        <button
          type="submit"
          className="w-20 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostDoubt;
