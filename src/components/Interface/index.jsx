import InterfaceControls from "./InterfaceControls";
import ResetButton from "./ResetButton";
import useGame from "../../stores/useGame";

export default function Interface() {
  const phase = useGame((state) => state.phase);

  return (
    <div className="interface">
      {/* Time */}
      <div className="time">0.00</div>

      {/* Reset Button */}
      {phase === "ended" && <ResetButton />}

      {/* Controls */}
      <InterfaceControls />
    </div>
  );
}
