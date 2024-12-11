import React, { useState } from "react";
import PhotoUploader from "./PhotoUploader";

function PromptForm({ onGenerate }) {
  const [prompt, setPrompt] = useState("");
  const [orientation, setOrientation] = useState("256x256");
  const [numImages, setNumImages] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ prompt, orientation, numImages, uploadedFiles });
  };

  const handleUpload = (files) => {
    setUploadedFiles(files);
  };

  return (
    <div className="bg-gray-100 p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="flex justify-between">
            <button className="py-2 px-4 rounded-t-lg bg-teal-500 text-white font-semibold">
              Text
            </button>
          </div>
        </div>
        <label className="block mb-2 text-gray-600 font-medium">Image Prompt</label>
        <textarea
          className="w-full border-gray-300 rounded-md p-2 mb-4 focus:ring-teal-500 focus:border-teal-500"
          rows="4"
          placeholder="Provide a brief description of the image you want to create."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <label className="block mb-2 text-gray-600 font-medium">Number of Images</label>
        <input
          type="number"
          className="w-full border-gray-300 rounded-md p-2 mb-4 focus:ring-teal-500 focus:border-teal-500"
          min="1"
          max="5"
          value={numImages}
          onChange={(e) => setNumImages(parseInt(e.target.value))}
        />
        
        <PhotoUploader onUpload={handleUpload} />
        
        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
        >
          Generate
        </button>
      </form>
    </div>
  );
}

export default PromptForm;