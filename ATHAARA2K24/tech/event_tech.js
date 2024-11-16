let items = document.querySelectorAll('.slider .item');
let active = 3;

function loadShow() {
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    let stt = 0;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    
    stt = 0;
    for (var i = (active - 1); i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

function showNext() {
    active = active + 1 < items.length ? active + 1 : 0;
    loadShow();
}

function showPrev() {
    active = active - 1 >= 0 ? active - 1 : items.length - 1;
    loadShow();
}

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = showNext;
prev.onclick = showPrev;

// Autoplay interval
const autoplayInterval = 1500; 
let autoplay = setInterval(showNext, autoplayInterval);

// Reset autoplay timer when user manually navigates
next.onclick = function() {
    showNext();
    resetAutoplay();
}

prev.onclick = function() {
    showPrev();
    resetAutoplay();
}

function resetAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(showNext, autoplayInterval);
}

// Modal functionality
let modal = document.getElementById('modal');
let closeModal = document.getElementById('close-modal');
let moreDetailsBtns = document.querySelectorAll('.more-details-btn');

// Rules and Regulations data for each slide
const rulesAndRegulations = {
    1: {
        title: 'Website Creation - Rules and Regulations',
        rules: [
            'Maximum 2 members per team',
            'Design a website related to the given topic',
            'Time duration: 45 minutes',
            'Judges will make the final decision',
            'Usage of USB drives is prohibited'
        ]
    },
    2: {
        title: 'DEBUGGING - Rules and Regulations',
        rules: [
            'A team should consist of maximum 2 members',
            'Any programming language will be given(Java,Python,C,C++) ',
            'Unfair means will lead to disqualification',
            'Usage of mobile phones is prohibited',
            'Internet will not be provided'
        ]
    },
    3: {
        title: 'IDEATHON- Rules and Regulations',
        rules: [
            'Either individual or group participation',
            'A Group consist of maximum 2 participants',
            'Participant should bring their projects',
            'Maximum duration of presentation will be 15 minutes ',
            'Any kind of unfair means will lead to disqualification'
        ]
    },
    4: {
        title: 'POST CARD PRESENTATION - Rules and Regulations',
        rules: [
            'Team of 2 members',
            'PPT should be based on theme',
            'Each team can take 10-15 minutes to explain their presentation'
        ]
    },
    5: {
        title: 'HARDWARE ASSEMBLY - Rules and Regulations',
        rules: [
            'Induvidual participant only',
            'Time will be based on the devices',
            'Participants should be able to assemble the given devices and operate it.'
        ]
    },
    6: {
        title: 'LOGO CREATION - Rules and Regulations',
        rules: [
            'Individual participation',
            'Design a logo based on the provided brief',
            'Judged on creativity and relevance to the theme'
        ]
    },
     7: {
        title: 'CODING CLUB - Rules and Regulations',
        rules: [
            'Individual participation',
            'Questions will be provided by the jury members',
            'Based on the questions, Participants make thier thier own logic programs by any programming language'
        ]
    },
}; 

// Add images for each event
const eventImages = {
    1: 'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293836/symposium/website_hplkd1.jpg',
    2: '../images/debug.jpeg',
    3: '../images/ideathon.jpeg',
    4: 'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293815/symposium/paper_presentation_eugql9.jpg',
    5: 'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293790/symposium/hardware_fdbsur.jpg',
    6: '../images/logo.jpeg',
    7:'../images/codingclub.jpeg'

};

// Handle modal opening
moreDetailsBtns.forEach(button => {
    button.onclick = function() {
        const slide = this.getAttribute('data-slide');

        // Clear previous content
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = '<span id="close-modal" class="close">&times;</span>';
        modalContent.style.backgroundColor = 'rgb(84,10,10)';


        // Create modal body container
        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';
        modalBody.style.display = 'flex'; // Use flexbox for layout
        modalBody.style.gap = '5px';    // Add gap between left and right sections
        modalBody.style.backgroundColor = 'rgb(84,10,10)';
        modalBody.style.color ='#fff'
        
        // Create left side for image
        const modalLeft = document.createElement('div');
        modalLeft.className = 'modal-left';
        modalLeft.style.flex = '1'; // Allow image section to take equal space
        const img = document.createElement('img');
        img.src = eventImages[slide];
        img.alt = 'Event Image';
        img.style.width = '100%'; // Responsive width
        img.style.height = 'auto'; // Maintain aspect ratio
        img.style.maxHeight = '300px'; // Maximum height
        img.style.objectFit = 'cover'; // Cover the container area
        modalLeft.appendChild(img);
        
        // Create right side for text content
        const modalRight = document.createElement('div');
        modalRight.className = 'modal-right';
        modalRight.style.flex = '1'; // Allow text section to take equal space
        const title = document.createElement('h2');
        title.textContent = rulesAndRegulations[slide].title;
        const content = document.createElement('p');
        content.textContent = rulesAndRegulations[slide].content;
        const rulesList = document.createElement('ul');
        rulesAndRegulations[slide].rules.forEach(rule => {
            let li = document.createElement('li');
            li.textContent = rule;
            rulesList.appendChild(li);
        });
        
        // Append text content to the right side
        modalRight.appendChild(title);
        modalRight.appendChild(content);
        modalRight.appendChild(rulesList);
        
        // Append left and right sides to modal body
        modalBody.appendChild(modalLeft);
        modalBody.appendChild(modalRight);
        
        // Append modal body to modal content
        modalContent.appendChild(modalBody);
        
        // Display the modal
        modal.style.display = 'block';

        // Handle modal closing
        document.getElementById('close-modal').onclick = function() {
            modal.style.display = 'none';
        };
    };
});
// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize the slider on page load
window.onload = loadShow;
