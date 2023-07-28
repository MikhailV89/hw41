const options = document.querySelectorAll('.container');

options.forEach(option => {
    option.addEventListener('click', () => {
        const countElement = option.querySelector('.value');
        let count = parseInt(countElement.textContent);
        countElement.textContent = count + 1;
    });
});