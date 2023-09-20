import type { PlasmoCSConfig } from 'plasmo';

export const config: PlasmoCSConfig = {
  matches: ["http://www.youtube.com/*, https://www.youtube.com/*"]
}

const hideFeed = document.createElement('style');
hideFeed.textContent = '#contents { visibility: hidden; width: 0px; height: 0px; }';
document.head.appendChild(hideFeed);
console.log(
  "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
);

window.addEventListener('load', () => {
  console.log('extension runs');
});