<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShortenUrlRequest;
use App\Models\UrlShortener;
use Illuminate\Http\Request;

class UrlShortenerController extends Controller
{
    public function shorten(ShortenUrlRequest $request)
    {
        // Validate the incoming request
        $validatedData = $request->validated();

        // Check if the URL already exists in the database
        $existingUrlShortener = UrlShortener::where('url', $validatedData['url'])->first();

        if ($existingUrlShortener) {
            return Redirect::route('index')->with('success', $existingUrlShortener->short_url);
        }

        // URL doesn't exist, create a new entry
        $newUrlShortener = UrlShortener::create([
            'url' => $validatedData['url'],
            'short_url' => 'temp.com/1233',
        ]);
        return Redirect::route('index')->with('success', $newUrlShortener->short_url);
    }
}
