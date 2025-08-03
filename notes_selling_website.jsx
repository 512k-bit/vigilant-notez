import React from "react";
import { Button } from "@/components/ui/button";

export default function NotesWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Class 10 Notes Store</h1>
        <p className="text-lg">Buy high-quality handwritten & digital notes for all subjects</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div key={note.title} className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
            <p className="mb-4 text-sm text-gray-600">{note.description}</p>
            <Button onClick={() => window.open(note.link, "_blank")}>Download</Button>
          </div>
        ))}
      </section>

      <section className="text-center mt-12">
        <h3 className="text-2xl font-semibold mb-4">Need Custom Notes or Help?</h3>
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => window.location.href = "mailto:studyworkzzz@email.com"}
          >
            Contact via Email
          </Button>
          <Button
            onClick={() => window.open("https://wa.me/919999999999?text=Hi%2C%20I'm%20interested%20in%20your%20notes!", "_blank")}
          >
            Order on WhatsApp
          </Button>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        Created by Study WorkZZZ | Need help? DM @yourinsta
      </footer>
    </div>
  );
}

const notes = [
  {
    title: "Mathematics - Chapter 1 (Real Numbers)",
    description: "Detailed notes with solved examples and formulas.",
    link: "https://drive.google.com/your-math-pdf-link",
  },
  {
    title: "Science - Chemical Reactions & Equations",
    description: "Well-structured notes for quick revision.",
    link: "https://drive.google.com/your-science-pdf-link",
  },
  {
    title: "History - The Rise of Nationalism in Europe",
    description: "Key points, maps, and important dates.",
    link: "https://drive.google.com/your-history-pdf-link",
  },
];
