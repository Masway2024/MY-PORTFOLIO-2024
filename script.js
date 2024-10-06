document.addEventListener('DOMContentLoaded', function () {
    // Scroll to specific section when a navbar link is clicked
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Add active class for highlighting the current section link
            document.querySelectorAll('.nav-item a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Show or hide contact form when 'Contact Me' button is clicked
    const contactButton = document.getElementById('contact-button');
    const contactForm = document.getElementById('contact-form');

    if (contactButton && contactForm) {
        contactButton.addEventListener('click', function () {
            contactForm.style.display = contactForm.style.display === 'block' ? 'none' : 'block';
        });

        // Close contact form when 'Close' button is clicked
        const closeButton = document.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                contactForm.style.display = 'none';
            });
        } else {
            console.error("Close button not found");
        }
    }

    // WhatsApp button functionality (open WhatsApp chat in new tab)
    const whatsappButton = document.getElementById('whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function () {
            const phoneNumber = "+254798864786"; // Replace with your WhatsApp number
            const message = "Hello, I'm interested in connecting!";
            const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        });
    }

    // CV download button functionality
    const cvButton = document.getElementById('cv-button');
    if (cvButton) {
        cvButton.addEventListener('click', function () {
            window.open('your_cv_link_here', '_blank'); // Replace with your actual CV link
        });
    }

    // Chat with AI button functionality
    const chatAiButton = document.getElementById('chat-ai-button');
    if (chatAiButton) {
        chatAiButton.addEventListener('click', function () {
            alert('Chat with AI feature is under development. Stay tuned!');
            // Further AI chat functionality can be implemented here as per your requirements.
        });
    }

    // Form submission event handler
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission
            alert('Thank you for contacting me! I will get back to you soon.');
            // Further form submission actions can be implemented here (e.g., sending an email).
        });
    }

    // Scroll effect for highlighting current section on the navbar
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-item a');

        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Simple AI chat simulation
    let aiResponses = [
        "Hello! How can I assist you today?",
        "What would you like to learn more about?",
        "Feel free to ask me anything related to tech, AI, or productivity.",
        "I'm here to help you with any questions you have."
    ];

    function getRandomResponse() {
        return aiResponses[Math.floor(Math.random() * aiResponses.length)];
    }

    // Chat AI button functionality
    if (chatAiButton) {
        chatAiButton.addEventListener('click', function () {
            const response = getRandomResponse();
            alert(response); // Simulate chat AI response
        });
    }
});
contactButton.addEventListener('click', function () {
    console.log("Contact Me button clicked!"); // Debug log
    contactForm.style.display = contactForm.style.display === 'block' ? 'none' : 'block';
});
// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const chatButton = document.getElementById('chat-button');
    const chatBox = document.getElementById('chat-box');
    const closeChatButton = document.querySelector('.close-chat');
    const sendChatButton = document.getElementById('send-chat');
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.getElementById('chat-input');

    // Function to toggle the chat box display
    chatButton.addEventListener('click', function () {
        chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
    });

    // Close chat box
    if (closeChatButton) {
        closeChatButton.addEventListener('click', function () {
            chatBox.style.display = 'none';
        });
    }

    // Send chat message
    sendChatButton.addEventListener('click', function () {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            // Display user's message
            const userMessageElement = document.createElement('div');
            userMessageElement.classList.add('user-message');
            userMessageElement.textContent = userMessage;
            chatMessages.appendChild(userMessageElement);

            // Clear the input field
            chatInput.value = '';

            // Simulate AI response after a short delay
            setTimeout(() => {
                const aiResponse = getRandomResponse();
                const aiMessageElement = document.createElement('div');
                aiMessageElement.classList.add('ai-message');
                aiMessageElement.textContent = aiResponse;
                chatMessages.appendChild(aiMessageElement);
            }, 1000); // AI response after 1 second
        }
    });

    // Simple AI responses
    let aiResponses = [
        "Hello! How can I assist you today?",
        "What would you like to learn more about?",
        "Feel free to ask me anything related to tech, AI, or productivity.",
        "I'm here to help you with any questions you have."
    ];

    function getRandomResponse() {
        return aiResponses[Math.floor(Math.random() * aiResponses.length)];
    }
});

    // WhatsApp button functionality
    document.getElementById('whatsapp-button').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const phoneNumber = "+254798864786"; // Replace with your WhatsApp number
        const message = "Hello, I'm interested in connecting!";
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    });

    // CV download button functionality
    document.getElementById('cv-button').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        window.open('your_cv_link_here', '_blank'); // Replace with your actual CV link
    });

    // Chat button functionality
    document.getElementById('chat-button').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const chatBox = document.getElementById('chat-box');
        if (chatBox) {
            chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
            chatBox.querySelector('#chat-input').focus(); // Focus on input field when chat opens
        }
    });

    // Close chat box functionality
    document.getElementById('close-chat').addEventListener('click', function () {
        const chatBox = document.getElementById('chat-box');
        if (chatBox) {
            chatBox.style.display = 'none'; // Hide the chat box
        }
    });
// Smooth scrolling to specific section
document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        // Highlight active link
        document.querySelectorAll('.nav-item a').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// WhatsApp button functionality
function openWhatsApp() {
    const phoneNumber = "+254798864786"; // Replace with your WhatsApp number
    const message = "Hello, I'm interested in connecting!";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// Highlight current section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-item a');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});



