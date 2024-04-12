const codedMsg = ['1 I', '2 computers', '3 love', '4 stories', '5 beautiful', '6 you', '7 thanks', '8 pigeons', '9 cats', '10 with', '11 viction', '12 zod', '13 fri', '14 valent', '15 all', '16 sweet', '17 again', '18 adult', '19 thirty', '20 pounds', '21 my', '22 son', '23 wow', '24 hours', '25 ripe', '26 mules', '27 mama', '28 heart'];


let reversedMsg = codedMsg.reverse()
console.log(reversedMsg);



console.log(reversedMsg.sort((a,b)  => {
    let numA = parseInt(a.split(' ')[0]);
    let numB = parseInt(b.split(' ')[0]);

    return numA - numB;
}))