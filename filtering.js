// Tag filtering functionality for category pages
function initializeTagFiltering() {
    const cards = document.querySelectorAll('.content-card');
    const categories = document.querySelectorAll('.card-category');
    const tags = document.querySelectorAll('.tag');

    let activeFilter = null;

    // Function to filter cards
    function filterCards(filterValue, filterType) {
        cards.forEach(card => {
            let shouldShow = false;

            if (filterType === 'category') {
                const cardCategory = card.querySelector('.card-category');
                shouldShow = cardCategory && cardCategory.textContent.toLowerCase() === filterValue.toLowerCase();
            } else if (filterType === 'tag') {
                const cardTags = card.querySelectorAll('.tag');
                cardTags.forEach(tag => {
                    if (tag.textContent.toLowerCase() === filterValue.toLowerCase()) {
                        shouldShow = true;
                    }
                });
            }

            // Show/hide cards with smooth transition
            if (activeFilter === null || shouldShow) {
                card.style.display = 'flex';
                card.style.opacity = '1';
            } else {
                card.style.opacity = '0';
                setTimeout(() => {
                    if (activeFilter !== null) {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
    }

    // Function to reset all filters
    function resetFilters() {
        activeFilter = null;
        cards.forEach(card => {
            card.style.display = 'flex';
            card.style.opacity = '1';
        });

        // Remove active state from all clickable elements
        document.querySelectorAll('.card-category, .tag').forEach(el => {
            el.classList.remove('active-filter');
        });
    }

    // Make categories clickable
    categories.forEach(category => {
        category.style.cursor = 'pointer';
        category.addEventListener('click', (e) => {
            e.preventDefault();
            const filterValue = category.textContent;

            // Toggle filter
            if (activeFilter === filterValue) {
                resetFilters();
            } else {
                activeFilter = filterValue;
                filterCards(filterValue, 'category');

                // Update active state
                document.querySelectorAll('.card-category, .tag').forEach(el => el.classList.remove('active-filter'));
                category.classList.add('active-filter');
            }
        });
    });

    // Make tags clickable
    tags.forEach(tag => {
        tag.style.cursor = 'pointer';
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const filterValue = tag.textContent;

            // Toggle filter
            if (activeFilter === filterValue) {
                resetFilters();
            } else {
                activeFilter = filterValue;
                filterCards(filterValue, 'tag');

                // Update active state
                document.querySelectorAll('.card-category, .tag').forEach(el => el.classList.remove('active-filter'));
                tag.classList.add('active-filter');
            }
        });
    });

    // Add escape key to reset filters
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeFilter !== null) {
            resetFilters();
        }
    });
}

// Category linking for home page
function initializeHomePageCategories() {
    const categories = document.querySelectorAll('.card-category');

    const categoryMap = {
        'essay': 'essays.html',
        'film': 'movies.html',
        'blog': 'blog.html'
    };

    categories.forEach(category => {
        const categoryText = category.textContent.toLowerCase();
        const targetPage = categoryMap[categoryText];

        if (targetPage) {
            category.style.cursor = 'pointer';
            category.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = targetPage;
            });
        }
    });
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

    if (isHomePage) {
        initializeHomePageCategories();
    } else {
        initializeTagFiltering();
    }
});
