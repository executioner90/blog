<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
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
        return Inertia::render('Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'body' => ['required', 'string'],
        ]);

        Post::query()->create($request->only('body'));

        return Redirect::route('home')
            ->with('success', 'Post created successfully.');
    }

    public function show(Post $post)
    {
        return Inertia::render('Show')->with(['post' => $post]);
    }

    public function edit(Post $post)
    {
        return Inertia::render('Edit')->with(['post' => $post]);
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'body' => ['required', 'string'],
        ]);

        $post->update($request->only('body'));

        return Redirect::route('home')
            ->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return Redirect::route('home')
            ->with('success', 'Post deleted successfully.');
    }
}
