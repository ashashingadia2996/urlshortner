import {Head} from "@inertiajs/react";
import React, {useEffect, useRef} from 'react';
import ClipboardJS from 'clipboard';
import ToastNotification from '../Components/ToastNotification';
import {toast} from 'react-toastify';
import SocialShareIcons from '../Components/SocialShareIcons';
import {useForm } from "@inertiajs/react";
import RedirectToIndexBtn from "../Components/RedirectToIndexBtn";


export default function Shorten({auth, longurl, shorturl, shortcode}) {
    const buttonRef = useRef(null);
    const { get } = useForm({});
    useEffect(() => {
        const clipboard = new ClipboardJS(buttonRef.current);

        clipboard.on('success', () => {
            toast.success('Copied to clipboard!');
        });

        clipboard.on('error', (e) => {
            console.error('Error copying to clipboard:', e);
        });

        return () => {
            clipboard.destroy();
        };
    }, []);

    const redirectToURLShortner = () => {
        get(route('index'));
    }

    const redirectToTotalClicks = (shortcode) => {
        const url = route('totalclicks', { code: shortcode });
        get(url);
    }

    return (
        <>
            <Head title="URL Shortener"/>
            <ToastNotification/>
            <div
                className="relative sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-3xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white"><a href="#">URL
                            Shortener</a></h2>
                    </div>
                    <div className="mb-3">
                        <div>
                            <div className="text-gray-900 dark:text-white mt-2">
                                <p>Copy the short link and share it in messages, texts, posts, websites and other
                                    locations.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg">
                        <div className="pb-10">
                            <form>
                                <div className="flex items-center">
                                    <input type="text"
                                           id="shortenurl"
                                           name="url"
                                           value={shorturl}
                                           readOnly
                                           className="flex-1 px-4 py-2 border border-gray-300"/>
                                    <button type="button" ref={buttonRef} data-clipboard-target="#shortenurl"
                                            data-clipboard-target="#shortenurl"
                                            className="px-4 py-2.5 bg-blue-500 text-white">Copy URL
                                    </button>

                                </div>
                            </form>
                            <div className="mt-5">
                                Long URL: <a href={longurl} target='_blank' className="text-blue-500">{longurl}</a>
                            </div>
                            <div className="mt-5 flex">
                                <div className="mr-2">
                                    <button type="button"
                                            className="px-4 py-2.5 bg-blue-500 text-white"
                                            onClick={(e) => redirectToTotalClicks(shortcode)}>Total clicks on short URL
                                    </button>
                                </div>
                                <div className="mr-2">
                                    <RedirectToIndexBtn btnText="Shorten Another URL"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SocialShareIcons shorturl={shorturl}/>
                </div>
            </div>

        </>
    )
}
