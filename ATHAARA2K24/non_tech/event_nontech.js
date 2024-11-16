let items = document.querySelectorAll('.slider .item');
let active = 3;

function loadShow() {
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    let stt = 0;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    
    stt = 0;
    for (let i = (active - 1); i >= 0; i--) {
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
const autoplayInterval = 1510;
let autoplay = setInterval(showNext, autoplayInterval);

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

const rulesAndRegulations = {
    1: {
        title: 'SINGING - Rules and Regulations',
        rules: [
            'Individual participant only',
            'Instruments can be brought by own',
            'Karaoke can be used',
            'Time limit is 5 minutes',
            'Judging will be based on voice clarity and presentation'
        ]
    },
    2: {
        title: 'TREASURE HUNT - Rules and Regulations',
        rules: [
            'Maximum of 2 members for a team',
            'No outside help allowed',
            'Use of mobile phones is restricted',
            'Complete the hunt within 45 minutes',
            'Judgment is based on the time taken for finding the treasure'
        ]
    },
    3: {
        title: 'FACE PAINTING - Rules and Regulations',
        rules: [
            'Theme: Own Topic',
            'Use non-toxic paints only',
            'Time limit is 30 minutes',
            'Judging based on creativity and neatness'
        ]
    },
    4: {
        title: 'CRAFT FROM ART - Rules and Regulations',
        content: 'Create a craft using art supplies.',
        rules: [
            'Maximum 2 members in the team ',
            'Craft should be completed within 1 hours',
            'Creativity and presentation are key',
            'Participants must brirng thier required art & craft supplies',
            'Final craft to be submitted for judging'
        ]
    },
    5: {
        title: 'STYLE ICON - Rules and Regulations',
        content: 'Theme : Traditional Costumes of India and Corporate Culture',
       
                rules: [
                   ' Theme: Traditional Costumes of India',
                    'Group participation',
                    'A Group consist of 6 members',
                    'Dressing should be appropriate',
                    'Your creativity plays a major part here in your appearance.',
                     'Theme: Corporate Culture',
                      'Individual participant only',
                    'Dressing should be appropriate'
                ]
        
    },
    6: {
        title: 'MIME - Rules and Regulations',
        content: 'Express yourself through mime.',
        rules: [
            'Per team Max 6 members',
            'Duration: 5 minutes',
            'No props allowed',
            'Judging based on expression and creativity'
        ]
    },
    7: {
        title: 'MINI MASTERPIECE - Rules and Regulations',
        content: 'Create a mini masterpiece.',
        rules: [
            
            'Materials provided',
            'Time limit: 06-10 minutes',
            'Creativity and originality are important',
            'Every team member must take an active role in the short film,such as Direction,Acting,Scriptwriting,Cinematography,Editing or any other part of the production',
            'Final masterpiece to be presented'
        ]
    },
    8: {
        title: 'PHOTOGRAPHY - Rules and Regulations',
        content: 'Capture the best moments with your camera.',
        rules: [
            'Individual participation',
            '20-30 mins will be given to take photos',
            'No editing allowed',
            'Submit original photographs',
            'Categories: Nature, Portrait, and Abstract',
            'Judging based on composition and creativity',
            'Only one pic allowed and it should be converted as a PDF file before submission.'
        ]
    },
    9: {
        title: 'Quiz - Rules and Regulations',
        content: 'Find words by connecting images.',
        rules: [
            'Group of 3 members',
            'Each member must contribute',
            'Time limit: 30 minutes',
            'No external help allowed'
        ]
    },
    10: {
        title: 'FIRELESS COOKING - Rules and Regulations',
        content: 'Prepare a dish without using fire.',
        rules: [
            'Group of 3-5 members',
            'Ingredients will not be provided..Participants must bring all requirements',
            'Time limit: 60 minutes',
            'Creativity in presentation counts',
            'Judging based on taste and presentation'
        ]
    },
    11: {
        title: 'YOGA - Rules and Regulations',
        content: 'Show your yoga skills.',
        rules: [
            'Individual participation',
            'Perform 5 different asanas',
            'Time limit: 10 minutes',
            'Judging based on posture and grace'
        ]
    }
};

// Add images for each event
const eventImages = {
    1: 'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293817/symposium/Singing_dfu7yl.jpg',
    2: 'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293831/symposium/treasure_gotauv.jpg',
    3: 'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293799/symposium/face_painting_xnmods.jpg',
    4: 'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293828/symposium/art_k2gsfr.jpg',
    5: '../images/styleicon.jpeg',
    6: 'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293834/symposium/mime_ohxwyz.jpg',
    7: '../images/masterpiece.jpeg',
    8: 'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293821/symposium/photography_cqans1.jpg',
    9: '../images/quiz.png',
    10:'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293797/symposium/fireless_cooking_faercs.jpg',
    11:'https://res.cloudinary.com/dqmnttqru/image/upload/v1725293822/symposium/yoga_axjksw.jpg'

};

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
// Close modal functionality
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
