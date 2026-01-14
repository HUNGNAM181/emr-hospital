"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Lock } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    document.cookie = "token=demo-token; path=/";
    window.location.href = "/dashboard";
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-br from-blue-50 to-blue-100
                 px-4 sm:px-6"
    >
      <div className="text-center mb-6 sm:mb-8">
        <div
          className="mx-auto mb-3 sm:mb-4
                     flex h-14 w-14 sm:h-16 sm:w-16
                     items-center justify-center
                     rounded-xl bg-white shadow"
        >
          <Image
            src="/icon.png"
            alt="EMR Logo"
            width={40}
            height={40}
            priority
          />
        </div>

        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          EMR Hospital
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Electronic Medical Records System
        </p>
      </div>

      <div
        className="w-full max-w-sm sm:max-w-md
                   bg-white rounded-2xl shadow-lg
                   p-6 sm:p-8"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-center">
          Welcome back
        </h2>
        <p
          className="text-xs sm:text-sm text-gray-500
                     text-center mt-1 mb-5 sm:mb-6"
        >
          Sign in to your account to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2
                               text-gray-400 h-4 w-4"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full pl-10 pr-3 py-2.5 rounded-lg
                           border border-gray-300 bg-blue-50
                           focus:bg-white focus:outline-none
                           focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2
                               text-gray-400 h-4 w-4"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-3 py-2.5 rounded-lg
                           border border-gray-300 bg-blue-50
                           focus:bg-white focus:outline-none
                           focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600
                       text-white font-medium
                       py-2.5 rounded-lg transition"
          >
            Sign in
          </button>
        </form>

        <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-5 sm:mt-6">
          By signing in, you agree to our terms of service and privacy policy.
        </p>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-5 sm:mt-6 text-center">
        Need help? Contact your system administrator
      </p>
    </div>
  );
}
