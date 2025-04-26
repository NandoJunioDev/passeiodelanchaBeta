
        document.addEventListener('DOMContentLoaded', function() {
            // Menu mobile toggle
            const mobileMenu = document.getElementById('mobile-menu');
            const nav = document.getElementById('nav');
            const overlay = document.getElementById('overlay');
            
            mobileMenu.addEventListener('click', function() {
                nav.classList.toggle('active');
                overlay.classList.toggle('active');
                
                // Animate menu icon
                const spans = mobileMenu.querySelectorAll('span');
                if (nav.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
            
            // Close menu when clicking on overlay
            overlay.addEventListener('click', function() {
                nav.classList.remove('active');
                overlay.classList.remove('active');
                
                // Reset menu icon
                const spans = mobileMenu.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
            
            // Close menu when clicking on a menu item
            const menuItems = document.querySelectorAll('nav ul li a');
            menuItems.forEach(function(item) {
                item.addEventListener('click', function() {
                    nav.classList.remove('active');
                    overlay.classList.remove('active');
                    
                    // Reset menu icon
                    const spans = mobileMenu.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                });
            });
            
            // WhatsApp Pop-up
            const whatsappFloat = document.getElementById('whatsapp-float');
            const whatsappPopup = document.getElementById('whatsapp-popup');
            const whatsappPopupClose = document.getElementById('whatsapp-popup-close');
            
            // Mostrar pop-up ao clicar no ícone flutuante
            whatsappFloat.addEventListener('click', function() {
                whatsappPopup.classList.add('active');
            });
            
            // Fechar pop-up
            whatsappPopupClose.addEventListener('click', function() {
                whatsappPopup.classList.remove('active');
            });
            
            // Mostrar pop-up automaticamente após 10 segundos
            setTimeout(function() {
                whatsappPopup.classList.add('active');
            }, 10000);
            
            // Mostrar pop-up quando o usuário rolar até 50% da página
            let popupShown = false;
            window.addEventListener('scroll', function() {
                if (!popupShown && window.scrollY > (document.body.scrollHeight * 0.3)) {
                    whatsappPopup.classList.add('active');
                    popupShown = true;
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    if (this.getAttribute('href') !== '#') {
                        e.preventDefault();
                        
                        const target = document.querySelector(this.getAttribute('href'));
                        const headerHeight = document.querySelector('header').offsetHeight;
                        
                        window.scrollTo({
                            top: target.offsetTop - headerHeight,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    