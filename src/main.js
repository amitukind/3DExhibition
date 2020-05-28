
let scene, camera, renderer;

loadingManager = new THREE.LoadingManager();
MasterBooth = new THREE.Group();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 30000);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 15;
  controls.maxDistance = 150;
  controls.keyPanSpeed = 15;
  controls.minPolarAngle = Math.PI/2;
  controls.maxPolarAngle = Math.PI/2;
  controls.enableKeys = true;
  // controls.panSpeed = 0.01;
  controls.rotateSpeed = 0.1; 
  //controls.enableDamping = true;
  




  // camera.position.set(0, 7, 45);
  // camera.rotation.set(-0.07, 0, 0);
  //controls.update();


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





  var loader1 = new THREE.FBXLoader(loadingManager);



  loader1.load("assets/Booth.fbx", booth => {

    booth.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
        }
      }
      booth.scale.set(1, 1, 1);
      MasterBooth.add(booth);
    });
  });
/*

  var loader2 = new THREE.FBXLoader(loadingManager);
  loader2.load("assets/fan.fbx", fan => {

    fan.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
        }
      }
      fan.scale.set(0.92, 0.92, 0.92);
      MasterBooth.add(fan);
    });
  });
*/

  var loader3 = new THREE.FBXLoader(loadingManager);
  loader3.load("assets/Girl1.fbx", Girl => {

    Girl.traverse(function (child) {
      if (child instanceof THREE.Object3D) {
        for (let subChild of child.children) {
          subChild.castShadow = true;
          subChild.receiveShadow = true;
        }
      }
      Girl.scale.set(0.02, 0.02, 0.02);
      Girl.position.set(-1.5, 0.01, 2);
      MasterBooth.add(Girl);
    });
  });

  var loader4 = new THREE.FBXLoader(loadingManager);
  loader4.load("assets/Discuss.fbx", Discuss => {
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
      Discuss.position.set(1.10, 2.24, 3.22);


      MasterBooth.add(Discuss);

    });
  });


  var loader5 = new THREE.FBXLoader(loadingManager);

  loader5.load("assets/Explore.fbx", Explore => {
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
      Explore.position.set(3.58, 4.26, -1.62);
      MasterBooth.add(Explore);

    });
  });

  var loader6 = new THREE.FBXLoader(loadingManager);
  loader6.load("assets/Listen.fbx", Listen => {
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
      Listen.position.set(1.10, 2.90, 3.22);
      MasterBooth.add(Listen);

    });
  });

  var loader7 = new THREE.FBXLoader(loadingManager);
  loader7.load("assets/Play.fbx", Play => {
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
      Play.position.set(2.10, 2.12, 0);
      MasterBooth.add(Play);

    });
  });

  var loader8 = new THREE.FBXLoader(loadingManager);
  loader8.load("assets/Read.fbx", Read => {
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
      Read.position.set(-1.14, 2.58, 1.82);
      MasterBooth.add(Read);

    });
  });

  var loader9 = new THREE.FBXLoader(loadingManager);
  loader9.load("assets/Talk.fbx", Talk => {
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
      Talk.position.set(1.10, 2.56, 3.22);
      MasterBooth.add(Talk);

    });
  });

  var loader10 = new THREE.FBXLoader(loadingManager);
  loader10.load("assets/Watch.fbx", Watch => {
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
      Watch.position.set(-2.28, 2.88, 2.10);
      MasterBooth.add(Watch);

    });
  });

  var loader11 = new THREE.FBXLoader(loadingManager);
  loader11.load("assets/Arrow.fbx", Arrow => {
    Arrow.traverse(function (child) {
     
      Arrow.name = "Arrow";
      Arrow.scale.set(.02,.04,.04);
      Arrow.position.set(0,0,6);
      Arrow.rotation.y = Math.PI/2;
      Arrow.children[0].material[0].transparent = true;
      Arrow.children[0].material[0].opacity = 0.6;
      Arrow.children[0].material[0].emissive = new THREE.Color("rgb(255, 60, 60)");;
      console.log(Arrow);
      
      MasterBooth.add(Arrow);

    });
  });




  animate();

}

loadingManager.onLoad = function () {

  MasterBooth.rotation.y = Math.PI;
 
  var MasterBooth2 = MasterBooth.clone(true);
  MasterBooth2.position.x = 11;
  var MasterBooth3 = MasterBooth.clone(true);
  MasterBooth3.position.x = -11;
  var row1 = new THREE.Group();
  row1.add(MasterBooth);
  row1.add(MasterBooth2);
  row1.add(MasterBooth3);
  var row2 = row1.clone(true);
  row2.position.z = 5;
  row2.rotation.y = Math.PI;
  var col = MasterBooth.clone(true);
  col.position.x = -19;
  col.rotation.y = -Math.PI/2;
  col.position.z = 5/2;
  

  var BigCol = new THREE.Group();
  BigCol.add(col);
  BigCol.add(row1);
  BigCol.add(row2);
  scene.add(BigCol);

  var BigCol2 = BigCol.clone(true);
  BigCol2.position.z = 25;
  scene.add(BigCol2);

  var BigCol3 = BigCol.clone(true);
  BigCol3.position.z = 50;
  scene.add(BigCol3);



  var BigCol4 = BigCol.clone(true);
  BigCol4.position.z = 5;
  BigCol4.position.x = 35;
  BigCol4.rotation.y = Math.PI;
  scene.add(BigCol4);



  var BigCol5 = BigCol2.clone(true);
  BigCol5.position.z = 30;
  BigCol5.position.x = 35;
  BigCol5.rotation.y = Math.PI;
  scene.add(BigCol5);



  var BigCol6 = BigCol3.clone(true);
  BigCol6.position.z = 55;
  BigCol6.position.x = 35;
  BigCol6.rotation.y = Math.PI;
  scene.add(BigCol6);


  var yUp = -2;
  BigCol.position.y = yUp;
  BigCol2.position.y = yUp;
  BigCol3.position.y = yUp;
  BigCol4.position.y = yUp;
  BigCol5.position.y = yUp;
  BigCol6.position.y = yUp;

}




function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);

  controls.update();
}
init();




function createLight() {
  directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, 0, 200);
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

  let ambientLight = new THREE.AmbientLight(0xffdcd4);
  ambientLight.intensity = 0.5;
  ambientLight.position.set(0, 0, 0);
  ambientLight.lookAt(2, 0, 0);
  scene.add(ambientLight);
}



window.scene = scene;