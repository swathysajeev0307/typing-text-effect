/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const dynamicText = document.querySelector("h1 span");
const words = ["Fun", "Love", "the World", "Life", "True Love"];

let wordIndex = 0;
let charIndex = 0;

const typeEffect = ()=>{

    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0,charIndex);
    dynamicText.textContent = currentChars;

    if(charIndex < currentWord.length){
        charIndex++;
        console.log(charIndex);
        setTimeout(typeEffect,100);
    }else{
        charIndex = 0;
        if(wordIndex >= wordIndex.length -1){
            wordIndex = 0;
        }
        else{
            wordIndex++;
        }
        setTimeout(typeEffect,1000);
    }
}

typeEffect();