export default function Page({ children, isHome }: any) {
  return (
    <div className={`flex h-full ${isHome ? "w-1/2" : "w-3/5"}`}>
      <div className="w-full smax-w-screen-2xl mx-auto h-full">{children}</div>
    </div>
  );
}
