self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    if (url.origin !== location.origin) {
        return;
    }

    event.respondWith(fetch(event.request));
});
