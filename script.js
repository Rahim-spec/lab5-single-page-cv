document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section-panel');

    // ScrollSpy: Update active nav button based on scroll position
    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

    // Certificate button alert feedback
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const certName = button.getAttribute('data-cert');
            alert(`Opening certificate preview for: ${certName}`);
        });
    });

});