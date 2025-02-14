import { useState } from "react";

const BeautifulForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    wish: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    // Clear the form fields after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      wish: "",
    });
  };

  // Handle key press events
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {  // Check if the Enter key is pressed
      handleSubmit(e);        // Submit the form when Enter is pressed
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 border"
          />
          <input
            type="text"
            name="wish"
            value={formData.wish}
            onChange={handleChange}
            placeholder="Enter your wish"
            className="w-full p-3 border"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-3 border"
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-3 mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default BeautifulForm;
