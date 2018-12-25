let whiteList = {
    'iframe': {
        'hosts': [
            '.local',
            'samolet.',
            'onedrive.live.com',
            '.google.com'
        ],
        'hrefs': [
            '/bitrix/admin/'
        ],
        // don't ban iframes from certain resources
        'iframe_urls': [
            /^https:\/\/www.youtube.com\//,
            /google\.com\/recaptcha/,
            /yandex\.ru\/map/
        ]
    }
};

(new Promise((resolve) => {
    resolve();
}))
    .then(() => {
        for (let host of whiteList.iframe.hosts) {
            if (window.location.host.includes(host)) {
                throw new Error('whitelisted host');
            }
        }
    })
    .then(() => {
        for (let href of whiteList.iframe.hrefs) {
            if (window.location.href.search(href) > -1) {
                throw new Error('whitelisted url');
            }
        }
    })
    .then(() => {
        document.querySelectorAll('iframe').forEach((iframe) => {
            for (let url of whiteList.iframe.iframe_urls) {
                if (iframe.src.search(url) > -1) {
                    return false;
                }
            }
            iframe.remove();
        });
    })
    .catch((e) => {
        console.error(e);
    });