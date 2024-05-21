import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';


export default function PasswordGenerator({ password }: { password?: string }) {
    const resultRef = useRef(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        small_letters: true,
        big_letters: true,
        has_numbers: true,
        has_symbols: true,
        pass_length: '32',
    });

    const copyToClipboard = () => {
        if (resultRef.current) {
            navigator.clipboard.writeText((resultRef.current as HTMLElement).innerText);
            alert("Result copied to clipboard!");
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('billplz.password_generator'));
    };

    return (
        <>
            <Head title="Password Generator 🔑" />
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-full max-w-md p-4">
                    <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>
                    <form onSubmit={submit} className="space-y-4">

                        {/* Checkboxes */}
                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="small_letters"
                                    checked={data.small_letters}
                                    onChange={(e) => setData('small_letters', e.target.checked)}
                                    className="mr-2"
                                />
                                Include Lowercase Letters
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="big_letters"
                                    checked={data.big_letters}
                                    onChange={(e) => setData('big_letters', e.target.checked)}
                                    className="mr-2"
                                />
                                Include Uppercase Letters
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="has_numbers"
                                    checked={data.has_numbers}
                                    onChange={(e) => setData('has_numbers', e.target.checked)}
                                    className="mr-2"
                                />
                                Include Numbers
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="has_symbols"
                                    checked={data.has_symbols}
                                    onChange={(e) => setData('has_symbols', e.target.checked)}
                                    className="mr-2"
                                />
                                Include Symbols
                            </label>
                        </div>

                        {/* Quantity Input */}
                        <div>
                            <label className="block">Length:</label>
                            <input
                                type="number"
                                name="pass_length"
                                value={data.pass_length}
                                onChange={(e) => setData('pass_length', e.target.value)}
                                className="w-full border rounded p-2"
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                            Generate !
                        </button>

                    </form>

                    {/* Result */}
                    {password && (
                        <div className="mt-10 text-center">
                            <h2 className="text-xl font-bold mb-2">Password: </h2>
                            <div ref={resultRef} className="bg-gray-100 p-2 rounded cursor-pointer inline-block">
                                {password}
                                <span className="ml-2" onClick={copyToClipboard}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 inline-block text-gray-500 hover:text-gray-800"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V4C16 2.89543 15.1046 2 14 2Z" />
                                        <path d="M8 2V6L12 10" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </>
    );

}
