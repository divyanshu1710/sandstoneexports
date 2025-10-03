import LogoAnimation from "../LogoAnimation";

export default function LogoAnimationExample() {
  return <LogoAnimation onComplete={() => console.log("Animation complete")} />;
}
