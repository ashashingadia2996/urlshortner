import {Head} from "@inertiajs/react";
import React from 'react';
import {useForm} from "@inertiajs/react";
import SocialShareIcons from '../Components/SocialShareIcons';
import RedirectToIndexBtn from '../Components/RedirectToIndexBtn';

export default function TotalClicks({auth, shortcode, totalcount, requestUrl}) {
    const baseUrl = new URL(requestUrl).origin;
    const shorturl = baseUrl + '/shorturl/' + shortcode;
    const {get} = useForm({});


    const redirectTrackUrl = () => {
        get(route('trackclick'));
    }

    return (
        <>
            <Head title="URL Shortener"/>

            <div
                className="relative sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-3xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white"><a href="#">Total URL
                            Clicks</a></h2>
                    </div>
                    <div className="mb-3">
                        <div>
                            <div className="text-gray-900 dark:text-white mt-2">
                                <p>The number of clicks from the shortened URL that redirected the user to the
                                    destination page.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg">
                        <div className="pb-10">
                            <div className="flex items-center justify-between mt-5">
                                <div>
                                    Short URL: <a href={shorturl} target="_blank"
                                                  className="text-blue-500">{shorturl}</a>
                                </div>
                                <div className="flex justify-center items-center w-full">
                                    <div className="text-6xl font-semibold">
                                        {totalcount}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex">
                                <div className="mr-2">
                                    <button type="button"
                                            className="px-4 py-2.5 bg-blue-500 text-white"
                                            onClick={(e) => redirectTrackUrl()}
                                    >Track clicks of another short URL
                                    </button>
                                </div>
                                <div className="mr-2">
                                    <RedirectToIndexBtn btnText="Shorten Another URL"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SocialShareIcons/>
                </div>
            </div>

        </>
    )
}
