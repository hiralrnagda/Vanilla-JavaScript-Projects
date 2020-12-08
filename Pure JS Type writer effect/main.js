/* const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

//type method
TypeWriter.prototype.type = function(){

    //current index of word
    const current = this.wordIndex % this.words.length;
    //get full text of current word
    const fulltxt = this.words[current];

    //check if deleting
    if(this.isDeleting){
        //remove a character
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    }
    else{
        //add a character
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }
    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //initial type speed
    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /= 2;
    }

    //if word is complete
    if(!this.isDeleting && this.txt === fulltxt){
        //make pause at end of every word
        typeSpeed = this.wait;
        //set deleting true
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //move to next word
        this.wordIndex++;
        //pause before start typing
        typeSpeed = 500;

    }
    setTimeout(() => this.type(), typeSpeed);
} */


//ES6 class
class TypeWriter{
    constructor(txtElement, words, wait = 3000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait,10);
        this.type();
        this.isDeleting = false;
    }

    type(){
        //current index of word
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fulltxt = this.words[current];

        //check if deleting
        if(this.isDeleting){
            //remove a character
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        }
        else{
            //add a character
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }
        //insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //initial type speed
        let typeSpeed = 300;
        if(this.isDeleting){
            typeSpeed /= 2;
        }

        //if word is complete
        if(!this.isDeleting && this.txt === fulltxt){
            //make pause at end of every word
            typeSpeed = this.wait;
            //set deleting true
            this.isDeleting = true;
        }
        else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            //move to next word
            this.wordIndex++;
            //pause before start typing
            typeSpeed = 500;

        }
        setTimeout(() => this.type(), typeSpeed);

    }
}

//init on DOM load
document.addEventListener('DOMContentLoaded', init);

//init app
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //init typewriter
    new TypeWriter(txtElement, words, wait);
}
