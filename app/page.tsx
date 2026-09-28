"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Sparkles, Award, CheckCircle2, Laptop } from "lucide-react";

export default function MoosaSmartnessPrank() {
  const [step, setStep] = useState<"question" | "rating" | "celebrate" | "confirmed">("question");
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedAction, setSelectedAction] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screens (< 768px width)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Ultra-fast sliding motion (180px - 240px dodge range)
  const moveNoButton = () => {
    const minDistance = 180;
    const maxDistance = 240;
    const angle = Math.random() * 2 * Math.PI;
    const distance = minDistance + Math.random() * (maxDistance - minDistance);

    setNoPosition({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    });
  };

  const ratingOptions = ["100/10 🌟", "1000/10 🚀", "Legendary 🏆", "Mastermind 🧠⚡"];
  const actionOptions = [
    "Give Me 20 Riyals 💵",
    "Make Me Coffee ☕",
    "Throw A Party 🎉",
    "Write Me A Trophy Certificate 📜",
  ];

  // Mobile Block Screen
  if (isMobile) {
    return (
      <main className="min-h-screen bg-sky-50 flex items-center justify-center p-6 font-sans text-center relative overflow-hidden">
        {/* Decorative background glow circles */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-60" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-sm bg-white/80 backdrop-blur-md border border-sky-200 rounded-3xl p-8 shadow-xl space-y-5 z-10 relative"
        >
          <div className="flex justify-center">
            <div className="p-4 bg-sky-100 rounded-full text-sky-600 animate-pulse">
              <Laptop className="w-12 h-12" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-bold text-sky-950">Laptop Required ✨</h1>
            <p className="text-sm text-sky-700 leading-relaxed">
              Please open this link on a laptop or desktop computer for the full experience!
            </p>
          </div>

          <div className="pt-2">
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-800 text-xs font-semibold rounded-full border border-sky-200">
              Desktop Mode Needed 🚀
            </span>
          </div>
        </motion.div>
      </main>
    );
  }

  // Desktop Main Application
  return (
    <main className="min-h-screen bg-sky-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Decorative background glow circles */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-60" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-md border border-sky-200 rounded-3xl p-8 shadow-xl text-center z-10 relative min-h-[380px] flex flex-col justify-center"
      >
        {/* Step 1: Main Question */}
        {step === "question" && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-sky-100 rounded-full text-sky-600">
                <Trophy className="w-12 h-12 animate-bounce" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-sky-950">
              Do you think me (Moosa) is smarter than you? ✨
            </h1>
            <p className="text-sm text-sky-700">Select your answer carefully...</p>

            <div className="flex items-center justify-center gap-6 relative min-h-[100px] pt-4">
              <button
                onClick={() => setStep("rating")}
                className="px-8 py-3 bg-sky-500 text-white rounded-full font-bold shadow-lg hover:bg-sky-600 hover:scale-105 transition-all text-lg z-20"
              >
                YES! 👑
              </button>

              <motion.button
                animate={{ x: noPosition.x, y: noPosition.y }}
                onMouseEnter={moveNoButton}
                onMouseMove={moveNoButton}
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 15,
                  mass: 0.2,
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold text-lg relative z-30 select-none cursor-pointer"
              >
                No ⚡
              </motion.button>
            </div>
          </div>
        )}

        {/* Step 2: Glad We Agreed / Rating */}
        {step === "rating" && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-sky-100 rounded-full text-sky-600">
                <Sparkles className="w-10 h-10" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-sky-950">
              Glad we agreed! How would you rate my intelligence? 🚀
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {ratingOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedRating(item)}
                  className={`p-3 rounded-xl border text-sm font-semibold transition ${
                    selectedRating === item
                      ? "bg-sky-500 text-white border-sky-500"
                      : "border-sky-200 text-sky-900 hover:bg-sky-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              disabled={!selectedRating}
              onClick={() => setStep("celebrate")}
              className="w-full py-3 bg-sky-500 text-white rounded-xl font-bold disabled:opacity-50 hover:bg-sky-600 transition"
            >
              Next Step ✨
            </button>
          </div>
        )}

        {/* Step 3: Celebration / 20 Riyals Selection */}
        {step === "celebrate" && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-sky-100 rounded-full text-sky-600">
                <Award className="w-10 h-10" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-sky-950">How will you celebrate this truth? 🏆</h2>

            <div className="grid grid-cols-1 gap-3">
              {actionOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedAction(item)}
                  className={`p-3 rounded-xl border text-sm font-semibold transition ${
                    selectedAction === item
                      ? "bg-sky-500 text-white border-sky-500"
                      : "border-sky-200 text-sky-900 hover:bg-sky-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              disabled={!selectedAction}
              onClick={() => setStep("confirmed")}
              className="w-full py-3 bg-sky-500 text-white rounded-xl font-bold disabled:opacity-50 hover:bg-sky-600 transition"
            >
              Lock It In! 🎉
            </button>
          </div>
        )}

        {/* Step 4: Final Confirmation */}
        {step === "confirmed" && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-pulse" />
            </div>

            <h2 className="text-2xl font-bold text-sky-950">Certificate Confirmed! 📸</h2>

            <div className="bg-sky-50 p-4 rounded-xl text-left text-sm text-sky-900 space-y-2 border border-sky-200">
              <p>👑 <strong>Fact:</strong> Moosa is officially smarter!</p>
              <p>🌟 <strong>Rating:</strong> {selectedRating}</p>
              <p>💵 <strong>Pledge:</strong> {selectedAction}</p>
              <p>📌 <strong>Status:</strong> Unbreakable Contract!</p>
            </div>

            <p className="text-xs text-sky-600">Thank you for your honesty! 📸✨</p>
          </div>
        )}
      </motion.div>
    </main>
  );
}