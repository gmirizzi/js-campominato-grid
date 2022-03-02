document.querySelector('header button').addEventListener('click', function () {
    document.getElementById("container").innerHTML=''
    switch (document.querySelector("select").value) {
        case "1":
            for (let i = 1; i <= 100; i++) {
                const element = document.createElement('div');
                element.classList.add('square');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
        break;
        case "2":
            for (let i = 1; i <= 81; i++) {
                const element = document.createElement('div');
                element.classList.add('square');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
        break;
        case "3":
            for (let i = 1; i <= 49; i++) {
                const element = document.createElement('div');
                element.classList.add('square');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
        break;    
    }
})