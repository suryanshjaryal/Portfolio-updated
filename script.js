// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

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

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Add animation classes and observe elements
document.addEventListener("DOMContentLoaded", () => {
  // Animate section titles
  document.querySelectorAll(".section-title").forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })

  // Animate about stats
  document.querySelectorAll(".stat").forEach((el, index) => {
    el.classList.add("scale-in")
    el.style.transitionDelay = `${index * 0.1}s`
    observer.observe(el)
  })

  // Animate info cards
  document.querySelectorAll(".info-card").forEach((el, index) => {
    el.classList.add("slide-in-right")
    el.style.transitionDelay = `${index * 0.1}s`
    observer.observe(el)
  })

  // Animate timeline items
  document.querySelectorAll(".timeline-content").forEach((el) => {
    el.classList.add("slide-in-right")
    observer.observe(el)
  })

  // Animate skill categories
  document.querySelectorAll(".skill-category").forEach((el, index) => {
    el.classList.add("fade-in")
    el.style.transitionDelay = `${index * 0.2}s`
    observer.observe(el)
  })

  // Animate project cards
  document.querySelectorAll(".project-card").forEach((el, index) => {
    el.classList.add("scale-in")
    el.style.transitionDelay = `${index * 0.1}s`
    observer.observe(el)
  })

  // Animate education items
  document.querySelectorAll(".education-item").forEach((el, index) => {
    el.classList.add("slide-in-left")
    el.style.transitionDelay = `${index * 0.2}s`
    observer.observe(el)
  })

  // Animate contact elements
  document.querySelectorAll(".contact-method").forEach((el, index) => {
    el.classList.add("slide-in-left")
    el.style.transitionDelay = `${index * 0.1}s`
    observer.observe(el)
  })

  document.querySelector(".contact-form")?.classList.add("slide-in-right")
  observer.observe(document.querySelector(".contact-form"))
})

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const nameElement = document.querySelector(".title-name")
  if (nameElement) {
    const originalText = nameElement.textContent
    setTimeout(() => {
      typeWriter(nameElement, originalText, 150)
    }, 1000)
  }
})

// Skill items hover effect
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.05) rotate(5deg)"
  })

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1) rotate(0deg)"
  })
})

// Project cards tilt effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"
  })
})

// Form submission
document.querySelector(".contact-form form")?.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(e.target)
  const name = e.target.querySelector('input[type="text"]').value
  const email = e.target.querySelector('input[type="email"]').value
  const message = e.target.querySelector("textarea").value

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields")
    return
  }

  // Simulate form submission
  const submitBtn = e.target.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Thank you for your message! I'll get back to you soon.")
    e.target.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Add parallax effect to floating shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".shape")

  shapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.1
    const yPos = -(scrolled * speed)
    shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`
  })
})

// Add active state to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add CSS for active nav link
const style = document.createElement("style")
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`
document.head.appendChild(style)

// Preloader
window.addEventListener("load", () => {
  const preloader = document.createElement("div")
  preloader.className = "preloader"
  preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-logo">SJ</div>
            <div class="preloader-spinner"></div>
        </div>
    `

  const preloaderStyles = `
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .preloader-content {
            text-align: center;
        }
        
        .preloader-logo {
            font-size: 3rem;
            font-weight: 700;
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
        }
        
        .preloader-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `

  const preloaderStyleSheet = document.createElement("style")
  preloaderStyleSheet.textContent = preloaderStyles
  document.head.appendChild(preloaderStyleSheet)

  document.body.appendChild(preloader)

  setTimeout(() => {
    preloader.style.opacity = "0"
    setTimeout(() => {
      preloader.remove()
    }, 500)
  }, 1500)
})
