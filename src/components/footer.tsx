export default function Footer() {
  const today = new Date();
  return (
    <div className="mt-10 mb-4 ">
      <p className="text-slate-600 text-sm text-center"> © {today.getFullYear()} Fasha Fadillah</p>
    </div>
  );
}
