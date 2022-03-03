document.querySelector('header button').addEventListener('click', function () {
    document.getElementById("container").innerHTML = '';
    document.getElementById("risultato").innerHTML = '';
    let end = false;
    switch (document.querySelector("select").value) {
        case "1":
            bombe = bombGenerator(100);
            for (let i = 1; i <= 100; i++) {
                const element = document.createElement('div');
                element.classList.add('square', 'easy');
                element.innerHTML = i;
                document.getElementById("container").append(element);

                element.addEventListener('click', function () {
                    if (end == false) {
                        if (bombe.includes(parseInt(this.innerHTML))) {
                            this.classList.add('bomb');
                            document.getElementById('risultato').innerHTML = "YOU LOSE :( Punteggio: " + document.querySelectorAll(".active").length;
                            return end = true;
                        } else {
                            this.classList.add('active')
                        }

                        if (document.querySelectorAll(".active").length == 84) {
                            document.getElementById('risultato').innerHTML = "YOU WIN!";
                            return end = true;
                        }
                    }
                })
            }
            break;
        case "2":
            bombe = bombGenerator(81);
            for (let i = 1; i <= 81; i++) {
                const element = document.createElement('div');
                element.addEventListener('click', function () {
                    if (end == false) {
                        if (bombe.includes(parseInt(this.innerHTML))) {
                            this.classList.add('bomb');
                            document.getElementById('risultato').innerHTML = "YOU LOSE :( Punteggio: " + document.querySelectorAll(".active").length;
                            return end = true;

                        } else {
                            this.classList.add('active')
                        }

                        if (document.querySelectorAll(".active").length == 65) {
                            document.getElementById('risultato').innerHTML = "YOU WIN!";
                            return end = true;

                        }
                    }
                })
                element.classList.add('square', 'medium');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
            break;
        case "3":
            bombe = bombGenerator(49);
            for (let i = 1; i <= 49; i++) {
                const element = document.createElement('div');
                element.addEventListener('click', function () {
                    if (end == false) {
                        if (bombe.includes(parseInt(this.innerHTML))) {
                            this.classList.add('bomb');
                            document.getElementById('risultato').innerHTML = "YOU LOSE :( Punteggio: " + document.querySelectorAll(".active").length;
                            return end = true;
                        } else {
                            this.classList.add('active')
                        }
                        if (document.querySelectorAll(".active").length == 33) {
                            document.getElementById('risultato').innerHTML = "YOU WIN!";
                            return end = true;
                        }
                    }
                })
                element.classList.add('square', 'hard');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
            break;
    }
})

function bombGenerator(max) {
    const array = [];
    let i = 0;
    while (i < 16) {
        num = parseInt(Math.random() * max + 1);
        if (!array.includes(num)) {
            array.push(num);
            i++;
        };
    }
    return array;
}

