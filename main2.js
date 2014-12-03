function workout(name, exone, extwo, exthree, exfour, time) {
    this.name = name;
    this.exone = exone;
    this.extwo = extwo;
    this.exthree = exthree;
    this.exfour = exfour;
    this.time = time;
    
}

var legs = new workout("basic", "box jump", "lunges", "no weight squats", "n\a", "30");

var pushuptriangle = new workout("triangle pushup", "wide pushup", "normal pushup", "diamond pushup", "n\a", "3 times");

var helen = new workout ("helen", "pull up", "box jump", "100m run", "rest", "30 minutes");

var workoutArray = [
    legs, pushuptriangle, helen
];

var main = function () {
    $('#workoutGen').click(function() {
        
        var workoutGroup = Math.abs(Math.floor((Math.random() * workoutArray.length)));
        
        $('<li>').text(workoutArray[workoutGroup].name).appendTo('#workoutList');
    
    });
};

                           
$(document).ready(main())