"use client";

import ContactUs from "@/page-component/contactUs/ContactUs";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-emaill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formData.email,
          subject: "Appointment Request",
          message: `
            First Name: ${formData.firstName}
            Email: ${formData.email}
            Message: ${formData.message}
          `,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          email: "",
          message: "",
        });
      } else {
        alert("Error submitting form: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return <ContactUs handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />;
};

export default ContactPage;
