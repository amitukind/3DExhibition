
let scene, camera, renderer;
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 30000);
  camera.position.set(0, 7, 45);
  camera.rotation.set(-0.07,0,0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

//   let controls = new THREE.OrbitControls(camera, renderer.domElement);
//   controls.minDistance = 5;
//   controls.maxDistance = 1500;

  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load('assets/bluecloud_ft.jpg');
  let texture_bk = new THREE.TextureLoader().load('assets/bluecloud_bk.jpg');
  let texture_up = new THREE.TextureLoader().load('assets/bluecloud_up.jpg');
  let texture_dn = new THREE.TextureLoader().load('assets/bluecloud_dn.jpg');
  let texture_rt = new THREE.TextureLoader().load('assets/bluecloud_rt.jpg');
  let texture_lf = new THREE.TextureLoader().load('assets/bluecloud_lf.jpg');

  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
  let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
  let skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);






  createLight();






  var loader = new THREE.FBXLoader();


  loader.load("assets/Booth1.22.fbx", booth => {
    
    booth.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
        }
      }
      booth.scale.set(1, 1, 1);
      scene.add(booth);
    });
  });

  loader.load("assets/fan.fbx", fan => {
    
    fan.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
        }
      }
      fan.scale.set(1, 1, 1);
      scene.add(fan);
    });
  });


  loader.load("assets/Girl1.fbx", Girl => {
    
    Girl.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
        }
      }
      Girl.scale.set(0.02, 0.02, 0.02);
      Girl.position.set(-1.5,0.01,2);
      scene.add(Girl);
    });
  });

  



animate();

}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();

function createLight() {
  directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0,0,200);
  directionalLight.intensity = 0.5;
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.top = 20;
  directionalLight.shadow.camera.bottom = -20;
  directionalLight.shadow.camera.left = - 20;
  directionalLight.shadow.camera.right = 20;
  scene.add(directionalLight);

  light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 0.2;
  light.position.set(0, 200, 300);
  scene.add(light);

  let spotLight1 = new THREE.SpotLight(0xffffff);
  spotLight1.intensity = 0.3;
  spotLight1.position.set(-10, 20, 3);
  spotLight1.lookAt(0, 0, 0);
  scene.add(spotLight1);

  let spotLight2 = new THREE.SpotLight(0xffffff);
  spotLight2.intensity = 0.3;
  spotLight2.position.set(40, 20, 3);
  spotLight2.lookAt(0, 0, 0);
  scene.add(spotLight2);

  let ambientLight = new THREE.AmbientLight(0xffdcd4 );
  ambientLight.intensity = 0.5;
  ambientLight.position.set(3, 20, -20);
  ambientLight.lookAt(2, 0, 0);
  scene.add(ambientLight);
}



window.scene = scene;