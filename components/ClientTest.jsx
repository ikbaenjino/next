"use client";
import { useState } from "react";

export default function ClientTest() {
  const [show, setShow] = useState(false);

  return (
    <div className="px-4 py-10">
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={() => setShow(!show)}
      >
        Toggle Test
      </button>
      {show && <p className="mt-4 text-green-600">✅ State is working!</p>}
    </div>
  );
}