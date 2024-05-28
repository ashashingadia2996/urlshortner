import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarChart, faBookmark, faSquareCheck, faStar, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faLaptop} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';
const URLShortnerBenefits = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="text-gray-900 dark:text-white mt-10">
                <h2 className="text-2xl font-bold mb-4">{t('data.LBL_BENEFITS')}</h2>
                <p className="mb-6">{t('data.DESC_BENEFITS')}
                </p>
            </div>
            <div id="row" className="flex justify-center text-gray-900 dark:text-white mt-10">
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">{t('data.LBL_EASY')}</h3>
                    <p className="text-center">{t('data.DESC_EASY')}</p>
                </div>
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faSquareCheck} />


                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">{t('data.LBL_SHORTENED')}</h3>
                    <p className="text-center">{t('data.DESC_SHORTENED')}</p>
                </div>
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faStar} />

                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">{t('data.LBL_SECURE')}</h3>
                    <p className="text-center">{t('data.DESC_SECURE')}</p>
                </div>
            </div>
            <div id="row" className="flex justify-center text-gray-900 dark:text-white mt-10">
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faBarChart} />
                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">{t('data.LBL_STATS')}</h3>
                    <p className="text-center">{t('data.DESC_STATS')}</p>
                </div>
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">{t('data.LBL_RELIABLE')}</h3>
                    <p className="text-center">{t('data.DESC_RELIABLE')}</p>
                </div>
                <div id="column" className="col-4 text-center">
                    <div className="icon flex items-center justify-center mb-2">
                        <FontAwesomeIcon icon={faLaptop} />
                    </div>
                    <h3 className="text-center text-lg font-semibold mb-2">{t('data.LBL_DEVICES')}</h3>
                    <p className="text-center">{t('data.DESC_DEVICES')}</p>
                </div>
            </div>
        </>
    );
};

export default URLShortnerBenefits;
