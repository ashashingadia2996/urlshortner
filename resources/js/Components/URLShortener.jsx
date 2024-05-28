import React, { useState } from 'react';
import {useForm } from "@inertiajs/react";
import InputError from "./InputError";
import { useTranslation } from 'react-i18next';
const URLShortener = () => {
    const { t, i18n } = useTranslation();
    const { data, setData, post, errors, reset } = useForm({
        url: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to backend
        console.log('Form submitted:', data);
        post(route('shorten'));
    };

    return (
        <div className="pb-10">
            <h1 className="text-2xl pb-5 font-semibold text-gray-900 dark:text-white flex justify-center">{t('data.LBL_PASTEURL')}</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <input type="text"
                           id="url"
                           name="url"
                           onChange={(e) => setData("url", e.target.value)}
                           className="flex-1 px-4 py-2 border border-gray-300"/>
                        <button type="submit" className="px-4 py-2.5 bg-blue-500 text-white">{t('data.BTN_SHORTENURL')}</button>
                </div>
                <InputError message={errors.url} className="mt-2" />
            </form>
            <p className="text-sm-center pt-5 font-semibold text-gray-900 dark:text-white flex justify-center">{t('data.DESC_URLShortener_4')}</p>
        </div>
    );
};

export default URLShortener;
