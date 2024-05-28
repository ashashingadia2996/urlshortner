import React from "react";
import {useForm} from "@inertiajs/react";

const RedirectToIndexBtn = ({btnText}) => {
    const {get} = useForm({});

    const redirectToURLShortner = () => {
        get(route('index'));
    }

    return (
        <>
            <button type="button"
                    className="px-4 py-2.5 bg-blue-500 text-white"
                    onClick={(e) => redirectToURLShortner()}
            >{btnText}</button>
        </>
    );
}
export default RedirectToIndexBtn;
