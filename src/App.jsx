/* eslint-disable react/no-unknown-property */
import './App.css'
import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, useGLTF, Environment, useAnimations } from '@react-three/drei'



function Character() {
  const { scene, animations} = useGLTF('/lostpilot.glb')
  const { actions } = useAnimations(animations, scene)
  useEffect(() => {
    // Play the first animation by default
    if (actions && animations.length > 0) {
      actions[Object.keys(actions)[1]].play()
    }
  }, [actions, animations]);
  
  return <primitive castShadow object={scene} scale={1.2} position={[0, -2.4, 0]} />
}

export default function App() {
  const [showInput, setShowInput] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = () => {
    //fetch request here, whenready
    console.log('submitted value:', inputValue);
  }
  return (
    <main className='main'>
      <nav>
        <div className='formatNav'>
          <button onClick={() => setShowInput(!showInput) } tabIndex={0} type='button'>Accessibility Visible</button>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter the password" 
            aria-label="Enter the password"
            className={showInput ? 'visible' : 'hidden'}
            onChange={e => setInputValue(e.target.value)}
          />
          <button 
            className={showInput ? 'visible' : 'hidden'} 
            onClick={handleSubmit}
          > submit
          </button>
        </div>
      </nav>
      <div className='canvas'>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />
          <hemisphereLight skyColor={0x9cf089} groundColor={0x9cf089} intensity={30} />
          <directionalLight color={0x9cf089} intensity={1} position={[-3, 1, -3]}/>
          <Character />
          <Environment preset='forest' />
        </Canvas>
      </div>
    </main>
  )
}
