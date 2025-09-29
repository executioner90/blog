import {Head, Link, usePage} from "@inertiajs/react";
import {useRoute} from "ziggy-js";

export default function Layout({ children }) {
    const route = useRoute();
    const { component } = usePage();

    return (
        <>
            <Head title={component} />

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
