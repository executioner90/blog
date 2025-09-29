import {Link} from "@inertiajs/react";
import {useRoute} from "ziggy-js";

export default function Layout({ children }) {
    const route = useRoute();

    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href={route('home')}>Home</Link>
                    <Link className="nav-link" href={route('post.create')}>Create</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}
