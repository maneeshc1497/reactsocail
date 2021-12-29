import React from 'react'

export default function random(length) {
    var result="";
    var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var characterLength = characters.length;
    for(var i=0;i<length;i++)
    {
        result+= characters.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
}
