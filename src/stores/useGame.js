import { create } from "zustand";

export default create((set) => {
  return {
    blocksCount: 3,

    /**
     * Phases
     */
    phase: "ready",

    start: () => {
      set((state) => {
        if (state.phase === "ready") return { phase: "playing" };
        return {};
      });
    },

    restart: () => {
      set((state) => {
        if (state.phase === "ended" || state.phase === "playing")
          return { phase: "ready" };
        return {};
      });
    },

    end: () => {
      set((state) => {
        if (state.phase === "playing") return { phase: "ended" };
        return {};
      });
    },
  };
});
