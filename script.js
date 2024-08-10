const message = {
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 
            'Virgo', 'Libra','Scorpio', 'Sagittarius', 'Capricorn', 
            'Aquarius', 'Pisces'],
    horoscope1: ["Communication can get profitable.",
                    "Monitor numbers to keep things on track. ",
                    "Strategize with your partner to prioritize immediate needs.", 
                    "Take advantage of lucrative conditions.",
                    "You\'re on the same wavelength with your partner. ",
                    "Communication opens new possibilities.",
                    "Don\'t fret about the future.",
                    "Exchange ideas.",
                    "Talk about what you love.",
                    "Balance work and fitness routines to increase vitality.",
                    "Work with a coach to get farther, faster.",
                    "Focus on present actions, one step at a time.",
                    "Listen to your heart. Have fun.",
                    "Spend time with someone adorable. ",
                    "Share your admiration and respect. ",
                    "Creative expression flowers anew.",
                    "Discuss common passions.",
                    "Discuss the possibilities with family.",
                    "Home and garden beautification projects satisfy.",
                    "Authorize improvements.",
                    "Make household repairs.",
                    "A little elbow grease goes a long way.",
                    "Learn new tricks.",
                    "Ask questions of an expert, mentor or teacher.",
                    "Dig deeper into a fascinating subject.",
                    "Read, research and write your discoveries.",
                    "You\'re on a creative roll. Use your artistry, talents and charm. ",
                    "A stroke of genius reveals lucrative opportunities.",
                    "Profit from your enthusiasm and passion.",
                    "You\’re strong and getting stronger.",
                    "Count your blessings.",
                    "Dress for success.",
                    "Use your confidence to advance a personal project. ",
                    "Get creative.",
                    "Polish the presentation.",
                    "Your imagination goes wild.",
                    "Complete old projects to make space for what\'s next.",
                    "Listen to your inner muse.",
                    "Consider things from a higher perspective.",
                    "Build and deepen connections.",
                    "Have fun with friends.",
                    "Share what you\'re learning.",
                    "Enjoy parties, meetings and social events.", 
                    "Your greatest strength is love.",
                    "Career matters occupy you. A professional puzzle engages.",
                    "Cultivate your own leadership and accept new responsibilities.",
                    "Develop an exciting opportunity.",
                    "Discuss the possibilities.",
                    "Your travels and investigations carry you to new lands, cultures and ideologies.",
                    "Plan carefully. Research answers for all your questions.",
                    "Find experienced experts."
                ]
};


function getRandomInt(max){
    return Math.floor(Math.random()*max)
}
//console.log(getRandomInt(message.horoscope1.length-1))

const createMessage = (messageObject) => {
    let horoscope =[]; //string array to hold final message
    let random = getRandomInt(messageObject.horoscope1.length-1)

    //for loop to build horoscope array
    for (let i = 0; i < 3; i++) {
        horoscope[i] = messageObject.horoscope1[random];
        random = getRandomInt(messageObject.horoscope1.length-1)
    }

    return horoscope
};


const outputMessage = () => {
    let output = createMessage(message);

    for (let i=0; i < output.length; i++){
    console.log(output[i])
    }
}

outputMessage();
