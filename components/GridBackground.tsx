export function GridBackground() {
  return (
    <div className="bg-grid-white/[0.2] relative flex h-[531px] w-full items-center justify-center bg-primary">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
