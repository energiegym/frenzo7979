// Navigation functionality
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const navbar = document.getElementById("navbar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Navbar scroll effect with animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    navbar.style.transform = "translateY(0)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// FAQ functionality with animation
function toggleFaq(element) {
  const faqItem = element.parentElement
  const isActive = faqItem.classList.contains("active")

  // Close all FAQ items with animation
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active")
  }
}

// Modal functionality with animations
function openBookingModal() {
  const modal = document.getElementById("bookingModal")
  modal.style.display = "block"
  document.body.style.overflow = "hidden"

  // Add opening animation
  setTimeout(() => {
    modal.querySelector(".modal-content").style.transform = "scale(1)"
    modal.querySelector(".modal-content").style.opacity = "1"
  }, 10)
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal")
  const modalContent = modal.querySelector(".modal-content")

  // Add closing animation
  modalContent.style.transform = "scale(0.8)"
  modalContent.style.opacity = "0"

  setTimeout(() => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
    modalContent.style.transform = "scale(1)"
    modalContent.style.opacity = "1"
  }, 300)
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  const modal = document.getElementById("bookingModal")
  if (e.target === modal) {
    closeBookingModal()
  }
})

// Form submissions with loading animations
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const data = Object.fromEntries(formData)
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  // Add loading animation
  submitBtn.innerHTML = '<span class="loading"></span> Sending...'
  submitBtn.disabled = true
  submitBtn.style.transform = "scale(0.95)"

  setTimeout(() => {
    // Success animation
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
    submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)"
    submitBtn.style.transform = "scale(1)"

    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.")
      this.reset()
      submitBtn.textContent = originalText
      submitBtn.style.background = ""
      submitBtn.disabled = false
    }, 1500)
  }, 2000)
})

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const data = Object.fromEntries(formData)
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  // Add loading animation
  submitBtn.innerHTML = '<span class="loading"></span> Booking...'
  submitBtn.disabled = true
  submitBtn.style.transform = "scale(0.95)"

  setTimeout(() => {
    // Success animation
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Booking Confirmed!'
    submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)"
    submitBtn.style.transform = "scale(1)"

    setTimeout(() => {
      alert(`Booking confirmed! Your ${data.rideType} ride from ${data.pickup} to ${data.destination} has been booked.`)
      this.reset()
      submitBtn.textContent = originalText
      submitBtn.style.background = ""
      submitBtn.disabled = false
      closeBookingModal()
    }, 1500)
  }, 2000)
})

// Newsletter form with animation
document.querySelector(".newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault()

  const email = this.querySelector('input[type="email"]').value
  const button = this.querySelector("button")
  const originalHTML = button.innerHTML

  // Add loading animation
  button.innerHTML = '<span class="loading"></span>'
  button.disabled = true
  button.style.transform = "scale(0.9)"

  setTimeout(() => {
    // Success animation
    button.innerHTML = '<i class="fas fa-check"></i>'
    button.style.background = "linear-gradient(135deg, #10b981, #059669)"
    button.style.transform = "scale(1)"

    setTimeout(() => {
      alert("Thank you for subscribing to our newsletter!")
      this.reset()
      button.innerHTML = originalHTML
      button.style.background = ""
      button.disabled = false
    }, 1500)
  }, 1500)
})

// Parallax effect for floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".floating-element")

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })

  // Parallax for hero elements
  const heroElements = document.querySelectorAll(".parallax-element")
  heroElements.forEach((element, index) => {
    const speed = 0.3 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Back to top button
const backToTopBtn = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = "flex"
    backToTopBtn.style.opacity = "1"
  } else {
    backToTopBtn.style.opacity = "0"
    setTimeout(() => {
      if (window.pageYOffset <= 300) {
        backToTopBtn.style.display = "none"
      }
    }, 300)
  }
})

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"

      // Add stagger animation for grid items
      if (
        entry.target.classList.contains("grid-item") ||
        entry.target.classList.contains("service-card") ||
        entry.target.classList.contains("feature-card")
      ) {
        entry.target.style.animationDelay = Math.random() * 0.5 + "s"
      }
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".service-card, .feature-card, .grid-item, .download-card, .tech-item, .contact-item",
  )

  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Observe counter elements
  const counterElements = document.querySelectorAll(".counter-item, .counter-price")
  counterElements.forEach((el) => counterObserver.observe(el))

  // Add typing animation to hero text
  const typingText = document.querySelector(".typing-text")
  if (typingText) {
    setTimeout(() => {
      typingText.style.borderRight = "none"
    }, 4000)
  }

  // Initialize hover sounds
  addHoverSounds()

  // Add entrance animations to navigation
  const navItems = document.querySelectorAll(".nav-item")
  navItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(-20px)"
    setTimeout(() => {
      item.style.transition = "all 0.5s ease"
      item.style.opacity = "1"
      item.style.transform = "translateY(0)"
    }, 100 * index)
  })

  console.log("Reeach animated website loaded successfully!")
})

// Counter Animation
function animateCounter(element, target, duration = 2000, suffix = "") {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target.toLocaleString() + suffix
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start).toLocaleString() + suffix
    }
  }, 16)
}

// Price Counter Animation
function animatePriceCounter(element, target, duration = 1500) {
  let start = 0
  const increment = target / (duration / 16)

  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = "$" + target.toFixed(2)
      clearInterval(timer)
    } else {
      element.textContent = "$" + start.toFixed(2)
    }
  }, 16)
}

// Intersection Observer for counter animations
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("counter-item")) {
        const counter = entry.target.querySelector("h3")
        const target = Number.parseInt(counter.dataset.count)
        let suffix = ""

        if (target === 50000) suffix = "K+"
        else if (target === 1000) suffix = "+"
        else if (target === 24) suffix = "/7"

        animateCounter(counter, target === 50000 ? 50 : target, 2000, suffix)
      } else if (entry.target.classList.contains("counter-price")) {
        const target = Number.parseFloat(entry.target.dataset.price)
        animatePriceCounter(entry.target, target)
      }
      counterObserver.unobserve(entry.target)
    }
  })
})

// Ride type selection with animation
function selectRideType(element) {
  document.querySelectorAll(".pricing .ride-type").forEach((rt) => {
    rt.classList.remove("active")
  })
  element.classList.add("active")

  // Add selection animation
  element.style.transform = "scale(1.02)"
  setTimeout(() => {
    element.style.transform = "scale(1)"
  }, 200)
}

// Loading Screen
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen")
  setTimeout(() => {
    loadingScreen.style.opacity = "0"
    loadingScreen.style.visibility = "hidden"
    document.body.style.overflow = "auto"
  }, 2000)
})

// Initialize AOS (Animate On Scroll)
const AOS = window.AOS // Declare the AOS variable
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: "ease-in-out",
})

// Add hover sound effects (optional)
function addHoverSounds() {
  const buttons = document.querySelectorAll(".btn, .nav-link, .logo-item")

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      // You can add sound effects here if needed
      button.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    })
  })
}

// Add custom cursor effect (optional)
function addCustomCursor() {
  const cursor = document.createElement("div")
  cursor.className = "custom-cursor"
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #005cff, #008cff);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    opacity: 0;
  `
  document.body.appendChild(cursor)

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 10 + "px"
    cursor.style.top = e.clientY - 10 + "px"
    cursor.style.opacity = "0.7"
  })

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "scale(0.8)"
  })

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "scale(1)"
  })
}

// Performance optimization
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Debounced scroll handler for better performance
const debouncedScrollHandler = debounce(() => {
  // Additional scroll-based animations can be added here
}, 10)

window.addEventListener("scroll", debouncedScrollHandler)
