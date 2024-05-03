export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here

  return (
    <div className="max-w-4xl mx-auto w-full h-full space-y-3 p-2 ">
      {children}
    </div>
  );
}
