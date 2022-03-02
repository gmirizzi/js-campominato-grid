for (let i = 1; i <= 100; i++) {
    const element = document.createElement('div');
    element.classList.add('square');
    element.innerHTML = i;
    document.getElementById("container").append(element);
}