import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Kevin(props) {
  const { nodes, materials } = useGLTF('/KevinRobot.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part.geometry}
        material={materials['white medium gloss plastic']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_2.geometry}
        material={materials['black medium gloss plastic']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_3.geometry}
        material={materials['black low gloss plastic']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_4.geometry}
        material={materials.color}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_5.geometry}
        material={materials['polished steel']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_6.geometry}
        material={materials['color-2']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_7.geometry}
        material={materials['satin finish stainless steel']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_8.geometry}
        material={materials['color-3']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_9.geometry}
        material={materials['color-5']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_10.geometry}
        material={materials['color-8']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_11.geometry}
        material={materials['color-10']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_12.geometry}
        material={materials['White-PW-MT11050']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_13.geometry}
        material={materials['color-12']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_14.geometry}
        material={materials['polished aluminum']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_15.geometry}
        material={materials.acrylic}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_16.geometry}
        material={materials['color-17']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_17.geometry}
        material={materials['color-18']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_18.geometry}
        material={materials['color-19']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_19.geometry}
        material={materials['color-20']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_20.geometry}
        material={materials['color-21']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_21.geometry}
        material={materials['color-22']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_22.geometry}
        material={materials['color-23']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_23.geometry}
        material={materials['color-24']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_24.geometry}
        material={materials['color-25']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_25.geometry}
        material={materials['color-27']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_26.geometry}
        material={materials['color-28']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_27.geometry}
        material={materials['color-29']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_28.geometry}
        material={materials['color-30']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_29.geometry}
        material={materials['color-31']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_30.geometry}
        material={materials['color-33']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_31.geometry}
        material={materials['color-34']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_32.geometry}
        material={materials['color-35']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_33.geometry}
        material={materials['color-36']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_34.geometry}
        material={materials['color-37']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_35.geometry}
        material={materials['color-49']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_36.geometry}
        material={materials['color-50']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_37.geometry}
        material={materials['color-53']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_38.geometry}
        material={materials['color-54']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_39.geometry}
        material={materials['color-55']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_40.geometry}
        material={materials['color-56']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_41.geometry}
        material={materials['color-58']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_42.geometry}
        material={materials['PW-MT11030']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_43.geometry}
        material={materials['dark grey medium gloss plastic']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_44.geometry}
        material={materials['color-60']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_45.geometry}
        material={materials['color-62']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_46.geometry}
        material={materials['color-64']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_47.geometry}
        material={materials['color-65']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_48.geometry}
        material={materials['color-67']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_49.geometry}
        material={materials['color-70']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_50.geometry}
        material={materials['color-74']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_51.geometry}
        material={materials['color-77']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_52.geometry}
        material={materials['color-78']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_53.geometry}
        material={materials['color-79']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_54.geometry}
        material={materials['color-81']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_55.geometry}
        material={materials['color-82']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_56.geometry}
        material={materials['color-83']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_57.geometry}
        material={materials['color-84']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_58.geometry}
        material={materials['color-85']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_59.geometry}
        material={materials['color-86']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_60.geometry}
        material={materials['color-87']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_61.geometry}
        material={materials['color-88']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_62.geometry}
        material={materials['color-89']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_63.geometry}
        material={materials['color-90']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_64.geometry}
        material={materials['color-91']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_65.geometry}
        material={materials['color-92']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_66.geometry}
        material={materials['color-93']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_67.geometry}
        material={materials['color-94']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_68.geometry}
        material={materials['color-95']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_69.geometry}
        material={materials['color-96']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_70.geometry}
        material={materials['color-97']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_71.geometry}
        material={materials['color-98']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_72.geometry}
        material={materials['color-99']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_73.geometry}
        material={materials['color-100']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_74.geometry}
        material={materials['color-102']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_75.geometry}
        material={materials['color-103']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_76.geometry}
        material={materials['color-104']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_77.geometry}
        material={materials['color-105']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_78.geometry}
        material={materials['color-106']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_79.geometry}
        material={materials['color-107']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_80.geometry}
        material={materials['color-108']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_81.geometry}
        material={materials['color-111']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_82.geometry}
        material={materials['color-112']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_83.geometry}
        material={materials['color-114']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_84.geometry}
        material={materials['yellow low gloss plastic']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_85.geometry}
        material={materials['dark grey low gloss plastic']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_86.geometry}
        material={materials['blue low gloss plastic']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_87.geometry}
        material={materials['red low gloss plastic']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_88.geometry}
        material={materials['green low gloss plastic']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_89.geometry}
        material={materials['blue low gloss plastic-2']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_90.geometry}
        material={materials['color-119']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_91.geometry}
        material={materials['color-120']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_92.geometry}
        material={materials['color-121']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_93.geometry}
        material={materials['color-122']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_94.geometry}
        material={materials['color-123']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_95.geometry}
        material={materials['color-128']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_96.geometry}
        material={materials['color-130']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_97.geometry}
        material={materials['color-131']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_98.geometry}
        material={materials['color-132']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_99.geometry}
        material={materials['color-134']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_100.geometry}
        material={materials['color-135']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_101.geometry}
        material={materials['color-137']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_102.geometry}
        material={materials['color-146']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_103.geometry}
        material={materials['PW-MT11030-2']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_104.geometry}
        material={materials['PW-MT11030-3']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_105.geometry}
        material={materials['PW-MT11030-4']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_106.geometry}
        material={materials['satin finish stainless steel-2']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_107.geometry}
        material={materials['satin finish stainless steel-4']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_108.geometry}
        material={materials['PW-MT11030-5']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_109.geometry}
        material={materials['PW-MT11030-6']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_110.geometry}
        material={materials['PW-MT11030-7']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_111.geometry}
        material={materials['satin finish aluminum']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_112.geometry}
        material={materials['color-155 (Cosmetic Thread)']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_113.geometry}
        material={materials['satin finish stainless steel-6']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_114.geometry}
        material={materials['pw-mt11030']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_115.geometry}
        material={materials['PW-MT11030-8']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_116.geometry}
        material={materials['PW-MT11030-11']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_117.geometry}
        material={materials['color-165']}
        position={[0, 0.066, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Part_118.geometry}
        material={materials['color-170']}
        position={[0, 0.066, 0]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        near={0.01}
        fov={18.423}
        position={[0.503, 1.153, 2.054]}
        rotation={[-0.468, 0.184, -0.03]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        near={0.01}
        fov={15}
        position={[4.445, 1.982, 4.445]}
        rotation={[-0.322, 0.759, 0.226]}
      />
      <directionalLight
        intensity={0.577}
        decay={2}
        color="#c8c8c8"
        position={[7.071, 7.071, 0]}
        rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
      />
      <directionalLight
        intensity={0.577}
        decay={2}
        color="#c8c8c8"
        position={[-3.414, 6.125, -7.129]}
        rotation={[-2.432, -0.348, -2.856]}
      />
      <directionalLight
        intensity={0.577}
        decay={2}
        color="#c8c8c8"
        position={[-9.226, 3.41, -1.805]}
        rotation={[-2.058, -1.175, -2.092]}
      />
    </group>
  )
}

useGLTF.preload('/KevinRobot.glb')
