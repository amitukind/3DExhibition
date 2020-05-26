
let scene, camera, renderer;
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 30000);
 
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 5;
  controls.maxDistance = 1500;
 



  camera.position.set(0, 7, 45);
  camera.rotation.set(-0.07,0,0);
  controls.update();

  controls.enableKeys = true;
  controls.enableDamping = true;
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


  loader.load("assets/Booth.fbx", booth => {
    
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
      fan.scale.set(0.92,0.92,0.92);
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
   buttons = [];
  loader.load("assets/Discuss.fbx", Discuss => {    
    Discuss.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
          
          subChild.material[0].transparent = true;
          subChild.material[0].opacity = 0.6;
          subChild.material[1].transparent = true;
          subChild.material[1].opacity = 0.6;
         
          
        }
      }
      Discuss.name = "Discuss";
      Discuss.scale.set(0.6, 0.6, 0.6);
      Discuss.position.set(1.10,2.24,3.22);
      

      scene.add(Discuss);
      buttons.push(Discuss);
    });
  });

  loader.load("assets/Explore.fbx", Explore => {    
    Explore.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
          subChild.material[0].transparent = true;
          subChild.material[0].opacity = 0.6;
          subChild.material[1].transparent = true;
          subChild.material[1].opacity = 0.6;
        }
      }
      Explore.name = "Explore";
      Explore.scale.set(0.6, 0.6, 0.6);
      Explore.position.set(3.58,4.26,-1.62);
      scene.add(Explore);
      buttons.push(Explore);
    });
  });

  loader.load("assets/Listen.fbx", Listen => {    
    Listen.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
          subChild.material[0].transparent = true;
          subChild.material[0].opacity = 0.6;
          subChild.material[1].transparent = true;
          subChild.material[1].opacity = 0.6;
        }
      }
      Listen.name = "Listen";
      Listen.scale.set(0.6, 0.6, 0.6);
      Listen.position.set(1.10,2.90,3.22);
      scene.add(Listen);
      buttons.push(Listen);
    });
  });

  loader.load("assets/Play.fbx", Play => {    
    Play.traverse(function (child) {
      if (Play instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
          subChild.material[0].transparent = true;
          subChild.material[0].opacity = 0.6;
          subChild.material[1].transparent = true;
          subChild.material[1].opacity = 0.6;
        }
      }
      Play.name = "Play";
      Play.scale.set(0.6, 0.6, 0.6);
      Play.position.set(2.10,2.12,0);
      scene.add(Play);
      buttons.push(Play);
    });
  });

  loader.load("assets/Read.fbx", Read => {    
    Read.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
          subChild.material[0].transparent = true;
          subChild.material[0].opacity = 0.6;
          subChild.material[1].transparent = true;
          subChild.material[1].opacity = 0.6;
        }
      }
      Read.name = "Read";
      Read.scale.set(0.6, 0.6, 0.6);
      Read.position.set(-1.14,2.58,1.82);
      scene.add(Read);
      buttons.push(Read);
    });
  });

  loader.load("assets/Talk.fbx", Talk => {    
    Talk.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
          subChild.material[0].transparent = true;
          subChild.material[0].opacity = 0.6;
          subChild.material[1].transparent = true;
          subChild.material[1].opacity = 0.6;
        }
      }
      Talk.name = "Talk";
      Talk.scale.set(0.6, 0.6, 0.6);
      Talk.position.set(1.10,2.56,3.22);
      scene.add(Talk);
      buttons.push(Talk);
    });
  });

  loader.load("assets/Watch.fbx", Watch => {    
    Watch.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
          subChild.material[0].transparent = true;
          subChild.material[0].opacity = 0.6;
          subChild.material[1].transparent = true;
          subChild.material[1].opacity = 0.6;
        }
      }
      Watch.name = "Watch";
      Watch.scale.set(0.6, 0.6, 0.6);
      Watch.position.set(-2.28,2.88,2.10);
      scene.add(Watch);
      buttons.push(Watch);
    });
  });
  



animate();

}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  if(camera.position.z > 30)
  setButtons(false);
  else
  setButtons(true);
  controls.update();
}
init();


function setButtons(bool)
{
  buttons.forEach(button => {
    button.visible = bool;
  });
}

function createLight() {
  directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0,0,200);
  directionalLight.intensity = 0.25;
  directionalLight.castShadow = true;
  // directionalLight.shadow.camera.top = 20;
  // directionalLight.shadow.camera.bottom = -20;
  // directionalLight.shadow.camera.left = - 20;
  // directionalLight.shadow.camera.right = 20;
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
  spotLight2.position.set(0, 20, 3);
  spotLight2.lookAt(0, 0, 0);
  scene.add(spotLight2);

  let ambientLight = new THREE.AmbientLight(0xffdcd4 );
  ambientLight.intensity = 0.5;
  ambientLight.position.set(0,0,0);
  ambientLight.lookAt(2, 0, 0);
  scene.add(ambientLight);
}



window.scene = scene;