import {
    FacebookShareButton, FacebookIcon,
    PinterestShareButton, PinterestIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    TelegramShareButton, TelegramIcon,
    RedditShareButton, RedditIcon,
    LinkedinShareButton, LinkedinIcon
} from "react-share";

const SocialShareIcons = (shorturl) => {
    const Tags = ['#shorturl'];

    return (
        <>
            <div className="text-black-100 dark:text-white mt-5">
                <p>Share it on social networks</p>
            </div>

            <div className="flex mt-2">
                <div className="mr-2">
                    <FacebookShareButton
                        url={shorturl}
                        quote={'Short URL'}
                        hashtag={'#ShortURL'}>
                        <FacebookIcon size={40}/>
                    </FacebookShareButton>
                </div>
                <div className="mr-2">
                    <PinterestShareButton
                        url={shorturl}
                        media={shorturl}
                        description='test description'>
                        <PinterestIcon size={40}/>
                    </PinterestShareButton>
                </div>
                <div className="mr-2">
                    <TwitterShareButton
                        url={shorturl}
                        title='shorturl'
                        hashtags={Tags}>
                        <TwitterIcon size={40}/>
                    </TwitterShareButton>
                </div>
                <div className="mr-2">
                    <WhatsappShareButton
                        url={shorturl}
                        title='Hi please visit this link'
                        separator=" ">
                        <WhatsappIcon size={40}/>
                    </WhatsappShareButton>
                </div>
                <div className="mr-2">
                    <TelegramShareButton
                        url={shorturl}
                        title='Hi please visit this link'>
                        <TelegramIcon size={40}/>
                    </TelegramShareButton>
                </div>
                <div className="mr-2">
                    <RedditShareButton
                        url={shorturl}
                        title='Hi please visit this link'>
                        <RedditIcon size={40}/>
                    </RedditShareButton>
                </div>
                <div className="mr-2">
                    <LinkedinShareButton
                        url={shorturl}
                        title='Hi please visit this link'>
                        <LinkedinIcon size={40}/>
                    </LinkedinShareButton>
                </div>
            </div>
        </>
    )
}

export default SocialShareIcons;
