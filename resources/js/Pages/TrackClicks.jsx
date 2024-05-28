import {Head} from "@inertiajs/react";
import React from 'react';
import URLCountTracker from '../Components/URLCountTracker';
import URLShortnerBenefits from "../Components/URLShortnerBenefits";
import RedirectToIndexBtn from "../Components/RedirectToIndexBtn";

export default function TrackClicks({auth, shortcode, totalcount, requestUrl}) {
    return (
        <>
            <Head title="URL Click Counter"/>
            <div
                className="relative sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-3xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white mb-5">URL Click
                            Counter</h2>
                    </div>
                    <div className="">
                        <div>
                            <div className="text-gray-900 dark:text-white mt-2">
                                <p className="mb-6">
                                    Easily track the performance of your shortened URLs with our click tracking feature. Every time someone clicks on a shortened link generated through our service, we record it and provide you with analytics.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg">
                        <URLCountTracker/>
                    </div>
                    <URLShortnerBenefits/>
                </div>

            </div>

        </>
    )
}
