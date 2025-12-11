import { Vector3, Quaternion, Color } from 'three';

// Extend JSX.IntrinsicElements to include React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      mesh: any;
      group: any;
      instancedMesh: any;
      meshStandardMaterial: any;
      tetrahedronGeometry: any;
      sphereGeometry: any;
      boxGeometry: any;
      octahedronGeometry: any;
      color: any;
    }
  }
}

export enum TreeState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE',
}

export interface ParticleData {
  // The stable ID for the particle
  id: number;
  // Position when in tree form
  treePosition: Vector3;
  // Position when scattered
  scatterPosition: Vector3;
  // Base rotation
  rotation: Quaternion;
  // Scale variation
  scale: number;
  // Color variation (optional)
  color?: Color;
  // Random speed factor for floating animation
  floatSpeed: number;
  floatOffset: number;
}

export interface InstancedGeometryProps {
  count: number;
  state: TreeState;
  color: string;
  type: 'LEAF' | 'ORNAMENT' | 'GIFT';
}