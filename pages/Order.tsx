
import React, { useState } from 'react';
import Button from '../components/Button';
import { CheckCircle2, ClipboardList, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const Order: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    name: '',
    phone: '',
    address: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleServiceSelect = (serviceName: string) => {
    setFormData({...formData, service: serviceName});
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* SECTION 1: HERO */}
      <section className="min-h-[50vh] flex items-center justify-center bg-navy text-white text-center px-4 pt-20">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Pesan Layanan dengan Mudah</h1>
          <p className="text-sm md:text-base text-gray-300 mb-12 max-w-3xl mx-auto">Hanya beberapa langkah untuk mendapatkan bantuan profesional.</p>
        </div>
      </section>

      {/* SECTION 2: ORDER FORM FULLSCREEN */}
      <section className="min-h-screen bg-gray-50 flex justify-center items-start py-20 px-4">
        <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Progress Sidebar (Desktop) / Topbar (Mobile) */}
          <div className="bg-navy-light text-white p-8 md:w-1/3 flex flex-col justify-between">
            <div>
              <div className="font-bold text-construction text-xl mb-8">PROGRESS</div>
              <div className="space-y-6">
                <StepIndicator num={1} label="Pilih Layanan" active={step === 1} completed={step > 1} />
                <StepIndicator num={2} label="Jadwal" active={step === 2} completed={step > 2} />
                <StepIndicator num={3} label="Detail Kontak" active={step === 3} completed={step > 3} />
                <StepIndicator num={4} label="Konfirmasi" active={step === 4} completed={step > 4} />
              </div>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              Butuh bantuan? <br/> Hubungi +62 xxx xxx
            </div>
          </div>

          {/* Form Area */}
          <div className="p-8 md:p-12 md:w-2/3">
            
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-navy mb-6">Pilih Layanan</h2>
                <div className="grid grid-cols-1 gap-4">
                  {['Home Cleaning', 'Construction Helper', 'Repair & Maintenance', 'Electrical Work', 'Daily Helper'].map((svc) => (
                    <button
                      key={svc}
                      onClick={() => handleServiceSelect(svc)}
                      className={`p-5 rounded-xl border-2 text-left flex justify-between items-center transition-all ${
                        formData.service === svc 
                          ? 'border-construction bg-construction/5' 
                          : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <span className={`font-semibold text-lg ${formData.service === svc ? 'text-navy' : 'text-gray-600'}`}>{svc}</span>
                      {formData.service === svc && <CheckCircle2 className="text-construction" />}
                    </button>
                  ))}
                </div>
                <div className="pt-4 text-right">
                   <Button onClick={nextStep} disabled={!formData.service} className={!formData.service ? 'opacity-50' : ''}>
                     Lanjut <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-navy mb-6">Atur Jadwal</h2>
                <div>
                   <label className="block text-gray-700 font-semibold mb-2">Tanggal & Waktu</label>
                   <input 
                     type="datetime-local" 
                     className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-construction outline-none"
                     onChange={(e) => setFormData({...formData, date: e.target.value})}
                     value={formData.date}
                   />
                </div>
                <div className="pt-8 flex justify-between">
                   <Button variant="outline" onClick={prevStep}>Kembali</Button>
                   <Button onClick={nextStep} disabled={!formData.date} className={!formData.date ? 'opacity-50' : ''}>
                     Lanjut <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-navy mb-6">Detail Kontak</h2>
                <div className="space-y-4">
                   <input 
                     type="text" 
                     placeholder="Nama Lengkap" 
                     className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-construction outline-none"
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     value={formData.name}
                   />
                   <input 
                     type="tel" 
                     placeholder="Nomor Telepon / WhatsApp" 
                     className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-construction outline-none"
                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
                     value={formData.phone}
                   />
                   <textarea 
                     rows={3} 
                     placeholder="Alamat Lengkap" 
                     className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-construction outline-none"
                     onChange={(e) => setFormData({...formData, address: e.target.value})}
                     value={formData.address}
                   />
                </div>
                <div className="pt-8 flex justify-between">
                   <Button variant="outline" onClick={prevStep}>Kembali</Button>
                   <Button 
                    onClick={nextStep} 
                    disabled={!formData.name || !formData.phone || !formData.address}
                    className={(!formData.name || !formData.phone || !formData.address) ? 'opacity-50' : ''}
                   >
                     Lanjut <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-fadeIn text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Konfirmasi Pesanan</h2>
                
                <div className="bg-gray-50 p-6 rounded-xl text-left text-sm space-y-3 border border-gray-100">
                   <div className="flex justify-between"><span className="text-gray-500">Layanan</span> <span className="font-bold text-navy">{formData.service}</span></div>
                   <div className="flex justify-between"><span className="text-gray-500">Waktu</span> <span className="font-bold text-navy">{formData.date}</span></div>
                   <div className="flex justify-between"><span className="text-gray-500">Nama</span> <span className="font-bold text-navy">{formData.name}</span></div>
                   <div className="flex justify-between"><span className="text-gray-500">Alamat</span> <span className="font-bold text-navy truncate w-1/2 text-right">{formData.address}</span></div>
                </div>

                <div className="pt-6">
                   <Button fullWidth onClick={() => alert("Terima kasih! Pesanan Anda telah diterima.")} className="py-4 text-lg">
                     Lanjutkan Pemesanan
                   </Button>
                   <button onClick={prevStep} className="mt-4 text-gray-500 underline hover:text-navy">Edit Data</button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

const StepIndicator: React.FC<{num: number, label: string, active: boolean, completed: boolean}> = ({ num, label, active, completed }) => (
  <div className={`flex items-center gap-4 ${active ? 'opacity-100' : 'opacity-50'} transition-opacity`}>
    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${
      completed ? 'bg-construction border-construction text-navy' : 
      active ? 'bg-white border-white text-navy' : 'border-gray-500 text-gray-500'
    }`}>
      {completed ? <CheckCircle2 className="w-5 h-5" /> : num}
    </div>
    <span className="font-medium text-lg">{label}</span>
  </div>
);

export default Order;
