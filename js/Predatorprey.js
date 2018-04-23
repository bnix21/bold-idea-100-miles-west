function PredatorPrey() {
    //predator speed is a fraction relative to the prey's (player's) speed. .5 = half of the prey's speed.  1=prey's speed
    this.update = function(predator, prey, predatorSpeed, preySpeed) {
        //create two vector objects
        var xd = new THREE.Vector3(prey.position.x, prey.position.y, prey.position.z);
        var yd = new THREE.Vector3(predator.position.x, predator.position.y, predator.position.z);
        //find the distance / hypotenuse to the xyz location
        var hypotenuse = predator.position.distanceTo(prey.position);

        var subvec = new THREE.Vector3();
        subvec = subvec.sub(xd, yd);

        //move predator closer if farther away than 10 pixels.
        if (hypotenuse > 10) {
            //console.log(hypotenuse);
            predator.position.y += predatorSpeed * preySpeed * (subvec.y / hypotenuse);
            predator.position.x += predatorSpeed * preySpeed * (subvec.x / hypotenuse);
            predator.position.z += predatorSpeed * preySpeed * (subvec.z / hypotenuse);
        }
        //if predator gets within 20 pixels run the following code
        if (hypotenuse < 20) {
            //within attack range
            console.log("Attack!");
            // scoreboard.subtractPoints(10);
            var x = (Math.random() * 5000) - 5000 / 2;
		    var z = (Math.random() * 5000) - 5000 / 2;
            predator.position.set(x, -50, z);
        }
    };
}

























