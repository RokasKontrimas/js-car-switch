let age = 2000;
switch (true) {
    case age < 0:
        console.log('ivestas amzius yra per mazas')
        break;
    case age >= 120:
        console.log('ivestas amzius yra per didelis')
        break;
    case age < 6:
        console.log('i mokykla neina')
        break;
    case age < 7:
        console.log('Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.')
        break;
    case age < 10:
        console.log('eina i pradine mokykla')
        break;
    case age < 11:
        console.log('Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.')
        break;
    case age < 14:
        console.log('eina i pagrindine mokykla')
        break;
    case age < 15:
        console.log('Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.')
        break;
    case age < 18:
        console.log('Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.')
        break;
    case age < 19:
        console.log('baige mokykla')
        break;
    default:
        console.log('Something went wrong')

}

