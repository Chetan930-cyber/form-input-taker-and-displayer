import { useState, useEffect } from "react";
import BeautifulForm from "./components/form";
import Display from "./components/Display";

const App = () => {
  const [submittedData, setSubmittedData] = useState(() => {
    // ✅ Retrieve data from sessionStorage on initial render
    const savedData = sessionStorage.getItem("submittedData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    // ✅ Save data to sessionStorage whenever submittedData changes
    sessionStorage.setItem("submittedData", JSON.stringify(submittedData));
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
