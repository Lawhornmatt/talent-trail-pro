'use client';
export default function ClientButton({title, message}) {
    return (
        <button className="bg-blue-300" onClick={() => alert(message)}>{title}</button>
    )
};

// This was way to confusing to do in Next.js / React / TypeScript aghghgh