"use strict";

(function(){

  // var x = 1;
  // while(x < 65536) {
  //     x *= 2;
  //     console.log(x);
  // }

    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Starting the day with " + allCones + " cones.");

    do {
        // This expression will generate a random number between 1 and 5
        var conesWanted = Math.floor(Math.random() * 5) + 1;
        // console.log(allCones);
        if (conesWanted <= allCones) {
            allCones -= conesWanted;
            console.log(conesWanted + " cones sold...");
        } else {
            console.log("Cannot sell you " + conesWanted + " cones. I only have "+allCones+"...");
        }

    } while (allCones > 0);
    console.log("Yay! I sold them all!");
})();



