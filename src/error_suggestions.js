// Provides suggestions for errors
"use strict";

//! \param suggestionText is parsed as html so it SHOULDN'T contain any user input
function appendSuggestion(suggestionText, element){

    const div = document.createElement("div");

    div.classList.add("ErrorSuggestions");

    div.append(document.createTextNode("Suggestions:"));
    div.append(document.createElement("br"));

    $(div).append($.parseHTML(suggestionText));


    element.append(div);
}

function unpackError(message, element){
    if(!message)
        return;

    if(message.includes("ENOENT")){
        // ENOENT, missing 32bit support

        appendSuggestion("ENOENT error can mean that you are missing 32-bit library support. \
You should try installing 'glibc.i686' or if you are on ubuntu follow instructions here: \
<a href='https://blog.teststation.org/ubuntu/2016/05/12/\
installing-32-bit-software-on-ubuntu-16.04/'>Installing 32-bit libraries on Ubuntu 16.04</a>. \
If these don't help try searching for 'YOUROSHERE install 32 bit library support'. You can\
 also install p7zip package and restart the launcher to use the system version.",
        element);


    }


}




module.exports.unpackError = unpackError;
