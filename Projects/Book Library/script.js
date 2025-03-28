// API Parameters
let currentQuery = '';
let currentPage = 1;
let maxResults = 10;
let isLoading = false;
let currentSort = 'title';
let viewMode = 'grid';
let searchTimeout;
let totalPages = 1;

// DOM Elements
const booksDisplay = document.getElementById('books-display');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();
    setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentQuery = searchInput.value.trim();
            resetAndFetch();
        }, 500);
    });

    // Sort select
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        resetAndFetch();
    });

    // View toggle
    gridViewBtn.addEventListener('click', () => {
        setViewMode('grid');
    });

    listViewBtn.addEventListener('click', () => {
        setViewMode('list');
    });

    // Pagination buttons
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchBooks();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchBooks();
        }
    });
}

// Set view mode (grid or list)
function setViewMode(mode) {
    viewMode = mode;
    
    if (mode === 'grid') {
        booksDisplay.className = 'books-grid';
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    } else {
        booksDisplay.className = 'books-list';
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    }

    // Update existing book cards
    document.querySelectorAll('.book-card').forEach(card => {
        if (mode === 'grid') {
            card.className = 'book-card book-card-grid';
        } else {
            card.className = 'book-card book-card-list';
        }
    });
}

// Fetch books from the API
function fetchBooks() {
    if (isLoading) return;
    
    isLoading = true;
    
    // Construct API URL with current query, page, and sort
    const apiUrl = `https://api.freeapi.app/api/v1/public/books?page=${currentPage}&limit=${maxResults}&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=${encodeURIComponent(currentQuery)}&sort=${currentSort}`;
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(response => {
            isLoading = false;
            
            const data = response.data;
            
            // Check if we have books
            if (!data.data || data.data.length === 0) {
                booksDisplay.innerHTML = '<div class="error">No books found</div>';
                return;
            }
            
            // Clear existing books
            booksDisplay.innerHTML = '';
            
            // Sort books if needed
            let sortedBooks = [...data.data];
            if (currentSort === 'title') {
                sortedBooks.sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title));
            } else if (currentSort === 'newest') {
                sortedBooks.sort((a, b) => new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate));
            } else if (currentSort === 'oldest') {
                sortedBooks.sort((a, b) => new Date(a.volumeInfo.publishedDate) - new Date(b.volumeInfo.publishedDate));
            }
            
            renderBooks(sortedBooks);
            
            // Update pagination info
            totalPages = Math.min(data.totalPages, 10); // Maximum 10 pages
            currentPage = data.page;
            currentPageSpan.textContent = currentPage;
            totalPagesSpan.textContent = totalPages;
            
            // Update pagination buttons
            prevPageBtn.disabled = currentPage === 1;
            nextPageBtn.disabled = currentPage >= totalPages;
        })
        .catch(error => {
            console.error('Error fetching books:', error);
            isLoading = false;
            booksDisplay.innerHTML = '<div class="error">Failed to load books. Please try again.</div>';
        });
}

// Render books to the display
function renderBooks(books) {
    books.forEach(book => {
        const volumeInfo = book.volumeInfo;
        const thumbnail = volumeInfo.imageLinks?.thumbnail || null;
        const title = volumeInfo.title || 'Unknown Title';
        const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author';
        const publisher = volumeInfo.publisher || 'Unknown Publisher';
        const publishedDate = volumeInfo.publishedDate ? formatDate(volumeInfo.publishedDate) : 'Unknown Date';
        const infoLink = volumeInfo.infoLink || '#';
        
        // Create book element based on current view mode
        const bookElement = document.createElement('div');
        bookElement.className = viewMode === 'grid' ? 'book-card book-card-grid' : 'book-card book-card-list';
        
        bookElement.innerHTML = `
            <div class="book-thumbnail">
                ${thumbnail ? `<img src="${thumbnail}" alt="${title}">` : `<div class="no-thumbnail"><i class="fas fa-book"></i></div>`}
            </div>
            <div class="book-info">
                <div class="book-title">${title}</div>
                <div class="book-author">By: ${authors}</div>
                <div class="book-publisher">Publisher: ${publisher}</div>
                <div class="book-date">Published: ${publishedDate}</div>
                <div class="book-link">
                    <a href="${infoLink}" target="_blank">More Details</a>
                </div>
            </div>
        `;
        
        booksDisplay.appendChild(bookElement);
    });
}

// Format date for better display
function formatDate(dateString) {
    // Handle partial dates (YYYY or YYYY-MM)
    if (dateString.length === 4) {
        return dateString; // Just the year
    }
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return dateString; // Return original if parsing fails
    }
    
    // Format as Month Year (e.g., "January 2023")
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString(undefined, options);
}

// Reset and fetch new books
function resetAndFetch() {
    currentPage = 1;
    fetchBooks();
}