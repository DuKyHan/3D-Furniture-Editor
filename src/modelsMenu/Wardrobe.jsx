

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Wardrobe(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./glbFile/WardrobeModel.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="fa46d619c16d465ca479f075041ae5a4fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                    <mesh
                      name="Object002_Wardrobe_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object002_Wardrobe_0.geometry}
                      material={materials.Wardrobe}
                    />
                    <mesh
                      name="Object092_Napr_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object092_Napr_0.geometry}
                      material={materials.Napr}
                    />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./glbFile/WardrobeModel.glb");