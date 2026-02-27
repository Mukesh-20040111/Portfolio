document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ASSIGNMENTS DATA (EDIT ONLY THIS PART IF NEEDED)
    ===================================================== */
    const assignmentsData = [
        {
            title: "Scratch Project",
            img: "assets/assignments/scratch-cover.webp",
            certificate: "https://1drv.ms/w/c/8a413fda99a9510c/IQAF6OaGvfx1Q4qaZC2L0HiuAWW0cEHO0XQHrU9wfmSNl3w?e=rSFFsE",
            website: "Scratch Simulation Project.pdf"

        },
        {
            title: "Tinkercad Project",
            img: "assets/assignments/a2.jpg",
            certificate: "https://1drv.ms/w/c/8a413fda99a9510c/IQCNfSR6wMq3RLEfy2RZ_jCjAeI5LNn-1GB9BhNxh41rffs?e=vwPkAp",
            website: "https://www.tinkercad.com/things/4kX4P3dDs24-ingenious-tumelo-fulffy?sharecode=QwDoKVEW2V703-GFycFDUtzWz5XJEOw8fIx7K42ExmU"
        },
        {
            title: "MIT App Inventor Project",
            img: "assets/assignments/a3.jpg",
            certificate: "https://1drv.ms/w/c/EAA27C1328AE0986/IQAKuZiqA0RhR4bDcCElW7e3AZGfN_bYi_4mVGLOKNNvEXA?e=rdr2Vz",
            website: "C:\Users\MUKESH\OneDrive\Pictures\Documents\WhatsApp Video 2026-02-09 at 11.55.26 AM.mp4"
        },
        {
            title: "Fusion360 autocad 2D & 3D water bottle project",
            img: "assets/assignments/a4.jpg",
            certificate: "https://1drv.ms/w/c/8a413fda99a9510c/IQAvCKR7wyMYRppWXyY4B0UVARgnWtyO3A_feS2klgrILLg?e=xT5Ygx",
            website: "https://a360.co/3OtRbAk"
        },
        {
            title: "Design Thinking project",
            img: "assets/assignments/a5.jpg",
            certificate: "https://drive.google.com/file/d/1n22nWNnrGrIw-As0RK1RB4Pgc69RQZi9/view?usp=drive_link",
        },
        {
            title: "FIH project",
            img: "assets/assignments/a6.jpg",
            certificate: "https://drive.google.com/file/d/14Z_p_V0o6bHBSaMunhi5ih8r6h94bPbp/view?usp=sharing",
        },
        {
            title: "Laser Cutting",
            img: "assets/assignments/a7.jpg",
            certificate: "https://drive.google.com/file/d/157yuuZdsX7HCCdrJ1VlNbnJbopn0Qr3b/view?usp=sharing",
        },
        {
            title: "3D printing",
            img: "assets/assignments/a8.jpg",
            certificate: "",
        },
    ];

    /* =====================================================
       ASSIGNMENTS MODAL
    ===================================================== */
    const openAssignments = document.getElementById("openAssignments");
    const modal = document.getElementById("assignmentsModal");
    const closeBtn = document.querySelector(".close-btn");
    const modalGrid = document.getElementById("modalAssignments");

    if (openAssignments) {
        openAssignments.addEventListener("click", () => {
            modal.style.display = "flex";
            modalGrid.innerHTML = "";

            assignmentsData.forEach((item, index) => {
                modalGrid.innerHTML += `
    <div class="modal-card" style="animation-delay:${index * 0.08}s">
        <h4>${item.title}</h4>

        <a href="${item.website}" target="_blank" class="btn btn-primary">
            Working Video
        </a>

        <a href="${item.certificate}" target="_blank" class="btn btn-outline">
            View Details
        </a>
    </div>
`;

            });
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => modal.style.display = "none");
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

    /* =====================================================
       INTERNSHIP / PROJECT CARD FLIP
    ===================================================== */
    const cards = document.querySelectorAll(".intern-card, .project-card");

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.closest("a")) return;

            cards.forEach(c => c.classList.remove("active"));
            card.classList.toggle("active");
        });
    });

    /* =====================================================
       FADE + SLIDE ANIMATION FOR ENTIRE WEBSITE
    ===================================================== */
    const animatedElements = document.querySelectorAll(
        "section, .card, .intern-card, .project-card"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => {
        el.classList.add("fade-in");
        observer.observe(el);
    });

    /* =====================================================
       SMOOTH SCROLL FOR NAV LINKS
    ===================================================== */
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    /* =====================================================
       SCROLL PROGRESS BAR
    ===================================================== */
    const progressBar = document.getElementById("scrollProgress");

    if (progressBar) {
        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = progress + "%";
        });
    }

    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 60);
        });
    }

});







