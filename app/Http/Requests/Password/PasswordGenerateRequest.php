<?php

namespace App\Http\Requests\Password;

use Illuminate\Foundation\Http\FormRequest;

class PasswordGenerateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'small_letters' => 'required|boolean',
            'big_letters' => 'required|boolean',
            'has_numbers' => 'required|boolean',
            'has_symbols' => 'required|boolean',
            'pass_length' => 'required|integer|min:1',
        ];
    }
}
