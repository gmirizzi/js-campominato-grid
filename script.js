document.querySelector('header button').addEventListener('click', function () {
    document.getElementById("container").innerHTML='';
    
    switch (document.querySelector("select").value) {
        case "1":
            for (let i = 1; i <= 100; i++) {
                const element = document.createElement('div');
                element.addEventListener('click', function() {
                    this.classList.add('active');
                })
                element.classList.add('square', 'easy');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
            bombGenerator(100);
        break;
        case "2":
            for (let i = 1; i <= 81; i++) {
                const element = document.createElement('div');
                element.addEventListener('click', function() {
                    this.classList.add('active');
                })
                element.classList.add('square', 'medium');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
            bombGenerator(81);
        break;
        case "3":
            for (let i = 1; i <= 49; i++) {
                const element = document.createElement('div');
                element.addEventListener('click', function() {
                    this.classList.add('active');
                })
                element.classList.add('square', 'hard');
                element.innerHTML = i;
                document.getElementById("container").append(element);
            }
            bombGenerator(49);
        break;    
    }
})

function bombGenerator(max){
    const bombe = [];
    let i= 0;
    while (i<16) {
        num = parseInt(Math.random() * max + 1); 
        if (!bombe.includes(num)) {
            bombe.push(num);            
            i++;
        };
    }
    console.log(bombe)
}

