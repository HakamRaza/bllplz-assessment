<?php

namespace App\Http\Controllers\Password;

use App\Http\Controllers\Controller;
use App\Http\Requests\Password\PasswordGenerateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Inertia\Response;

class PasswordController extends Controller
{
    /**
     * Return Password Generator Page
     */
    public function view(): Response
    {
        return Inertia::render('Password/PasswordGenerator', [
            'password' => session('password')
        ]);
    }

    /**
     * Generate password
     */
    public function generate(PasswordGenerateRequest $request): RedirectResponse
    {
        $uppercase = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
            'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
            'W', 'X', 'Y', 'Z'
        ];

        $lowercase = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x', 'y', 'z',

        ];

        $numbers = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        ];

        $symbols = [
            '!', '#', '$', '%', '&', '(', ')', '*', '+', '@', '^'
        ];

        $charsCollection = new Collection();

        if ($request->boolean('small_letters')) {
            $charsCollection = $charsCollection->merge($lowercase);
        }

        if ($request->boolean('big_letters')) {
            $charsCollection = $charsCollection->merge($uppercase);
        }

        if ($request->boolean('has_numbers')) {
            $charsCollection = $charsCollection->merge($numbers);
        }

        if ($request->boolean('has_symbols')) {
            $charsCollection = $charsCollection->merge($symbols);
        }

        $password = new Collection();

        $generatedPass = $password->merge(
            $charsCollection->pipe(
                fn ($char) => Collection::times(
                    $request->integer('pass_length'),
                    fn () => $char[mt_rand(0, $char->count() - 1)]
                )
            )
        )
            ->shuffle()
            ->implode('');

        return back()->with([
            'password' => $generatedPass
        ]);
    }
}
