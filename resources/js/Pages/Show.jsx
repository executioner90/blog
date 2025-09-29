import {Head, Link, useForm, usePage} from "@inertiajs/react";
import { useRoute } from "ziggy-js";

export default function Show({post}) {
    const { delete: destroy } = useForm();
    const route = useRoute();
    const { component } = usePage();

    function submit(e) {
        e.preventDefault();

        destroy(route('post.destroy', post));
    }

    return (
        <>
            <Head title={component} />
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Posted on: </span>
                    <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                </div>
                <p className="font-medium">{post.body}</p>

                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white cursor-pointer">
                            Delete
                        </button>
                    </form>
                    <Link href={route('post.edit', post)} className="bg-green-500 rounded-md text-sm px-4 py-1 text-white">Update</Link>
                </div>
            </div>
        </>
    );
}
