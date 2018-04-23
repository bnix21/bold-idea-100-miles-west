/*


geo = new Physijs.BoxMesh(
    new THREE.CubeGeometry(HORIZONTAL_UNIT, VERTICAL_UNIT, HORIZONTAL_UNIT),
    new THREE.MeshBasicMaterial({map: windowTexture}),
    100000000
    );

geo.position.set(x, VERTICAL_UNIT * 0.5, z);
scene.add(geo);
*/
/* global THREE, Scoreboard, Physijs*/

	var bodyCover = new THREE.MeshBasicMaterial({color: 0x563f30});
	
	var body = new Physijs.SphereMesh(
	new Physijs.SphereGeometry(10),
	bodyCover,
	10); 
	
	var avatar = new Physijs.ConvexMesh(body, bodyCover);
	avatar.add(body);
	
	var head = new Physijs.SphereMesh(
	new Physijs.SphereGeometry(5),
	new Physijs.MeshBasicMaterial({color: 0x184708}),
	5);
	
	avatar.add(head);
	
	var left_hand = new Physijs.SphereMesh(
	new Physijs.SphereGeometry(5),
	new Physijs.MeshBasicMaterial({color: 0x184708}), 
	5);
	
	avatar.add(left_hand);
	
	var right_hand = new Physijs.SphereMesh(
	new Physijs.SphereGeometry(5),
	new Physijs.MeshBasicMaterial({color: 0x184708}), 
	5);
	
	avatar.add(right_hand);
	
	var right_foot = new Physijs.SphereMesh(
	new Physijs.SphereGeometry(5),
	new Physijs.MeshBasicMaterial({color: 0x000000}), 
	5);
	
	avatar.add(right_foot);
	
	var left_foot = new Physijs.SphereMesh(
	new Physijs.SphereGeometry(5),
	new Physijs.MeshBasicMaterial({color: 0x000000}), 
	5);
	
	avatar.add(left_foot);
	
	avatar.position.set(0, 150, 100);

// 	//build the avatar
// 	var cover = new physi.MeshNormalMaterial();
// 	var headCover = new THREE.MeshBasicMaterial({color: 0xc0ea6b});
// 	var bodyCover = new THREE.MeshBasicMaterial({color: 0x563f30});
// 	var body = new THREE.SphereGeometry(100);
// 	var avatar = new THREE.Mesh(body, bodyCover);

// //	var cover = new THREE.MeshNormalMaterial();
// 	var head = new THREE.SphereGeometry(75);
// 	var head = new THREE.Mesh(head, headCover);
// 	head.position.set(0, 175, 0);
// 	avatar.add(head);


// 	var hand = new THREE.SphereGeometry(50);
// 	var handCover = new THREE.MeshBasicMaterial({ color: 0xc0ea6b})
// 	var right_hand = new THREE.Mesh(hand, handCover);
// 	right_hand.position.set(-150, 0, 0);
// 	avatar.add(right_hand);
// 	right_hand.position.z = -100;

// 	var left_hand = new THREE.Mesh(hand, handCover);
// 	left_hand.position.set(150, 0, 0);
// 	avatar.add(left_hand);

// 	var foot = new THREE.SphereGeometry(50);
// 	var footCover = new THREE.MeshBasicMaterial ({ color: 0x000000})
// 	var right_foot = new THREE.Mesh(foot, footCover);
// 	right_foot.position.set(-75, -125, 0);
// 	avatar.add(right_foot);

// 	var left_foot = new THREE.Mesh(foot, footCover);
// 	left_foot.position.set(75, -125, 0);
// 	avatar.add(left_foot);

// 	avatar.position.set(0, 150, 100);