import React, { useState } from "react";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);

    if (event.target.value === "") setWordCount(0);
    else setWordCount(event.target.value.trim().split(/\s+/).length);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card shadow" style={{ width: "30rem" }}>
        <div className="card-body">
          <h2 className="card-title text-center">
            Responsive Paragraph Word Counter
          </h2>
          <textarea
            className="form-control mb-4 mt-4 border-black"
            rows={5}
            value={text}
            onChange={handleChange}
            placeholder="Type your paragraph here..."
          />
          <p className="text-muted">Word Count: {wordCount}</p>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
