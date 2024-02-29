const car = 'Audi';
switch (car) {
    case "VW":
    case "Audi":
    case "Bentley":
    case "Bugatti":
    case "Lamborghini":
    case "Porsche":
        console.log(`${car} priklauso VW grupei`)
        break;
    case "BMW":
    case "Mini":
    case "Rolls-Royce":
        console.log(`${car} priklauso BMW grupei`)
        break;
    default:
        console.log('Nepriklauso jokiai grupei')

}

// 8.Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui.
//     switch statement kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
//     BMW group priklauso: BMW, Mini, Rolls-Royce.