//(event) buttons
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let ranBtn = document.querySelector('.random-btn');

//(DOM) displays
let pics = document.querySelector('.picture');
let names = document.querySelector('.name');
let jobs = document.querySelector('.job');
let bios = document.querySelector('.bio');

//object
const reviews = [
    {
        pic: 'images/img1.jpg',
        name: 'Sarah',
        job: 'Ex-Cop',
        bio: 'I am strong Russian girl. I was Ex-Cop and I put 3000 criminals in prison. period'
    },
    {
        pic: 'images/img2.jpg',
        name: 'Tom',
        job: 'Ex-Criminal',
        bio: 'I can get away from cops easily, but I was caught only once by Russian cop. She is strong.'
    },
    {
        pic: 'images/img3.jpg',
        name: 'Jack',
        job: 'Mechanic',
        bio: 'asjdfhuisafhjkas jkhsd fkjls fkusjhdf jklas fjklashf ksajdlfh lksadjhf asdljkfsajf hasjdklf.'
    },
    {
        pic: 'images/img4.jpg',
        name: 'Nina',
        job: 'Teacher',
        bio: 'adsfkasfdkj als;kjfasdklfj laksdfk lsdf kjdskjlsahf jksadf jskadfh jskhdf jksahdf sdkjlhf.'
    }
];

//window event
let count = 0;

window.addEventListener('DOMContentLoaded', function(){
  display();
})


//display 
function display(){
    var person = reviews[count];
    pics.src = person.pic;
    names.innerHTML = person.name;
    jobs.innerHTML = person.job;
    bios.innerHTML = person.bio;
}



//button event
nextBtn.addEventListener('click', function(){
    count++;
    if (count > reviews.length -1){
        count = 0;
    }
    display();
});

prevBtn.addEventListener('click', function(){
    count--;
    if (count< 0) {
        count = reviews.length -1;
    }
    display();
});

ranBtn.addEventListener('click', function(){
    count = Math.floor(Math.random()* reviews.length);
    display();
})


