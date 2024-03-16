import React, { useState } from "react";

const UploadPDF = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5001/upload-pdf", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1>Upload PDF</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {summary && (
        <div>
          <h2>Summary:</h2>
          <div>
            <h3>{summary.title}</h3>
            {summary.chapters &&
              summary.chapters.map((chapter) => (
                <div key={chapter.number}>
                  <h4>{chapter.title}</h4>
                  <ul>
                    {chapter.subtopics &&
                      chapter.subtopics.map((subtopic) => (
                        <li key={subtopic.title}>
                          <strong>{subtopic.title}:</strong>{" "}
                          {subtopic.description}
                        </li>
                      ))}
                  </ul>
                  {chapter.importantDates &&
                    chapter.importantDates.length > 0 && (
                      <div>
                        <strong>Important Dates:</strong>
                        <ul>
                          {chapter.importantDates.map((date) => (
                            <li key={date.date}>
                              <strong>{date.date}:</strong> {date.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPDF;
