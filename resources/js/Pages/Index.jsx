import { Head } from '@inertiajs/react';
import URLShortener from "../Components/URLShortener";
import URLShortnerBenefits from "../Components/URLShortnerBenefits";
import AppLanguage from "../Components/AppLanguage";
import { useTranslation } from 'react-i18next';
export default function Index({ auth, laravelVersion, phpVersion, success }) {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Head title="URL Shortener" />
            <AppLanguage/>
            <div className="relative sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="max-w-3xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">{t('data.LBL_URLShortener')}</h2>
                    </div>
                    <div className="">
                        <div>
                            <div className="text-gray-900 dark:text-white mt-2">
                                <p className="mb-6">
                                    {t('data.DESC_URLShortener_1')}
                                    <a href="https://www.instagram.com/" target="_blank" className="text-blue-500 underline"> {t('social_services.LBL_INSTAGRAM')}</a>,
                                    <a href="https://www.facebook.com/" target="_blank" className="text-blue-500 underline">{t('social_services.LBL_FACEBOOK')}</a>,
                                    <a href="https://www.youtube.com/" target="_blank" className="text-blue-500 underline">{t('social_services.LBL_YOUTUBE')}</a>,
                                    <a href="https://www.twitter.com/" target="_blank" className="text-blue-500 underline">{t('social_services.LBL_TWITTER')}</a>,
                                    <a href="https://www.linkedin.com/" target="_blank" className="text-blue-500 underline">{t('social_services.LBL_LINKEDIN')}</a>,
                                    <a href="https://www.whatsapp.com/" target="_blank" className="text-blue-500 underline">{t('social_services.LBL_WHATSAPP')}</a>,
                                    <a href="https://www.tiktok.com/" target="_blank" className="text-blue-500 underline">{t('social_services.LBL_TIKTOK')}</a>,
                                    {t('data.DESC_URLShortener_2')}
                                    <a href="#" className="text-blue-500 underline"> {t('data.DESC_URLShortener_3')}</a>.
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
