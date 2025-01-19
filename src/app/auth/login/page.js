"use client";

import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { Divide } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.token) {
      alert("Login successful");
      localStorage.setItem("token", data.token);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
