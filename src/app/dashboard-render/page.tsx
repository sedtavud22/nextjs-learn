"use client";

import { useState } from "react";

export default function Dashboard() {
  console.log(
    "Dashboard client component (should see this in browser console as well)"
  );

  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
