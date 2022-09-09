"use strict";

const AGE_65 = 0;
const AGE_69 = 1;
const AGE_74 = 2;
const AGE_75 = 3;


const MELD_25 = 0;
const MELD_29 = 1;
const MELD_34 = 2;
const MELD_35 = 3;


const BMI_18_40 = 1;
const BMI_20 = 0;


const METABOLIC_DIABETES_DIALYSIS = 1;

let age;
let meld;
let bmi;
let metabolic;

let totalScore = 0;


function ageRange(sel) {
    console.log(sel.options[sel.selectedIndex].value)
    age = Number(sel.options[sel.selectedIndex].value);

    if (age === 65) {
        age = AGE_65;
    } else if (age === 66) {
        age = AGE_69;
    } else if (age === 70) {
        age = AGE_74;
    } else {
        age = AGE_75;
    }
}

function meldRange(sel) {
    console.log(sel.options[sel.selectedIndex].value)
    meld = Number(sel.options[sel.selectedIndex].value)

    if (meld === 25) {
        meld = MELD_25;
    } else if (meld === 26) {
        meld = MELD_29;
    } else if (meld === 30) {
        meld = MELD_34;
    } else {
        meld = MELD_35;
    }
}

function bmiScore(sel) {
    console.log(sel.options[sel.selectedIndex].value)
    bmi = Number(sel.options[sel.selectedIndex].value)

    if (bmi === 19) {
        bmi = BMI_20;
    } else {
        bmi = BMI_18_40;
    }
}

metabolic = 0;

let ele = document.querySelectorAll("input[type=checkbox]");

for (let i = 0; i < ele.length; i++){
    console.log(`${ele[i]}: ${ele[i].checked}`);
    if (ele[i].checked) {
        metabolic += 1;
    }
}

function scoreDisplay() {
    totalScore = age + bmi + meld + metabolic;
    console.log(`score: ${totalScore}`);
    console.log(`age: ${age}`);
    console.log(`bmi: ${bmi}`);
    console.log(`meld: ${meld}`);
    console.log(`metabolic: ${metabolic}`);
    document.getElementById("result").innerHTML = `Your score: ${totalScore}`;
    let images = document.getElementById("ltrs-imgs");
    if (images.style.display === "none") {
        images.style.display = "block";
    } else {
        images.style.display = "none";
    }
}


