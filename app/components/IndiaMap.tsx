const hub = { x: 92.6, y: 109.5 };

const cities: {
  name: string;
  x: number;
  y: number;
  label: { x: number; y: number };
  anchor: "start" | "middle" | "end";
}[] = [
  { name: "Punjab", x: 78.3, y: 82.3, label: { x: 40, y: 76 }, anchor: "end" },
  { name: "Rajasthan", x: 55, y: 140, label: { x: 14, y: 134 }, anchor: "end" },
  { name: "Gujarat", x: 34.1, y: 181.2, label: { x: -2, y: 175 }, anchor: "end" },
  { name: "Maharashtra", x: 75.2, y: 217.4, label: { x: 17, y: 211 }, anchor: "end" },
  { name: "Telangana", x: 110, y: 240, label: { x: 148, y: 234 }, anchor: "start" },
  { name: "Karnataka", x: 85.5, y: 265.6, label: { x: 32, y: 259 }, anchor: "end" },
  { name: "Tamil Nadu", x: 111.1, y: 297.3, label: { x: 111.1, y: 313 }, anchor: "middle" },
  { name: "West Bengal", x: 201.4, y: 167.8, label: { x: 211, y: 162 }, anchor: "start" },
  { name: "Assam", x: 255, y: 145, label: { x: 265, y: 139 }, anchor: "start" },
];

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const bend = 0.15;
  const cx = (x1 + x2) / 2 + dy * bend;
  const cy = (y1 + y2) / 2 - dx * bend;
  return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
}

export default function IndiaMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#060a16] via-[#080c1c] to-black p-6 sm:p-10">
      <div className="pointer-events-none absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative flex flex-col items-center gap-10 md:flex-row md:justify-between">
        <svg viewBox="-25 -15 350 400" className="w-full max-w-[460px]">
          <defs>
            <linearGradient id="indiaFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f2f6ff" />
              <stop offset="100%" stopColor="#c3d2f0" />
            </linearGradient>
          </defs>

          <path
            d="M299.261,113.462L300,117.873L296.415,119.994L297.265,127.117L289.911,125.027L276.644,132.977L276.94,139.527L271.286,149.082L270.769,154.599L266.186,163.88L258.167,161.314L257.761,172.914L255.432,176.704L256.541,181.424L251.478,184.051L246.046,166.386L243.237,166.424L241.537,173.556L235.92,167.77L239.098,161.39L243.681,160.743L248.411,151.192L242.498,149.254L233.001,149.408L223.208,147.853L222.321,139.953L217.406,139.373L209.276,134.434L205.654,142.192L213.045,148.218L206.652,152.437L204.361,156.548L210.68,159.581L208.943,166.348L212.491,174.744L214.08,183.882L212.639,187.926L205.654,187.795L192.979,190.075L193.57,198.363L188.101,204.835L173.319,212.185L161.826,224.948L154.102,231.761L143.902,238.806L143.865,243.724L138.766,246.368L129.49,250.203L124.723,250.763L121.619,258.877L123.762,272.677L124.316,281.43L119.956,291.415L119.919,309.198L114.597,309.71L109.941,317.648L113.045,321.082L103.695,324.038L100.259,331.084L96.12,334.067L86.401,324.372L81.67,309.799L77.716,299.257L74.132,294.309L68.662,284.21L66.112,271.012L64.339,264.396L54.989,249.787L50.739,228.988L47.672,215.131L47.709,201.908L45.713,191.624L30.783,198.196L23.54,196.895L10.163,183.526L15.078,179.508L12.047,175.14L0,165.665L6.837,158.151L29.453,158.189L27.384,148.487L21.619,142.713L20.473,133.909L13.747,128.755L25.055,116.634L36.992,117.519L47.709,105.268L54.139,93.314L64.117,81.359L63.969,72.795L72.69,65.79L64.412,59.773L60.865,51.477L57.206,40.657L62.269,35.279L77.827,38.32L89.283,36.463L99.187,25.933L110.2,40.594L109.165,50.685L113.267,56.981L112.934,63.198L105.543,61.57L108.426,74.917L118.514,82.514L132.779,90.845L126.275,96.219L122.284,107.233L132.225,111.666L141.907,117.362L155.285,123.873L169.364,125.359L175.277,131.228L183.222,132.317L195.565,134.996L204.102,134.802L205.285,130.255L203.954,122.934L204.73,117.932L211.013,115.492L211.863,124.617L212.084,126.941L221.397,131.306L227.864,129.515L236.511,130.274L244.9,129.943L245.639,122.856L241.463,119.15L249.741,117.696L259.054,109.036L270.916,101.569L279.527,104.454L286.844,99.496L291.648,106.797L288.174,111.705Z"
            fill="url(#indiaFill)"
            stroke="#4f8cff"
            strokeWidth={1.4}
            strokeLinejoin="round"
            style={{
              filter:
                "drop-shadow(0 0 6px rgba(56,132,255,0.85)) drop-shadow(0 0 18px rgba(56,132,255,0.45))",
            }}
          />

          <g fill="none" stroke="#4fa8ff" strokeWidth={1.5} strokeLinecap="round">
            {cities.map((city, i) => (
              <path
                key={city.name}
                d={curvePath(hub.x, hub.y, city.x, city.y)}
                opacity={0.8}
                style={{
                  strokeDasharray: "6 10",
                  animation: "dashFlow 1.6s linear infinite",
                  animationDelay: `${i * 0.15}s`,
                  filter: "drop-shadow(0 0 3px rgba(79,168,255,0.9))",
                }}
              />
            ))}
          </g>

          {cities.map((city) => (
            <g key={city.name}>
              <path
                d="M0,-6 C3,-6 5,-3.7 5,-1.1 C5,2.6 0,7 0,7 C0,7 -5,2.6 -5,-1.1 C-5,-3.7 -3,-6 0,-6 Z"
                transform={`translate(${city.x},${city.y})`}
                fill="#0b1220"
                stroke="#7db4ff"
                strokeWidth={1}
              />
              <circle cx={city.x} cy={city.y - 1.1} r={1.5} fill="#7db4ff" />
              <text
                x={city.label.x}
                y={city.label.y}
                fontSize={8}
                fontWeight={700}
                letterSpacing={0.5}
                fill="#cfe0ff"
                textAnchor={city.anchor}
                style={{ textTransform: "uppercase" }}
              >
                {city.name}
              </text>
            </g>
          ))}

          <circle
            cx={hub.x}
            cy={hub.y}
            r={14}
            fill="rgba(56,132,255,0.35)"
            style={{ animation: "pulseGlow 2.2s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "center" }}
          />
          <circle cx={hub.x} cy={hub.y} r={9} fill="#1c4dd6" stroke="#9cc4ff" strokeWidth={1.2} />
          <g
            transform={`translate(${hub.x},${hub.y})`}
            fill="#eaf3ff"
            stroke="#eaf3ff"
            strokeWidth={0.6}
            strokeLinejoin="round"
          >
            <path d="M-5,4 H5 V-1 L2,-3.5 V-1 L-1,-3.5 V-1 L-4,-3.5 V-1 H-5 Z" />
            <rect x="-5" y="4" width="10" height="1.3" />
          </g>
        </svg>

        <div className="relative z-10 flex flex-col gap-6 text-center md:text-left">
          <div>
            <p className="text-xs font-semibold tracking-[3px] text-white/80 uppercase">Manufactured in</p>
            <p className="text-3xl font-extrabold tracking-tight text-[#5ea2ff] [text-shadow:0_0_18px_rgba(94,162,255,0.85)] sm:text-4xl">
              Delhi
            </p>
          </div>
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent md:mx-0" />
          <div>
            <p className="text-xs font-semibold tracking-[3px] text-white/80 uppercase">Supplied across</p>
            <p className="text-3xl font-extrabold tracking-tight text-[#5ea2ff] [text-shadow:0_0_18px_rgba(94,162,255,0.85)] sm:text-4xl">
              India
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md sm:absolute sm:bottom-6 sm:right-6 sm:mt-0 sm:w-fit">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9cc4ff" strokeWidth={1.8}>
          <path d="M1 16V6a1 1 0 0 1 1-1h10v11H1z" />
          <path d="M12 10h4l4 4v2h-8" />
          <circle cx="5.5" cy="18.5" r="1.7" fill="#9cc4ff" />
          <circle cx="16.5" cy="18.5" r="1.7" fill="#9cc4ff" />
        </svg>
        <span className="text-[11px] font-bold tracking-[1.5px] whitespace-nowrap text-white/90 uppercase">
          Pan India Delivery Network
        </span>
      </div>
    </div>
  );
}
