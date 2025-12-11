import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { TreeState } from './types';
import { COLORS } from './constants';

const App: React.FC = () => {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.TREE_SHAPE);

  const toggleState = () => {
    setTreeState((prev) => 
      prev === TreeState.TREE_SHAPE ? TreeState.SCATTERED : TreeState.TREE_SHAPE
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* 3D Scene Layer */}
        <div className="absolute inset-0 z-0">
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: false, stencil: false, alpha: false }}>
                <color attach="background" args={[COLORS.BACKGROUND]} />
                <Scene treeState={treeState} />
            </Canvas>
        </div>

        {/* UI Overlay Layer */}
        <main className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8 md:p-16">
            
            {/* Header */}
            <header className="flex flex-col items-start pointer-events-auto">
                <h1 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 tracking-wider drop-shadow-lg">
                    ARIX
                </h1>
                <h2 className="text-lg md:text-xl text-emerald-400 font-light tracking-[0.3em] mt-2 uppercase">
                    Signature Collection
                </h2>
            </header>

            {/* Controls */}
            <div className="flex flex-col items-center md:items-end pointer-events-auto">
                 <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-2xl ring-1 ring-white/20">
                    <p className="text-yellow-100/60 text-xs uppercase tracking-widest mb-4 text-center md:text-right">
                        Interactive Mode
                    </p>
                    <button
                        onClick={toggleState}
                        className={`
                            relative group overflow-hidden px-8 py-3 rounded-full 
                            transition-all duration-500 ease-out
                            border border-yellow-500/50
                            ${treeState === TreeState.TREE_SHAPE 
                                ? 'bg-emerald-900/80 hover:bg-emerald-800' 
                                : 'bg-yellow-600/20 hover:bg-yellow-600/40'}
                        `}
                    >
                        <span className="relative z-10 font-serif text-yellow-100 tracking-widest text-sm md:text-base">
                            {treeState === TreeState.TREE_SHAPE ? 'DISASSEMBLE' : 'ASSEMBLE'}
                        </span>
                        
                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent blur-md" />
                    </button>
                 </div>
            </div>

            {/* Footer / Status */}
            <footer className="pointer-events-none">
                 <div className="text-white/20 text-xs font-mono tracking-widest">
                     STATUS: {treeState} // MESH_INSTANCES: 2650
                 </div>
            </footer>
        </main>
    </div>
  );
};

export default App;