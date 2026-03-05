interface ProgressDotsProps {
  total: number;
  current: number; // 0-indexed
}

export function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div className="flex items-center gap-3 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 12,
            height: 12,
            background: i < current ? '#8B4513' : i === current ? '#4a7c23' : '#c8b99a',
            boxShadow: i < current
              ? '2px 2px 0 0 #654321'
              : i === current
              ? '2px 2px 0 0 #2d5016'
              : '2px 2px 0 0 #a09070',
            transition: 'background 0.2s',
          }}
        />
      ))}
    </div>
  );
}
