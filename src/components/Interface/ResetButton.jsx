import useGame from "../../stores/useGame";

export default function ResetButton() {
  const restart = useGame((state) => state.restart);
  return (
    <div className="restart" onClick={restart}>
      Restart
    </div>
  );
}
