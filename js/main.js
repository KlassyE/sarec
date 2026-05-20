/* ============================================
   SAREC Medical Center — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ---- Hero Slider ----
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        const slides = slider.querySelectorAll('.slide');
        const dots = slider.querySelectorAll('.slider-dots .dot');
        const prevBtn = slider.querySelector('.slider-arrow.prev');
        const nextBtn = slider.querySelector('.slider-arrow.next');
        let current = 0;
        let autoSlide;
        let isPaused = false;

        function goToSlide(index) {
            slides[current].classList.remove('active');
            if (dots[current]) dots[current].classList.remove('active');
            current = (index + slides.length) % slides.length;
            slides[current].classList.add('active');
            if (dots[current]) dots[current].classList.add('active');
        }

        function nextSlide() {
            goToSlide(current + 1);
        }

        function prevSlide() {
            goToSlide(current - 1);
        }

        function startAutoSlide() {
            autoSlide = setInterval(function () {
                if (!isPaused) nextSlide();
            }, 5000);
        }

        function resetAutoSlide() {
            clearInterval(autoSlide);
            startAutoSlide();
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                prevSlide();
                resetAutoSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                nextSlide();
                resetAutoSlide();
            });
        }

        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                goToSlide(i);
                resetAutoSlide();
            });
        });

        slider.addEventListener('mouseenter', function () {
            isPaused = true;
        });

        slider.addEventListener('mouseleave', function () {
            isPaused = false;
        });

        startAutoSlide();
    }

    // ---- Sticky Header on Scroll ----
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ---- Mobile Hamburger Nav ----
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const navOverlay = document.querySelector('.nav-overlay');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            mainNav.classList.toggle('open');
            if (navOverlay) navOverlay.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
        });

        if (navOverlay) {
            navOverlay.addEventListener('click', function () {
                hamburger.classList.remove('active');
                mainNav.classList.remove('open');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Mobile dropdown toggle
        var dropdownParents = document.querySelectorAll('.has-dropdown > a');
        dropdownParents.forEach(function (link) {
            link.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    var parent = link.parentElement;
                    parent.classList.toggle('dropdown-open');
                }
            });
        });
    }

    // ---- Back to Top Button ----
    var backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---- Smooth Scroll for Anchor Links ----
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId && targetId.length > 1) {
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    var headerHeight = header ? header.offsetHeight : 0;
                    var targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({ top: targetPos, behavior: 'smooth' });
                }
            }
        });
    });

    // ---- Form Validation ----
    var forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(function (form) {
        form.addEventListener('submit', function (e) {
            var isValid = true;
            var fields = form.querySelectorAll('[required]');

            // Clear previous errors
            form.querySelectorAll('.form-group').forEach(function (group) {
                group.classList.remove('error');
            });

            fields.forEach(function (field) {
                var group = field.closest('.form-group');
                var value = field.value.trim();

                if (!value) {
                    isValid = false;
                    if (group) group.classList.add('error');
                    return;
                }

                // Email validation
                if (field.type === 'email' && value) {
                    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(value)) {
                        isValid = false;
                        if (group) group.classList.add('error');
                    }
                }

                // Phone validation
                if (field.type === 'tel' && value) {
                    var phonePattern = /^[\+]?[\d\s\-()]{7,20}$/;
                    if (!phonePattern.test(value)) {
                        isValid = false;
                        if (group) group.classList.add('error');
                    }
                }
            });

            if (!isValid) {
                e.preventDefault();
                return;
            }

            var submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
            var successMsg = form.querySelector('.form-success');
            var errorMsg = form.querySelector('.form-error');
            if (errorMsg) errorMsg.style.display = 'none';

            // If form has a real action attribute, let the browser submit it
            // natively (no CORS, no preflight). Just show "Sending…" state.
            if (form.getAttribute('action')) {
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = 'Sending&hellip;';
                }
                return; // browser performs the POST + redirect
            }

            // ---- Fallback: no action, just show success message ----
            e.preventDefault();
            if (successMsg) {
                successMsg.style.display = 'block';
                form.reset();
                setTimeout(function () {
                    successMsg.style.display = 'none';
                }, 8000);
            }
        });
    });

    // ---- Show success banner after redirect-back (?sent=1) ----
    if (window.location.search.indexOf('sent=1') !== -1) {
        var sentBanner = document.querySelector('.form-success');
        if (sentBanner) {
            sentBanner.style.display = 'block';
            sentBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // ---- Set Active Nav Link ----
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-menu > li > a');
    navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
        // Service pages — mark Services nav as active
        if (currentPage.startsWith('service-') && href === 'services.html') {
            link.classList.add('active');
        }
        // Blog post — mark News nav as active
        if (currentPage === 'blog-post.html' && href === 'news.html') {
            link.classList.add('active');
        }
    });

});
