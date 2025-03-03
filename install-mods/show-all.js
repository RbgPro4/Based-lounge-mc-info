function toggleButtons() {
    const container = document.getElementById('buttonsContainer');
    const button = document.querySelector('.toggle-btn');

    if (container.classList.contains('show')) {
        container.classList.remove('show');
        button.textContent = "Show All";
    } else {
        container.classList.add('show');
        button.textContent = "Hide All";
    }
}