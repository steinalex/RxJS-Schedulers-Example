import React from "react";
import { asyncScheduler, scheduled } from "rxjs";

//Queue scheduler
export const QueueScheduler: React.FC = () => {
  const names$ = scheduled(["Steve", "John"], asyncScheduler);
  names$.subscribe((val) => console.log("Name:", val));

  console.log("I'm done!");

  return null;
};
