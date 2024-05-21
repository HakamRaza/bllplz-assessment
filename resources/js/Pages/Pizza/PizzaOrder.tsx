import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

type order = {
    size: 'small' | 'medium' | 'large',
    has_pepperoni: boolean,
    has_xcheese: boolean,
    order_price: number,
    quantity: number,
};


export default function PizzaOrdering({ orders, orders_bill }: { orders?: Array<order>, orders_bill: any }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        size: 'large',
        has_pepperoni: false,
        has_xcheese: false,
        quantity: '1',
    });

    const addOrder: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('billplz.pizza_ordering'));
    };

    return (
        <>
            <Head title="Order Pizza 🍕🍕🍕" />

            <div className="container mx-auto p-4">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <h2 className="text-lg font-semibold mb-2">Choose Pizza</h2>
                        <div className="border border-gray-300 p-2">
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="item">Size:</label>
                                <select
                                    id="item"
                                    className="block w-full border border-gray-300 rounded p-2"
                                    onChange={(e) => setData('size', e.target.value)}
                                    value={data.size}
                                >
                                    {/* <option value="">Select Item</option> */}
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={data.has_pepperoni}
                                        onChange={(e) => setData('has_pepperoni', e.target.checked)}
                                    />
                                    Pepperoni
                                </label>
                                <label className="block mb-2">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={data.has_xcheese}
                                        onChange={(e) => setData('has_xcheese', e.target.checked)}
                                    />
                                    Extra Cheese
                                </label>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2" htmlFor="quantity">Quantity:</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    className="block w-full border border-gray-300 rounded p-2"
                                    min="1"
                                    value={data.quantity}
                                    onChange={(e) => setData('quantity', e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={addOrder}
                            >
                                Add Order !
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold mb-2">Ordered Pizza</h2>
                        <div className="border border-gray-300 p-2">
                            <div className="overflow-y-auto max-h-60">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-2">#</th>
                                            <th className="px-2">Size</th>
                                            <th className="px-2">AddOn</th>
                                            <th className="px-2">Quantity</th>
                                            <th className="px-2">Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders?.map((order, i) => (
                                            <tr key={i}>
                                                <td className="px-2">{i + 1}</td>
                                                <td className="px-2 text-center">{order.size[0].toUpperCase()}</td>
                                                <td className="px-2">
                                                    {order.has_pepperoni && <p>Pepperoni</p>}
                                                    {order.has_xcheese && <p>Extra Cheese</p>}
                                                </td>
                                                <td className="px-2 text-center">{order.quantity}</td>
                                                <td className="px-2 text-right">{order.order_price.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-right mt-2">
                                <span className="font-semibold">Total:</span>{" "}
                                <span>{orders_bill?.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
