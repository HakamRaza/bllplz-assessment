import { useState } from "react";
import commentErd from '../../../../public/comment_erd.png';
import { Head } from "@inertiajs/react";

export default function Like() {

    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const [imageSrc, setImageSrc] = useState<string>("");

    const handleImageClick = (src: string) => {
        setImageSrc(src);
        setIsFullScreen(true);
    };

    const exitFullScreen = () => {
        setIsFullScreen(false);
        setImageSrc("");
    };

    return (
        <>
            <Head title="Like Share and Subcribe 👍" />

            <div className="bg-gray-900 text-white min-h-screen py-8">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Question 5</h1>

                    <p className="text-gray-400 mb-8">
                        Users’ have many comments and comments can be liked by other users. 
                        Write an SQL statement to count how many users liked that comment. 
                    </p>

                    <p className="text-gray-400 mb-4">
                        - Assuming the Entity Relationship Diagram of the tables is
                        like the picture below :
                    </p>

                    <div className="bg-gray-800 shadow-md rounded-md overflow-hidden w-full">
                        <div className="p-4 border-b border-gray-700">
                            <img
                                src={commentErd}
                                alt="Thumbnail"
                                className="w-full h-auto cursor-pointer"
                                onClick={() =>
                                    handleImageClick(commentErd)
                                }
                            />
                        </div>
                    </div>

                    <p className="text-gray-400 mt-4">
                        - Also assuming that user_id is unique per comment_id in comment_likes table.
                        Can be done by applying constraint of composite key unique (user_id, comment_id). 
                        Which means a user can only like a comment once.
                    </p>
                    <p className="text-gray-400 mt-4">
                        - Also assuming owner of the comment cannot like own comments.
                    </p>

                    <p className="text-gray-400 mt-8">
                        - The query would be like this :
                    </p>

                    <div className="mt-8 bg-gray-800 shadow-md rounded-md overflow-hidden">
                        <div className="p-4 border-b border-gray-700">
                            <pre className="overflow-x-auto">
                                <code className="language-javascript">
                                    {`SELECT COUNT(user_id) 
FROM comment_likes 
WHERE comment_id = ?;`}
                                </code>
                            </pre>
                        </div>
                    </div>

                    <p className="text-gray-400 mt-8">
                        - Where '?' is refering to comment foreign key id.
                    </p>
                </div>

                {isFullScreen && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
                        onClick={exitFullScreen}
                    >
                        <img
                            src={imageSrc}
                            alt="Full Screen Image"
                            className="max-w-full max-h-full"
                        />
                    </div>
                )}
            </div>
        </>
    );
}