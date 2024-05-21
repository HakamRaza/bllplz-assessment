import { useState } from "react";
import { Head } from "@inertiajs/react";

export default function Climb() {

    return (
        <>
            <Head title="Snail Journey 🐌" />

            <div className="bg-gray-900 text-white min-h-screen py-8">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Question 5</h1>

                    <p className="text-gray-400 mb-8">
                        A snail can climb up 3 meters a day and it will drop 2 meters at 
                        night. The well is 11 meters deep. How many days will the snail 
                        need to come out from the well and the snail starts climbing 
                        in the morning?
                    </p>

                    <p className="text-gray-400 mt-4">
                        - Since the action is repetitive, we can use recursion function to
                        get number of days for the snail to climb the wall
                    </p>

                    <p className="text-gray-400 mt-8">
                        - The function would be like this in PHP :
                    </p>

                    <div className="mt-8 bg-gray-800 shadow-md rounded-md overflow-hidden">
                        <div className="p-4 border-b border-gray-700">
                            <pre className="overflow-x-auto">
                                <code className="language-php">
                                    {`<?php
// declare constants
$wallHeight = 11;
$dayClimb = 3;
$nightDrop = 2;

// recursion function
function climb($currentClimb, $climbedDays) {
    global $wallHeight, $dayClimb, $nightDrop;

    /*
    * if current snail position is over the wall height, 
    * terminate the recursion and return number of iteration (climbing days)
    * plus additional 1 day to overpass the wall boundry
    */
    if ($currentClimb >= $wallHeight) {
        return $climbedDays + 1;
    }

    /**
     * if above condition not met, continue recursion
     * update number of iteration (climbing days)
     */
    $climbedDays++;

    /**
     * Keep track of the snail current position
     */
    $currentClimb = $currentClimb + $dayClimb - $nightDrop;

    /**
     * pass updated position and iteration self
     */
    return climb($currentClimb, $climbedDays);
}

/**
 * print out the result if starting from position 0
 * and 0 days climbing
 */
echo climb(0, 0);`}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}