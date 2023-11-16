import InterfaceControls from "./InterfaceControls";
import ResetButton from "./ResetButton";
import useGame from "../../stores/useGame";
import { useRef, useEffect } from "react";
import { addEffect } from "@react-three/fiber";

export default function Interface() {
  const time = useRef();
  const phase = useGame((state) => state.phase);

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;

      if (state.phase === "playing") {
        elapsedTime = Date.now() - state.startTime;
      } else if (state.phase === "ended") {
        elapsedTime = state.endTime - state.startTime;
      }

      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);

      if(time.current) time.current.textContent = elapsedTime
    });
    return () => unsubscribeEffect();
  }, []);

  return (
    <div className="interface">
      {/* Time */}
      <div ref={time} className="time">
        0.00
      </div>

      {/* Reset Button */}
      {phase === "ended" && <ResetButton />}

      {/* Controls */}
      <InterfaceControls />
    </div>
  );
}
