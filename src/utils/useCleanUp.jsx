import { useEffect, useRef } from 'react'
import { useThree } from "@react-three/fiber"

export const useCleanup = () => {
    const { gl, scene } = useThree()
    const disposeScene = useRef()

    useEffect(() => {
        disposeScene.current = () => {
            scene.traverse(object => {
                if (!object.isMesh) return
                object.geometry.dispose()
                if (object.material.isMaterial) {
                    cleanMaterial(object.material)
                } else {
                    for (const material of object.material) cleanMaterial(material)
                }
            })
        }
    }, [])

    const cleanMaterial = material => {
        material.dispose()
        for (const key of Object.keys(material)) {
            const value = material[key]
            if (value && typeof value === 'object' && 'minFilter' in value) {
                value.dispose()
            }
        }
    }

    useEffect(() => {
        return () => {
            disposeScene.current()
            gl.dispose()
        }
    }, [gl])
}