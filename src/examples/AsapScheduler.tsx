import React from "react";
import { asapScheduler, scheduled, asyncScheduler } from "rxjs";

//Asap scheduler
export const AsapScheduler: React.FC = () => {
  const names1$ = scheduled(["Emily", "Claire"], asyncScheduler);
  names1$.subscribe((val) => console.log("Name:", val));

  const names$ = scheduled(["Steve", "John"], asapScheduler);
  names$.subscribe((val) => console.log("Name:", val));

  console.log("I'm done!");

  return null;
};
