/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Sololopenko (https://sketchfab.com/Sololopenko)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/furniture-set-4eb801eccae644ee9ded7a13f8d49d8a
title: Furniture set
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Furniture_set(props) {
  const { nodes, materials } = useGLTF('./glbFile/furniture_set.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1, 0, 0]} scale={2.07}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.68, 0, 0.44]} rotation={[-Math.PI, 1.09, -Math.PI]} scale={0.84}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.furniture} />
          </group>
          <group position={[0.43, 0, -0.9]} rotation={[0, -0.36, 0]} scale={0.84}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.furniture} />
          </group>
          <group position={[0.2, 0.39, -0.02]} rotation={[0, 1.02, 0]}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.furniture} />
          </group>
          <group position={[0.08, 0.39, 0.11]} rotation={[-Math.PI, -0.65, -Math.PI]}>
            <mesh geometry={nodes.Object_10.geometry} material={materials.furniture} />
          </group>
          <group position={[0.2, 0.38, -0.02]} rotation={[0, 0.45, 0]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.furniture} />
          </group>
          <group position={[0.08, 0.38, 0.11]} rotation={[-Math.PI, 1.48, -Math.PI]}>
            <mesh geometry={nodes.Object_14.geometry} material={materials.furniture} />
          </group>
          <group position={[-0.52, 0, -0.76]} rotation={[0, 0.51, 0]} scale={0.84}>
            <mesh geometry={nodes.Object_16.geometry} material={materials.furniture} />
          </group>
          <group position={[0.23, 0, 0.15]} rotation={[0, 0.03, 0]}>
            <mesh geometry={nodes.Object_18.geometry} material={materials.furniture} />
          </group>
          <group position={[0.34, 0.39, 0.25]} rotation={[Math.PI, -1.14, Math.PI]}>
            <mesh geometry={nodes.Object_20.geometry} material={materials.furniture} />
          </group>
          <group position={[0.27, 0.39, 0.25]} rotation={[0, 0.54, 0]}>
            <mesh geometry={nodes.Object_22.geometry} material={materials.furniture} />
          </group>
          <group position={[-1.12, 0, -0.22]} rotation={[0, 0.62, 0]}>
            <mesh geometry={nodes.Object_24.geometry} material={materials.furniture} />
            <mesh geometry={nodes.Object_25.geometry} material={materials.monstera} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./glbFile/furniture_set.glb')
