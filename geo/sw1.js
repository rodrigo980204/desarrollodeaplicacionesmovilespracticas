self.addEventListener('fetch', event => {
  event.responseWith(fetch(event.request));
});