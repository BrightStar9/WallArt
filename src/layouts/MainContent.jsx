import React from "react";
import PromptForm from "../components/PromptForm"
import GeneratedImages from "../components/GeneratedImages";

function MainContent() {
  const handleGenerate = (promptData) => {
    console.log("Generating with:", promptData);
    // Here you would typically call an API or perform some action
  };

  return (
    <main className="flex-1">
      <div className="grid grid-cols-10 bg-gray-100 h-full">
        {/* Left side - 4 parts */}
        <div className="col-span-4 bg-gray-100 h-full">
          <PromptForm onGenerate={handleGenerate} />
        </div>

        {/* Right side - 6 parts */}
        <div className="col-span-6">
          <GeneratedImages />
        </div>
      </div>
    </main>
  );
}

export default MainContent;