import { renderVideoGrid } from '../scripts/render-video.js';
import { loadVideos } from '../data/videos.js';

const searchInputEl = document.querySelector('.js-search-box');
const searchIconEl = document.querySelector('.js-search-icon');

searchIconEl.addEventListener('click', (event) => {
  window.location.href = `website.html?search=${searchInputEl.value}`;
});

function renderWebsite() {
  renderVideoGrid(loadVideos());
};

renderWebsite();