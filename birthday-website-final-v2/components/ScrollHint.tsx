"use client";

export default function ScrollHint() {
  return (
    <button
      type="button"
      aria-label="Scroll down"
      className="scroll-hint"
      onClick={(e) => {
        const next = e.currentTarget.closest("section")?.nextElementSibling;
        next?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span className="scroll-hint-text">Scroll down</span>
      <span className="scroll-hint-arrow">↓</span>
    </button>
  );
}
