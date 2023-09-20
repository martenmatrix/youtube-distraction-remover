function hideFeed(document: Document): void {
  const contentContainer: HTMLElement = document.querySelector('#contents');
  contentContainer.style.width = '0px';
  contentContainer.style.height = '0px';
  contentContainer.style.visibility = 'hidden';
}

function showFeed(document: Document): void {
  const contentContainer: HTMLElement = document.querySelector('#contents');
  contentContainer.style.width = '100%';
  contentContainer.style.height = 'auto';
  contentContainer.style.visibility = 'visible';
}

export { hideFeed, showFeed };
