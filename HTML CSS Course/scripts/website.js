import { renderVideoGrid } from '../scripts/render-video.js';
import { loadVideos } from '../data/videos.js';

const suggetionButtonEl = document.querySelectorAll('.suggestion-button');

suggetionButtonEl.forEach(button => {
  button.addEventListener('click', () => {
    const activeButtonEl = document.querySelector('.active');
    
    activeButtonEl.classList.remove('active');
    button.classList.add('active');
  })
})

const searchInputEl = document.querySelector('.js-search-box');
const searchIconEl = document.querySelector('.js-search-icon');

searchInputEl.addEventListener('keydown', (event) => {
  if(event.key === "Enter") {
    window.location.href = `website.html?search=${searchInputEl.value}`;
  }
})
searchIconEl.addEventListener('click', (event) => {
  window.location.href = `website.html?search=${searchInputEl.value}`;
});

function renderWebsite() {
  renderVideoGrid(loadVideos());
};

renderWebsite();