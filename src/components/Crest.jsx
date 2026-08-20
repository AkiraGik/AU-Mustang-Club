export default function Crest({ size = 44 }) {
  return (
    <img
      src="/logo.png"
      alt="AU Mustangs FC crest"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain", flexShrink: 0 }}
    />
  );
}
