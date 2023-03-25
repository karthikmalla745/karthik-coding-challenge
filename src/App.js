import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://test-api-v3.myways.ai/user?email=${email}`
    );
    const userData = await response.json();

    if (userData.exists) {
      alert("user found!");
    } else {
      const createUserResponse = await fetch(
        "https://test-api-v3.myways.ai/user",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, phone })
        }
      );

      if (createUserResponse.ok) {
        alert("User created seccussfully");
      } else {
        alert("error creating user");
      }
    }
  };
  return (
    <div className="App">
      <h1>form validation</h1>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", border: "2px solid black", padding: "20px" }}
      >
        <div>
          <input
            id="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <input
            id="phone"
            type="tel"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <br />

        <button type="submit"> submit</button>
      </form>
    </div>
  );
}
