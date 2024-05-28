import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarChart, faBookmark, faSquareCheck, faStar, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faLaptop} from "@fortawesome/free-solid-svg-icons";

const URLShortnerBenefits = () => {
    return (
        <>
            <div className="text-gray-900 dark:text-white mt-10">
                <h2 className="text-2xl font-bold mb-4">Shorten, share and track</h2>
                <p className="mb-6">Your shortened URLs can be used in publications, documents,
                    advertisements, blogs, forums, instant messages, and other locations. Track statistics
                    for your business and projects by monitoring the number of hits from your URL with our
                    click counter.
                </p>
            </div>
            <div id="row" className="flex justify-center text-gray-900 dark:text-white mt-10">
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">Easy</h3>
                    <p className="text-center">ShortURL is easy and fast, enter the long link to get your shortened link</p>
                </div>
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faSquareCheck} />


                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">Shortened</h3>
                    <p className="text-center">Use any link, no matter what size, ShortURL always
                        shortens</p>
                </div>
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faStar} />

                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">Secure</h3>
                    <p className="text-center">It is fast and secure, our service has HTTPS protocol and
                        data encryption</p>
                </div>
            </div>
            <div id="row" className="flex justify-center text-gray-900 dark:text-white mt-10">
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faBarChart} />
                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">Statistics</h3>
                    <p className="text-center">Check the number of clicks that your shortened URL
                        received</p>
                </div>
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">Reliable</h3>
                    <p className="text-center">All links that try to disseminate spam, viruses and
                        malware are deleted</p>
                </div>
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faLaptop} />
                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">Devices</h3>
                    <p className="text-center">Compatible with smartphones, tablets and desktop</p>
                </div>
            </div>
        </>
    );
};

export default URLShortnerBenefits;
