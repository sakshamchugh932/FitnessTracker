import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing icons

const Contact = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full height view
        backgroundColor: "#f9f9f9", // Light background for contrast
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "#ffffff", // White card
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* Feedback Section */}
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Feedback</h2>
        <textarea
          placeholder="Write your feedback here..."
          style={{
            width: "90%",
            height: "100px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "20px",
            resize: "none", 
          }}
        />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>

        <h3 style={{ marginTop: "30px", color: "#333" }}>Follow Us</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "15px",
          }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4267B2", fontSize: "24px" }}
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1DA1F2", fontSize: "24px" }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#C13584", fontSize: "24px" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0A66C2", fontSize: "24px" }}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
