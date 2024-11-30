"use client";

import { useState, useEffect } from "react";
import { FadeInSection } from "./fadeinsection";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";  

export const Contacts = () => {
  const [form, setForm] = useState({ name: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (status === "loading") {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 10; 
          }
          clearInterval(interval!);
          return 100;
        });
      }, 300); 
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, message } = form;
    if (!name || !message) {
      setError("Name and message are required");
      return;
    }

    setStatus("loading");
    setError("");
    setProgress(0);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE || "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        setForm({ name: "", message: "" });
        setStatus("success");
        setTimeout(() => setStatus("idle"), 2000);
      } else {
        const data = await res.json();
        setError(data.message || "Submission failed");
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to submit:", error);
      setError("Failed to submit your message. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="px-7 py-10">
        <FadeInSection>
          <h4 className="text-2xl mb-5">Contact Me</h4>
        </FadeInSection>

        {status === "success" && (
          <FadeInSection>
            <p className="mb-4 text-green-500">Thank you for your message!</p>
          </FadeInSection>
        )}
        {status === "error" && (
          <FadeInSection>
            <p className="text-red-500">{error}</p>
          </FadeInSection>
        )}

        {status === "loading" && (
          <FadeInSection>
            <div className="mb-4">
              <Progress value={progress} />
              <p className="text-sm text-center">{progress}%</p>
            </div>
          </FadeInSection>
        )}

        <form onSubmit={handleSubmit}>
          <FadeInSection>
            <div>
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                value={form.name}
                className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded-lg mb-4 outline-none"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div>
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                value={form.message}
                className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded-lg mb-4 outline-none"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
          </FadeInSection>

          <FadeInSection>
            <Button
              className="w-full"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Mengirim..." : "Kirim"}
            </Button>
          </FadeInSection>
        </form>
      </div>
    </div>
  );
};