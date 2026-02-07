import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomDatePickerProps {
  value: string;
  onChange: (date: string) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Parse initial date or default to today
  const initialDate = value && !isNaN(Date.parse(value)) ? new Date(value) : new Date();
  const [currentDate, setCurrentDate] = useState(initialDate); // For navigation state
  
  // Sync if value changes externally
  useEffect(() => {
    if (value && !isNaN(Date.parse(value))) {
      setCurrentDate(new Date(value));
    }
  }, [value]);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    // Format YYYY-MM-DD
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    onChange(formattedDate);
    setIsOpen(false);
  };
  
  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);
    
    // Get today's date with time set to 00:00:00 for accurate comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const days = [];
    // Empty slots for previous month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }
    
    // Days of current month
    for (let d = 1; d <= totalDays; d++) {
      const currentDayDate = new Date(year, month, d);
      // Check if this date matches the selected value
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isSelected = value === dateStr;
      
      const isToday = today.getTime() === currentDayDate.getTime();
      const isPast = currentDayDate < today;

      days.push(
        <button
          key={d}
          type="button"
          disabled={isPast}
          onClick={() => handleDateClick(d)}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors
            ${isPast 
              ? 'text-gray-300 cursor-not-allowed' 
              : isSelected 
                ? 'bg-[#5A7863] text-white shadow-md' 
                : isToday 
                  ? 'border border-[#5A7863] text-[#5A7863] font-bold' 
                  : 'text-[#3B4953] hover:bg-[#90AB8B]/30'
            }`}
        >
          {d}
        </button>
      );
    }
    return days;
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return (
    <div className="relative w-full">
      <div className="relative">
        <input 
            type="text" 
            value={value}
            onChange={handleManualChange}
            placeholder="YYYY-MM-DD"
            className="w-full pl-4 pr-10 py-3 rounded-lg border border-[#90AB8B]/40 focus:ring-2 focus:ring-[#5A7863] focus:border-transparent outline-none bg-white" 
        />
        <button 
          type="button"
          onClick={() => setIsOpen(true)}
          className="absolute right-0 top-0 h-full px-3 text-[#5A7863] hover:text-[#3B4953] transition-colors focus:outline-none"
        >
          <Calendar size={20} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
           {/* Overlay Click to close */}
           <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
           
           <div className="bg-white rounded-2xl shadow-2xl border border-[#90AB8B]/20 p-6 w-full max-w-sm relative z-10 animate-in zoom-in-95 duration-200">
             
             {/* Header */}
             <div className="flex justify-between items-center mb-6">
                <button type="button" onClick={handlePrevMonth} className="p-2 hover:bg-[#EBF4DD] rounded-full text-[#3B4953] transition-colors">
                    <ChevronLeft size={20} />
                </button>
                <h3 className="text-xl font-serif font-bold text-[#3B4953]">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <button type="button" onClick={handleNextMonth} className="p-2 hover:bg-[#EBF4DD] rounded-full text-[#3B4953] transition-colors">
                    <ChevronRight size={20} />
                </button>
             </div>

             {/* Days Header */}
             <div className="grid grid-cols-7 mb-2 text-center">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="text-xs font-bold text-[#90AB8B] uppercase tracking-wider">{day}</div>
                ))}
             </div>

             {/* Calendar Grid */}
             <div className="grid grid-cols-7 gap-1 justify-items-center">
                {renderCalendarDays()}
             </div>

             <div className="mt-6 flex justify-end gap-2">
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
             </div>

           </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;