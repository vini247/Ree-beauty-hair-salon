/* ============================================
   REE BEAUTY — MAIN JAVASCRIPT
   ============================================ */

   // Always scroll to top on page refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

// Scroll to top on load
window.onload = function() {
    window.scrollTo(0, 0);
};


/* ============================================
   1. NAVBAR — Shrink on scroll + Active link
   ============================================ */

const header = document.querySelector('.main-header');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]');

// Shrink navbar when user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.style.padding = '0.5rem 2rem';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.padding = '1rem 2rem';
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    }

    // Highlight active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href').replace('#', '');
        if (href.toLowerCase() === current.toLowerCase()) {
            item.classList.add('active');
        }
    });
});


/* ============================================
   2. HAMBURGER MENU — Mobile toggle
   ============================================ */

// Inject hamburger button into the header
const hamburger = document.createElement('button');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;
header.appendChild(hamburger);

const navContainer = document.querySelector('.nav-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navContainer.classList.toggle('nav-open');
});

// Close menu when a nav link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navContainer.classList.remove('nav-open');
    });
});


/* ============================================
   3. HERO SECTION — Scroll down indicator
   ============================================ */

// Inject a scroll indicator arrow at the bottom of hero
const hero = document.querySelector('.hero-section');
const scrollIndicator = document.createElement('div');
scrollIndicator.classList.add('scroll-indicator');
scrollIndicator.innerHTML = `<span>↓</span>`;
hero.appendChild(scrollIndicator);

scrollIndicator.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});


/* ============================================
   4. ABOUT SECTION — Fade in on scroll
   ============================================ */

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.content-container').forEach(el => {
    el.classList.add('fade-up');
    aboutObserver.observe(el);
});


/* ============================================
   5. SERVICES SECTION — Card stagger animation
   ============================================ */

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, i * 120);
            });
        }
    });
}, { threshold: 0.1 });

const servicesGrid = document.querySelector('.services-grid');
if (servicesGrid) {
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.add('fade-up');
    });
    serviceObserver.observe(servicesGrid);
}


/* ============================================
   6. GALLERY SECTION — One video unmuted at a time
      + Auto pause/mute when leaving section
   ============================================ */

const galleryVideos = document.querySelectorAll('.gallery-video');
const gallerySection = document.querySelector('.gallery-section');

// When user presses play, unmute that video and mute others
galleryVideos.forEach(video => {
    video.addEventListener('play', () => {
        video.muted = false;
        galleryVideos.forEach(other => {
            if (other !== video) {
                other.muted = true;
                other.pause();
            }
        });
    });

    // One unmuted video at a time
    video.addEventListener('volumechange', () => {
        if (!video.muted) {
            galleryVideos.forEach(other => {
                if (other !== video) {
                    other.muted = true;
                }
            });
        }
    });

    video.closest('.gallery-card').classList.add('fade-up');
});

// Pause + mute all videos when gallery leaves viewport
const gallerySectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            galleryVideos.forEach(video => {
                video.muted = true;
                video.play();
            });
        } else {
            galleryVideos.forEach(video => {
                video.pause();
                video.muted = true;
            });
        }
    });
}, { threshold: 0.1 });

if (gallerySection) gallerySectionObserver.observe(gallerySection);

// Fade in gallery cards on scroll
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.gallery-card').forEach(card => {
    galleryObserver.observe(card);
});

/* ============================================
   7. PRICING SECTION — Highlight on hover
   ============================================ */

document.querySelectorAll('.pricing-card').forEach(card => {
    card.classList.add('fade-up');

    card.addEventListener('mouseenter', () => {
        document.querySelectorAll('.pricing-card').forEach(c => {
            c.style.opacity = '0.5';
            c.style.transform = 'scale(0.97)';
        });
        card.style.opacity = '1';
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        document.querySelectorAll('.pricing-card').forEach(c => {
            c.style.opacity = '1';
            c.style.transform = '';
        });
    });
});

const pricingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.pricing-card');
            cards.forEach((card, i) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, i * 150);
            });
        }
    });
}, { threshold: 0.1 });

const pricingGrid = document.querySelector('.pricing-grid');
if (pricingGrid) pricingObserver.observe(pricingGrid);


/* ============================================
   8. TESTIMONIALS — Auto scroll carousel
   ============================================ */


/* ============================================
   9. CONTACT FORM — Save to Firebase + feedback
   ============================================ */

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('.contact-btn');
        const originalText = btn.textContent;

        btn.textContent = 'Sending...';
        btn.disabled = true;
        btn.style.opacity = '0.7';

        try {
            const { collection, addDoc, serverTimestamp } = await import("https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js");

            const db = window.db;
            if (!db) return;
            const formData = {
                name: contactForm.querySelector('[name="Full Name"]').value,
                email: contactForm.querySelector('[name="Email"]').value,
                phone: contactForm.querySelector('[name="Phone Number"]').value,
                service: contactForm.querySelector('[name="Service"]').value,
                message: contactForm.querySelector('[name="Message"]').value,
                status: 'new',
                createdAt: serverTimestamp()
            };

            await addDoc(collection(db, 'messages'), formData);

            btn.textContent = '✓ Message Sent!';
            btn.style.backgroundColor = '#4CAF50';
            btn.style.opacity = '1';
            contactForm.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
            }, 4000);

        } catch (err) {
            console.error(err);
            btn.textContent = '✗ Failed — Try Again';
            btn.style.backgroundColor = '#e74c3c';
            btn.style.opacity = '1';
            btn.disabled = false;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
            }, 4000);
        }
    });
}


/* ============================================
   10. SCROLL TO TOP BUTTON
   ============================================ */

const scrollTopBtn = document.createElement('button');
scrollTopBtn.classList.add('scroll-top-btn');
scrollTopBtn.innerHTML = '↑';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




/* ============================================
   11. WHATSAPP FLOATING BUBBLE
   ============================================ */
 
const WHATSAPP_NUMBER = '2347069498434';
 
const whatsappBubble = document.createElement('a');
whatsappBubble.classList.add('whatsapp-bubble');
whatsappBubble.href = `https://wa.me/${WHATSAPP_NUMBER}`;
whatsappBubble.target = '_blank';
whatsappBubble.rel = 'noopener noreferrer';
whatsappBubble.setAttribute('aria-label', 'Chat with us on WhatsApp');
whatsappBubble.innerHTML = `
    <span class="whatsapp-icon">
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor">
            <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.693 4.611 1.888 6.487L4 29l7.72-1.85A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.583 1.099 1.12-4.47-.232-.366A9.71 9.71 0 0 1 5.25 15c0-5.936 4.815-10.75 10.751-10.75S26.75 9.064 26.75 15 21.937 24.75 16.001 24.75zm5.34-7.36c-.293-.147-1.734-.856-2.003-.954-.269-.098-.464-.147-.66.147-.196.293-.758.954-.929 1.15-.171.196-.342.22-.635.073-.293-.147-1.235-.455-2.352-1.45-.87-.775-1.457-1.734-1.628-2.027-.171-.293-.018-.451.129-.598.132-.132.293-.342.44-.513.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.590-.904-2.178-.238-.573-.48-.495-.66-.504l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.003-1.026 2.446 0 1.443 1.05 2.837 1.197 3.033.147.196 2.067 3.157 5.008 4.428.7.302 1.246.483 1.672.618.703.224 1.343.192 1.849.117.564-.084 1.734-.709 1.978-1.394.244-.685.244-1.272.171-1.394-.073-.122-.269-.196-.562-.343z"/>
        </svg>
    </span>
`;
document.body.appendChild(whatsappBubble);
 
 
/* ============================================
   12. HERO SECTION — Typing animation
   ============================================ */
 
const heroTitle = document.querySelector('.hero-content h1');
 
if (heroTitle) {
    const lines = ['Luxury Hair Salon For', 'Elegant Styling'];
    heroTitle.innerHTML = '';
    heroTitle.style.opacity = '1';

    let lineIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                heroTitle.innerHTML = lines.slice(0, lineIndex).join('<br>') +
                    (lineIndex > 0 ? '<br>' : '') +
                    lines[lineIndex].substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeWriter, 55);
            } else {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeWriter, 150);
            }
        }
    }
  
    setTimeout(typeWriter, 400);
  }
 
 
/* ============================================
   13. ABOUT SECTION — Animated counters
   ============================================ */
 
const aboutContent = document.querySelector('.content-container');
 
if (aboutContent) {
    const statsRow = document.createElement('div');
    statsRow.classList.add('stats-row');
    statsRow.innerHTML = `
        <div class="stat-item">
            <span class="stat-number" data-target="500" data-suffix="+">0</span>
            <span class="stat-label">Happy Clients</span>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-target="5" data-suffix="+">0</span>
            <span class="stat-label">Years Experience</span>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-target="1000" data-suffix="+">0</span>
            <span class="stat-label">Styles Created</span>
        </div>
    `;
 
    const reserveBtn = aboutContent.querySelector('.reserve-btn');
    if (reserveBtn) {
        aboutContent.insertBefore(statsRow, reserveBtn);
    } else {
        aboutContent.appendChild(statsRow);
    }
 
    const counters = statsRow.querySelectorAll('.stat-number');
 
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1500;
        const startTime = performance.now();
 
        function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out
            const current = Math.floor(eased * target);
            el.textContent = current + suffix;
 
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target + suffix;
            }
        }
        requestAnimationFrame(tick);
    }
 
    const statsObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(animateCounter);
                obs.disconnect();
            }
        });
    }, { threshold: 0.4 });
 
    statsObserver.observe(statsRow);
}
 
 
/* ============================================
   14. SERVICES SECTION — Card icons
   ============================================ */
 
const SERVICE_ICONS = {
    'Wig Making': '💇‍♀️',
    'Revamping': '✨',
    'Customization': '🎨',
    'Luxury Hair Vendor': '👑',
    'Ventilation': '🌬️',
    'Hair Styling': '💈'
};
 
document.querySelectorAll('.service-card').forEach(card => {
    const heading = card.querySelector('h3');
    if (!heading) return;
 
    const title = heading.textContent.trim();
    const icon = SERVICE_ICONS[title] || '💎';
 
    const iconEl = document.createElement('div');
    iconEl.classList.add('service-icon');
    iconEl.textContent = icon;
 
    card.insertBefore(iconEl, heading);
});
 
 
/* ============================================
  
 
 
/* ============================================
   16. CONTACT FORM — Floating labels
   ============================================ */
 
const floatingFields = document.querySelectorAll(
    '.contact-form .form-group input.form-input, .contact-form .form-group textarea.form-input'
);
 
floatingFields.forEach(field => {
    const group = field.closest('.form-group');
    const placeholderText = field.getAttribute('placeholder');
    if (!placeholderText) return;
 
    group.classList.add('floating-label-group');
 
    const label = document.createElement('label');
    label.classList.add('floating-label');
    label.textContent = placeholderText;
    group.appendChild(label);
 
    // Placeholder no longer needed visually now that we have a label
    field.setAttribute('placeholder', '');
 
    function syncState() {
        if (field.value.trim() !== '') {
            group.classList.add('filled');
        } else {
            group.classList.remove('filled');
        }
    }
 
    field.addEventListener('focus', () => group.classList.add('focused'));
    field.addEventListener('blur', () => {
        group.classList.remove('focused');
        syncState();
    });
    field.addEventListener('input', syncState);
 
    syncState();
});
 
 
/* ============================================
   17. CONTACT SECTION — Click to call
   ============================================ */
 
document.querySelectorAll('.contact-info .info-item').forEach(item => {
    const icon = item.querySelector('.info-icon');
    const textEl = item.querySelector('p');
    if (!icon || !textEl) return;
 
    if (icon.textContent.trim() === '📞') {
        const rawNumber = textEl.textContent.trim();
        const dialNumber = rawNumber.replace(/[^\d+]/g, '');
 
        const callLink = document.createElement('a');
        callLink.classList.add('phone-link');
        callLink.href = `tel:${dialNumber}`;
        callLink.textContent = rawNumber;
 
        textEl.textContent = '';
        textEl.appendChild(callLink);
    }
});
 
 
/* ============================================
   18. FOOTER — Upgrade
   ============================================ */
 
const footer = document.querySelector('.footer');
 
if (footer) {
    footer.innerHTML = `
        <div class="footer-upgrade">
            <div class="footer-col footer-brand">
                <h3>REE BEAUTY</h3>
                <p>Luxury hair artistry, bespoke wigs and styling crafted to make every woman feel effortlessly radiant.</p>
                <div class="footer-socials">
                    <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a>
                    <a href="#" aria-label="Instagram">Instagram</a>
                    <a href="#" aria-label="TikTok">TikTok</a>
                </div>
            </div>
 
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#Gallery">Gallery</a></li>
                    <li><a href="#Pricing">Pricing</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
 
            <div class="footer-col">
                <h4>Contact</h4>
                <ul>
                    <li>Delta, Asaba, Nigeria</li>
                    <li><a href="tel:+2347069498434">+234 706 949 8434</a></li>
                    <li><a href="mailto:Slimrietta@gmail.com">Slimrietta@gmail.com</a></li>
                    <li>Mon – Sat, 9am – 7pm</li>
                </ul>
            </div>
        </div>
 
        <div class="footer-bottom">
            <p>&copy; 2026 Ree Beauty. All rights reserved.</p>
        </div>
    `;
}




/* ============================================
   BOOKING MODAL
   ============================================ */

const bookingModal = document.getElementById('bookingModal');
const bookingOverlay = document.getElementById('bookingOverlay');
const bookingClose = document.getElementById('bookingClose');
const bookingForm = document.getElementById('bookingForm');
const bookingMsg = document.getElementById('bookingMsg');
const bookingSubmit = document.getElementById('bookingSubmit');

// Open modal
function openBookingModal() {
    bookingModal.classList.add('active');
    bookingOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeBookingModal() {
    bookingModal.classList.remove('active');
    bookingOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Open on button click
document.querySelector('.book-button').addEventListener('click', (e) => {
    e.preventDefault();
    openBookingModal();
});

// Close on X and overlay click
bookingClose.addEventListener('click', closeBookingModal);
bookingOverlay.addEventListener('click', closeBookingModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBookingModal();
});

// Submit booking
bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = bookingForm.querySelector('[name="name"]').value;
    const phone = bookingForm.querySelector('[name="phone"]').value;
    const email = bookingForm.querySelector('[name="email"]').value;
    const service = bookingForm.querySelector('[name="service"]').value;
    const date = bookingForm.querySelector('[name="date"]').value;
    const time = bookingForm.querySelector('[name="time"]').value;
    const notes = bookingForm.querySelector('[name="notes"]').value;

    // Loading state
    bookingSubmit.textContent = 'Booking...';
    bookingSubmit.disabled = true;

    try {
        const { getFirestore, collection, addDoc, serverTimestamp } = await import("https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js");
        const { getApp } = await import("https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js");

        const db = getFirestore(getApp());

        await addDoc(collection(db, 'bookings'), {
            name, phone, email, service, date, time, notes,
            status: 'new',
            createdAt: serverTimestamp()
        });

        // Show success
        bookingMsg.textContent = '✓ Booking received! Opening WhatsApp to confirm...';
        bookingMsg.className = 'booking-msg success';
        bookingForm.reset();
        bookingSubmit.textContent = 'Confirm Booking →';
        bookingSubmit.disabled = false;

        // Open WhatsApp after 1.5 seconds
        setTimeout(() => {
            const message = `Hi Ree Beauty! I just booked an appointment.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADate: ${encodeURIComponent(date)}%0ATime: ${encodeURIComponent(time)}%0ANotes: ${encodeURIComponent(notes || 'None')}`;
            window.open(`https://wa.me/2347069498434?text=${message}`, '_blank');
            closeBookingModal();
        }, 1500);

    } catch (err) {
        console.error(err);
        bookingMsg.textContent = '✗ Something went wrong. Please try again.';
        bookingMsg.className = 'booking-msg error';
        bookingSubmit.textContent = 'Confirm Booking →';
        bookingSubmit.disabled = false;
    }
});



/* ============================================
   PRICING — Load from Firestore
   ============================================ */

async function loadPricing() {
    try {
        const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js");

        // Wait for window.db to be ready
        let attempts = 0;
        while (!window.db && attempts < 10) {
            await new Promise(resolve => setTimeout(resolve, 300));
            attempts++;
        }

        const db = window.db;
        if (!db) {
            console.log('Firebase not ready');
            return;
        }

        const snapshot = await getDocs(collection(db, 'pricing'));

        const serviceLabels = {
            wig_installation: 'Wig Installation',
            hair_styling: 'Hair Styling',
            revamping: 'Revamping',
            customization: 'Customization',
            wig_making: 'Wig Making',
            ventilation: 'Ventilation',
            full_transformation: 'Full Transformation',
            luxury_wig_package: 'Luxury Wig Package',
            vip_styling: 'VIP Styling'
        };

        snapshot.forEach(docSnap => {
            const data = docSnap.data();
            const id = docSnap.id;
            const container = document.getElementById(`${id}Prices`);
            if (!container) return;

            let html = '';
            Object.entries(data).forEach(([key, value]) => {
                if (key === 'title') return;
                const label = serviceLabels[key] || key;
                html += `<li><span>${label}</span><span>₦${Number(value).toLocaleString()}</span></li>`;
            });

            container.innerHTML = html;
        });

    } catch (err) {
        console.error('Error loading pricing:', err);
    }
}

// Wait for page to fully load before running
window.addEventListener('load', () => {
    setTimeout(loadPricing, 1000);
});


/* ============================================
   TESTIMONIALS — Load from Firestore
   ============================================ */

async function loadTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    try {
        const { collection, getDocs, query, orderBy, where } = await import("https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js");

        let attempts = 0;
        while (!window.db && attempts < 10) {
            await new Promise(resolve => setTimeout(resolve, 300));
            attempts++;
        }

        const db = window.db;
        if (!db) return;

       const q = query(collection(db, 'testimonials'));

       const snapshot = await getDocs(q);

if (snapshot.empty) {
    grid.innerHTML = '<p style="color:#aaa; text-align:center; grid-column:1/-1;">No testimonials yet.</p>';
    return;
}

// Convert to array so we can sort safely
let docsArray = [];
snapshot.forEach(docSnap => docsArray.push(docSnap.data()));

// Sort by createdAt if present, missing ones go last
docsArray.sort((a, b) => {
    const aTime = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
    const bTime = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
    return bTime - aTime;
});

let cards = [];
docsArray.forEach(d => {
    const stars = '⭐'.repeat(d.stars || 5);
    cards.push(`
        <div class="testimonial-card">
            <span class="quote">"</span>
            <p class="review">${d.review}</p>
            <div class="stars">${stars}</div>
            <div class="client">
                <div class="client-info">
                    <h4>${d.name}</h4>
                    <span>${d.service}</span>
                </div>
            </div>
        </div>`);
});

        // Build carousel
        grid.innerHTML = cards.join('');
        grid.classList.add('carousel-mode');

        // Wrap in track
        const track = document.createElement('div');
        track.classList.add('testimonials-track');
        Array.from(grid.children).forEach(card => track.appendChild(card));
        grid.appendChild(track);

        // Dots
        const dotsWrap = document.createElement('div');
        dotsWrap.classList.add('carousel-dots');
        cards.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dotsWrap.appendChild(dot);
        });
        grid.appendChild(dotsWrap);

        const dots = dotsWrap.querySelectorAll('.carousel-dot');
        const testimonialCards = Array.from(track.children);
        let current = 0;
        let autoSlide;

        function getPerView() {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 3;
        }

        function goToSlide(index) {
            const perView = getPerView();
            const maxIndex = Math.max(testimonialCards.length - perView, 0);
            current = Math.max(0, Math.min(index, maxIndex));

            const cardWidth = testimonialCards[0].getBoundingClientRect().width;
            const gap = 24;
            track.style.transform = `translateX(-${current * (cardWidth + gap)}px)`;

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === current);
            });
        }

        function nextSlide() {
            const perView = getPerView();
            const maxIndex = Math.max(testimonialCards.length - perView, 0);
            goToSlide(current >= maxIndex ? 0 : current + 1);
        }

        function startAutoplay() {
            stopAutoplay();
            autoSlide = setInterval(nextSlide, 4500);
        }

        function stopAutoplay() {
            if (autoSlide) clearInterval(autoSlide);
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                goToSlide(i);
                startAutoplay();
            });
        });

        grid.addEventListener('mouseenter', stopAutoplay);
        grid.addEventListener('mouseleave', startAutoplay);

        // Touch swipe
        let touchStartX = 0;
        track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
        track.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                stopAutoplay();
                goToSlide(diff > 0 ? current + 1 : current - 1);
                startAutoplay();
            }
        });

        window.addEventListener('resize', () => goToSlide(current));

        goToSlide(0);
        startAutoplay();

    } catch (err) {
        console.error('Error loading testimonials:', err);
        grid.innerHTML = '<p style="color:#aaa; text-align:center; grid-column:1/-1;">Could not load testimonials.</p>';
    }
}

window.addEventListener('load', () => {
    setTimeout(loadTestimonials, 1200);
});


/* ============================================
   REVIEW FORM — Submit to Firestore
   ============================================ */

const reviewForm = document.getElementById('reviewForm');
const reviewMsg = document.getElementById('reviewMsg');
const reviewSubmit = document.getElementById('reviewSubmit');

if (reviewForm) {
    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = reviewForm.querySelector('[name="name"]').value.trim();
        const service = reviewForm.querySelector('[name="service"]').value;
        const review = reviewForm.querySelector('[name="review"]').value.trim();
        const starsInput = reviewForm.querySelector('[name="stars"]:checked');

        if (!starsInput) {
            reviewMsg.textContent = 'Please select a star rating.';
            reviewMsg.className = 'review-msg error';
            return;
        }

        const stars = parseInt(starsInput.value);

        // Loading state
        reviewSubmit.textContent = 'Submitting...';
        reviewSubmit.disabled = true;

        try {
            const { collection, addDoc, serverTimestamp } = await import("https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js");

            let attempts = 0;
            while (!window.db && attempts < 10) {
                await new Promise(resolve => setTimeout(resolve, 300));
                attempts++;
            }

            const db = window.db;
            if (!db) throw new Error('Database not ready');

            // Get highest order number
            await addDoc(collection(db, 'testimonials'), {
                name,
                service,
                review,
                stars,
                status: 'pending',
                createdAt: serverTimestamp(),
                order: 999
            });

            reviewMsg.textContent = '✓ Thank you! Your review has been submitted for approval.';
            reviewMsg.className = 'review-msg success';
            reviewForm.reset();
            reviewSubmit.textContent = 'Submit Review →';
            reviewSubmit.disabled = false;

        } catch (err) {
            console.error(err);
            reviewMsg.textContent = '✗ Something went wrong. Please try again.';
            reviewMsg.className = 'review-msg error';
            reviewSubmit.textContent = 'Submit Review →';
            reviewSubmit.disabled = false;
        }
    });
}