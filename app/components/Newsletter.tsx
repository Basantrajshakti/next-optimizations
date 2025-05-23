"use client";

import { useState } from "react";
import Button from "./UI/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate a submission or integrate with backend here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // auto-hide
    setEmail("");
  };

  return (
    <div className="mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Subscribe to our newsletter for the latest articles and updates</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4 flex-col sm:flex-row">
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
        />
        <Button text="Subscribe" type="submit" />
      </form>

      <p className={`mt-4 text-green-600 font-medium animate-pulse ${submitted ? "visible" : "invisible"}`}>✅ Subscribed! Thank you.</p>
    </div>
  );
}
