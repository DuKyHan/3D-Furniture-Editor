/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 bunk_bed.glb 
Author: neverfollow81 (https://sketchfab.com/neverfollow81)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bunk-bed-3ddab7a93381496eba3c36677e777912
Title: Bunk Bed
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Bunk_bed(props) {
  const { nodes, materials } = useGLTF("./glbFile/bunk_bed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DefaultMaterial1}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./glbFile/bunk_bed.glb");