import React from "react";


export default function Input({ placeholder, type = 'text', value, onChange }: { placeholder?: string; type?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; }) {
return (
<input
placeholder={placeholder}
type={type}
value={value}
onChange={onChange}
className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-zinc-300"
/>
);
}