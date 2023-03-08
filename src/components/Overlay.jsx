import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
    return (
      <section
        className={`h-screen flex flex-col justify-center p-10 ${
          props.right ? "items-end" : "items-start"
        }`}
        style={{
          opacity: props.opacity,
        }}
      >
        <div className="w-1/2 flex items-center justify-center">
          <div className="max-w-sm w-full">
            <div className="bg-white  rounded-lg px-8 py-12">
              {props.children}
            </div>
          </div>
        </div>
      </section>
    );
  };

export const Overlay = () => {
    return (
    <Scroll html><h1 className="font-serif text-2xl">Hello World
    </h1>
    </Scroll>
    );
}