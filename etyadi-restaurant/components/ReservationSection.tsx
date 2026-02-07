import React, { useState } from 'react';
import { CheckCircle, Star } from 'lucide-react';
import ClockTimePicker from './ClockTimePicker';
import CustomDatePicker from './CustomDatePicker';
import { ReservationFormData } from '../types';
import { GOOGLE_SCRIPT_URL } from '../constants';

const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    Date: '',
    Time: '',
    'Party Size': '2 People',
    Name: '',
    Phone: '',
    'Special Request': ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTimeChange = (newTime: string) => {
    setFormData(prev => ({ ...prev, Time: newTime }));
  };

  const handleDateChange = (newDate: string) => {
    setFormData(prev => ({ ...prev, Date: newDate }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    if (!GOOGLE_SCRIPT_URL) {
      alert("Please configure the Google Script URL in the constants file.");
      setStatus('idle');
      return;
    }

    const payload = {
      date: formData.Date,
      time: formData.Time,
      partySize: formData['Party Size'],
      fullName: formData.Name,
      phone: formData.Phone,
      request: formData['Special Request']
    };

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload)
    })
    .then(() => {
        setStatus('success');
        setFormData({
            Date: '',
            Time: '',
            'Party Size': '2 People',
            Name: '',
            Phone: '',
            'Special Request': ''
        });
        setTimeout(() => setStatus('idle'), 5000);
    })
    .catch(err => {
        console.error("Error:", err);
        setStatus('error');
    });
  };

  const isFormValid = Boolean(
    formData.Date &&
    formData.Time &&
    formData['Party Size'] &&
    formData.Name.trim() &&
    formData.Phone.trim()
  );

  const renderRequiredIcon = (value: string) => {
    const isFilled = value && value.trim().length > 0;
    return (
      <Star 
        size={14} 
        className={`inline ml-1 mb-0.5 transition-all duration-300 ${isFilled ? 'fill-[#3B4953] text-[#3B4953]' : 'text-[#90AB8B]'}`} 
      />
    );
  };

  return (
    <div className="pt-28 pb-20 bg-[#EBF4DD] min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
              alt="Dining Table" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#3B4953]/40 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h3 className="text-3xl font-serif font-bold mb-2">Book Your Table</h3>
                <p className="text-white/90">Join us for an unforgettable evening</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-12">
            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#3B4953] mb-6">Reservation Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#3B4953] mb-1 flex items-center">
                        Date {renderRequiredIcon(formData.Date)}
                    </label>
                    <CustomDatePicker 
                      value={formData.Date} 
                      onChange={handleDateChange} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3B4953] mb-1 flex items-center">
                        Time {renderRequiredIcon(formData.Time)}
                    </label>
                    <ClockTimePicker 
                      value={formData.Time}
                      onChange={handleTimeChange}
                      date={formData.Date}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3B4953] mb-1 flex items-center">
                    Party Size {renderRequiredIcon(formData['Party Size'])}
                  </label>
                  <select 
                    name="Party Size"
                    value={formData['Party Size']}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#90AB8B]/40 focus:ring-2 focus:ring-[#5A7863] focus:border-transparent outline-none bg-white text-[#3B4953]"
                  >
                    <option>2 People</option>
                    <option>4 People</option>
                    <option>6 People</option>
                    <option>Large Group (10+)</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3B4953] mb-1 flex items-center">
                        Full Name {renderRequiredIcon(formData.Name)}
                    </label>
                    <input 
                      type="text" 
                      name="Name"
                      placeholder="John Doe" 
                      value={formData.Name}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-[#90AB8B]/40 focus:ring-2 focus:ring-[#5A7863] outline-none bg-white" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3B4953] mb-1 flex items-center">
                        Phone Number {renderRequiredIcon(formData.Phone)}
                    </label>
                    <input 
                      type="tel" 
                      name="Phone"
                      placeholder="123 456 7890" 
                      value={formData.Phone}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-[#90AB8B]/40 focus:ring-2 focus:ring-[#5A7863] outline-none bg-white" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3B4953] mb-1">Special Request</label>
                    <textarea 
                      name="Special Request"
                      placeholder="Birthday, Anniversary, etc." 
                      rows={3}
                      value={formData['Special Request']}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#90AB8B]/40 focus:ring-2 focus:ring-[#5A7863] outline-none bg-white"
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting' || !isFormValid}
                  className="w-full bg-[#5A7863] text-white font-bold py-4 rounded-lg hover:bg-[#3B4953] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Booking...' : 'Confirm Booking'}
                </button>
                {status === 'error' && (
                    <p className="text-red-500 text-center text-sm">Something went wrong. Please try again.</p>
                )}
                <p className="text-xs text-center text-[#3B4953]/70 mt-4">
                  For groups larger than 15, please call us directly at 084030 51474
                </p>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <CheckCircle className="text-[#5A7863] w-20 h-20 mb-6" />
                <h3 className="text-2xl font-bold text-[#3B4953] mb-2">Reservation Received!</h3>
                <p className="text-[#3B4953]/80 mb-8">We have received your request. You will receive a confirmation SMS shortly.</p>
                <button onClick={() => setStatus('idle')} className="text-[#5A7863] font-semibold hover:underline">
                  Make another reservation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSection;