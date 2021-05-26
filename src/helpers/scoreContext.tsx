import { createContext, useContext } from "react";

export type ScoreContent = {
  score: number;
  setScore: (score: number) => void;
};

export const ScoreContext = createContext<ScoreContent>({
  score: 0,
  setScore: () => {}
});

export const useScoreContext = () => useContext(ScoreContext);