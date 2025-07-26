import { ReactNode } from 'react';

export function Button({ children, ...props }: { children: ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="rounded bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-gray-200 p-4 shadow-sm bg-white">{children}</div>;
}