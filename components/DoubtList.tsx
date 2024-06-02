"use client"
import React, { useState } from 'react';

const initialDoubts = [
  {
    id: 1,
    content: 'How to center a div in CSS?',
    replies: [{ id: 1, content: 'You can use flexbox or grid for centering.' }],
  },
  {
    id: 2,
    content: 'What is useState in React?',
    replies: [{ id: 2, content: 'useState is a hook that allows you to have state variables in functional components.' }],
  },
];

function DoubtsList() {
  const [doubts, setDoubts] = useState(initialDoubts);
  const [replyContent, setReplyContent] = useState('');

  const handleReplySubmit = (doubtId: number, e: any) => {
    e.preventDefault();
    const updatedDoubts = doubts.map((doubt) =>
      doubt.id === doubtId
        ? {
            ...doubt,
            replies: [...doubt.replies, { id: Date.now(), content: replyContent }],
          }
        : doubt
    );
    setDoubts(updatedDoubts);
    setReplyContent('');
  };

  return (
    <div>
      {doubts.map((doubt) => (
        <div key={doubt.id} className="bg-gray-800 p-4 rounded mb-4">
          <p className="mb-2 text-lg">{doubt.content}</p>
          <div className="ml-4">
            {doubt.replies.map((reply) => (
              <div key={reply.id} className="bg-gray-700 p-2 rounded mb-2">
                {reply.content}
              </div>
            ))}
          </div>
          <form onSubmit={(e) => handleReplySubmit(doubt.id, e)} className="mt-4">
            <textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded mb-2"
              rows={2}
              placeholder="Write your reply..."
            />
            <button
              type="submit"
              className="w-20 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
            >
              Reply
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default DoubtsList;
