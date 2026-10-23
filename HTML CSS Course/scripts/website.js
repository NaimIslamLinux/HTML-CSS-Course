import { videos } from '../data/videos.js';
import { channels } from '../data/channels.js';

function renderVideoGrid() {
    const videoGridEl = document.querySelector('.js-video-grid');
    
    let htmlStructure = ``;

    videos.forEach( video => {
        
        let channelImg = ``;
        let channelName = ``;
        let channelVerificationHtml = ``;
        channels.forEach( channel => {
            if(video.channelId === channel.id) {
                channelImg = channel.image;
                channelName = channel.name;
                if(channel.verified) {
                channelVerificationHtml = `
                <img class="channel-verified-icon" src="images/icons/circle-check-solid-full.svg"> 
                `;
                }
            }
        })

        htmlStructure += `
        <div class="video-preview">
            <div class="video-timeline">
            ${video.duration}
            </div>
            <img class="video-thumbnail" src="${video.thumbnail}">
            <div class="video-info">
                <img class="channel-picture" src="${channelImg}">
            <div class="video-description">
                <p class="video-title">${video.title}</p>
                <div class="video-state">
                <p class="video-aouth">
                   ${channelName} ${channelVerificationHtml}
                </p>
                <p class="video-view-and-date">
                    
                    <span class="view">${video.views}
                    </span>
                    <span class="date">${video.uploaded}
                    </span>
                </p>
                </div>
            </div>
            </div>
        </div>
        `;
    });

    videoGridEl.innerHTML = htmlStructure;
}

renderVideoGrid();