// Product Data
const products = [
    {
        id: 1,
        name: "Za'atar Spice Blend",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        category: "Spices",
        description: "A traditional Middle Eastern blend of thyme, sumac, sesame seeds, and salt."
    },
    {
        id: 2,
        name: "Premium Saffron",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 5,
        category: "Spices",
        description: "The world's most expensive spice, hand-picked from crocus flowers."
    },
    {
        id: 3,
        name: "Sumac Spice",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1534939561126-2f51dfc37d7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4,
        category: "Spices",
        description: "Tangy, lemony spice made from dried and ground sumac berries."
    },
    {
        id: 4,
        name: "Organic Tahini Paste",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        category: "Condiments",
        description: "Smooth, creamy paste made from ground sesame seeds."
    },
    {
        id: 5,
        name: "Cumin Seeds",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        category: "Spices",
        description: "Warm, earthy spice essential for Middle Eastern and Indian cuisines."
    },
    {
        id: 6,
        name: "Cardamom Pods",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1594135668532-7d4d5fdea6f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        category: "Spices",
        description: "Highly aromatic pods with a complex flavor profile."
    },
    {
        id: 7,
        name: "Mint Tea Leaves",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4,
        category: "Teas",
        description: "Refreshing mint leaves perfect for traditional Moroccan tea."
    },
    {
        id: 8,
        name: "Rose Water",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1594135668532-7d4d5fdea6f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        rating: 4.5,
        category: "Condiments",
        description: "Floral water made from distilled rose petals, used in desserts and drinks."
    }
];

// Categories Data
const categories = [
    {
        id: 1,
        name: "Spices",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Herbs",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Condiments",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Teas",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        text: "The quality of Fayrouz spices is unmatched. I've been using their za'atar blend for years, and it always takes my dishes to the next level.",
        author: "Sarah Johnson",
        role: "Food Blogger",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        id: 2,
        text: "As a professional chef, I demand the best ingredients. Fayrouz has never disappointed me with their consistent quality and authentic flavors.",
        author: "Michael Rodriguez",
        role: "Executive Chef",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        text: "I love exploring different cuisines, and Fayrouz makes it so easy with their well-curated selection and detailed product descriptions.",
        author: "Emma Thompson",
        role: "Home Cook",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
];

// Users Data
const users = JSON.parse(localStorage.getItem('fayrouzUsers')) || [];

// Enhanced JavaScript for improved functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page with dynamic content
    renderProducts();
    renderCategories();
    renderTestimonials();

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Search functionality
    const searchIcon = document.getElementById('search-icon');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    
    // Open search modal
    searchIcon.addEventListener('click', function() {
        searchModal.classList.add('active');
        searchInput.focus();
    });
    
    // Close search modal
    closeSearch.addEventListener('click', function() {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        performSearch(this.value);
    });
    
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    function performSearch(query) {
        if (query.length < 2) {
            searchResults.innerHTML = '<div class="no-results">Enter at least 2 characters to search</div>';
            return;
        }
        
        const results = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        displaySearchResults(results);
    }
    
    function displaySearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No products found matching your search</div>';
            return;
        }
        
        searchResults.innerHTML = '';
        results.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="search-result-img">
                <div class="search-result-info">
                    <h4>${product.name}</h4>
                    <div class="search-result-price">$${product.price.toFixed(2)}</div>
                    <p>${product.category}</p>
                </div>
            `;
            
            resultItem.addEventListener('click', function() {
                addToCart(product.id);
                searchModal.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
                showNotification(`${product.name} added to cart!`, 'success');
            });
            
            searchResults.appendChild(resultItem);
        });
    }
    
    // Cart functionality
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.querySelector('.cart-count');
    
    let cart = [];
    
    // Initialize cart from localStorage if available
    if (localStorage.getItem('fayrouzCart')) {
        cart = JSON.parse(localStorage.getItem('fayrouzCart'));
        updateCart();
    }
    
    // Toggle cart modal
    cartIcon.addEventListener('click', function() {
        cartModal.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    closeCart.addEventListener('click', function() {
        cartModal.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', function() {
        cartModal.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    // Add to cart functionality
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        
        if (!product) return;
        
        // Check if product already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        // Update cart display
        updateCart();
    }
    
    // Update cart function
    function updateCart() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Update cart items display
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Your cart is empty</p>';
            cartTotal.textContent = '$0.00';
        } else {
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                        </div>
                        <div class="cart-item-remove" data-id="${item.id}">
                            <i class="fas fa-trash"></i> Remove
                        </div>
                    </div>
                `;
                
                cartItems.appendChild(cartItemElement);
            });
            
            cartTotal.textContent = `$${total.toFixed(2)}`;
            
            // Add event listeners to quantity buttons
            const decreaseButtons = document.querySelectorAll('.decrease-quantity');
            decreaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    const item = cart.find(item => item.id === itemId);
                    
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                        updateCart();
                    }
                });
            });
            
            const increaseButtons = document.querySelectorAll('.increase-quantity');
            increaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    const item = cart.find(item => item.id === itemId);
                    
                    item.quantity += 1;
                    updateCart();
                });
            });
            
            // Add event listeners to quantity inputs
            const quantityInputs = document.querySelectorAll('.quantity-input');
            quantityInputs.forEach(input => {
                input.addEventListener('change', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    const item = cart.find(item => item.id === itemId);
                    const newQuantity = parseInt(this.value);
                    
                    if (newQuantity > 0) {
                        item.quantity = newQuantity;
                        updateCart();
                    } else {
                        this.value = item.quantity;
                    }
                });
            });
            
            // Add event listeners to remove buttons
            const removeButtons = document.querySelectorAll('.cart-item-remove');
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const itemId = parseInt(this.getAttribute('data-id'));
                    cart = cart.filter(item => item.id !== itemId);
                    updateCart();
                    showNotification('Item removed from cart', 'success');
                });
            });
        }
        
        // Save cart to localStorage
        localStorage.setItem('fayrouzCart', JSON.stringify(cart));
    }
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Newsletter form validation
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.getElementById('newsletterEmail');
        if (emailInput.value && isValidEmail(emailInput.value)) {
            // Save email to localStorage
            let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers')) || [];
            if (!subscribers.includes(emailInput.value)) {
                subscribers.push(emailInput.value);
                localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
            }
            
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            emailInput.value = '';
        } else {
            showNotification('Please enter a valid email address.', 'error');
        }
    });
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Notification function
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            background-color: ${type === 'success' ? 'var(--primary-color)' : '#ff4d4d'};
            color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            z-index: 10000;
            transition: var(--transition);
            max-width: 300px;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Render products function
    function renderProducts() {
        const productsGrid = document.getElementById('productsGrid');
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-rating">
                        ${generateStarRating(product.rating)}
                    </div>
                    <a href="#" class="btn btn-outline add-to-cart-btn" data-id="${product.id}">Add to Cart</a>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
        
        // Add event listeners to add to cart buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
                
                // Show feedback
                const originalText = this.textContent;
                this.textContent = 'Added!';
                this.style.background = 'var(--primary-color)';
                this.style.borderColor = 'var(--primary-color)';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                    this.style.borderColor = '';
                    this.style.color = '';
                }, 1500);
            });
        });
    }
    
    // Render categories function
    function renderCategories() {
        const categoriesGrid = document.getElementById('categoriesGrid');
        categoriesGrid.innerHTML = '';
        
        categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.innerHTML = `
                <img src="${category.image}" alt="${category.name}" class="category-img">
                <div class="category-info">
                    <h3>${category.name}</h3>
                    <a href="#">Explore</a>
                </div>
            `;
            
            categoriesGrid.appendChild(categoryCard);
        });
    }
    
    // Render testimonials function
    function renderTestimonials() {
        const testimonialsGrid = document.getElementById('testimonialsGrid');
        testimonialsGrid.innerHTML = '';
        
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            testimonialCard.innerHTML = `
                <div class="testimonial-text">
                    <p>${testimonial.text}</p>
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.author}" class="author-img">
                    <div class="author-info">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            `;
            
            testimonialsGrid.appendChild(testimonialCard);
        });
    }
    
    // Helper function to generate star ratings
    function generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }

    
    // Auth functionality
    const authModal = document.getElementById('authModal');
    const closeAuth = document.getElementById('closeAuth');
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authTitle = document.getElementById('authTitle');
    const userIcon = document.querySelector('.nav-icons .fa-user').parentElement;

    // Create mobile auth section
    const mobileAuthSection = document.createElement('div');
    mobileAuthSection.className = 'mobile-auth-section';
    mainNav.appendChild(mobileAuthSection);

    // Open auth modal from desktop user icon
    userIcon.addEventListener('click', function() {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Open auth modal from mobile menu
    function openAuthModal(tab = 'login') {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Set active tab
        authTabs.forEach(t => t.classList.remove('active'));
        document.querySelector(`.auth-tab[data-tab="${tab}"]`).classList.add('active');
        
        // Set active form
        document.querySelectorAll('.auth-form').forEach(form => {
            form.classList.remove('active');
        });
        document.getElementById(`${tab}Form`).classList.add('active');
        authTitle.textContent = tab === 'login' ? 'Login' : 'Sign Up';
        
        // Close mobile menu
        mainNav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    }

    // Close auth modal
    closeAuth.addEventListener('click', function() {
        authModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Tab switching
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab
            authTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active form
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.remove('active');
            });
            
            document.getElementById(`${tabName}Form`).classList.add('active');
            authTitle.textContent = tabName === 'login' ? 'Login' : 'Sign Up';
        });
    });

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Find user
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Store current user session
            const sessionData = {
                id: user.id,
                name: user.name,
                email: user.email
            };
            
            if (rememberMe) {
                localStorage.setItem('fayrouzCurrentUser', JSON.stringify(sessionData));
            } else {
                sessionStorage.setItem('fayrouzCurrentUser', JSON.stringify(sessionData));
            }
            
            showNotification('Login successful!', 'success');
            authModal.classList.remove('active');
            document.body.style.overflow = '';
            updateUserInterface();
            
            // Clear form
            loginForm.reset();
        } else {
            showNotification('Invalid email or password', 'error');
        }
    });

    // Signup form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        // Validate passwords match
        if (password !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }
        
        // Check if user already exists
        if (users.find(u => u.email === email)) {
            showNotification('User with this email already exists', 'error');
            return;
        }
        
        // Check terms agreement
        if (!agreeTerms) {
            showNotification('Please agree to the terms and conditions', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            password: password,
            joinDate: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('fayrouzUsers', JSON.stringify(users));
        
        // Auto login
        const sessionData = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        };
        sessionStorage.setItem('fayrouzCurrentUser', JSON.stringify(sessionData));
        
        showNotification('Account created successfully!', 'success');
        authModal.classList.remove('active');
        document.body.style.overflow = '';
        updateUserInterface();
        
        // Clear form
        signupForm.reset();
    });

    // Update user interface based on login status
    function updateUserInterface() {
        const currentUser = JSON.parse(sessionStorage.getItem('fayrouzCurrentUser') || localStorage.getItem('fayrouzCurrentUser') || 'null');
        
        // Update mobile auth section
        if (currentUser) {
            // User is logged in - show user info in mobile menu
            mobileAuthSection.innerHTML = `
                <div class="mobile-user-info">
                    <div class="mobile-user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                    <div class="mobile-user-name">${currentUser.name}</div>
                    <div class="mobile-user-menu">
                        <div class="mobile-user-menu-item">
                            <i class="fas fa-user"></i>
                            <span>Profile</span>
                        </div>
                        <div class="mobile-user-menu-item">
                            <i class="fas fa-shopping-bag"></i>
                            <span>Orders</span>
                        </div>
                        <div class="mobile-user-menu-item">
                            <i class="fas fa-heart"></i>
                            <span>Wishlist</span>
                        </div>
                        <div class="mobile-user-menu-item">
                            <i class="fas fa-cog"></i>
                            <span>Settings</span>
                        </div>
                        <div class="mobile-user-menu-item mobile-logout-btn" id="mobileLogoutBtn">
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            `;
            
            // Add logout event listener
            document.getElementById('mobileLogoutBtn').addEventListener('click', function() {
                sessionStorage.removeItem('fayrouzCurrentUser');
                localStorage.removeItem('fayrouzCurrentUser');
                showNotification('Logged out successfully', 'success');
                updateUserInterface();
            });
        } else {
            // User is not logged in - show login/signup buttons in mobile menu
            mobileAuthSection.innerHTML = `
                <div class="mobile-auth-buttons">
                    <button class="mobile-auth-btn mobile-login-btn" id="mobileLoginBtn">Login</button>
                    <button class="mobile-auth-btn mobile-signup-btn" id="mobileSignupBtn">Sign Up</button>
                </div>
            `;
            
            // Add event listeners for mobile auth buttons
            document.getElementById('mobileLoginBtn').addEventListener('click', function() {
                openAuthModal('login');
            });
            
            document.getElementById('mobileSignupBtn').addEventListener('click', function() {
                openAuthModal('signup');
            });
        }
    }

    // Initialize user interface on page load
    updateUserInterface();

    // Close auth modal when clicking outside
    authModal.addEventListener('click', function(e) {
        if (e.target === authModal) {
            authModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    // Language switching functionality
const languageSwitcher = document.getElementById('languageSwitcher');
const currentLanguage = languageSwitcher.querySelector('.current-language');
const languageOptions = document.querySelectorAll('.language-option');

// عند النقر على زر اللغة الحالية
currentLanguage.addEventListener('click', function(e) {
    e.stopPropagation();
    languageSwitcher.classList.toggle('active');
});

// عند النقر على خيار لغة
languageOptions.forEach(option => {
    option.addEventListener('click', function() {
        const selectedLang = this.getAttribute('data-lang');
        changeLanguage(selectedLang);
        languageSwitcher.classList.remove('active');
    });
});

// إغلاق قائمة اللغات عند النقر خارجها
document.addEventListener('click', function(e) {
    if (!languageSwitcher.contains(e.target)) {
        languageSwitcher.classList.remove('active');
    }
});

// دالة تغيير اللغة
function changeLanguage(lang) {
    // حفظ اللغة المختارة في localStorage
    localStorage.setItem('fayrouzLanguage', lang);
    
    // تغيير النص في زر اللغة الحالية
    const currentFlag = languageSwitcher.querySelector('.current-language .flag-icon');
    const currentText = languageSwitcher.querySelector('.current-language .language-text');
    
    if (lang === 'en') {
        currentFlag.textContent = '🇺🇸';
        currentText.textContent = 'EN';
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        // هنا يمكنك إضافة كود لتغيير جميع النصوص إلى الإنجليزية
        updateTextContent('en');
    } else if (lang === 'ar') {
        currentFlag.textContent = '🇸🇦';
        currentText.textContent = 'AR';
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        // هنا يمكنك إضافة كود لتغيير جميع النصوص إلى العربية
        updateTextContent('ar');
    }
    
    showNotification('Language changed to ' + (lang === 'en' ? 'English' : 'Arabic'), 'success');
}

// دالة لتحديث النصوص في الصفحة (مثال مبسط)
function updateTextContent(lang) {
    // هذا مثال بسيط - في التطبيق الحقيقي ستحتاج إلى تحديث جميع النصوص
    const elementsToTranslate = {
        'hero-title': {
            'en': 'Discover the Finest Spices & Food Products',
            'ar': 'اكتشف أجود البهارات والمنتجات الغذائية'
        },
        'hero-subtitle': {
            'en': 'Experience the authentic flavors of the Middle East with our premium selection of spices and gourmet foods',
            'ar': 'جرب النكهات الأصيلة للشرق الأوسط مع مجموعتنا المميزة من البهارات والأطعمة الفاخرة'
        },
        'shop-now': {
            'en': 'Shop Now',
            'ar': 'تسوق الآن'
        },
        'featured-products': {
            'en': 'Featured Products',
            'ar': 'منتجات مميزة'
        },
        'featured-desc': {
            'en': 'Our most popular and exclusive items',
            'ar': 'منتجاتنا الأكثر شيوعًا والحصرية'
        },
        'view-all': {
            'en': 'View All Products',
            'ar': 'عرض جميع المنتجات'
        }
    };
    
    // تحديث النصوص
    Object.keys(elementsToTranslate).forEach(key => {
        const element = document.querySelector(`[data-translate="${key}"]`);
        if (element) {
            element.textContent = elementsToTranslate[key][lang];
        }
    });
    
    // تحديث اتجاه النص للعناصر المهمة
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button');
    textElements.forEach(el => {
        if (lang === 'ar') {
            el.style.textAlign = 'right';
            el.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        } else {
            el.style.textAlign = 'left';
            el.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        }
    });
}

// تهيئة اللغة عند تحميل الصفحة
const savedLanguage = localStorage.getItem('fayrouzLanguage') || 'en';
changeLanguage(savedLanguage);

// إضافة خيارات اللغة في القائمة المتنقلة للجوال
const mobileLanguageSwitcher = document.createElement('div');
mobileLanguageSwitcher.className = 'mobile-language-switcher';
mobileLanguageSwitcher.innerHTML = `
    <div class="mobile-language-option ${savedLanguage === 'en' ? 'active' : ''}" data-lang="en">
        <span class="flag-icon">🇺🇸</span>
        <span class="language-text">English</span>
    </div>
    <div class="mobile-language-option ${savedLanguage === 'ar' ? 'active' : ''}" data-lang="ar">
        <span class="flag-icon">🇸🇦</span>
        <span class="language-text">العربية</span>
    </div>
`;

// دالة تغيير اللغة محسنة مع تأثيرات بصرية وأعلام حقيقية
function changeLanguage(lang) {
    // حفظ اللغة المختارة في localStorage
    localStorage.setItem('fayrouzLanguage', lang);
    
    // تأثير بصري للزر عند التغيير
    const currentLanguageElement = languageSwitcher.querySelector('.current-language');
    currentLanguageElement.classList.add('language-changed');
    
    setTimeout(() => {
        currentLanguageElement.classList.remove('language-changed');
    }, 400);
    
    // تغيير النص والعلم في زر اللغة الحالية
    const currentFlagImg = languageSwitcher.querySelector('.current-language .flag-icon');
    const currentText = languageSwitcher.querySelector('.current-language .language-text');
    
    if (lang === 'en') {
        currentFlagImg.src = 'https://flagcdn.com/w20/us.png';
        currentFlagImg.srcset = 'https://flagcdn.com/w40/us.png 2x';
        currentFlagImg.alt = 'English';
        currentText.textContent = 'EN';
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.classList.remove('rtl');
        document.body.classList.add('ltr');
        updateTextContent('en');
    } else if (lang === 'ar') {
        currentFlagImg.src = 'https://flagcdn.com/w20/sa.png';
        currentFlagImg.srcset = 'https://flagcdn.com/w40/sa.png 2x';
        currentFlagImg.alt = 'Arabic';
        currentText.textContent = 'AR';
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.classList.remove('ltr');
        document.body.classList.add('rtl');
        updateTextContent('ar');
    }
    
    // تحديث خيارات اللغة في القائمة المتنقلة
    updateMobileLanguageOptions(lang);
    
    // إغلاق القائمة المنسدلة بعد التحديد
    setTimeout(() => {
        languageSwitcher.classList.remove('active');
    }, 300);
    
    // إشعار بتغيير اللغة
    showNotification(lang === 'en' ? 'Language changed to English' : 'تم تغيير اللغة إلى العربية', 'success');
}

// دالة مساعدة لتحديث خيارات اللغة في القائمة المتنقلة
function updateMobileLanguageOptions(activeLang) {
    const mobileOptions = document.querySelectorAll('.mobile-language-option');
    mobileOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === activeLang) {
            option.classList.add('active');
        }
        
        // تحديث الأعلام في القائمة المتنقلة أيضاً
        const flagImg = option.querySelector('.flag-icon');
        if (option.getAttribute('data-lang') === 'en') {
            flagImg.src = 'https://flagcdn.com/w20/us.png';
            flagImg.srcset = 'https://flagcdn.com/w40/us.png 2x';
            flagImg.alt = 'English';
        } else if (option.getAttribute('data-lang') === 'ar') {
            flagImg.src = 'https://flagcdn.com/w20/sa.png';
            flagImg.srcset = 'https://flagcdn.com/w40/sa.png 2x';
            flagImg.alt = 'Arabic';
        }
    });
}
});