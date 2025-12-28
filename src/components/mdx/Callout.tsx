import { AlertCircle, Info, CheckCircle, XCircle } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'danger';
  title?: string;
  children: React.ReactNode;
}

const icons = {
  info: <Info size={18} />,
  warning: <AlertCircle size={18} />,
  success: <CheckCircle size={18} />,
  danger: <XCircle size={18} />,
};

const styles = {
  info: 'border-gruvbox-blue bg-gruvbox-blue/5 text-gruvbox-blue',
  warning: 'border-gruvbox-yellow bg-gruvbox-yellow/5 text-gruvbox-yellow',
  success: 'border-gruvbox-green bg-gruvbox-green/5 text-gruvbox-green',
  danger: 'border-gruvbox-red bg-gruvbox-red/5 text-gruvbox-red',
};

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  return (
    // CAMBIOS: my-6 en lugar de my-8, p-4 más contenido, borde más delgado (border-l-2)
    <div className={`my-6 border-l-2 rounded-r-md px-4 py-3 ${styles[type]} shadow-sm`}>
      <div className="flex items-center gap-2 font-bold mb-1 text-sm tracking-wide">
        {icons[type]}
        <span className="uppercase">{title || type}</span>
      </div>
      {/* Prose ajustado para que el texto interno no tenga márgenes extraños */}
      <div className="text-[var(--text-main)] opacity-90 text-sm leading-relaxed [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}