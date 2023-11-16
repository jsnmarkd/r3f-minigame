import InterfaceControls from "./InterfaceControls";
import ResetButton from "./ResetButton";
import useGame from "../../stores/useGame";
import Timer from "./Timer";

export default function Interface() {
  const phase = useGame((state) => state.phase);

  return (
    <div className="interface">
      {/* Timer */}
      <Timer />

      {/* Reset Button */}
      {phase === "ended" && <ResetButton />}

      {/* Controls */}
      <InterfaceControls />
    </div>
  );
}
