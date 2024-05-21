<?php

return [

    'price' => [
        'size' => [
            'small' => env('PIZZA_SMALL_SIZE_PRICE', 15),
            'medium' => env('PIZZA_MEDIUM_SIZE_PRICE', 22),
            'large' => env('PIZZA_LARGE_SIZE_PRICE', 30),
        ],
        'pepperoni' => [
            'small' => env('PIZZA_SMALL_PEPPERONI_PRICE', 3),
            'medium' => env('PIZZA_MEDIUM_PEPPERONI_PRICE', 5),
            'large' => env('PIZZA_LARGE_PEPPERONI_PRICE', 0),
        ],
        'xcheese' => [
            'small' => env('PIZZA_SMALL_XCHEESE_PRICE', 6),
            'medium' => env('PIZZA_MEDIUM_XCHEESE_PRICE', 6),
            'large' => env('PIZZA_LARGE_XCHEESE_PRICE', 6),
        ]
    ]
];
