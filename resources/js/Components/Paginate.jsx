import { Link } from "@inertiajs/react";

export default function Paginate({ links }) {
    const prevLink = links.find(link => link.label.includes('Previous'));
    const nextLink = links.find(link => link.label.includes('Next'));
    const numericLinks = links.filter(link => /^\d+$/.test(link.label));

    const totalPages = numericLinks.length;
    const activeIndex = numericLinks.findIndex(link => link.active);
    const maxVisible = 5;

    const visiblePages = [];

    if (totalPages <= maxVisible) {
        // If total pages less than maxVisible, show all
        visiblePages.push(...numericLinks);
    } else {
        // Always include first page
        visiblePages.push(numericLinks[0]);

        // Determine range for middle pages
        let remaining = maxVisible - 2; // slots left between first & last

        let start = activeIndex - Math.floor(remaining / 2);
        let end = activeIndex + Math.floor(remaining / 2);

        // Clamp start & end
        if (start < 1) {
            start = 1;
            end = start + remaining - 1;
        }

        if (end > totalPages - 2) {
            end = totalPages - 2;
            start = end - remaining + 1;
        }

        // Left ellipsis
        if (start > 1) visiblePages.push({ label: '...', url: null });

        // Middle pages
        for (let i = start; i <= end; i++) visiblePages.push(numericLinks[i]);

        // Right ellipsis
        if (end < totalPages - 2) visiblePages.push({ label: '...', url: null });

        // Always include last page
        visiblePages.push(numericLinks[totalPages - 1]);
    }

    const renderLink = (link, index) => {
        if (link.label.includes('Previous') || link.label.includes('Next')) {
            return link.url ? (
                <Link
                    key={index}
                    href={link.url}
                    className="px-3 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ) : (
                <span
                    key={index}
                    className="px-3 py-1 mx-1 rounded bg-gray-100 text-gray-400"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            );
        }

        if (!link.url) {
            return (
                <span
                    key={index}
                    className="px-3 py-1 mx-1 rounded text-gray-400"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            );
        }

        const isEven = parseInt(link.label) % 2 === 0;
        return (
            <Link
                key={index}
                href={link.url}
                className={`px-3 py-1 mx-1 rounded hover:bg-gray-200 ${
                    link.active
                        ? 'bg-blue-500 text-white font-bold'
                        : isEven
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-white text-gray-700'
                }`}
                dangerouslySetInnerHTML={{ __html: link.label }}
            />
        );
    };

    return (
        <div className="py-4 flex flex-wrap items-center">
            {prevLink && renderLink(prevLink, 'prev')}
            {visiblePages.map((link, index) => renderLink(link, index))}
            {nextLink && renderLink(nextLink, 'next')}
        </div>
    );
}
