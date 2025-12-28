import React from 'react';

export const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 w-full overflow-x-auto rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] shadow-sm">
    <table className="w-full text-sm text-left border-collapse">
      {children}
    </table>
  </div>
);

export const Thead = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-[#1d2021] text-gruvbox-orange uppercase font-mono text-xs">
    {children}
  </thead>
);

export const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-6 py-4 font-bold border-b border-[var(--border-color)] whitespace-nowrap">
    {children}
  </th>
);

export const Tr = ({ children }: { children: React.ReactNode }) => (
  <tr className="border-b border-[var(--border-color)]/30 last:border-none hover:bg-gruvbox-fg/5 transition-colors">
    {children}
  </tr>
);

export const Td = ({ children }: { children: React.ReactNode }) => (
  <td className="px-6 py-4 text-[var(--text-main)]">
    {children}
  </td>
);