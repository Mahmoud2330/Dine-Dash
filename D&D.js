document.getElementById("learnMoreBtn").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("about").offsetTop,
        behavior: "smooth"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const homeSection = document.getElementById('home');
    const icons = [
        { class: 'fas fa-receipt', size: 180 },
        { class: 'fas fa-wallet', size: 230 },
        { class: 'fas fa-money-bill-wave', size: 200 },
        { class: 'fas fa-credit-card', size: 220 },
        { class: 'fas fa-coins', size: 190 },
        { class: 'fas fa-money-check-alt', size: 210 }, 
        { class: 'fas fa-calculator', size: 240 },     
        { class: 'fas fa-users', size: 240 }
    ];

    // New balanced positions for each icon (spread across the screen)
    const positions = [
        { left: 15, top: 15 }, // Top-left RECEIPT
        { left: 65, top: 20 }, // Top-right WALLET
        { left: 30, top: 60 }, // Bottom-left MONEY BILL
        { left: 60, top: 70 }, // Bottom-right CREDIT CARD
        { left: 5, top: 40 }, // Center COINS
        { left: 10, top: 80 }, // Bottom-left corner MONEY CHECK
        { left: 90, top: 35 },  // Top-right corner CALCULATOR
        { left: 40, top: 5 } // Top Center USERS
    ];

    // Generate one large icon for each type with new balanced positions and fixed sizes
    icons.forEach((icon, i) => {
        let receipt = document.createElement('div');
        receipt.classList.add('receipt');

        // Set the icon and apply predefined sizes
        receipt.innerHTML = `<i class="${icon.class}"></i>`;
        receipt.style.fontSize = `${icon.size}px`; // Apply predefined size for each icon

        // Apply new balanced positions (vw, vh units)
        const leftPosition = positions[i].left;
        const topPosition = positions[i].top;
        receipt.style.left = `${leftPosition}vw`;
        receipt.style.top = `${topPosition}vh`;

        homeSection.appendChild(receipt);
    });

    // Smooth scroll effect
    let lastScrollTop = 1;
    window.addEventListener('scroll', function () {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        document.querySelectorAll('.receipt').forEach(function (receipt) {
            let scrollDiff = currentScrollTop - lastScrollTop;
            receipt.style.transform = `translateY(${scrollDiff * 5}px)`; // Adjust multiplier for smooth movement
        });

        lastScrollTop = currentScrollTop; // Update last scroll position
    });
});
