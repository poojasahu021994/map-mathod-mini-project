// let arr=[45,85,74,21,63];
// let newarr = arr.map((items) =>{return items*2});
// console.log(newarr);

// let ansarr = arr.map((items) =>{return items+10});
// console.log(ansarr);

function run(){
let arr = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQO2ga7Jsm-619O8lg9wp5S0uZtqppyDakw&s' ,
    'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
    'https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIz4qZKTOplGKCIt860B8HP3mTBMZGACNFg&s'];

    let output=document.querySelector('#answer');

    output.innerHTML = arr.map((imgurl)=>`
    <img style="width:300px;height:300px; margin:100px 0 0 0px; " src="${imgurl}" alt="not find">`).join(" ")
}









