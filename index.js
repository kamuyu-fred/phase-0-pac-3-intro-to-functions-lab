function shout(string){
return string.toUpperCase();

}

function whisper(string){
    return string.toLowerCase();

}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    var no = "I can't hear you!";
    var yes = "YES INDEED!";
    var dinner = "I would love to!"
    if(string.toLowerCase(string) === string) {
        return no;
    }
    else if(string.toUpperCase(string) === string) {
        return yes;
    }
    else if("Let's have dinner together!" === string) {
        return dinner;
}
}