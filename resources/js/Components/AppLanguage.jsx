import React from 'react';
import { useTranslation } from 'react-i18next';

function AppLanguage() {
    const { t, i18n } = useTranslation();

    return (
        <React.Fragment>
            {/*<h1>{t('title.config')}</h1>*/}
            <select
                className="App-language"
                name="language"
                value={i18n.language}
                onChange={e => i18n.changeLanguage(e.target.value)}
            >
                <option value="pt">{t('languages.pt')}</option>
                <option value="en">{t('languages.en')}</option>
                <option value="fr">{t('languages.fr')}</option>
            </select>
        </React.Fragment>
    );
}

export default AppLanguage;
