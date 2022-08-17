import {
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  subDays,
} from "date-fns";
import { useState } from "react";
// TYPES
type TDays = string[];

const buildMonth = (date: Date) => {
  const startDate = startOfWeek(startOfMonth(date));
  const endDate = subDays(endOfWeek(endOfMonth(date)), 1);

  return { startDate, endDate };
};

const App = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const days: TDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      {days.map((day, i) => (
        <div key={i} className="">
          {day}
        </div>
      ))}
    </div>
  );
};

export default App;
