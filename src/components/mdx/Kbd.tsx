export default function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-block px-1.5 py-0.5 mx-1 text-xs font-mono font-bold text-gruvbox-fg bg-[var(--bg-card)] border border-b-2 border-[var(--border-color)] rounded shadow-sm align-middle whitespace-nowrap">
      {children}
    </kbd>
  );
}