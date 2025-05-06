// components/Animation.tsx
"use client";

import dynamic from "next/dynamic";
import lottieJson from "../../../public/aniJson.json";

// SSR 끄고 클라이언트에서만 로딩
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function Animation() {
  return <Lottie loop animationData={lottieJson} play />;
}
