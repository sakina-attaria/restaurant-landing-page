// ================= MOBILE MENU =================

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


// ================= DYNAMIC MENU =================

const menuItems = [
    {
        name: "Classic Pancakes",
        category: "breakfast",
        price: "$8",
        rating: "★★★★★",
        description: "Fluffy pancakes served with fresh fruits and maple syrup.",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Creamy Pasta",
        category: "lunch",
        price: "$14",
        rating: "★★★★★",
        description: "Creamy Italian pasta prepared with herbs and parmesan.",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Grilled Steak",
        category: "dinner",
        price: "$24",
        rating: "★★★★★",
        description: "Juicy grilled steak served with fresh vegetables.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Classic Burger",
        category: "fastfood",
        price: "$11",
        rating: "★★★★★",
        description: "Juicy beef burger served with crispy fries.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Chocolate Cake",
        category: "dessert",
        price: "$7",
        rating: "★★★★★",
        description: "Rich chocolate cake with creamy chocolate frosting.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80"
    },

    {
        name: "Fresh Salad",
        category: "lunch",
        price: "$10",
        rating: "★★★★☆",
        description: "Fresh seasonal vegetables with our special dressing.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
    }
];

const menuContainer = document.getElementById("menuContainer");

function displayMenu(category = "all") {

    menuContainer.innerHTML = "";

    const filteredItems =
        category === "all"
            ? menuItems
            : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {

        const card = document.createElement("div");

        card.className = "food-card";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">

            <div class="food-info">

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <div class="food-bottom">

                    <span class="price">${item.price}</span>

                    <span class="rating">${item.rating}</span>

                </div>

            </div>
        `;

        menuContainer.appendChild(card);
    });
}

displayMenu();


// ================= MENU FILTER =================

function filterMenu(category) {

    displayMenu(category);

    document.querySelectorAll(".filter").forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");
}


// ================= COUNTDOWN TIMER =================

const offerDate = new Date();

offerDate.setDate(offerDate.getDate() + 3);

offerDate.setHours(23, 59, 59, 0);

function updateCountdown() {

    const now = new Date().getTime();

    const distance = offerDate.getTime() - now;

    if (distance <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);

updateCountdown();


// ================= GALLERY LIGHTBOX =================

const galleryImages = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=90",

    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90",

    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=90",

    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=90",

    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=90",

    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90"
];

let currentImage = 0;

function openLightbox(index) {

    currentImage = index;

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage];

    document.getElementById("lightbox").classList.add("show");
}

function closeLightbox() {

    document.getElementById("lightbox").classList.remove("show");
}

function nextImage() {

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage];
}

function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage];
}


// ================= TESTIMONIAL SLIDER =================

const reviews = [

    {
        name: "Sarah Khan",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: "★★★★★",
        review: "Amazing food and beautiful atmosphere. Everything was fresh and delicious!"
    },

    {
        name: "Ahmed Ali",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: "★★★★★",
        review: "One of the best restaurants I have visited. The service was excellent!"
    },

    {
        name: "Ayesha Malik",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: "★★★★☆",
        review: "Beautiful place, friendly staff and absolutely delicious food."
    }
];

let currentReview = 0;

function showReview() {

    const review = reviews[currentReview];

    document.getElementById("customerName").innerText =
        review.name;

    document.getElementById("customerImage").src =
        review.image;

    document.getElementById("customerRating").innerText =
        review.rating;

    document.getElementById("customerReview").innerText =
        `"${review.review}"`;
}

function nextReview() {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview();
}

function previousReview() {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview();
}

setInterval(nextReview, 5000);


// ================= RESERVATION MODAL =================

function openReservation() {

    document.getElementById("reservationModal")
        .classList.add("show");
}

function closeReservation() {

    document.getElementById("reservationModal")
        .classList.remove("show");
}


// Close reservation modal when clicking outside

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("reservationModal");

    if (event.target === modal) {
        closeReservation();
    }
});


// ================= RESERVATION FORM VALIDATION =================

document.getElementById("reservationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const guests =
            document.getElementById("guests").value;

        const message =
            document.getElementById("reservationMessage");

        if (
            !name ||
            !email ||
            !phone ||
            !date ||
            !time ||
            !guests
        ) {

            message.style.color = "red";

            message.innerText =
                "Please fill in all required fields.";

            return;
        }

        message.style.color = "green";

        message.innerText =
            "✓ Your reservation has been successfully submitted!";

        this.reset();
    });


// ================= CONTACT FORM =================

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const subject =
            document.getElementById("contactSubject").value.trim();

        const message =
            document.getElementById("contactMessage").value.trim();

        const result =
            document.getElementById("contactMessageResult");

        if (!name || !email || !subject || !message) {

            result.style.color = "red";

            result.innerText =
                "Please complete all fields.";

            return;
        }

        result.style.color = "green";

        result.innerText =
            "✓ Your message has been sent successfully!";

        this.reset();
    });


// ================= BACK TO TOP =================

window.addEventListener("scroll", function() {

    const topButton =
        document.getElementById("topButton");

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");
    }
});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================= SCROLL REVEAL ANIMATION =================

const revealElements =
    document.querySelectorAll(
        ".section, .food-card, .service-card, .review-card"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        },
        {
            threshold: 0.1
        }
    );

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);
});
