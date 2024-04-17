import React, { useState } from 'react';
import {useForm } from "@inertiajs/react";
import InputError from "./InputError";

const URLShortener = () => {
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
            <h1 className="text-2xl pb-5 font-semibold text-gray-900 dark:text-white flex justify-center">Paste the URL to be shortened</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center">
                    <input type="text"
                           id="url"
                           name="url"
                           onChange={(e) => setData("url", e.target.value)}
                           className="flex-1 px-4 py-2 border border-gray-300"/>
                        <button type="submit" className="px-4 py-2.5 bg-blue-500 text-white">Shorten URL</button>
                </div>
                <InputError message={errors.url} className="mt-2" />
            </form>
            <p className="text-sm-center pt-5 font-semibold text-gray-900 dark:text-white flex justify-center">A URL shortener tool condenses long web addresses into shorter, more manageable links. These abbreviated URLs are easier to share, especially on platforms with character limits like Twitter, and they often provide analytics to track clicks and engagement.</p>
        </div>
    );
};

export default URLShortener;
