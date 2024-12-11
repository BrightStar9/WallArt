import React, { useState } from "react";

const PromptEditor = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <textarea
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className="w-full p-4 border rounded-md"
      rows="10"
    ></textarea>
  );
};

export default PromptEditor;
