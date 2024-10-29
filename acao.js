const profilePic = document.querySelector('.profile-pic');

profilePic.addEventListener('click', () => {
    profilePic.style.transform = 'scale(1.2)'; // Aumenta a foto ao clicar
    setTimeout(() => {
        profilePic.style.transform = 'scale(1)'; // Retorna ao tamanho normal após 300ms
    }, 300); // Tempo em milissegundos
});
