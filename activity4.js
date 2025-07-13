        function openModal(imageSrc) {
            document.getElementById('modal-img').src = imageSrc;
            document.getElementById('modal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }