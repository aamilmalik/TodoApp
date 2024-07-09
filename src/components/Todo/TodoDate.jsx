import { useEffect, useState } from "react";

const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    let clearDate = setInterval(() => {
      let now = new Date();
      let formattedDate = now.toLocaleDateString();
      let formattedTime = now.toLocaleTimeString();

      setDateTime(`Date = ${formattedDate} - Time = ${formattedTime}`);
    }, 1000);
    return () => clearInterval(clearDate);
  }, []);

  return <h2>{dateTime}</h2>;
};

export default TodoDate;
