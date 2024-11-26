import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      setErrors({ ...errors, name: "Name must contain only letters" });
      return;
    }

    
    if (name === "contact" && !/^\d*$/.test(value)) {
      setErrors({ ...errors, contact: "Contact must contain only numbers" });
      return;
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors as user types
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

   
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      validationErrors.name = "Name must contain only letters";
    }

    
    if (!formData.contact) {
      validationErrors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      validationErrors.contact = "Contact must be a 10-digit number";
    }

    
    if (!formData.address.trim()) {
      validationErrors.address = "Address is required";
    }

   
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Valid email is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Form submitted successfully!");
    setFormData({ name: "", contact: "", address: "", email: "" });
  };

  return (
    <div className="form-container">
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter 10-digit number"
            maxLength="10"
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          ></textarea>
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
