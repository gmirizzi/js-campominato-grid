document.querySelector('header button').addEventListener('click', function () {
    document.getElementById("container").innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        const element = document.createElement('div');
        switch (document.querySelector("select").value) {
            case "1":
                if (i <= 100) {
                    element.innerHTML = i;
                }
                break;
            case "2":
                if (i <= 81) {
                    element.innerHTML = i;
                }
                break;
            case "3":
                if (i <= 49) {
                    element.innerHTML = i;
                }
                break;
        }
        element.classList.add('square');
        document.getElementById("container").append(element);
    }
})