document.addEventListener('DOMContentLoaded', function () {
 
  const cubeContainer = document.getElementById('cube-container');
  console.log(cubeContainer);

  if (cubeContainer) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
    cubeContainer.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
      new THREE.MeshBasicMaterial({ color: 0x0000ff }),
      new THREE.MeshBasicMaterial({ color: 0xffff00 }),
      new THREE.MeshBasicMaterial({ color: 0xff00ff }),
      new THREE.MeshBasicMaterial({ color: 0x00ffff }),
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 3;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();
  } else {
    console.error("Cube container not found!");
  }

  const currentTime = new Date().getHours();
  const greetingElement = document.querySelector('header p');

  if (greetingElement) {
    function setGreeting() {
      if (currentTime < 12) {
        greetingElement.textContent = "Good Morning, I'm Astle Joe!";
      } else if (currentTime < 18) {
        greetingElement.textContent = "Good Afternoon, I'm Astle Joe!";
      } else {
        greetingElement.textContent = "Good Evening, I'm Astle Joe!";
      }
    }

    setGreeting(); 
  } else {
    console.error("Greeting element not found!");
  }
});
