
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

# 08
##  Webpack Dev Server
### Configurando o Webpack Dev Server
O Webpack Development Server possui vários recursos que tornam o desenvolvimento um processo mais fácil. Como o Hot Module Reloading (HMR), que atualizará automaticamente nosso navegador quando fizermos alterações em nosso código,
Precisamos instalar vários módulos para que possamos usar o Webpack com eficácia.
```html 
npm install webpack webpack-cli webpack-dev-server webpack-merge ts-loader --save-dev
```

# 09
### Também precisaremos de uma cópia local do TypeScript na node_modulespasta para uso pelots-loader
```html 
npm install typescript --save-dev
```
# 10
#### Create ./src/client/webpack.common.js
Agora vamos adicionar algumas configurações do Webpack ao nosso cliente.
```html 
const path = require('path')

module.exports = {
    entry: './src/client/client.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist/client'),
    },
}
```
# 11
#### Create ./src/client/webpack.dev.js
```html 
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../../dist/client'),
        },
        hot: true,
    },
})
```
# 12
#### Add line 6 on ./package.json
```html 
        "dev": "webpack serve --config ./src/client/webpack.dev.js",
 ```

# 13
#### To install the Threejs type definitions

```html 
npm run dev
```

# 14
#### Dat GUI
Adicionando rapidamente uma interface de usuário muito básica que nos permite interagir com nossa cena 3D e os objetos dentro dela.
##### Podemos instalar o Dat.GUI de seu repositório oficial.
```html 
npm install dat.gui --save-dev
```
##### Devemos também instalar as definições de tipo.

npm install @types/dat.gui --save-dev


#### Agora adicione a importação para ele em nosso client.tsscript existente
```html 
import { GUI } from 'dat.gui'
```