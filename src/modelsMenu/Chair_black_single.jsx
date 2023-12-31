/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: JLRIN (https://sketchfab.com/JLRIN)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/jl-chair-e7383e1af703470b859be50035078b9a
title: JL - Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Chair_black_single(props) {
  const { nodes, materials } = useGLTF('./glbFile/chair_black_single.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, 0]}>
        <group rotation={[0.7, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.JL_Chair_002} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./glbFile/chair_black_single.glb')
