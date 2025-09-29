import { usePage } from "@inertiajs/react";
import { useEffect, useState } from 'react';

const flashStyles = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
};

export default function Flash() {
    const flash = usePage().props.flash;
    const [messages, setMessages] = useState(flash);

    useEffect(() => {
        if (flash.success || flash.warning || flash.error) {
            setMessages(flash);
            const timer = setTimeout(() => {
                setMessages({});
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    return (
        <>
            {Object.entries(messages).map(([type, message]) =>
                message ? (
                    <div
                        key={type}
                        className={`absolute top-24 right-6 ${flashStyles[type]} p-2 rounded-md shadow-lg text-sm text-white`}
                    >
                        {message}
                    </div>
                ) : null
            )}
        </>
    );
}
