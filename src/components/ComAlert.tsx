import { useEffect, useState } from "react";
import { TAlert } from "../types/types";

type props = {alert: TAlert}

export default function ComAlert({alert}: props) {
  const [count, setCount] = useState(0)
  
  
  useEffect(() => {

  
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     alert.handleRemoveAlert(alert.index);
  //   }, alert.time);

  //   return () => clearTimeout(timeout)
  // }, []);

  return <>{alert.unitType} added!</>;
}
