import { useState, useEffect } from "react";
import BeautifulForm from "./components/form";
import Display from "./components/display";

const App = () => {
  const [submittedData, setSubmittedData] = useState(() => {
    // ✅ Retrieve data from localStorage on initial render
    const savedData = localStorage.getItem("submittedData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    // ✅ Save data to localStorage whenever submittedData changes
    localStorage.setItem("submittedData", JSON.stringify(submittedData));
  }, [submittedData]);

  const handleFormSubmit = (data) => {
    setSubmittedData([...submittedData, data]);
  };

  return (
    <div>
      {/* ✅ Passing the handleFormSubmit function as a prop to BeautifulForm */}
      <BeautifulForm onFormSubmit={handleFormSubmit} />

      {/* ✅ Rendering Display component to show all submitted data */}
      <Display formDataList={submittedData} />
    </div>
  );
};

export default App;
