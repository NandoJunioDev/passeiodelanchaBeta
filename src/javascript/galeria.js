
    // Abrir galeria
    function openGallery(galleryId) {
        document.getElementById(galleryId).classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Impedir rolagem da página quando o modal estiver aberto
    }
    
    // Fechar galeria
    function closeGallery(galleryId) {
        document.getElementById(galleryId).classList.add('hidden');
        document.body.style.overflow = 'auto'; // Permitir rolagem da página novamente
    }
    
    // Mudar imagem principal ao clicar em uma miniatura
    function changeMainImage(mainImgId, newSrc) {
        document.getElementById(mainImgId).src = newSrc;
    }
    
    // Fechar galeria ao clicar fora do modal
    document.addEventListener('click', function(event) {
        const galleries = document.querySelectorAll('[id$="-gallery"]');
        galleries.forEach(gallery => {
            if (event.target === gallery) {
                closeGallery(gallery.id);
            }
        });
    });
    
    // Fechar galeria ao pressionar ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openGallery = document.querySelector('[id$="-gallery"]:not(.hidden)');
            if (openGallery) {
                closeGallery(openGallery.id);
            }
        }
    });
