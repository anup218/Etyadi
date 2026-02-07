import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface ClockTimePickerProps {
  value: string;
  onChange: (time: string) => void;
  date?: string;
}

const ClockTimePicker: React.FC<ClockTimePickerProps> = ({ value, onChange, date }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'hours' | 'minutes'>('hours');

  interface TimeState {
    hours: number;
    minutes: number;
    period: 'AM' | 'PM';
  }

  const parseTime = (str: string): TimeState => {
    if (!str) return { hours: 12, minutes: 0, period: 'PM' };
    const [h, m] = str.split(':');
    let hours = parseInt(h);
    const minutes = parseInt(m) || 0;
    
    if (isNaN(hours)) return { hours: 12, minutes: 0, period: 'PM' };
    
    // Simple heuristic for 24h to 12h conversion if typed manually in 24h
    let period: 'AM' | 'PM' = 'AM';
    if (hours >= 12) {
      period = 'PM';
      if (hours > 12) hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    
    return { hours, minutes, period };
  };

  const [timeState, setTimeState] = useState<TimeState>(parseTime(value));

  // Sync internal state when value prop changes externally (or after selection)
  useEffect(() => {
    if (value) {
      // If the value looks like a standard time, parse it
       if (value.includes(':')) {
         setTimeState(parseTime(value));
       }
    }
  }, [value]);

  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleHourClick = (h: number) => {
    setTimeState(prev => ({ ...prev, hours: h }));
    setMode('minutes');
  };

  const handleMinuteClick = (m: number) => {
    setTimeState(prev => ({ ...prev, minutes: m }));
  };

  const togglePeriod = (p: 'AM' | 'PM') => {
    setTimeState(prev => ({ ...prev, period: p }));
  };

  const confirmTime = () => {
    let { hours, minutes, period } = timeState;
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    
    const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    onChange(formatted);
    setIsOpen(false);
    setMode('hours');
  };

  const isDateToday = () => {
    if (!date) return false;
    const today = new Date();
    const [y, m, d] = date.split('-').map(Number);
    // Create date from components to avoid timezone issues with standard string parsing
    const selected = new Date(y, m - 1, d);
    return selected.toDateString() === today.toDateString();
  };

  const renderClockFace = () => {
    const isHours = mode === 'hours';
    const items = isHours ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const selectedValue = isHours ? timeState.hours : timeState.minutes;
    const radius = 90;
    const center = 110;

    const isToday = isDateToday();
    const now = new Date();
    const currentHour24 = now.getHours();
    const currentMinute = now.getMinutes();

    return (
      <div className="relative w-[220px] h-[220px] bg-[#EBF4DD]/20 rounded-full mx-auto border border-[#90AB8B]/30 shadow-inner">
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#5A7863] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
        
        <div 
           className="absolute top-1/2 left-1/2 h-[70px] w-1 bg-[#5A7863] origin-bottom transition-transform duration-300 ease-out z-0 rounded-full opacity-60"
           style={{ 
             transform: `translateX(-50%) translateY(-100%) rotate(${(isHours ? selectedValue : selectedValue / 5) * 30}deg)` 
           }}
        ></div>

        {items.map((num, i) => {
          const angleDeg = i * 30 - 90; 
          const angleRad = angleDeg * (Math.PI / 180);
          const left = center + radius * Math.cos(angleRad);
          const top = center + radius * Math.sin(angleRad);

          const isSelected = selectedValue === num;
          
          let isDisabled = false;
          if (isToday) {
             if (isHours) {
                // Calculate 24h representation of this button number based on current period
                let h24 = num;
                if (timeState.period === 'AM') {
                    if (num === 12) h24 = 0;
                } else { // PM
                    if (num !== 12) h24 = num + 12;
                }
                if (h24 < currentHour24) isDisabled = true;
             } else {
                // For minutes, we check against current time using selected hour
                let h24 = timeState.hours;
                if (timeState.period === 'AM') {
                    if (h24 === 12) h24 = 0;
                } else {
                    if (h24 !== 12) h24 = h24 + 12;
                }
                
                // If hour is past, disable all minutes (though user shouldn't reach here)
                if (h24 < currentHour24) isDisabled = true;
                // If hour is current, disable past minutes
                else if (h24 === currentHour24 && num < currentMinute) isDisabled = true;
             }
          }

          return (
            <button
              key={num}
              type="button"
              disabled={isDisabled}
              onClick={() => isHours ? handleHourClick(num) : handleMinuteClick(num)}
              className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 z-10
                ${isSelected 
                  ? 'bg-[#5A7863] text-white scale-110 shadow-md' 
                  : isDisabled 
                    ? 'text-gray-300 cursor-not-allowed bg-transparent'
                    : 'text-[#3B4953] hover:bg-[#90AB8B]/30'
                }`}
              style={{ left: `${left}px`, top: `${top}px` }}
            >
              {isHours ? num : num.toString().padStart(2, '0')}
            </button>
          );
        })}
      </div>
    );
  };

  const isToday = isDateToday();
  const currentHour24 = new Date().getHours();
  // Disable AM if it is already PM or later
  const isAmDisabled = isToday && currentHour24 >= 12;

  return (
    <div className="relative w-full">
      <div className="relative">
        <input 
          type="text" 
          value={value}
          onChange={handleManualChange}
          placeholder="Select or Type Time"
          className="w-full pl-4 pr-10 py-3 rounded-lg border border-[#90AB8B]/40 focus:ring-2 focus:ring-[#5A7863] focus:border-transparent outline-none bg-white" 
        />
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="absolute right-0 top-0 h-full px-3 text-[#5A7863] hover:text-[#3B4953] transition-colors focus:outline-none"
        >
          <Clock size={20} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
           {/* Overlay Click to close */}
           <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
           
           <div className="bg-white rounded-2xl shadow-2xl border border-[#90AB8B]/20 p-6 w-full max-w-sm relative z-10 animate-in zoom-in-95 duration-200">
            <h3 className="text-center font-serif text-xl font-bold text-[#3B4953] mb-4">Select Time</h3>
            
            <div className="flex justify-center items-end gap-2 mb-6">
              <button 
                type="button"
                onClick={() => setMode('hours')}
                className={`text-4xl font-bold font-serif leading-none transition-colors ${mode === 'hours' ? 'text-[#5A7863]' : 'text-[#3B4953]/40'}`}
              >
                {timeState.hours.toString().padStart(2, '0')}
              </button>
              <span className="text-3xl font-bold text-[#3B4953]/40 mb-1">:</span>
              <button 
                type="button"
                onClick={() => setMode('minutes')}
                className={`text-4xl font-bold font-serif leading-none transition-colors ${mode === 'minutes' ? 'text-[#5A7863]' : 'text-[#3B4953]/40'}`}
              >
                {timeState.minutes.toString().padStart(2, '0')}
              </button>
              
              <div className="flex flex-col ml-2 gap-1 mb-1">
                <button 
                  type="button"
                  disabled={isAmDisabled}
                  onClick={() => togglePeriod('AM')}
                  className={`text-xs font-bold px-2 py-1 rounded ${timeState.period === 'AM' ? 'bg-[#5A7863] text-white' : isAmDisabled ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-gray-100 text-gray-500'}`}
                >
                  AM
                </button>
                <button 
                  type="button"
                  onClick={() => togglePeriod('PM')}
                  className={`text-xs font-bold px-2 py-1 rounded ${timeState.period === 'PM' ? 'bg-[#5A7863] text-white' : 'bg-gray-100 text-gray-500'}`}
                >
                  PM
                </button>
              </div>
            </div>

            {renderClockFace()}

            <div className="mt-6 flex justify-end gap-2">
              <button 
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={confirmTime}
                className="px-6 py-2 text-sm bg-[#5A7863] text-white rounded-lg font-bold hover:bg-[#3B4953] shadow-md transition-all"
              >
                Set Time
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClockTimePicker;