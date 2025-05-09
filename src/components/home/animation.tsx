// components/Animation.tsx
"use client";

import dynamic from "next/dynamic";
import { FC } from "react";
import lottieJson from "../../../public/aniJson.json";
import { LottieProps } from "react-lottie-player";

// SSR 비활성화된 Lottie 컴포넌트
const Lottie = dynamic<LottieProps>(() => import("react-lottie-player"), {
  ssr: false,
});

const Animation: FC = () => {
  return <Lottie loop animationData={lottieJson} play />;
};

export default Animation;
