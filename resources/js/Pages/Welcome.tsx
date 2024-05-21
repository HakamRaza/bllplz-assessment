import { Head } from '@inertiajs/react';


function Card({ title, link }: { title: string, link: string }) {
    return (
        <div className="bg-gray-800 shadow-md rounded-lg p-4 m-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <a href={link} className="block text-lg font-semibold text-white">{title}</a>
        </div>
    );
}


export default function HomePage() {
    const cards = [
        { title: "Question 1: Password Generator", link: "/password-generator" },
        { title: "Question 2: Order Pizza", link: "/pizza-ordering" },
        { title: "Question 3: Credit Balance", link: "/credit-balance" },
        { title: "Question 4: Saved vs afterCommit", link: "/difference" },
        { title: "Question 5: Comment, Like, Share", link: "/comment-likes" },
        { title: "Question 6: Snail Journey", link: "/snail-climb" },
    ];

    return (
        <>
            <Head title="Welcome" />

            <div className="container mx-auto p-4 h-screen flex justify-center items-center bg-gray-900">
                <div className='w-1/2'>
                    <h1 className="text-2xl font-bold mb-4 text-white">Assessment List</h1>
                    <div className="flex flex-wrap">
                        {cards.map((card, index) => (
                            <Card key={index} title={card.title} link={card.link} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
