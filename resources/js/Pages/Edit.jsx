import {useForm} from "@inertiajs/react";
import { useRoute } from "ziggy-js";

export default function Edit({ post}) {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });
    const route = useRoute();

    function submit(e) {
        e.preventDefault();

        put(route("post.update", post));
    }

    return (
        <>
            <h1 className="title">Update post</h1>

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && '!ring-red-500'}
                    ></textarea>
                    {errors.body && <p className="error">{errors.body}</p>}

                    <button
                        className="primary-btn mt-4"
                        disabled={processing}
                    >Update</button>
                </form>
            </div>
        </>
    )
}
