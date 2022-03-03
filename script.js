document.querySelector('header button').addEventListener('click', function () {
    document.getElementById("container").innerHTML='';
    
    switch (document.querySelector("select").value) {
        case "1":
            bombe=bombGenerator(100);
            for (let i = 1; i <= 100; i++) {
                const element = document.createElement('div');
                element.addEventListener('click', function() {
                    for (let index = 0; index < bombe.length; index++) {
                        if (this.innerHTML==bombe[index]){
                            this.classList.add('bomb')
                        } else {
                            this.classList.add('active');
                        }
                    }
                })
                element.classList.add('square', 'easy');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
        break;
        case "2":
            bombe=bombGenerator(81);
            for (let i = 1; i <= 81; i++) {
                const element = document.createElement('div');
                element.addEventListener('click', function() {
                    for (let index = 0; index < bombe.length; index++) {
                        if (this.innerHTML==bombe[index]){
                            this.classList.add('bomb')
                        } else {
                            this.classList.add('active');
                        }
                    }
                })
                element.classList.add('square', 'medium');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
        break;
        case "3":
            bombe=bombGenerator(49);
            for (let i = 1; i <= 49; i++) {
                const element = document.createElement('div');
                element.addEventListener('click', function() {
                    for (let index = 0; index < bombe.length; index++) {
                        if (this.innerHTML==bombe[index]){
                            this.classList.add('bomb')
                        } else {
                            this.classList.add('active');
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

function bombGenerator(max){
    const array = [];
    let i= 0;
    while (i<16) {
        num = parseInt(Math.random() * max + 1); 
        if (!array.includes(num)) {
            array.push(num);            
            i++;
        };
    }
    return array;
}

