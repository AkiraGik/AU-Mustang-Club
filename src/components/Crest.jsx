export default function Crest({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AU Mustangs FC crest"
    >
      <path
        d="M50 2 L96 16 V54 C96 82 76 100 50 110 C24 100 4 82 4 54 V16 Z"
        fill="#14202b"
        stroke="#c8102e"
        strokeWidth="3"
      />
      <path
        d="M50 8 L90 20 V54 C90 78 73 94 50 103 C27 94 10 78 10 54 V20 Z"
        fill="#c8102e"
      />
      <path
        d="M28 62 C34 46 40 38 50 32 C60 38 66 46 72 62 C64 56 58 53 50 53 C42 53 36 56 28 62 Z"
        fill="#f4f1ea"
      />
      <path d="M50 32 L54 22 L58 30 L50 32Z" fill="#f4f1ea" />
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="22"
        fill="#f4f1ea"
      >
        AU
      </text>
    </svg>
  );
}
