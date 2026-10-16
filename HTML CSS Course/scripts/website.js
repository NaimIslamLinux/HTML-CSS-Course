import { videos } from '../data/videos.js';
import { channels } from '../data/channels.js';

function renderVideoGrid() {
    const videoGridEl = document.querySelector('.js-video-grid');
    
    let htmlStructure = ``;

    videos.forEach( video => {
        
        let channelImg = ``;
        let channelName = ``;
        channels.forEach( channel => {
            if(video.channelId === channel.id) {
                channelImg = channel.image;
                channelName = channel.name;
            }
        })

        htmlStructure += `
        <div class="video-preview">
            <img class="video-thumbnail" src="${video.thumbnail}">
            <div class="video-info">
                <img class="channel-picture" src="${channelImg}">
            <div class="video-description">
                <p class="video-title">${video.title}</p>
                <div class="video-state">
                <p class="video-aouth">
                   ${channelName}
                </p>
                <p class="video-view-and-date">
                    <span class="view">${video.views}
                    </span> &middot; <span class="date">${video.uploaded}
                    </span>
                </p>
                </div>
            </div>
            </div>
        </div>
        `;
        console.log(channelImg);
    });

    videoGridEl.innerHTML = htmlStructure;
}

renderVideoGrid();