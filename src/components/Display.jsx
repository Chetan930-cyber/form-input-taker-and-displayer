const Display = ({ formDataList }) => {
    return (
      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">User Details:</h2>
        {formDataList.map((formData, index) => (
          <div key={index} className="mb-4">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Wish:</strong> {formData.wish}</p>
            <p><strong>Password:</strong> {formData.password}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Display;
  