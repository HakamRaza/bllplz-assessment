<?php

namespace App\Http\Controllers\Pizza;

use App\Http\Controllers\Controller;
use App\Http\Requests\Pizza\PizzaOrderRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class PizzaController extends Controller
{
    public function view(): Response
    {
        return Inertia::render('Pizza/PizzaOrder', [
            'orders' => session('orders'),
            'orders_bill' => session('orders_bill')
        ]);
    }

    public function addPizza(PizzaOrderRequest $request): RedirectResponse
    {
        $newOrder = $request->validated();

        $smallSizePrice         = config('pizza.price.size.small');
        $mediumSizePrice        = config('pizza.price.size.medium');
        $largeSizePrice         = config('pizza.price.size.large');
        $smallPepperoniPrice    = config('pizza.price.pepperoni.small');
        $mediumPepperoniPrice   = config('pizza.price.pepperoni.medium');
        $largePepperoniPrice    = config('pizza.price.pepperoni.large');
        $smallXtraCheesePrice   = config('pizza.price.xcheese.small');
        $mediumXtraCheesePrice  = config('pizza.price.xcheese.medium');
        $largeXtraCheesePrice   = config('pizza.price.xcheese.large');

        $orderBill = 0;

        switch ($newOrder['size']) {
            case 'small':
                $orderBill += $smallSizePrice;
                break;
            case 'medium':
                $orderBill += $mediumSizePrice;
                break;
            case 'large':
                $orderBill += $largeSizePrice;
                break;
            
            default:
                break;
        }

        if($newOrder['has_pepperoni']) {
            switch ($newOrder['size']) {
                case 'small':
                    $orderBill += $smallPepperoniPrice;
                    break;
                case 'medium':
                    $orderBill += $mediumPepperoniPrice;
                    break;
                case 'large':
                    $orderBill += $largePepperoniPrice;
                    break;
                
                default:
                    break;
            }
        }

        if($newOrder['has_xcheese']) {
            switch ($newOrder['size']) {
                case 'small':
                    $orderBill += $smallXtraCheesePrice;
                    break;
                case 'medium':
                    $orderBill += $mediumXtraCheesePrice;
                    break;
                case 'large':
                    $orderBill += $largeXtraCheesePrice;
                    break;
                
                default:
                    break;
            }
        }
        
        $orderPrice = ($orderBill * $newOrder['quantity']);

        $newOrder['order_price'] = $orderPrice;

        $allOrders = $request->session()->get('orders', []);

        array_push($allOrders, $newOrder);

        // get total price for whole orders
        $totalBills = 0;

        foreach ($allOrders as $order) {
            $totalBills += $order['order_price'];
        }

        $request->session()->put('orders', $allOrders);

        $request->session()->put('orders_bill', $totalBills);

        return back();
    }
}
