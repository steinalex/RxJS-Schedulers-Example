import React from "react";
import { scheduled, queueScheduler } from "rxjs";

//Async scheduler
export const AsyncScheduler: React.FC = () => {
  const names$ = scheduled(["Steve", "John"], queueScheduler);

  queueScheduler.schedule(() => {
    names$.subscribe((val) => console.log("Name:", val));
    console.log("Finished names");
  });

  console.log("I'm done!");

  return null;
};
