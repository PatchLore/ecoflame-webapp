"use client";

import { useEffect, useState } from "react";
import { createSupabaseClient } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createSupabaseClient();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [stage, setStage] = useState<"checking" | "ready" | "done">("checking");

  useEffect(() => {
    // 1. Supabase adds #access_token etc — convert hash to query for persistence
    if (window.location.hash && window.location.hash.includes("access_token")) {
      const query = new URLSearchParams(window.location.hash.substring(1));
      const params = query.toString();
      // rewrite URL to keep params and remove hash
      window.history.replaceState({}, "", `/admin/reset-password?${params}`);
      setStage("ready");
    } else {
      setStage("ready");
    }
  }, []);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    if (!supabase) {
      setMessage("Database connection not available");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setMessage("Error updating password: " + error.message);
    } else {
      setMessage("✅ Password updated! Redirecting...");
      setStage("done");
      setTimeout(() => router.push("/admin/sign-in"), 2000);
    }
  }

  if (stage === "checking") {
    return <div className="flex justify-center p-10 text-gray-500">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-semibold text-center mb-6">Reset Password</h1>

        {stage === "ready" && (
          <form onSubmit={handleReset} className="space-y-4">
            <input
              type="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border p-3 rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border p-3 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700"
            >
              Update Password
            </button>
          </form>
        )}

        {message && (
          <p className="text-center text-sm mt-4 text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
}