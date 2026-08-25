const hub = { x: 92.6, y: 109.5 };

// Centred on the white band of the outline's bounding box
const chakra = { x: 111, y: 178, r: 53 };
const spokes = Array.from({ length: 24 }, (_, i) => i * 15);

const cities: {
  name: string;
  x: number;
  y: number;
  label: { x: number; y: number };
  anchor: "start" | "middle" | "end";
}[] = [
    // North
    { name: "Punjab", x: 78.3, y: 82.3, label: { x: 58, y: 80 }, anchor: "end" },
    { name: "Haryana", x: 84.3, y: 101.9, label: { x: 50, y: 100 }, anchor: "end" },
    { name: "Rajasthan", x: 61.7, y: 127.3, label: { x: 30, y: 130 }, anchor: "end" },
    { name: "Uttar Pradesh", x: 130.4, y: 129.6, label: { x: 140, y: 120 }, anchor: "start" },
    // Central & east
    { name: "Bihar", x: 175.6, y: 141.1, label: { x: 170, y: 133 }, anchor: "end" },
    { name: "Assam", x: 253.6, y: 136.5, label: { x: 262, y: 132 }, anchor: "start" },
    { name: "Madhya Pradesh", x: 105.8, y: 168.8, label: { x: 96, y: 164 }, anchor: "end" },
    { name: "Jharkhand", x: 175.6, y: 166.5, label: { x: 168, y: 173 }, anchor: "end" },
    { name: "West Bengal", x: 201.4, y: 167.8, label: { x: 209, y: 179 }, anchor: "start" },
    { name: "Chhattisgarh", x: 141.7, y: 193.0, label: { x: 133, y: 190 }, anchor: "end" },
    { name: "Odisha", x: 169.4, y: 202.2, label: { x: 180, y: 203 }, anchor: "start" },
    // West & south
    { name: "Gujarat", x: 34.1, y: 181.2, label: { x: 24, y: 178 }, anchor: "end" },
    { name: "Maharashtra", x: 75.2, y: 217.4, label: { x: 65, y: 214 }, anchor: "end" },
    { name: "Telangana", x: 110.9, y: 232.2, label: { x: 121, y: 232 }, anchor: "start" },
    { name: "Andhra Pradesh", x: 118.1, y: 255.3, label: { x: 129, y: 255 }, anchor: "start" },
    { name: "Karnataka", x: 85.5, y: 265.6, label: { x: 74, y: 273 }, anchor: "end" },
    { name: "Tamil Nadu", x: 111.1, y: 297.3, label: { x: 123, y: 301 }, anchor: "start" },
    { name: "Kerala", x: 88, y: 319.8, label: { x: 77, y: 323 }, anchor: "end" },
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
    <div className="relative overflow-hidden p-6 sm:p-10 w-full bg-transparent">

      <div className="relative flex flex-col items-center justify-center">
        <svg viewBox="-45 -15 350 400" className="w-full max-w-[700px] origin-center lg:scale-[1.3]">
          <style>
            {`
              @keyframes dashFlow {
                from { stroke-dashoffset: 0; }
                to { stroke-dashoffset: -140; }
              }
              @keyframes pulseGlow {
                0%, 100% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.3); opacity: 0.4; }
              }
            `}
          </style>
          <defs>
            {/* Tricolour bands, clipped to the country outline by the fill */}
            <linearGradient id="indiaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="33.33%" stopColor="#FF9933" />
              <stop offset="33.33%" stopColor="#FFFFFF" />
              <stop offset="66.66%" stopColor="#FFFFFF" />
              <stop offset="66.66%" stopColor="#138808" />
            </linearGradient>
            <clipPath id="indiaClip">
              <path d="M299.261,113.462L300,117.873L296.415,119.994L297.265,127.117L289.911,125.027L276.644,132.977L276.94,139.527L271.286,149.082L270.769,154.599L266.186,163.88L258.167,161.314L257.761,172.914L255.432,176.704L256.541,181.424L251.478,184.051L246.046,166.386L243.237,166.424L241.537,173.556L235.92,167.77L239.098,161.39L243.681,160.743L248.411,151.192L242.498,149.254L233.001,149.408L223.208,147.853L222.321,139.953L217.406,139.373L209.276,134.434L205.654,142.192L213.045,148.218L206.652,152.437L204.361,156.548L210.68,159.581L208.943,166.348L212.491,174.744L214.08,183.882L212.639,187.926L205.654,187.795L192.979,190.075L193.57,198.363L188.101,204.835L173.319,212.185L161.826,224.948L154.102,231.761L143.902,238.806L143.865,243.724L138.766,246.368L129.49,250.203L124.723,250.763L121.619,258.877L123.762,272.677L124.316,281.43L119.956,291.415L119.919,309.198L114.597,309.71L109.941,317.648L113.045,321.082L103.695,324.038L100.259,331.084L96.12,334.067L86.401,324.372L81.67,309.799L77.716,299.257L74.132,294.309L68.662,284.21L66.112,271.012L64.339,264.396L54.989,249.787L50.739,228.988L47.672,215.131L47.709,201.908L45.713,191.624L30.783,198.196L23.54,196.895L10.163,183.526L15.078,179.508L12.047,175.14L0,165.665L6.837,158.151L29.453,158.189L27.384,148.487L21.619,142.713L20.473,133.909L13.747,128.755L25.055,116.634L36.992,117.519L47.709,105.268L54.139,93.314L64.117,81.359L63.969,72.795L72.69,65.79L64.412,59.773L60.865,51.477L57.206,40.657L62.269,35.279L77.827,38.32L89.283,36.463L99.187,25.933L110.2,40.594L109.165,50.685L113.267,56.981L112.934,63.198L105.543,61.57L108.426,74.917L118.514,82.514L132.779,90.845L126.275,96.219L122.284,107.233L132.225,111.666L141.907,117.362L155.285,123.873L169.364,125.359L175.277,131.228L183.222,132.317L195.565,134.996L204.102,134.802L205.285,130.255L203.954,122.934L204.73,117.932L211.013,115.492L211.863,124.617L212.084,126.941L221.397,131.306L227.864,129.515L236.511,130.274L244.9,129.943L245.639,122.856L241.463,119.15L249.741,117.696L259.054,109.036L270.916,101.569L279.527,104.454L286.844,99.496L291.648,106.797L288.174,111.705Z" />
            </clipPath>
          </defs>

          <path
            d="M299.261,113.462L300,117.873L296.415,119.994L297.265,127.117L289.911,125.027L276.644,132.977L276.94,139.527L271.286,149.082L270.769,154.599L266.186,163.88L258.167,161.314L257.761,172.914L255.432,176.704L256.541,181.424L251.478,184.051L246.046,166.386L243.237,166.424L241.537,173.556L235.92,167.77L239.098,161.39L243.681,160.743L248.411,151.192L242.498,149.254L233.001,149.408L223.208,147.853L222.321,139.953L217.406,139.373L209.276,134.434L205.654,142.192L213.045,148.218L206.652,152.437L204.361,156.548L210.68,159.581L208.943,166.348L212.491,174.744L214.08,183.882L212.639,187.926L205.654,187.795L192.979,190.075L193.57,198.363L188.101,204.835L173.319,212.185L161.826,224.948L154.102,231.761L143.902,238.806L143.865,243.724L138.766,246.368L129.49,250.203L124.723,250.763L121.619,258.877L123.762,272.677L124.316,281.43L119.956,291.415L119.919,309.198L114.597,309.71L109.941,317.648L113.045,321.082L103.695,324.038L100.259,331.084L96.12,334.067L86.401,324.372L81.67,309.799L77.716,299.257L74.132,294.309L68.662,284.21L66.112,271.012L64.339,264.396L54.989,249.787L50.739,228.988L47.672,215.131L47.709,201.908L45.713,191.624L30.783,198.196L23.54,196.895L10.163,183.526L15.078,179.508L12.047,175.14L0,165.665L6.837,158.151L29.453,158.189L27.384,148.487L21.619,142.713L20.473,133.909L13.747,128.755L25.055,116.634L36.992,117.519L47.709,105.268L54.139,93.314L64.117,81.359L63.969,72.795L72.69,65.79L64.412,59.773L60.865,51.477L57.206,40.657L62.269,35.279L77.827,38.32L89.283,36.463L99.187,25.933L110.2,40.594L109.165,50.685L113.267,56.981L112.934,63.198L105.543,61.57L108.426,74.917L118.514,82.514L132.779,90.845L126.275,96.219L122.284,107.233L132.225,111.666L141.907,117.362L155.285,123.873L169.364,125.359L175.277,131.228L183.222,132.317L195.565,134.996L204.102,134.802L205.285,130.255L203.954,122.934L204.73,117.932L211.013,115.492L211.863,124.617L212.084,126.941L221.397,131.306L227.864,129.515L236.511,130.274L244.9,129.943L245.639,122.856L241.463,119.15L249.741,117.696L259.054,109.036L270.916,101.569L279.527,104.454L286.844,99.496L291.648,106.797L288.174,111.705Z"
            fill="url(#indiaFill)"
            stroke="#1e3a8a"
            strokeWidth={1.5}
            strokeLinejoin="round"
            style={{
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
            }}
          />

          {/* Ashoka Chakra — 24 spokes, sits in the white band */}
          <g opacity={0.28}>
            <circle
              cx={chakra.x}
              cy={chakra.y}
              r={chakra.r}
              fill="none"
              stroke="#000080"
              strokeWidth={5}
            />
            {spokes.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const cos = Math.cos(rad);
              const sin = Math.sin(rad);
              return (
                <g key={deg}>
                  <line
                    x1={chakra.x + cos * 7}
                    y1={chakra.y + sin * 7}
                    x2={chakra.x + cos * (chakra.r - 9)}
                    y2={chakra.y + sin * (chakra.r - 9)}
                    stroke="#000080"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <circle
                    cx={chakra.x + cos * (chakra.r - 5)}
                    cy={chakra.y + sin * (chakra.r - 5)}
                    r={1.6}
                    fill="#000080"
                  />
                </g>
              );
            })}
            <circle cx={chakra.x} cy={chakra.y} r={7} fill="#000080" />
          </g>

          <g fill="none" stroke="#2563eb" strokeWidth={1} strokeLinecap="round" clipPath="url(#indiaClip)">
            {cities.map((city, i) => (
              <path
                key={city.name}
                d={curvePath(hub.x, hub.y, city.x, city.y)}
                opacity={0.4}
                style={{
                  strokeDasharray: "6 8",
                  animationName: "dashFlow",
                  animationDuration: "6s",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </g>

          {cities.map((city) => {
            return (
              <g key={city.name}>
                <circle cx={city.x} cy={city.y} r={3.5} fill="#1e3a8a" />
                <text
                  x={city.label.x}
                  y={city.label.y}
                  fontSize={10}
                  fontWeight={600}
                  letterSpacing={0.1}
                  fill="#0f172a"
                  textAnchor={city.anchor}
                >
                  {city.name}
                </text>
              </g>
            );
          })}

          <circle
            cx={hub.x}
            cy={hub.y}
            r={24}
            fill="rgba(37,99,235,0.15)"
            style={{ animation: "pulseGlow 2.2s ease-in-out infinite", transformBox: "fill-box", transformOrigin: "center" }}
          />
          <circle cx={hub.x} cy={hub.y} r={8} fill="#1e3a8a" />
          <text
            x={hub.x + 12}
            y={hub.y + 4}
            fontSize={11}
            fontWeight={800}
            fill="#0f172a"
            textAnchor="start"
          >
            Delhi
          </text>
        </svg>
      </div>
    </div>
  );
}
