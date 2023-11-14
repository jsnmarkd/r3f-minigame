import { useRapier } from "@react-three/rapier";
import { useRef } from "react";
import { PlayerPhysics } from "./PlayerPhysics";
import { PlayerModel } from "./PlayerModel";

/**
 * Player Component
 * The main player component that combines both physics and rendering components.
 */

export default function Player() {
  const body = useRef();

  const { rapier, world } = useRapier();

  return (
    <>
      <PlayerPhysics body={body} world={world} rapier={rapier} />
      <PlayerModel body={body} />
    </>
  );
}
