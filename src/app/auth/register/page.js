"use client";

import { useState } from "react";
import { RegisterForm } from "./components/RegisterForm";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi password dan konfirmasi password
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.message === "User registered successfully!") {
      alert("Registration successful!");
    } else {
      alert(data.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <RegisterForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
