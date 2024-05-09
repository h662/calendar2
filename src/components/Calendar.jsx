import DateCard from "./DateCard";

const calendarData = [
  { date: 1, isHoliday: false },
  { date: 2, isHoliday: false },
  { date: 3, isHoliday: false },
  { date: 4, isHoliday: false },
  { date: 5, isHoliday: false },
  { date: 6, isHoliday: true },
  { date: 7, isHoliday: false },
  { date: 8, isHoliday: false },
  { date: 9, isHoliday: false },
  { date: 10, isHoliday: false },
  { date: 11, isHoliday: false },
  { date: 12, isHoliday: false },
  { date: 13, isHoliday: false },
  { date: 14, isHoliday: false },
  { date: 15, isHoliday: true },
  { date: 16, isHoliday: false },
  { date: 17, isHoliday: false },
  { date: 18, isHoliday: false },
  { date: 19, isHoliday: false },
  { date: 20, isHoliday: false },
  { date: 21, isHoliday: false },
  { date: 22, isHoliday: false },
  { date: 23, isHoliday: false },
  { date: 24, isHoliday: false },
  { date: 25, isHoliday: false },
  { date: 26, isHoliday: false },
  { date: 27, isHoliday: false },
  { date: 28, isHoliday: false },
  { date: 29, isHoliday: false },
  { date: 30, isHoliday: false },
  { date: 31, isHoliday: false },
];

const Calendar = () => {
  return (
    <ul className="bg-blue-50 grid grid-cols-7 gap-4">
      <li className="bg-purple-100 w-[120px] h-[120px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[120px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[120px] text-xl rounded-md"></li>
      <DateCard date={1} />
      <DateCard date={2} />
      <DateCard date={3} />
      <DateCard date={4} />
      <DateCard date={5} />
      <DateCard date={6} isHoliday={true} />
      <DateCard date={7} />
      <DateCard date={8} />
      <DateCard date={9} />
      <DateCard date={10} />
      <DateCard date={11} />
      <DateCard date={12} />
      <DateCard date={13} />
      <DateCard date={14} />
      <DateCard date={15} isHoliday={true} />
      <DateCard date={16} />
      <DateCard date={17} />
      <DateCard date={18} />
      <DateCard date={19} />
      <DateCard date={20} />
      <DateCard date={21} />
      <DateCard date={22} />
      <DateCard date={23} />
      <DateCard date={24} />
      <DateCard date={25} />
      <DateCard date={26} />
      <DateCard date={27} />
      <DateCard date={28} />
      <DateCard date={29} />
      <DateCard date={30} />
      <DateCard date={31} />
    </ul>
  );
};

export default Calendar;
