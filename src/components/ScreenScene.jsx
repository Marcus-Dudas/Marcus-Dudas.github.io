/* eslint-disable react/no-unknown-property */
//The above is a Vite-specific linter bug workaround.
//Wants you to add exceptions in config for non-camelCased props. For R3F? NO thank you, thank you no.
//so that's just an easy whole file-tag
import { useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, useGLTF, Environment, useAnimations, Html } from '@react-three/drei'
import {useMediaQuery} from '../utils/useMediaQuery'

import Conversation from './Conversation.jsx'

function Character({animationIndex, setAnimationIndex}) {
    const { scene, animations} = useGLTF('/lostpilot.glb')
    const { actions } = useAnimations(animations, scene)
    const [dancing, setDancing] = useState(false)
    const scale = useMediaQuery(1, 1.2, 1.3)

    useEffect(() => {
      if (actions && animations.length > 0) {
        actions[Object.keys(actions)[animationIndex]].play()
      }
    }, [actions, animations, animationIndex])
    
    return <primitive castShadow object={scene} scale={scale} position={[0, -2.7, 0]} />
  }

export default function ScreenScene () {
    const [animationIndex, setAnimationIndex] = useState(1)
    const position = useMediaQuery([0, 1.3, 0], [-1, 1.4, 0], [-2, 0.5, 0])
    return(
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />
          <hemisphereLight skyColor={0x15e61c} groundColor={0x89eb78} intensity={15} />
          <Character animationIndex={animationIndex} setAnimationIndex={setAnimationIndex}/>
          <Environment preset='forest' />
          <Html center position={position}>
            <Conversation setAnimationIndex={setAnimationIndex} />
          </Html>
        </Canvas>
    )
}