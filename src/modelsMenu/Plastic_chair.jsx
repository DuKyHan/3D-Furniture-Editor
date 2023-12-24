/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: wamala (https://sketchfab.com/wamala)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/plastic-chair-90a6ea64762e4d88b79bc3742410e0b4
title: Plastic Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Plastic_chair(props) {
  const { nodes, materials } = useGLTF('./glbFile/plastic_chair.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1, 0, 0]} scale={0.53} position={[0,-0.5,0]}>
        <lineSegments geometry={nodes.Object_2.geometry} material={materials.real_plastic} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.real_plastic} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.real_plastic} />
      </group>
    </group>
  )
}

useGLTF.preload('./glbFile/plastic_chair.glb')
