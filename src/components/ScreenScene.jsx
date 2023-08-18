/* eslint-disable react/no-unknown-property */
//The above is a Vite-specific linter bug workaround.
//Wants you to add exceptions in config for non-camelCased props. For R3F? NO thank you, thank you no.
//so that's just an easy whole file-tag
import { useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, useGLTF, Environment, useAnimations, Html } from '@react-three/drei'

import Conversation from './Conversation.jsx'

function Character() {
    const { scene, animations} = useGLTF('/lostpilot.glb')
    const { actions } = useAnimations(animations, scene)
    useEffect(() => {
      if (actions && animations.length > 0) {
        actions[Object.keys(actions)[1]].play()
      }
    }, [actions, animations]);
    
    return <primitive castShadow object={scene} scale={1.2} position={[0, -2.4, 0]} />
  }

export default function ScreenScene () {

    return(
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />
          <hemisphereLight skyColor={0x15e61c} groundColor={0x89eb78} intensity={15} />
          <Character />
          <Environment preset='forest' />
          <Html center position={[-2, 0.5, 0]}>
            <Conversation />
          </Html>
        </Canvas>
    )
}