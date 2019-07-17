"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const manyLanguages = users.filter(user => user.languages.length > 2);

const emailAddresses = users.map(user => user.email);

const totalYears = users.reduce((total,user) => total + user.yearsOfExperience,0);

const averageYears = totalYears/users.length;
console.log(averageYears);

const longestEmail = users.reduce(function(prev,current){
    //this const stores the email property of object we are currently
    // iterating over
    const currentEmail = current.email;
    if(currentEmail.length > prev.length){
        return currentEmail;
    } else {
        return prev;
    }
},"");

const yourInstructors = users.reduce(function(sentence,instructor,index,arr){
    if(index === (arr.length -1)){
        return `${sentence}${instructor.name}.`;
    }else{
        return `${sentence}${instructor.name},`;
    }
},"Your instructors are: ");

const uniqueLanguages = users.reduce(function(prev,current){
    const langs = current.languages;
    for(const lang of langs){
        prev.add(lang);
    }
    return prev;
},new Set);
