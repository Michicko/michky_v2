export default function lazyLoad(images: NodeListOf<HTMLImageElement>) {
  for (let i = 0; i < images.length; i++) {
    let rect = images[i].getBoundingClientRect();
    if (
      images[i].hasAttribute("data-src") &&
      rect.bottom > 0 &&
      rect.top < window.innerHeight &&
      rect.right > 0 &&
      rect.left < window.innerWidth
    ) {
      const src = images[i].getAttribute("data-src");      
      if (!src) return;
      images[i].setAttribute("src", src);
      images[i].classList.add('loaded');
      images[i].removeAttribute("data-src");
    }
  }
}
