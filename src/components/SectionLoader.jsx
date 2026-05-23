const SectionLoader = () => (
  <div className="flex flex-col items-center justify-center py-24 bg-[#050505]">
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Outer rotating ring */}
      <div
        className="
        absolute
        w-24
        h-24
        rounded-full
        border-[2px]
        border-white/10
        border-t-[var(--accent)]
        animate-spin
        "
      />

      {/* Inner rotating ring */}
      <div
        className="
        absolute
        w-16
        h-16
        rounded-full
        border-[2px]
        border-white/5
        border-b-[var(--accent)]
        animate-[spin_3s_linear_reverse_infinite]
        "
      />

      {/* Glow */}
      <div
        className="
        absolute
        w-10
        h-10
        rounded-full
        bg-[var(--accent)]/20
        blur-xl
        "
      />

      {/* Center dot */}
      <div
        className="
        w-3
        h-3
        rounded-full
        bg-[var(--accent)]
        animate-pulse
        shadow-[0_0_20px_var(--accent)]
        "
      />
    </div>

    {/* Text */}
    <p
      className="
      mt-6
      text-white/40
      text-xs
      uppercase
      tracking-[0.35em]
      font-bold
      "
    >
      Loading Experience
    </p>
  </div>
);

export default SectionLoader;
