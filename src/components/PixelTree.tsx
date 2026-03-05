interface PixelTreeProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 1 | 2 | 3;
}

export function PixelTree({ size = 'md', variant = 1 }: PixelTreeProps) {
  const scales = { sm: 0.6, md: 1, lg: 1.4 };
  const scale = scales[size];
  const w = Math.round(64 * scale);
  const h = Math.round(96 * scale);

  // Three tree variants using different crown shapes
  const crowns = [
    // Variant 1: classic triangle pine
    [
      [24, 0, 16, 12],   // tip
      [20, 12, 24, 16],  // row 2
      [16, 28, 32, 16],  // row 3
      [12, 44, 40, 16],  // base of crown
    ],
    // Variant 2: rounder crown
    [
      [22, 4, 20, 12],
      [16, 16, 32, 16],
      [12, 32, 40, 16],
      [14, 48, 36, 12],
    ],
    // Variant 3: tall thin
    [
      [26, 0, 12, 10],
      [22, 10, 20, 14],
      [18, 24, 28, 14],
      [14, 38, 36, 16],
    ],
  ];

  const crown = crowns[variant - 1];
  const trunkX = Math.round(28 * scale);
  const trunkY = Math.round(64 * scale);
  const trunkW = Math.round(8 * scale);
  const trunkH = Math.round(24 * scale);

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 64 96`}
      style={{ imageRendering: 'pixelated' }}
      className="pixel"
    >
      {/* Crown layers */}
      {crown.map(([x, y, cw, ch], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={cw}
          height={ch}
          fill={i === 0 ? '#4a7c23' : i === 1 ? '#5a8c2b' : i === 2 ? '#4a7c23' : '#3a6a1a'}
        />
      ))}
      {/* Highlight pixels on crown */}
      <rect x={crown[0][0] + 2} y={crown[0][1] + 2} width={4} height={4} fill="#6aad33" />
      <rect x={crown[1][0] + 4} y={crown[1][1] + 2} width={4} height={4} fill="#6aad33" />

      {/* Trunk */}
      <rect x={trunkX} y={trunkY} width={trunkW} height={trunkH} fill="#8B4513" />
      <rect x={trunkX + 2} y={trunkY} width={2} height={trunkH} fill="#a0522d" />
      {/* Roots */}
      <rect x={trunkX - 4} y={trunkY + trunkH - 8} width={4} height={8} fill="#654321" />
      <rect x={trunkX + trunkW} y={trunkY + trunkH - 8} width={4} height={8} fill="#654321" />
    </svg>
  );
}
