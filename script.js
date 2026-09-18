// =========================================================
// EASY EDITING AREA FOR YOUR FRIEND:
// Simply add, remove, or edit the sculpture items below.
// =========================================================

const sculpturesData = [
    {
        id: 1,
        title: "Eternal Flow",
        year: "2026",
        image: "sculpture1.jpg", // replace with image filename or link
        description: "A study of dynamic movement using carved marble and smooth wooden curves."
    },
    {
        id: 2,
        title: "Silent Presence",
        year: "2025",
        image: "sculpture2.jpg",
        description: "Exploration of human emotion through raw bronze textures and geometric lines."
    },
    {
        id: 3,
        title: "Structure & Soul",
        year: "2025",
        image: "sculpture3.jpg",
        description: "Monolithic stone sculpture exploring balance and spatial interaction."
    },
    {
        id: 4,
        title: "Fragments of Time",
        year: "2024",
        image: "sculpture4.jpg",
        description: "Mixed-media composition highlighting the erosion and beauty of natural elements."
    }
];

// =========================================================
// AUTOMATIC PORTFOLIO GENERATOR (NO NEED TO EDIT BELOW)
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    const yearFiltersContainer = document.getElementById("yearFilters");
    const galleryGrid = document.getElementById("galleryGrid");

    // Extract unique years and sort descending
    const years = ["All", ...new Set(sculpturesData.map(item => item.year))].sort((a, b) => b - a);

    // Render Year Filter Buttons
    function renderFilters() {
        yearFiltersContainer.innerHTML = years.map((year, index) => `
            <button class="filter-btn ${index === 0 ? 'active' : ''}" data-year="${year}">
                ${year}
            </button>
        `).join('');

        // Add Click Events
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const selectedYear = e.target.getAttribute('data-year');
                renderGallery(selectedYear);
            });
        });
    }

    // Render Sculpture Grid Cards
    function renderGallery(selectedYear = "All") {
        const filteredData = selectedYear === "All" || selectedYear === "NaN"
            ? sculpturesData 
            : sculpturesData.filter(item => item.year === selectedYear);

        galleryGrid.innerHTML = filteredData.map(item => `
            <div class="card">
                <div class="card-img-container">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="card-info">
                    <div class="card-meta">
                        <span class="card-year">${item.year}</span>
                    </div>
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-description">${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Initialize
    renderFilters();
    renderGallery();
});
