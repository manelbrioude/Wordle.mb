document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    
    getDictionary();


    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth(); 
    
    let dictionary ;
    let guessedWords = [[]]
    let availableSpace = 1;
    let words;
    let wordle;
    let guessedWordCount = 0;
    let validWord = false
    let wordleGood = false
    const keys = document.querySelectorAll('.keyboard-row button')

    

       
    

    function getDictionary() {
        fetch("./diccionario.json")
        .then((response)=> response.json())
        .then((res)=>{
            dictionary = res;
            getWords();
        })
        .catch((err)=>{
            consol.error(err)
        })

    }

    function getWords() {
        fetch("./words.json")
        .then((response)=> response.json())
        .then((res)=>{
            words = res;
            getWordOfToday(words)
        })
        .catch((err)=>{
            console.error(err)
        })

    }

    function getWordOfToday(words){
        
       words.forEach((word,index)=>{
        if(word.day == day){
            if(word.month == month){
                wordle = word.word
                wordleGood = true
            }
        }
        
       })
       if(wordleGood == false){
           let gotWord = false
           var randomWord;
           
           while(gotWord==false){
            if(dictionary === undefined){

            }else{
            randomWord = dictionary[Math.floor(Math.random()*dictionary.length)];}

            if(typeof randomWord==="undefined"){
                console.log(randomWord)
            }else{
                if (randomWord.length == 5){
                    gotWord = true
                    wordle = randomWord
                }
            }         
           }
            
       }
      console.log(randomWord)
    }

    
      

    function getCurrentWordArr(){
        const numberOfGuessedWords=guessedWords.length
        return guessedWords[numberOfGuessedWords-1]
    }

    function updateGuessedWords(letter) {
        const currentWordArr = getCurrentWordArr()

        if(currentWordArr && currentWordArr.length <5){
            currentWordArr.push(letter)

            const availableSpaceEl = document.getElementById(String(availableSpace))
            availableSpace = availableSpace + 1;

            availableSpaceEl.textContent= letter;
        }
    }

    function getTileColor(letter,index) {
        const isCorrectLetter = wordle.includes(letter)

        if (!isCorrectLetter){
            return "rgb(58,58,60)"
        }

        const letterInThatPosition = wordle.charAt(index)
        const isCorrectPosition = letter === letterInThatPosition

        if (isCorrectPosition){
            return "rgb(83, 141, 78)"
        }

        return "rgb(181, 159, 59)"
    }

    function handleSubmitWord () {
     
        const currentWordArr = getCurrentWordArr()
        
         const firstLetterId = guessedWordCount * 5 + 1;
         
        if (currentWordArr.length !==5) {
            // window.alert("Word must be 5 letters")
            
            shakeSquares(firstLetterId);
        
        }else{
            const currentWord = currentWordArr.join('')
            checkWordExist(dictionary, currentWord)
            if(validWord === true){
                

       
                const interval = 200;
                currentWordArr.forEach((letter,index)=>{
                    setTimeout(()=>{
                        const tileColor = getTileColor(letter,index);
                        const letterId = firstLetterId + index;
                        const letterEl = document.getElementById(letterId);
                        letterEl.classList.add("animate__flipInX");
                        letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
                    },interval * index)
        })

        guessedWordCount += 1;
                   

        if(currentWord===wordle){
            window.alert("Congratulations")
        }

        if (guessedWords.length === 6){
            window.alert("Sorry, you have no more guesses! The word was ${word}.")
        }

        guessedWords.push([])
    }else{
        shakeSquares(firstLetterId);
    }


    }}

    function createSquares() {
        const gameBoard = document.getElementById("board");

        for (let index = 0; index < 30; index++) {
            let square = document.createElement("div")
            square.classList.add("square")
            square.classList.add("animate__animated")
            square.setAttribute("id", index + 1)
            gameBoard.appendChild(square);
            
        }
    }

    function checkWordExist(dictionary,word){
        if (dictionary.includes(word)){
            validWord = true;
        }else{
            validWord = false;
        }
    }

    function shakeSquares(firstLetterId) {
        if(firstLetterId===1){
            const square1=document.getElementById(1)
            square1.classList.add("animate__shakeX")
            const square2=document.getElementById(2)
            square2.classList.add("animate__shakeX")
            const square3=document.getElementById(3)
            square3.classList.add("animate__shakeX")
            const square4=document.getElementById(4)
            square4.classList.add("animate__shakeX")
            const square5=document.getElementById(5)
            square5.classList.add("animate__shakeX")
        }if(firstLetterId===6){
            const square6=document.getElementById(6)
            square6.classList.add("animate__shakeX")
            const square7=document.getElementById(7)
            square7.classList.add("animate__shakeX")
            const square8=document.getElementById(8)
            square8.classList.add("animate__shakeX")
            const square9=document.getElementById(9)
            square9.classList.add("animate__shakeX")
            const square10=document.getElementById(10)
            square10.classList.add("animate__shakeX")
        }if(firstLetterId===11){
            const square11=document.getElementById(11)
            square11.classList.add("animate__shakeX")
            const square12=document.getElementById(12)
            square12.classList.add("animate__shakeX")
            const square13=document.getElementById(13)
            square13.classList.add("animate__shakeX")
            const square14=document.getElementById(14)
            square14.classList.add("animate__shakeX")
            const square15=document.getElementById(15)
            square15.classList.add("animate__shakeX")
        }if(firstLetterId===16){
            const square16=document.getElementById(16)
            square16.classList.add("animate__shakeX")
            const square17=document.getElementById(17)
            square17.classList.add("animate__shakeX")
            const square18=document.getElementById(18)
            square18.classList.add("animate__shakeX")
            const square19=document.getElementById(19)
            square19.classList.add("animate__shakeX")
            const square20=document.getElementById(20)
            square20.classList.add("animate__shakeX")
        }if(firstLetterId===21){
            const square21=document.getElementById(21)
            square21.classList.add("animate__shakeX")
            const square22=document.getElementById(22)
            square22.classList.add("animate__shakeX")
            const square23=document.getElementById(23)
            square23.classList.add("animate__shakeX")
            const square24=document.getElementById(24)
            square24.classList.add("animate__shakeX")
            const square25=document.getElementById(25)
            square25.classList.add("animate__shakeX")
        }if(firstLetterId===26){
            const square26=document.getElementById(26)
            square26.classList.add("animate__shakeX")
            const square27=document.getElementById(27)
            square27.classList.add("animate__shakeX")
            const square28=document.getElementById(28)
            square28.classList.add("animate__shakeX")
            const square29=document.getElementById(29)
            square29.classList.add("animate__shakeX")
            const square30=document.getElementById(30)
            square30.classList.add("animate__shakeX")
        }
        
        removeShake(firstLetterId)
    }

    function removeShake(firstLetterId){
        setTimeout(()=>{
            if(firstLetterId===1){
                const square1=document.getElementById(1)
                square1.classList.remove("animate__shakeX")
                const square2=document.getElementById(2)
                square2.classList.remove("animate__shakeX")
                const square3=document.getElementById(3)
                square3.classList.remove("animate__shakeX")
                const square4=document.getElementById(4)
                square4.classList.remove("animate__shakeX")
                const square5=document.getElementById(5)
                square5.classList.remove("animate__shakeX")
            }if(firstLetterId===6){
                const square6=document.getElementById(6)
                square6.classList.remove("animate__shakeX")
                const square7=document.getElementById(7)
                square7.classList.remove("animate__shakeX")
                const square8=document.getElementById(8)
                square8.classList.remove("animate__shakeX")
                const square9=document.getElementById(9)
                square9.classList.remove("animate__shakeX")
                const square10=document.getElementById(10)
                square10.classList.remove("animate__shakeX")
            }if(firstLetterId===11){
                const square11=document.getElementById(11)
                square11.classList.remove("animate__shakeX")
                const square12=document.getElementById(12)
                square12.classList.remove("animate__shakeX")
                const square13=document.getElementById(13)
                square13.classList.remove("animate__shakeX")
                const square14=document.getElementById(14)
                square14.classList.remove("animate__shakeX")
                const square15=document.getElementById(15)
                square15.classList.remove("animate__shakeX")
            }if(firstLetterId===16){
                const square16=document.getElementById(16)
                square16.classList.remove("animate__shakeX")
                const square17=document.getElementById(17)
                square17.classList.remove("animate__shakeX")
                const square18=document.getElementById(18)
                square18.classList.remove("animate__shakeX")
                const square19=document.getElementById(19)
                square19.classList.remove("animate__shakeX")
                const square20=document.getElementById(20)
                square20.classList.remove("animate__shakeX")
            }if(firstLetterId===21){
                const square21=document.getElementById(21)
                square21.classList.remove("animate__shakeX")
                const square22=document.getElementById(22)
                square22.classList.remove("animate__shakeX")
                const square23=document.getElementById(23)
                square23.classList.remove("animate__shakeX")
                const square24=document.getElementById(24)
                square24.classList.remove("animate__shakeX")
                const square25=document.getElementById(25)
                square25.classList.remove("animate__shakeX")
            }if(firstLetterId===26){
                const square26=document.getElementById(26)
                square26.classList.remove("animate__shakeX")
                const square27=document.getElementById(27)
                square27.classList.remove("animate__shakeX")
                const square28=document.getElementById(28)
                square28.classList.remove("animate__shakeX")
                const square29=document.getElementById(29)
                square29.classList.remove("animate__shakeX")
                const square30=document.getElementById(30)
                square30.classList.remove("animate__shakeX")
            }
        },1000)
        
    }

    function handleDeleteLetter(){
        const currentWordArr = getCurrentWordArr()
        const removedLetter = currentWordArr.pop()

        guessedWords[guessedWords.length-1] = currentWordArr
        const lastLetterEl = document.getElementById(String(availableSpace-1))

        lastLetterEl.textContent = ""
        availableSpace = availableSpace - 1
    }


    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick =({target}) =>{
            const letter = target.getAttribute("data-key")
            if (letter === 'enter') {
                handleSubmitWord()
                return;
            }

            if(letter === 'del'){
                handleDeleteLetter()
                return;
            }
  
            updateGuessedWords(letter)
        }
          
      }



});