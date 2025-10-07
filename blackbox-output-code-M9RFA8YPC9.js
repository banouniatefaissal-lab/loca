// Sample car data
const cars = [
    {
        id: 1,
        name: 'Toyota Camry',
        image: 'https://via.placeholder.com/300x200?text=Toyota+Camry',
        description: 'Reliable sedan for city drives.',
        price: '$45/day'
    },
    {
        id: 2,
        name: 'Ford Mustang',
        image: 'https://via.placeholder.com/300x200?text=Ford+Mustang',
        description: 'Sporty convertible for fun rides.',
        price: '$80/day'
    },
    {
        id: 3,
        name: 'Honda CR-V',
        image: 'https://via.placeholder.com/300x200?text=Honda+CR-V',
        description: 'Spacious SUV for family trips.',
        price: '$60/day'
    },
    {
        id: 4,
        name: 'Tesla Model 3',
        image: 'https://via.placeholder.com/300x200?text=Tesla+Model+3',
        description: 'Electric sedan with autopilot.',
        price: '$100/day'
    }
];

// Populate cars on load
document.addEventListener('DOMContentLoaded', () => {
    const carsList = document.getElementById('carsList');
    cars.forEach(car => {
        const carCard = `
            <div class="car-card">
                <img src="${car.image}" alt="${car.name}">
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p>${car.description}</p>
                    <div class="car-price">${car.price}</div>
                    <button class="book-btn" onclick="bookCar(${car.id})">Book Now</button>
                </div>
            </div>
        `;
        carsList.innerHTML += carCard;
    });

    // Search form submission (simulates filtering)
    document.getElementById('searchForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const pickup = document.getElementById('pickupLocation').value;
        const dropoff = document.getElementById('dropoffLocation').value;
        const pickupDate = document.getElementById('pickupDate').value;
        const dropoffDate = document.getElementById('dropoffDate').value;

        if (pickup && dropoff && pickupDate && dropoffDate) {
            alert(`Searching for cars from ${pickup} to ${dropoff} on ${pickupDate} to ${dropoffDate}. (In a real app, this would filter results.)`);
            // Here, you could filter and re-render cars based on dates/locations
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Book car function (placeholder)
function bookCar(id) {
    alert(`Booking car ID: ${id}. (In a real app, this would redirect to a booking form.)`);
}