// ---------------------------------------------------------
// 13. Updating objects, in an immutable way
const meal = {
    id: 1,
    description: 'Breakfast',
}

const updatedMeal = {
    ...meal,
    description: 'Brunch',
    calories: 200,
}

console.log(updatedMeal);

//const { description, calories } = updatedMeal;

const { id, ...mealWithoutId} = updatedMeal;
console.log(mealWithoutId);

// exercise fp4 -------------------------------------------------------------------
const meal2 = {
    description: 'Dinner',
};

// 1. In an Immutable way, add a property to the
// meal called calories setting it's value to 200,
// then log the result to the console

const mealWithCal = {
    ...meal2,
    calories: 200,
};

console.log('mealWithCal', mealWithCal);

// 2. In an Immutable way, increase the calories 
// by 100 and print the result to the console

const mealIncreasedCal = {
    ...mealWithCal,
    calories: mealWithCal.calories + 100,
};

console.log('mealIncreasedCal', mealIncreasedCal);

// 3. In an Immutable way, remove the calories property and log the result to the console

const {calories, ...mealWithoutCal} = mealIncreasedCal;

console.log('mealWithoutCal', mealWithoutCal);

// See solution at: https://jsbin.com/sunewil/edit?js,console


// ---------------------------------------------------------------------
// 14. Updating arrays, in an immutable way

const mealArr = [
    {id:1, description:'Breakfast', calories:420},
    {id:2, description:'Lunch', calories:520},
];

const mealItem = {
    id: 3,
    description: 'Snack',
    calories: 180,
};

// add new item
const updatedMeals = [...mealArr, mealItem];

console.log(mealArr, updatedMeals);

// update existing item
// use array.map method:
// brief intro:
const numbers = [1,2,3];

function double(item) {
    return item * 2;
}

const numbersDoubled = numbers.map(double);
console.log('numbers doubled: ', numbersDoubled);

// change the description of meal with id = 2

const updatedMealsDescription = updatedMeals.map(changeDescription);

function changeDescription (meal) {
    if (meal.id === 2) {
        return {...meal, description: 'Brunch'};
    }
    return meal;
};
console.log('meal id=2 description updated: ', updatedMealsDescription);

// remove item from an array in an immutable way

const removedMeals = updatedMealsDescription.filter(function (meal) {
    return meal.id !== 2;
});

console.log('meal id=2 removed: ', removedMeals);

// -----------------------------------------------------------------
// exercise fp5
// 1. create a constant named friends, 
// which is an array that contains 2 
// names of your choosing.

const friends = ['Lisa','Mark'];

// 2. Create a new constant named updatedFriends, 
// which includes the friends array values plus 
// one additional name
const updatedFriends = [...friends, 'Stephanie'];

// 3. Create a new constant named friendNameLengths, 
// which is based on the array updatedFriends, 
// but instead of having the friends names, 
// have the array store the length of each persons name.
const friendNameLengths = updatedFriends.map((friend)=> {
    return friend.length;
});

// 4. Create a new constant named shorterNamedFriends, 
// which will be a list of the friends except the friend with the longest name.
const shorterNamedFriends = updatedFriends.filter((friend) => {
    return friend.length < Math.max(...friendNameLengths);
});

// 5. Print each variable to the console.
console.log(friends, updatedFriends, friendNameLengths, shorterNamedFriends);

// Solution can be seen at: 
// https://jsbin.com/nevonet/1/edit?js,console
// --------------------------------------------------------------------------------------
//
// 15. Summarize information in an array
// reduce function

const numbers2 = [1,2,3];

function sum(x,y) {
    // x is the accumulator
    return x+y;
}

const totalNum = numbers2.reduce(sum);

// ---------------------------------------------------------------
const grades = [60, 55, 80, 90, 99, 92, 75, 72];
const total = grades.reduce((acc,grade) => {
    return acc + grade;
})
const avg = total / grades.length;

const letterGradeCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc, grade) {
    const { a = 0, b = 0, c = 0, d = 0, f = 0} = acc;
    if (grade >= 90) {
        return {...acc, a: a + 1}; 
    } else if (grade >= 80) {
        return {...acc, b: b + 1};
    } else if (grade >= 70) {
        return {...acc, c: c + 1};
    } else if (grade >= 60) {
        return {...acc, d: d + 1}
    } else {
        return {...acc, f: f + 1}
    }
}

console.log(total, avg, letterGradeCount);
// -------------------------------------------------------------------------------
// exercise fp6 
// Functional Programming for Beginners Exercise

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4: 2 ...}

const reviewsCount = reviews.reduce(groupByReview, {});

// my answer
function groupByReview(acc, review) {
    //const a = 5.0, b = 4.5, c = 4.0, d = 3.5, e = 3.0,f = 2.5,g = 2.0,h = 1.5,i = 1.0, j = 0.5;
    //const { a = 0, b = 0, c = 0, d = 0, e = 0,f = 0,g = 0,h = 0,i = 0, j = 0 } = acc;
    if (review === 5.0) {
        return {...acc, 5.0 : (acc[5.0] || 0) +1}
    } else if (review === 4.5) {
        return {...acc, 4.5 : (acc[4.5] || 0) +1}
    } else if (review === 4.0) {
        return {...acc, 4.0 : (acc[4.0] || 0) +1}
    } else if (review === 3.5) {
        return {...acc, 3.5 : (acc[3.5] || 0) +1}
    } else if (review === 3.0) {
        return {...acc, 3.0 : (acc[3.0] || 0) +1}
    } else if (review === 2.5) {
        return {...acc, 2.5 : (acc[2.5] || 0) +1}
    } else if (review === 2.0) {
        return {...acc, 2.0 : (acc[2.0] || 0) +1}
    } else if (review === 1.5) {
        return {...acc, 1.5 : (acc[1.5] || 0)+1}
    } else if (review === 1.0) {
        return {...acc, 1.0 : (acc[1.0] || 0)+1}
    } else {
        return {...acc, 0.5: (acc[0.5] || 0) +1}
    }
}

// solution
function groupBy (acc, review){
    const count = acc[review] || 0;
    return {...acc, [review]: count + 1}
}
  
console.log(reviewsCount);
// TIP: checkout computed properties discussed here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
// solution can be found at:
// https://jsbin.com/dehiqux/1/edit?js,console
