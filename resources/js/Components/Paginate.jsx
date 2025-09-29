import { Link } from "@inertiajs/react";

export default function Paginate({ links }) {
    return (
        <div className="py-12 px-4">
            {links.map((link, index) => {
                return link.url ? (
                    <Link
                        key={index}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""}`}
                    />
                ) : (
                    <span
                        key={index}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className="p-1 mx-1 text-slate-300"
                    />
                );
            })}
        </div>
    );
}
