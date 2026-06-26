document.addEventListener('DOMContentLoaded', function() {
    setupCompareSection(
        'left-iframe', 
        'right-iframe', 
        '.viser-thumbnail', 
        'compare-description'
    );
    
    setupCompareSection(
        'left-iframe-das', 
        'right-iframe-das', 
        '.viser-thumbnail-das', 
        'compare-description-das'
    );
    
    setupCompareSection(
        'left-iframe-cut', 
        'right-iframe-cut', 
        '.viser-thumbnail-cut', 
        'compare-description-cut'
    );
    
    setupTripleFrameSection(
        'disentangle-iframe-full',
        'disentangle-iframe-static',
        'disentangle-iframe-dynamic',
        '.disentangle-thumbnail',
        'disentangle-description'
    );
    
    setupSingleFrameSection(
        'reconstruction-iframe',
        '.reconstruction-button'
    );
    
    function setupCompareSection(leftIframeId, rightIframeId, thumbnailSelector, descriptionId) {
        const leftIframe = document.getElementById(leftIframeId);
        const rightIframe = document.getElementById(rightIframeId);
        const thumbnails = document.querySelectorAll(thumbnailSelector);
        const compareDescription = document.getElementById(descriptionId);
        
        if (!leftIframe || !rightIframe || thumbnails.length === 0 || !compareDescription) {
            return;
        }
        
        // Remove direct style.border settings and initialize active class
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[0].classList.add('active');
        
        const leftViser = thumbnails[0].getAttribute('data-left-viser');
        const rightViser = thumbnails[0].getAttribute('data-right-viser');
        const description = thumbnails[0].getAttribute('data-description');
        
        leftIframe.src = `./build/?playbackPath=${leftViser}`;
        rightIframe.src = `./build/?playbackPath=${rightViser}`;
        compareDescription.textContent = description;
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const leftViser = this.getAttribute('data-left-viser');
                const rightViser = this.getAttribute('data-right-viser');
                const description = this.getAttribute('data-description');
                
                leftIframe.src = `./build/?playbackPath=${leftViser}`;
                rightIframe.src = `./build/?playbackPath=${rightViser}`;
                compareDescription.textContent = description;
            });
        });
    }
    
    function setupTripleFrameSection(fullIframeId, staticIframeId, dynamicIframeId, thumbnailSelector, descriptionId) {
        const fullIframe = document.getElementById(fullIframeId);
        const staticIframe = document.getElementById(staticIframeId);
        const dynamicIframe = document.getElementById(dynamicIframeId);
        const thumbnails = document.querySelectorAll(thumbnailSelector);
        const description = document.getElementById(descriptionId);
        
        if (!fullIframe || !staticIframe || !dynamicIframe || thumbnails.length === 0) {
            return;
        }
        
        // Remove direct style.border settings and initialize active class
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[0].classList.add('active');
        
        const fullViser = thumbnails[0].getAttribute('data-full-viser');
        const staticViser = thumbnails[0].getAttribute('data-static-viser');
        const dynamicViser = thumbnails[0].getAttribute('data-dynamic-viser');
        const desc = thumbnails[0].getAttribute('data-description');
        
        fullIframe.src = `./build/?playbackPath=${fullViser}`;
        staticIframe.src = `./build/?playbackPath=${staticViser}`;
        dynamicIframe.src = `./build/?playbackPath=${dynamicViser}`;
        
        if (description) {
            description.textContent = desc;
        }
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const fullViser = this.getAttribute('data-full-viser');
                const staticViser = this.getAttribute('data-static-viser');
                const dynamicViser = this.getAttribute('data-dynamic-viser');
                const desc = this.getAttribute('data-description');
                
                fullIframe.src = `./build/?playbackPath=${fullViser}`;
                staticIframe.src = `./build/?playbackPath=${staticViser}`;
                dynamicIframe.src = `./build/?playbackPath=${dynamicViser}`;
                
                if (description) {
                    description.textContent = desc;
                }
            });
        });
    }
    
    function setupSingleFrameSection(iframeId, thumbnailSelector) {
        const iframe = document.getElementById(iframeId);
        const thumbnails = document.querySelectorAll(thumbnailSelector);
        
        if (!iframe || thumbnails.length === 0) {
            return;
        }
        
        // Remove direct style.border settings and initialize active class
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[0].classList.add('active');
        
        const viserPath = thumbnails[0].getAttribute('data-viser');
        iframe.src = `./build/?playbackPath=${viserPath}`;
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const viserPath = this.getAttribute('data-viser');
                iframe.src = `./build/?playbackPath=${viserPath}`;
            });
        });
    }
});