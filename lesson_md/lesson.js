//****begin world creation****

//B represents a brick building
//G represents a glass building
var map =   "BBBBBBB  \n" +
            "G     G  \n" +
            "G     G  \n" +
            "G     G  \n" +
            "G     GGG\n" +
            "GGG     G\n" +
            "  GG    G\n" +
            "   G    G\n" +
            "   BB  BB";

//convert our above string into arrays
map = map.split("\n");
var HORIZONTAL_UNIT = 100,
    VERTICAL_UNIT = 1000,
    ZSIZE = map.length * HORIZONTAL_UNIT,
    XSIZE = map[0].length * HORIZONTAL_UNIT;

for (var i = 0, rows = map.length; i < rows; i++) {
    for (var j = 0, cols = map[i].length; j < cols; j++) {
        addObject(map[i].charAt(j), i, j);
    }
}

function addObject(type, row, col) {
    var z = (row + 1) * HORIZONTAL_UNIT - ZSIZE * 0.5,
        x = (col + 1) * HORIZONTAL_UNIT - XSIZE * 0.5;

    var mesh, geo, material;

    if (type == '') {

    }
    else if (type == 'B') {
        geo = new THREE.CubeGeometry(HORIZONTAL_UNIT, VERTICAL_UNIT, HORIZONTAL_UNIT);
        //var material = new THREE.MeshPhongMaterial({overdraw: true, color: 0xcccccc});
        var brickTexture = THREE.ImageUtils.loadTexture('textures/brick.jpg');
        brickTexture.wrapS = brickTexture.wrapT = THREE.RepeatWrapping;
        brickTexture.repeat.set(10, 50);
        material = new THREE.MeshBasicMaterial({
            map: brickTexture
        });
        mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, VERTICAL_UNIT * 0.5, z);
        scene.add(mesh);
    }
    else if (type == 'G') {
        geo = new THREE.CubeGeometry(HORIZONTAL_UNIT, VERTICAL_UNIT, HORIZONTAL_UNIT);
        //var material = new THREE.MeshPhongMaterial({overdraw: true, color: 0xcccccc});
        var windowTexture = THREE.ImageUtils.loadTexture('textures/glasswindows.jpg');
        windowTexture.wrapS = windowTexture.wrapT = THREE.RepeatWrapping;
        windowTexture.repeat.set(10, 50);
        material = new THREE.MeshBasicMaterial({
            map: windowTexture
        });
        mesh = new THREE.Mesh(geo, material);
        mesh.position.set(x, VERTICAL_UNIT * 0.5, z);
        scene.add(mesh);
    }

}

//****end world creation****
