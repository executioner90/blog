<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::query()->latest()->paginate(5);

        return Inertia::render('Home')
            ->with(['posts' => $posts]);
    }

    public function create()
    {
        //
    }

    public function store(StorePostRequest $request)
    {
        //
    }

    public function show(Post $post)
    {
        //
    }

    public function edit(Post $post)
    {
        //
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    public function destroy(Post $post)
    {
        //
    }
}
