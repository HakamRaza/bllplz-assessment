<?php

namespace App\Http\Requests\Pizza;

use Illuminate\Foundation\Http\FormRequest;

class PizzaOrderRequest extends FormRequest
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
            'size' => 'required|string|in:small,medium,large',
            'has_pepperoni' => 'required|boolean',
            'has_xcheese' => 'required|boolean',
            'quantity' => 'required|integer|min:1',
        ];
    }
}
