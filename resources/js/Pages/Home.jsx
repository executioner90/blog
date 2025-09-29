import {Link, usePage} from "@inertiajs/react";
import { useRoute } from 'ziggy-js';
import { useState } from 'react';

export default function Home({posts}) {
    const route = useRoute();
    const { flash } = usePage().props
    const [flashSuccess, setFlashSuccess] = useState(flash.success)

    setTimeout(() => {
        setFlashSuccess(null)
    }, 2000)

    return (
        <>
            <h1 className="title">Hello</h1>
            {flashSuccess && (
                <div
                    className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white"
                >
                    {flashSuccess}
                </div>
            )}

            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        <Link href={route('post.show', post)} className="text-link">Read more...</Link>
                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map((link) => (
                    link.url ?
                    <Link
                        key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""}`}
                    />
                        :
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                ))}
            </div>
        </>
    )
}
