let proceed = document.querySelector('.proceed');
let targetDoc = document.querySelector('#target');
let container = document.querySelector('.container');
let index = 0
let next = document.querySelector('.next-question-btn')
let risultato = 0
let pros = 0
let avanzamento =0

proceed.addEventListener('click', () => {
    container.textContent = ''
    container.style.display = 'none'

    fetch('benchmark_page.html')
        .then(res => res.text())
        .then(res => {


            let divOspite = document.createElement('div');
            divOspite.innerHTML = res

            targetDoc.append(divOspite);

            //##########################################################################################################
            //                                              timer
            //##########################################################################################################

            const FULL_DASH_ARRAY = 283;
            const WARNING_THRESHOLD = 10;
            const ALERT_THRESHOLD = 5;

            const COLOR_CODES = {
                info: {
                    color: "green"
                },
                warning: {
                    color: "orange",
                    threshold: WARNING_THRESHOLD
                },
                alert: {
                    color: "red",
                    threshold: ALERT_THRESHOLD
                }
            };

            const TIME_LIMIT = 20;
            let timePassed = 0;
            let timeLeft = TIME_LIMIT;
            let timerInterval = null;
            let remainingPathColor = COLOR_CODES.info.color;

            //da sistemare variabile
            let timer = document.getElementById("app").innerHTML = `
        <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
            ></path>
            </g>
        </svg>
            <span class="text-timer1">SECONDS</span>
        <span id="base-timer-label" class="base-timer__label">${formatTime(
                timeLeft
            )}</span>
        <span class="text-timer">REMAINING</span>  

        </div>
        `;

            startTimer();

            function onTimesUp() {
                // clearInterval(timerInterval);
                domande();

            }

            function startTimer() {
                timerInterval = setInterval(() => {
                    timePassed = timePassed += 1;
                    timeLeft = TIME_LIMIT - timePassed;
                    document.getElementById("base-timer-label").innerHTML = formatTime(
                        timeLeft
                    );
                    setCircleDasharray();
                    setRemainingPathColor(timeLeft);

                    if (timeLeft === 0) {
                        onTimesUp();

                    }
                }, 1000);
            }

            function formatTime(time) {
                let seconds = time;

                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }

                return `${seconds}`;
            }

            function setRemainingPathColor(timeLeft) {
                const { alert, warning, info } = COLOR_CODES;
                if (timeLeft <= alert.threshold) {
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.remove(warning.color);
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.add(alert.color);
                } else if (timeLeft <= warning.threshold) {
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.remove(info.color);
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.add(warning.color);
                }
            }

            function calculateTimeFraction() {
                const rawTimeFraction = timeLeft / TIME_LIMIT;
                return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
            }

            function setCircleDasharray() {
                const circleDasharray = `${(
                    calculateTimeFraction() * FULL_DASH_ARRAY
                ).toFixed(0)} 283`;
                document
                    .getElementById("base-timer-path-remaining")
                    .setAttribute("stroke-dasharray", circleDasharray);
            }


            //#############################################################################################################
            //                                             domande  
            //#############################################################################################################
            const questions = [
                {
                    category: "Science: Computers",
                    type: "multiple",
                    difficulty: "easy",
                    question: "What does CPU stand for?",
                    correct_answer: "Central Processing Unit",
                    incorrect_answers: [
                        "Central Process Unit",
                        "Computer Personal Unit",
                        "Central Processor Unit",
                    ],
                },
                {
                    category: "Science: Computers",
                    type: "multiple",
                    difficulty: "easy",
                    question:
                        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
                    correct_answer: "Final",
                    incorrect_answers: ["Static", "Private", "Public"],
                },
                {
                    category: "Science: Computers",
                    type: "boolean",
                    difficulty: "easy",
                    question: "The logo for Snapchat is a Bell.",
                    correct_answer: "False",
                    incorrect_answers: ["True"],
                },
                {
                    category: "Science: Computers",
                    type: "boolean",
                    difficulty: "easy",
                    question:
                        "Pointers were not used in the original C programming language; they were added later on in C++.",
                    correct_answer: "False",
                    incorrect_answers: ["True"],
                },
                {
                    category: "Science: Computers",
                    type: "multiple",
                    difficulty: "easy",
                    question:
                        "What is the most preferred image format used for logos in the Wikimedia database?",
                    correct_answer: ".svg",
                    incorrect_answers: [".png", ".jpeg", ".gif"],
                },
                {
                    category: "Science: Computers",
                    type: "multiple",
                    difficulty: "easy",
                    question: "In web design, what does CSS stand for?",
                    correct_answer: "Cascading Style Sheet",
                    incorrect_answers: [
                        "Counter Strike: Source",
                        "Corrective Style Sheet",
                        "Computer Style Sheet",
                    ],
                },
                {
                    category: "Science: Computers",
                    type: "multiple",
                    difficulty: "easy",
                    question:
                        "What is the code name for the mobile operating system Android 7.0?",
                    correct_answer: "Nougat",
                    incorrect_answers: [
                        "Ice Cream Sandwich",
                        "Jelly Bean",
                        "Marshmallow",
                    ],
                },
                {
                    category: "Science: Computers",
                    type: "multiple",
                    difficulty: "easy",
                    question: "On Twitter, what is the character limit for a Tweet?",
                    correct_answer: "140",
                    incorrect_answers: ["120", "160", "100"],
                },
                {
                    category: "Science: Computers",
                    type: "boolean",
                    difficulty: "easy",
                    question: "Linux was first created as an alternative to Windows XP.",
                    correct_answer: "False",
                    incorrect_answers: ["True"],
                },
                {
                    category: "Science: Computers",
                    type: "multiple",
                    difficulty: "easy",
                    question:
                        "Which programming language shares its name with an island in Indonesia?",
                    correct_answer: "Java",
                    incorrect_answers: ["Python", "C", "Jakarta"],
                },
            ];

            let target = document.querySelector('.answers-container')

            let next = document.querySelector('.next-question-btn')

            let domandeRisposte = []
            
            for (let opzioni of questions) {
                let option = []
                let titoli = opzioni.question
                let vere = opzioni.correct_answer

                let sbagliate = opzioni.incorrect_answers
                sbagliate.push(opzioni.correct_answer)
                option.push(...sbagliate)



                domandeRisposte.push({
                    domanda: titoli,
                    risposte: option,
                    corrette: vere
                })

            }


            function shuffle(arr){
                let tempArr = []
                let ndomande = domandeRisposte.length;
                for(let i = 0; i < ndomande; i++){
                    let rand = Math.floor(Math.random() * domandeRisposte.length);
                    tempArr.push(domandeRisposte[rand])
                    domandeRisposte.splice(rand, 1);
                }
    
                return tempArr;
            }

            domandeRisposte = shuffle(domandeRisposte);
            domande()



            next.addEventListener('click', () => {
                domande()
                console.log(risultato)
                if (pros == 10) {//mi riporta alla pagina dei risultati


                    let nuovoTasto = document.querySelector('.next-question-box')
                    nuovoTasto.textContent = ''
                    let confermaT = document.createElement('button')
                    confermaT.classList.add('cta')
                    confermaT.textContent = 'conferma'
                    nuovoTasto.appendChild(confermaT)
                    //############################################################################################################
                    //                                           results page
                    //############################################################################################################               

                    confermaT.addEventListener('click', () => {
                        targetDoc.textContent = ''


                        fetch('results_page.html')
                            .then(res2 => res2.text())
                            .then(res2 => {
                                let divOspite = document.createElement('div');
                                divOspite.innerHTML = res2

                                targetDoc.append(divOspite);


                                //  inserire javascript dei risultati

                                let correctAnswers = risultato;
                                let totalQuestions = 10;
                                let percentage = Math.round(correctAnswers / totalQuestions * 100);

                                let ctx = document.getElementById('myChart').getContext('2d');
                                let myChart = new Chart(ctx, {
                                    type: 'doughnut',
                                    data: {
                                        labels: ['Correct Answers', 'Incorrect Answers'],
                                        datasets: [{
                                            label: '% Correct',
                                            data: [percentage, 100 - percentage],
                                            backgroundColor: ['#00ffff', '#d20094']
                                        }]
                                    },
                                    options: {
                                        responsive: true,
                                        cutout: 120,
                                        maintainAspectRatio: false,
                                        legend: {
                                            position: 'bottom'
                                        },
                                        title: {
                                            display: true,
                                            text: 'Quiz Results'
                                        },
                                        animation: {
                                            animateScale: true,
                                            animateRotate: true
                                        },
                                        tooltips: {
                                            enabled: false
                                        },
                                        plugins: {
                                            datalabels: {
                                                formatter: function (value, context) {
                                                    return context.chart.data.labels[context.dataIndex] + '\n' + value + '%';
                                                },
                                                color: '#fff',
                                                font: {
                                                    weight: 'bold',
                                                    size: 16
                                                }
                                            }
                                        }
                                    }
                                });

                                let message = '';
                                let message1 = '';
                                let message2 = '';
                                
                                


                                if (percentage >= 40) {
                                    message = 'Congratulations!';
                                    message1 = 'You passed the exam.';
                                    message2 = ' I will send you the certificate in a few minutes. Please check your email (including promotions and spam folder).';
                                } else {
                                    
                                    message2 = 'Oh no! Unfortunately, you did not pass the exam. Better luck next time.';
                                }

                                let span1=document.createElement('span')
                                span1.textContent=message
                                span1.classList.add('message');
                                let span2=document.createElement('span')
                                span2.textContent= message1
                                span2.classList.add('message');
                                let paragrafo=document.createElement('p')
                                paragrafo.textContent =message2
                                paragrafo.classList.add('message');


                                let container1 = document.querySelector('.circle');
                                let messageDiv = document.createElement('div');
                                messageDiv.classList.add('messageDiv');

                                //messageDiv.textContent = message;
                                container1.appendChild(messageDiv);

                                messageDiv.appendChild(span1)
                                messageDiv.appendChild(span2)
                                messageDiv.appendChild(paragrafo)

                                //  calcolo percentuale
                                let percentuale = ((correctAnswers / 10) * 100).toFixed(0)
                                let err = 100 - percentuale

                                let percentualeGiusto = document.querySelector('#giuste')
                                percentualeGiusto.textContent = `${percentuale}%`
                                let percentualeSbagliate = document.querySelector('#sbagliate')
                                percentualeSbagliate.textContent = `${err}%`
                                // numero giuste
                                let incorrectAnswers = 10 - correctAnswers

                                let numDGiuste = document.querySelector('#numgiuste')
                                let numDSbagliate = document.querySelector('#numsbagliate')
                                numDGiuste.textContent = `${correctAnswers}/10 questions`
                                numDSbagliate.textContent = `${incorrectAnswers}/10 questions`
                                //###########################################################################################################
                                //                                      feedback page
                                //###########################################################################################################                        
                                let rateUs = document.querySelector('.rate-btn')
                                rateUs.addEventListener('click', () => {

                                    targetDoc.textContent = ''


                                    fetch('feedback_page.html')
                                        .then(res1 => res1.text())
                                        .then(res1 => {
                                            let divOspite = document.createElement('div');
                                            divOspite.innerHTML = res1

                                            targetDoc.append(divOspite);

                                            let allStars = document.querySelectorAll('.star')


                                            allStars.forEach((star, i) => {
                                                star.onclick = function () {
                                                    let current_star_level = i + 1;

                                                    allStars.forEach((star, j) => {
                                                        if (current_star_level >= j + 1) {
                                                            star.classList.add('feedbackStars')
                                                        } else {
                                                            star.classList.remove('feedbackStars')

                                                        }
                                                    })
                                                }
                                            })

                                        })

                                })

                            })
                    })

                }
                index += 1
            })


            //###############################################################################################################
            //                                              funzione domande
            //###############################################################################################################

            

            function domande() {

                let targeTitolo = document.querySelector('.title-box')
                target.textContent = ''
                targeTitolo.textContent = ''

                timePassed = -1

                let titolo = document.createElement('p')
                titolo.textContent = domandeRisposte[index].domanda
                titolo.classList.add('question-title');
                targeTitolo.appendChild(titolo)

                for (let risposta of domandeRisposte[index].risposte) {
                       
                        let bottone = document.createElement('button')
                        bottone.classList.add('answer-btn')
                        bottone.textContent = risposta
                        target.appendChild(bottone)
                        bottone.setAttribute('data-indice-domanda',index);
                        
                        
                        
                        bottone.addEventListener('click', () => {
                            bottone.classList.add('clicked-answer')
                            let indiceDomanda = bottone.getAttribute('data-indice-domanda');
                            if (domandeRisposte[indiceDomanda].corrette == risposta) {
                                risultato += 1
                            }
                        })
                        
                    
                }

                 avanzamento += 1
                 let questionNum = document.querySelector('#numDoma')
                 questionNum.textContent = `QUESTION ${avanzamento}`
                 pros += 1
            }



        })
})

