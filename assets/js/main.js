console.log("hurra");

// =============================================================

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_2-1_DOM-Elements ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

// const changeMe = document.querySelector('#navChange');
// const homE = document.querySelector('#navHome');

// changeMe.addEventListener('click', () => {
//     console.log("Button is clicked");
//     homE.style.backgroundColor = 'pink';
//     homE.innerHTML = "GoHome";
// });

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_2-2_KeyCodeInfo ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

// const outputNumber = document.querySelector('.output_div');

// const keyOutput = document.querySelector('.key-output');
// const keycodeOutput = document.querySelector('.keycode-output');
// const codeOutput = document.querySelector('.code-output');

// console.log(keyOutput);
// console.log(keycodeOutput);
// console.log(codeOutput);

// document.body.addEventListener('keydown', (event) => {
//     keyOutput.innerHTML = event.key;
//     keycodeOutput.innerHTML = event.keyCode;
//     outputNumber.innerHTML = event.keyCode;
//     codeOutput.innerHTML = event.code;
//     console.log(event.key);
//     console.log(event.keyCode);
//     console.log(event.code);
// })

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_2-3_getElementsByTagName ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

// const changeMe = document.querySelector('#navChange');

// const homE = document.querySelector('#navHome');
// const neWs = document.querySelector('#navNews');
// const conTact = document.querySelector('#navContact');

// const allTags = document.getElementsByTagName('atag');

// changeMe.addEventListener('click', () => {
//     console.log("Button is clicked");
//     homE.style.backgroundColor = '#f6c89f';
//     neWs.style.backgroundColor = '#ffe7d1';
//     conTact.style.backgroundColor = '#4b8e8d';
//     changeMe.style.backgroundColor = '#396362';
//     allTags.style.color = '#666';
// })



// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_2-4_DOM Background Colors ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const switchColor = document.querySelector('#button');

let choosedColor = document.querySelector('#farbeAuswahlen');

switchColor.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = choosedColor.value.replace(' ','');
})
    
    // if (choosedColor.value === 'Medium Orchid') {
    //     choosedColor = 'mediumorchid';
    // } else if (choosedColor.value === 'Mint Cream') {
    //     choosedColor = 'mintcream';
    // } else if (choosedColor.value === 'Dodger Blue') {
    //     choosedColor = 'dodgerblue';
    // } else if (choosedColor.value === 'Goldenrod') {
    //     choosedColor = 'goldenrod';
    // } else if (choosedColor.value === 'Wheat') {
    //     choosedColor = 'wheat';
    // } else if (choosedColor.value === 'Medium turquoise') {
    //     choosedColor = 'mediumturquoise';
    // } else if (choosedColor.value === 'Moccasin') {
    //     choosedColor = 'moccasin';
    // } else if (choosedColor.value === 'Fire Brick') {
    //     choosedColor = 'firebrick';
    // } else if (choosedColor.value === 'Lime Green') {
    //     choosedColor = 'limegreen';
    // } else {
    //     choosedColor = 'slategray';
    // }
    // body.style.backgroundColor = choosedColor;

