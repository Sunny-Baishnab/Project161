AFRAME.registerComponent('balls',{
    init:function(){
        this.shootBullets()
    },
    shootBullets:function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key==='z'){
                var bullet = document.createElement('a-entity')
                bullet.setAttribute('geometry',{
                    primitive:'sphere',
                    radius:1,
                })
                bullet.setAttribute('material',{
                    src : './assets/images.jpg'
                })
                var cam = document.querySelector('#camera')
                var pos = cam.getAttribute('position')
                var scene = document.querySelector('#scene')

                bullet.setAttribute('position',{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })

                var camera = document.querySelector('#camera').object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                bullet.setAttribute('velocity',direction.multiplyScalar(-10))
                scene.appendChild(bullet)
            }
        })
    }
})