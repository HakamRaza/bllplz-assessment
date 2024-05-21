import { useState } from "react";
import balanceErd from '../../../../public/balance_erd.png';

export default function CreditBalance() {

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
        <div className="bg-gray-900 text-white min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Question 3</h1>

                <p className="text-gray-400 mb-8">
                    Users have many credits, each credit has a balance column
                    and created datetime (timezone UTC). Write an SQL statement
                    to retrieve users’ last credit balance on 31st December
                    2022.
                </p>

                <p className="text-gray-400 mb-4">
                    - Assuming the Entity Relationship Diagram of the tables is
                    like the picture below :
                </p>

                <div className="bg-gray-800 shadow-md rounded-md overflow-hidden w-full">
                    <div className="p-4 border-b border-gray-700">
                        <img
                            src={balanceErd}
                            alt="Thumbnail"
                            className="w-full h-auto cursor-pointer"
                            onClick={() =>
                                handleImageClick(balanceErd)
                            }
                        />
                    </div>
                </div>

                <p className="text-gray-400 mt-4">
                    - Also assuming that there will be multiple records per day
                    which will result in different balance values. We want to get
                    the last record of the day.
                </p>
                <p className="text-gray-400 mt-4">
                    - 31st December 2022 will also means before entering 1st January
                    2023 as 00:00 AM.
                </p>

                <p className="text-gray-400 mt-8">
                    - The query would be like this :
                </p>

                <div className="mt-8 bg-gray-800 shadow-md rounded-md overflow-hidden">
                    <div className="p-4 border-b border-gray-700">
                        <pre className="overflow-x-auto">
                            <code className="language-javascript">
                                {`SELECT * 
FROM credits 
WHERE user_id = ?
AND created_at <= '2023-01-01'
ORDER BY created_at DESC
LIMIT 1;`}
                            </code>
                        </pre>
                    </div>
                </div>

                <p className="text-gray-400 mt-8">
                    - Where '?' is refering to user foreign key id.
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
    );
}