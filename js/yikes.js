var yikes = function(skip){
    for (var i = 1; i<50;i+=2) {
        if (i === skip) {
            console.log("Yikes! Skipping number: "+i);
            continue;
        }
        console.log("Here is an odd number: "+i);
    }
}