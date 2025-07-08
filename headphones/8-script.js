// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navigation = document.getElementById('navigation');

    hamburger.addEventListener('click', function() {
        // Toggle hamburger animation
        hamburger.classList.toggle('active');
        
        // Toggle navigation menu
        navigation.classList.toggle('active');
        
        // Add smooth transition effect
        if (navigation.classList.contains('active')) {
            navigation.style.display = 'block';
            // Use timeout to ensure the display change happens before the animation
            setTimeout(() => {
                navigation.style.opacity = '1';
                navigation.style.transform = 'translateY(0)';
            }, 10);
        } else {
            navigation.style.opacity = '0';
            navigation.style.transform = 'translateY(-20px)';
            // Hide menu after animation completes
            setTimeout(() => {
                navigation.style.display = 'none';
            }, 300);
        }
    });

    // Close menu when clicking on navigation links (for better UX)
    const navLinks = navigation.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navigation.classList.remove('active');
            navigation.style.opacity = '0';
            navigation.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                navigation.style.display = 'none';
            }, 300);
        });
    });

    // Close menu when clicking outside (for better UX)
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navigation.contains(event.target)) {
            hamburger.classList.remove('active');
            navigation.classList.remove('active');
            navigation.style.opacity = '0';
            navigation.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                navigation.style.display = 'none';
            }, 300);
        }
    });

    // Handle window resize - show navigation on larger screens
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            navigation.style.display = 'block';
            navigation.style.opacity = '1';
            navigation.style.transform = 'translateY(0)';
            navigation.classList.remove('active');
            hamburger.classList.remove('active');
        } else if (!navigation.classList.contains('active')) {
            navigation.style.display = 'none';
        }
    });
});
