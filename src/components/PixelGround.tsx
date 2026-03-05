export function PixelGround() {
  return (
    <div className="w-full" style={{ height: 48 }}>
      <svg
        width="100%"
        height="48"
        viewBox="0 0 320 48"
        preserveAspectRatio="xMidYMid slice"
        style={{ imageRendering: 'pixelated', display: 'block' }}
      >
        {/* Main grass strip */}
        <rect x={0} y={0} width={320} height={8} fill="#4a7c23" />
        <rect x={0} y={8} width={320} height={4} fill="#2d5016" />
        <rect x={0} y={12} width={320} height={36} fill="#5c4a1e" />

        {/* Grass tufts */}
        {[0, 32, 64, 96, 128, 160, 192, 224, 256, 288].map((x, i) => (
          <g key={i}>
            <rect x={x + 2} y={-4} width={4} height={8} fill="#5a8c2b" />
            <rect x={x + 8} y={-6} width={4} height={10} fill="#4a7c23" />
            <rect x={x + 16} y={-2} width={4} height={6} fill="#6aad33" />
            <rect x={x + 24} y={-5} width={4} height={9} fill="#5a8c2b" />
          </g>
        ))}

        {/* Small rocks */}
        {[20, 80, 150, 220, 290].map((x, i) => (
          <g key={`rock-${i}`}>
            <rect x={x} y={14} width={8} height={6} fill="#8B8B7A" />
            <rect x={x + 1} y={13} width={6} height={2} fill="#a0a090" />
          </g>
        ))}
      </svg>
    </div>
  );
}
