import { videos } from '../data/videos.js';
import { channels } from '../data/channels.js';

function renderVideoGrid() {
    const videoGridEl = document.querySelector('.js-video-grid');
    
    let htmlStructure = ``;

    videos.forEach( video => {
        
        let channelImg = ``;
        let channelName = ``;
        let channelVerificationHtml = ``;
        let videoTypeHtml = ``;
        channels.forEach( channel => {
            if(video.channelId === channel.id) {
                channelImg = channel.image;
                channelName = channel.name;
                if(channel.verified) {
                channelVerificationHtml = `
                <img src="images/icons/circle-check-solid-full.svg" alt="Channel verification icon" class="channel-verified-icon">
                `;
                }
            }
        })
        if(video.type === 'video') {
            videoTypeHtml = `<img src="images/icons/play-solid-full.svg" alt="Video cetagory icon" class="video-badge-icon">`;
        }

        htmlStructure += `
        <div class="video-preview">
        <div class="main-content">
      <div class="thumbnail-section">
        <img src="${video.thumbnail}" alt="YouTube Video" class="video-thumbnail">
        <p class="video-timestamp">
          ${video.duration}
        </p>
      </div>

      <div class="video-info">
        <img src="${channelImg}" alt="Channel Picture" class="channel-picture">
        <div class="video-state">
          <p class="video-title">
            ${video.title}
          </p>
          <div class="video-metadata">
            <span class="channel-name">${channelName}</span>
            ${channelVerificationHtml}
            ${videoTypeHtml}
            <span class="video-views">
              ${video.views}
            </span>
            <span class="video-updoad-duration">
              ${video.uploaded}
            </span>
          </div>
        </div>
        <img src="images/icons/dot-menu-horizontal-solid-full.svg" alt="Video menu icon" class="video-menu-icon">
      </div>
      </div>
      </div>
        `;
    });

    videoGridEl.innerHTML = htmlStructure;
}

renderVideoGrid();