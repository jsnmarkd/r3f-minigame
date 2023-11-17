import InterfaceControls from "./InterfaceControls";
import ResetButton from "./ResetButton";
import useGame from "../../stores/useGame";
import Timer from "./Timer";

export default function Interface() {
  const phase = useGame((state) => state.phase);

  return (
    <div className="interface">
      <div className="navbar">
        <a href="https://github.com/jsnmarkd/r3f-minigame" target="_blank" className="link">
          View Code
        </a>
      </div>
      {/* Timer */}
      <Timer />

      {/* Reset Button */}
      {phase === "ended" && <ResetButton />}

      {/* Controls */}
      <InterfaceControls />
    </div>
  );
}
