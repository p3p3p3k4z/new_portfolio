'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  href?: string;
  label?: string;
}

export default function BackButton({ href = '/', label = 'cd ..' }: BackButtonProps) {
  return (
    <Link 
      href={href}
      className="group inline-flex items-center gap-3 font-mono font-bold transition-all duration-200
        text-lg md:text-xl px-4 py-2 rounded-none
        bg-[var(--bg-card)] text-gruvbox-gray
        border-2 border-[var(--border-color)] shadow-[4px_4px_0_0_var(--border-color)]
        hover:bg-gruvbox-yellow hover:text-gruvbox-dark0 hover:border-gruvbox-yellow hover:shadow-[4px_4px_0_0_#d79921]
        dark:hover:bg-gruvbox-yellow-bright dark:hover:border-gruvbox-yellow-bright dark:hover:shadow-[4px_4px_0_0_#fabd2f]
        active:translate-x-1 active:translate-y-1 active:shadow-none"
    >
      <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
      <span>{label}</span>
    </Link>
  );
}
