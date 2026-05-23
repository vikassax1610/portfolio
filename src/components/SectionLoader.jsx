const SectionLoader = ({ fullScreen = false }) => (
  <>
    <style>{`
      @keyframes orbit1 {
        from { transform: rotate(0deg)   translateX(48px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(48px) rotate(-360deg); }
      }
      @keyframes orbit2 {
        from { transform: rotate(120deg)  translateX(34px) rotate(-120deg); }
        to   { transform: rotate(480deg)  translateX(34px) rotate(-480deg); }
      }
      @keyframes orbit3 {
        from { transform: rotate(240deg)  translateX(22px) rotate(-240deg); }
        to   { transform: rotate(600deg)  translateX(22px) rotate(-600deg); }
      }
      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }
      @keyframes glitch {
        0%,100% { clip-path: inset(0 0 100% 0); transform: translateX(0);  }
        20%      { clip-path: inset(20% 0 60% 0); transform: translateX(-4px); }
        40%      { clip-path: inset(50% 0 30% 0); transform: translateX( 4px); }
        60%      { clip-path: inset(80% 0 5%  0); transform: translateX(-2px); }
        80%      { clip-path: inset(5%  0 80% 0); transform: translateX( 2px); }
      }
      @keyframes scanline {
        0%   { top: -10%; }
        100% { top: 110%; }
      }
      @keyframes fadeUp {
        from { opacity:0; transform: translateY(12px); }
        to   { opacity:1; transform: translateY(0); }
      }
      @keyframes progressBar {
        0%   { width: 0%; }
        60%  { width: 70%; }
        80%  { width: 85%; }
        100% { width: 100%; }
      }
      @keyframes dot-bounce {
        0%,80%,100% { transform: scale(0.6); opacity:0.3; }
        40%          { transform: scale(1.2); opacity:1;   }
      }
      @keyframes ringPulse {
        0%,100% { box-shadow: 0 0 0 0px rgba(var(--accent-rgb),0.4); }
        50%      { box-shadow: 0 0 0 16px rgba(var(--accent-rgb),0);  }
      }
      .orbit-dot-1 { animation: orbit1 2.4s linear infinite; }
      .orbit-dot-2 { animation: orbit2 1.8s linear infinite; }
      .orbit-dot-3 { animation: orbit3 1.2s linear infinite; }
      .shimmer-text {
        background: linear-gradient(
          90deg,
          rgba(255,255,255,0.15) 0%,
          rgba(255,255,255,0.65) 40%,
          var(--accent) 50%,
          rgba(255,255,255,0.65) 60%,
          rgba(255,255,255,0.15) 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer 2.2s linear infinite;
      }
      .glitch-layer {
        animation: glitch 3s steps(1) infinite;
        color: var(--accent);
        opacity: 0.55;
      }
      .scan-line {
        position: absolute;
        left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--accent), transparent);
        opacity: 0.18;
        animation: scanline 2.8s linear infinite;
      }
      .progress-fill {
        animation: progressBar 2.6s ease-out forwards;
        background: linear-gradient(90deg, var(--accent), #fff8, var(--accent));
        background-size: 200% auto;
        animation: progressBar 2.6s ease-out forwards, shimmer 1.4s linear infinite;
      }
      .dot1 { animation: dot-bounce 1.2s ease-in-out 0s   infinite; }
      .dot2 { animation: dot-bounce 1.2s ease-in-out 0.2s infinite; }
      .dot3 { animation: dot-bounce 1.2s ease-in-out 0.4s infinite; }
      .ring-pulse { animation: ringPulse 1.8s ease-out infinite; }
      .fade-up-1 { animation: fadeUp 0.6s ease-out 0.2s both; }
      .fade-up-2 { animation: fadeUp 0.6s ease-out 0.5s both; }
      .fade-up-3 { animation: fadeUp 0.6s ease-out 0.8s both; }
    `}</style>

    <div
      className={`
        flex flex-col items-center justify-center bg-[#050505] overflow-hidden relative
        ${fullScreen ? "fixed inset-0 z-[999]" : "min-h-screen w-full"}
      `}
    >
      {/* Scan line */}
      <div className="scan-line" />

      {/* Ambient background glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(var(--accent-rgb),0.07) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* ── Orbital loader ── */}
      <div className="relative w-32 h-32 flex items-center justify-center fade-up-1">

        {/* Outer dashed ring */}
        <div
          className="absolute w-32 h-32 rounded-full ring-pulse"
          style={{
            border: "1px dashed rgba(var(--accent-rgb),0.25)",
          }}
        />

        {/* Solid ring */}
        <div
          className="absolute w-28 h-28 rounded-full"
          style={{
            border: "1.5px solid rgba(255,255,255,0.04)",
            borderTopColor: "var(--accent)",
            animation: "spin 1.6s cubic-bezier(0.45,0.05,0.55,0.95) infinite",
          }}
        />

        {/* Counter ring */}
        <div
          className="absolute w-20 h-20 rounded-full"
          style={{
            border: "1.5px solid rgba(255,255,255,0.03)",
            borderBottomColor: "var(--accent)",
            animation: "spin 2.4s linear reverse infinite",
          }}
        />

        {/* Orbiting dot 1 */}
        <div className="absolute w-2.5 h-2.5 orbit-dot-1">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent), 0 0 20px var(--accent)",
            }}
          />
        </div>

        {/* Orbiting dot 2 */}
        <div className="absolute w-1.5 h-1.5 orbit-dot-2" style={{ opacity: 0.7 }}>
          <div
            className="w-1.5 h-1.5 rounded-full bg-white"
            style={{ boxShadow: "0 0 6px #fff" }}
          />
        </div>

        {/* Orbiting dot 3 */}
        <div className="absolute w-1 h-1 orbit-dot-3" style={{ opacity: 0.5 }}>
          <div
            className="w-1 h-1 rounded-full"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 4px var(--accent)",
            }}
          />
        </div>

        {/* Center glow */}
        <div
          className="absolute w-12 h-12 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(var(--accent-rgb),0.3) 0%, transparent 70%)",
            filter: "blur(6px)",
          }}
        />

        {/* Center logo mark */}
        <div
          className="relative w-8 h-8 flex items-center justify-center font-black italic text-sm text-black -skew-x-6"
          style={{
            background: "linear-gradient(135deg, #fff 0%, rgba(var(--accent-rgb),0.9) 100%)",
            clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
          }}
        >
          VS
        </div>
      </div>

      {/* ── Text block ── */}
      <div className="mt-10 flex flex-col items-center gap-3">
        {/* Glitch + shimmer title */}
        <div className="relative fade-up-2">
          {/* Ghost glitch layer */}
          <span
            className="glitch-layer absolute inset-0 text-sm font-black tracking-[0.5em] uppercase select-none"
            aria-hidden="true"
          >
            Loading
          </span>
          <span className="shimmer-text text-sm font-black tracking-[0.5em] uppercase">
            Loading
          </span>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-1.5 fade-up-2">
          {["dot1","dot2","dot3"].map(cls => (
            <span
              key={cls}
              className={`block w-1 h-1 rounded-full ${cls}`}
              style={{ background: "var(--accent)" }}
            />
          ))}
        </div>

        {/* Sub-label */}
        <p className="text-[10px] text-white/25 uppercase tracking-[0.3em] fade-up-3">
          Crafting your experience
        </p>
      </div>

      {/* ── Progress bar ── */}
      <div className="mt-10 w-48 fade-up-3">
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full progress-fill rounded-full" />
        </div>
      </div>
    </div>
  </>
);

export default SectionLoader;
