import {Link} from "@inertiajs/react";
import { useRoute } from 'ziggy-js';
import FlashMessage from '../Components/Flash.jsx';
import Paginate from "../Components/Paginate.jsx";

export default function Home({posts}) {
    const route = useRoute();

    return (
        <>
            <h1 className="title">Hello</h1>
            <FlashMessage />

            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="font-medium truncate max-w-s">{post.body}</p>

                        <Link href={route('post.show', post)} className="text-link">Read more...</Link>
                    </div>
                ))}
            </div>

            <Paginate links={posts.links}></Paginate>
        </>
    )
}
