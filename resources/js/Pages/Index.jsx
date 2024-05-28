import { Head } from '@inertiajs/react';
import URLShortener from "../Components/URLShortener";
import URLShortnerBenefits from "../Components/URLShortnerBenefits";

export default function Index({ auth, laravelVersion, phpVersion, success }) {
    return (
        <>
            <Head title="URL Shortener" />
            <div className="relative sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-3xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white"><a href="#">URL Shortener</a></h2>
                    </div>
                    <div className="">
                        <div>
                            <div className="text-gray-900 dark:text-white mt-2">
                                <p className="mb-6">
                                    URL Shortener allows to shorten long links from
                                    <a href="https://www.instagram.com/" target="_blank" className="text-blue-500 underline"> Instagram</a>,
                                    <a href="https://www.facebook.com/" target="_blank" className="text-blue-500 underline">Facebook</a>,
                                    <a href="https://www.youtube.com/" target="_blank" className="text-blue-500 underline">YouTube</a>,
                                    <a href="https://www.twitter.com/" target="_blank" className="text-blue-500 underline">Twitter</a>,
                                    <a href="https://www.linkedin.com/" target="_blank" className="text-blue-500 underline">Linked In</a>,
                                    <a href="https://www.whatsapp.com/" target="_blank" className="text-blue-500 underline">WhatsApp</a>,
                                    <a href="https://www.tiktok.com/" target="_blank" className="text-blue-500 underline">TikTok</a>,
                                    blogs and sites. Just paste the long URL and click the Shorten URL button. On the next page, copy the shortened URL and share it on sites, chat and emails. After shortening the URL, check
                                    <a href="url-click-counter.php" className="text-blue-500 underline"> how many clicks it received</a>.
                                </p>
                            </div>
                            {success && (<div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">{success}</div>)}
                            <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg">
                                <URLShortener/>
                            </div>
                            <URLShortnerBenefits/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
