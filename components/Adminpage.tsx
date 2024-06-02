"use client"
import React, { useState } from 'react';

interface Course {
  title: string;
  description: string;
  price: string;
  content: string;
  image: File | null;
  file: File | null;
}

const AdminPage: React.FC = () => {
  const [course, setCourse] = useState<Course>({
    title: '',
    description: '',
    price: '',
    content: '',
    image: null,
    file: null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      if (name === 'image') {
        setImagePreview(URL.createObjectURL(file));
      }
      setCourse((prevCourse) => ({
        ...prevCourse,
        [name]: file,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle course submission logic here
    console.log('New course added:', course);
    setCourse({
      title: '',
      description: '',
      price: '',
      content: '',
      image: null,
      file: null,
    });
    setImagePreview(null);
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded">
      <h2 className="text-2xl font-bold mb-6">Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Course Title</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Enter course title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Course Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            rows={4}
            placeholder="Enter course description"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={course.price}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Enter course price"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Course Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            accept="image/*"
            required
          />
          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Course Preview" className="w-full h-64 object-cover rounded" />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Course File</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AdminPage;
