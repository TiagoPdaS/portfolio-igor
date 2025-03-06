
        // Animação das barras de progresso
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(progress => {
                const scaleX = progress.style.transform.replace('scaleX(', '').replace(')', '');
                progress.style.transform = 'scaleX(0)';
                setTimeout(() => {
                    progress.style.transform = `scaleX(${scaleX})`;
                }, 100);
            });
        }

        // Observer para animar as barras de progresso quando visíveis
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.querySelector('.skills');
        observer.observe(skillsSection);

        // Scroll suave para as âncoras
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    