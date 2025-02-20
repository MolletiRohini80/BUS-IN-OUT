import React, { useState, useEffect } from 'react';
import '../css/DriversForm.css';

const DriversForm = () => {
  const [formData, setFormData] = useState({
    busNo: '',
    idNo: '',
    date: '',
    studentCount: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const submittedDate = localStorage.getItem('submissionDate');

    if (submittedDate === today) {
      setIsSubmitted(true); // Form was submitted today
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.busNo || !formData.idNo || !formData.date || !formData.studentCount) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/api/driver-submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          busNumber: parseInt(formData.busNo),
          IDNo: parseInt(formData.idNo),
          recordDate: formData.date,
          StudentsCount: parseInt(formData.studentCount)
        }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        
        // Set today's date in localStorage after successful submission
        const today = new Date().toISOString().split('T')[0];
        localStorage.setItem('submissionDate', today);
        // localStorage.removeItem('submissionDate');

        
        alert('Form submitted successfully');
      } else {
        alert(result.message || 'Failed to submit the form');
      }
      
    } catch (error) {
      console.log('Error submitting the form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      {isSubmitted ? (
        <div>
          <h2>You have already submitted the form today.</h2>
        </div>
      ) : (
        <form className="centered-form" onSubmit={handleSubmit}>
          <h2>Student Information</h2>

          <label htmlFor="busNo">Bus No:</label>
          <input
            type="text"
            id="busNo"
            name="busNo"
            placeholder="Enter Bus No"
            value={formData.busNo}
            onChange={handleChange}
          />

          <label htmlFor="idNo">ID No:</label>
          <input
            type="text"
            id="idNo"
            name="idNo"
            placeholder="Enter ID No"
            value={formData.idNo}
            onChange={handleChange}
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <label htmlFor="studentCount">Student Count:</label>
          <input
            type="number"
            id="studentCount"
            name="studentCount"
            placeholder="Enter Student Count"
            value={formData.studentCount}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default DriversForm;
