
# How To Use

# 01
### Initialize the New Project
#### Open a command prompt and create a new folder on your system somewhere.

```html
    mkdir Three.js-TypeScript-Tutorial
```
# 02
#### CD into the new folder.

```html
   cd Three.js-TypeScript-Tutorial
```
# 03
#### Initialize a new project with NPM

```html
    npm init
```
Press enter several times to accept all defaults.

# 04
#### Install Three.js Library
Install the Three.js library.

```html
    npm install three --save-dev
```
# 05
#### Create ./src/client/client.ts

```html
import * as THREE from 'three'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()
```
# 06
#### Create ./src/client/tsconfg.json

```html 
{
    "compilerOptions": {
        "moduleResolution": "node",
        "strict": true
    },
    "include": ["**/*.ts"]
}
```
# 07
#### To install the Threejs type definitions

```html 
npm install @types/three --save-dev
```
