<?php

namespace App\Http\Controllers;

use App\Http\Requests\ShortenUrlRequest;
use App\Models\UrlShortener;
use Inertia\Inertia;

class UrlShortenerController extends Controller
{
    public function shorten(ShortenUrlRequest $request)
    {
        $baseUrl = $request->root();
        // Validate the incoming request
        $validatedData = $request->validated();

        // Check if the URL already exists in the database
        $existingUrlShortener = UrlShortener::where('url', $validatedData['url'])->first();

        if ($existingUrlShortener) {
            return Inertia::render('Shorten', [
                'longurl' => $existingUrlShortener->url,
                'shorturl' => $request->root().'/shorturl/'.$existingUrlShortener->short_url
            ]);
        }

        // URL doesn't exist, create a new entry
        $newUrlShortener = UrlShortener::create([
            'url' => $validatedData['url'],
            'short_url' => $this->generateShortURL(),
        ]);

        return Inertia::render('Shorten', [
            'longurl' => $validatedData['url'],
            'shorturl' => $request->root().'/shorturl/'.$newUrlShortener->short_url
        ]);
    }

    public function generateShortURL($length = 8) {
        $bytes = random_bytes($length);
        return substr(bin2hex($bytes), 0, $length);
    }

    public function redirect($code) {
        $shortURL = UrlShortener::where('short_url', $code)->first();

        if ($shortURL) {
            // Redirect to the original URL
            return redirect($shortURL->url);
        } else {
            // If not found, return a 404 response or custom error page
            abort(404, 'Shortened URL not found.');
        }
    }
}
