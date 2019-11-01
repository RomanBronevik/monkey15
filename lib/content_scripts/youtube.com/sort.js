items = document.querySelectorAll('ytd-grid-video-renderer');

[...items]
    .sort((item1, item2) => {
        t1 = item1.querySelector('ytd-thumbnail-overlay-time-status-renderer').innerText.split(':');
        t2 = item2.querySelector('ytd-thumbnail-overlay-time-status-renderer').innerText.split(':');
        if (t1.length !== t2.length) {
            return t1.length - t2.length
        } else {
            for (i = 0; i <= t1.length; i++) {
                if (t1[0] !== t2[0]) {
                    return t1[0] - t2[0];
                }
            }
        }
    })
    .map((item) => {
        items[0].parentElement.appendChild(item);
    });