'use client';
export default function ClientButton({title, message}) {
    return (
        <button className="bg-blue-300" onClick={() => alert(message)}>{title}</button>
    )
};