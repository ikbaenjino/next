"use client";

import { useState } from "react";

export default function LanguageToggle({ onChange }) {
  const [lang, setLang] = useState("id");

  const toggleLanguage = () => {
    const newLang = lang === "id" ? "en" : "id";
    setLang(newLang);
    onChange?.(newLang); // Optional callback to update parent state
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 bg-gray-900 text-white text-sm rounded shadow"
      >
        {lang === "id" ? "🇮🇩 ID" : "🇬🇧 EN"}
      </button>
    </div>
  );
}
