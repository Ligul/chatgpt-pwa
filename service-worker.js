self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Пропускайте любые запросы, которые не относятся к вашему сайту
  if (url.origin !== location.origin) {
    return;
  }

  event.respondWith(fetch(event.request));
});
