'use client';

import React, { useState, useEffect } from 'react';
import { 
  Activity, Plus, Trash2, Printer, Lock, User, 
  FileText, PlusCircle, LogOut, ShieldAlert,
  Edit, Eye, Download
} from 'lucide-react';
import { siteConfig } from '@/config/content';

// Interface for Invoice Item matching reference
interface InvoiceItem {
  id: string;
  particulars: string;
  mfr: string;
  batch: string;
  expiry: string;
  rate: number;
  qty: number;
}



export default function BillGenPage() {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Invoice State
  const [billNo, setBillNo] = useState('241');
  const [billDate, setBillDate] = useState('');
  const [customerName, setCustomerName] = useState('Aditya Sharma');
  const [customerGst, setCustomerGst] = useState('');

  // Items List State
  const [items, setItems] = useState<InvoiceItem[]>([]);
  
  // Input fields for adding items
  const [particulars, setParticulars] = useState('');
  const [mfr, setMfr] = useState('');
  const [batch, setBatch] = useState('');
  const [expiry, setExpiry] = useState('');
  const [rate, setRate] = useState(0);
  const [qty, setQty] = useState(1);

  // Tab View for mobile screens
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  // Dynamic scale variables to scale the large A4 invoice preview on mobile screens
  const [scale, setScale] = useState(1);
  const [containerHeight, setContainerHeight] = useState('auto');

  // Load state, sets date format, and configures screen resize handler for A4 preview scaling
  useEffect(() => {
    const session = sessionStorage.getItem('billing_auth');
    if (session === 'true') {
      setIsLoggedIn(true);
    }

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.'); // matching DD.MM.YYYY dot format standard in receipt images
    
    setBillDate(formattedDate);
    setItems([]);

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width < 768) {
          const targetWidth = width - 24; // mobile horizontal padding bounds
          const factor = targetWidth / 760;
          setScale(factor);
          setContainerHeight(`${1075 * factor}px`); // proportional height based on 1075px A4 layout height
        } else {
          setScale(1);
          setContainerHeight('auto');
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password.trim() === 'admin') {
      setIsLoggedIn(true);
      setAuthError('');
      sessionStorage.setItem('billing_auth', 'true');
    } else {
      setAuthError('Invalid credentials. Hint: use admin / admin');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('billing_auth');
  };

  // Remove item
  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Add Item to list
  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!particulars.trim() || rate <= 0 || qty <= 0) {
      alert('Please fill out Product Particulars, Quantity, and Rate.');
      return;
    }

    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      particulars: particulars,
      mfr: mfr.trim() || '-',
      batch: batch.trim().toUpperCase() || '-',
      expiry: expiry.trim() || '-',
      rate: Number(rate),
      qty: Number(qty)
    };

    setItems([...items, newItem]);
    
    // Reset product input fields
    setParticulars('');
    setMfr('');
    setBatch('');
    setExpiry('');
    setRate(0);
    setQty(1);
  };



  // Convert number to words helper (Indian numbering system)
  const convertNumberToWords = (num: number): string => {
    if (num === 0) return "Zero";
    const a = [
      "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
      "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];
    const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const g = ["", "Thousand", "Lakh", "Crore"];

    const makeGroup = (n: number) => {
      let str = "";
      if (n >= 100) {
        str += a[Math.floor(n / 100)] + " Hundred ";
        n %= 100;
      }
      if (n > 0) {
        if (str !== "") str += "and ";
        if (n < 20) {
          str += a[n];
        } else {
          str += b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
        }
      }
      return str.trim();
    };

    let integerPart = Math.floor(num);
    let paisePart = Math.round((num - integerPart) * 100);

    let parts: string[] = [];
    let msb = integerPart % 1000;
    integerPart = Math.floor(integerPart / 1000);
    if (msb > 0 || integerPart > 0) {
      parts.push(makeGroup(msb));
    }
    
    for (let i = 0; i < g.length - 1; i++) {
      if (integerPart === 0) break;
      let rem = integerPart % 100;
      integerPart = Math.floor(integerPart / 100);
      if (rem > 0) {
        parts.unshift(makeGroup(rem) + " " + g[i + 1]);
      }
    }
    
    let result = parts.filter(Boolean).join(" ").trim();
    if (paisePart > 0) {
      result += " and " + makeGroup(paisePart) + " Paise";
    }
    result += " Only";
    return result;
  };

  // Calculations
  const grandTotal = items.reduce((sum, item) => sum + (item.rate * item.qty), 0);
  
  // Format price into Rs and Paise parts
  const formatRsP = (amount: number) => {
    const rs = Math.floor(amount);
    const p = Math.round((amount - rs) * 100).toString().padStart(2, '0');
    return { rs, p: p === '00' ? '-' : p };
  };

  // Dynamic direct PDF Downloader from local package (using html2canvas-pro to support Tailwind v4 oklab/oklch colors)
  const handleDownloadPDF = async () => {
    if (typeof window !== 'undefined') {
      try {
        // @ts-ignore
        const html2canvasPro = (await import('html2canvas-pro')).default;
        const { jsPDF } = await import('jspdf');
        
        const element = document.getElementById('bill-slip');
        if (!element) return;

        // Custom PDF filename format: A&A medical_customerName_date.pdf (e.g. A&A medical_Aditya Sharma_16-07-2026.pdf)
        const cleanCustomer = (customerName || 'customer').trim().replace(/[^a-zA-Z0-9\s-_]/g, '');
        const cleanDate = billDate.replace(/\//g, '-').replace(/\./g, '-');
        const filename = `A&A medical_${cleanCustomer}_${cleanDate}.pdf`;

        // Capture canvas at high resolution, bypassing oklab/oklch parser errors
        const canvas = await html2canvasPro(element, {
          scale: 2.2,
          useCORS: true,
          logging: false
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.98);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const margin = 10; // 10mm margins on all 4 sides of the A4 page
        const imgWidth = 210 - (margin * 2); // 190mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        // Add image to PDF with standard margins
        pdf.addImage(imgData, 'JPEG', margin, margin, imgWidth, imgHeight);
        pdf.save(filename);
      } catch (err) {
        console.error('PDF download error:', err);
        alert('Failed to launch direct PDF download.');
      }
    }
  };

  // Medical Blue Cross Circular Logo
  const MedicalLogo = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-16 sm:h-16 text-blue-900 fill-current shrink-0">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M43 25 H57 V43 H75 V57 H57 V75 H43 V57 H25 V43 H43 Z" fill="currentColor" />
    </svg>
  );

  // Login View
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 p-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 mb-4 animate-bounce">
              <Activity className="h-7 w-7" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">{siteConfig.name}</h1>
            <p className="text-xs text-slate-400 mt-1 font-semibold">Bill Registry & Tax Invoice Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {authError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl p-3.5 text-xs font-semibold flex items-center gap-2">
                <ShieldAlert className="h-4.5 w-4.5 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <label className="block text-3xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">Username</label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-semibold"
                  placeholder="Enter admin username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-3xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-semibold"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              Sign In to Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard / Billing Editor View
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* Global CSS overrides for clean PDF printing layouts */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }
          body {
            background-color: #ffffff !important;
            color: #0c2340 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print-container {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
            background: transparent !important;
          }
          main, div, section {
            background-color: transparent !important;
            box-shadow: none !important;
          }
        }
      `}</style>

      {/* Header Panel */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 flex items-center justify-between shadow-sm print:hidden">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-black text-secondary tracking-tight">{siteConfig.name}</h1>
            <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider">Bill Generator Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-3xs sm:text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/70 border border-red-100 rounded-lg px-2.5 sm:px-3.5 py-1.5 transition-colors cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Mobile Responsive Navigation Tabs */}
      <div className="sm:hidden bg-white border-b border-slate-200 p-2 flex gap-2 print:hidden sticky top-[68px] z-30">
        <button
          onClick={() => setActiveTab('edit')}
          className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold rounded-xl transition-all ${activeTab === 'edit' ? 'bg-primary text-white shadow-md shadow-primary/10' : 'bg-slate-100 text-slate-600'}`}
        >
          <Edit className="h-3.5 w-3.5" />
          <span>1. Edit Bill</span>
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 text-xs font-bold rounded-xl transition-all ${activeTab === 'preview' ? 'bg-primary text-white shadow-md shadow-primary/10' : 'bg-slate-100 text-slate-600'}`}
        >
          <Eye className="h-3.5 w-3.5" />
          <span>2. Bill Sheet ({items.length})</span>
        </button>
      </div>

      {/* Workspace Area */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* LEFT COLUMN: EDIT FORM */}
        <section className={`w-full lg:w-5/12 xl:w-4/12 bg-white border-r border-slate-200 flex flex-col overflow-y-auto p-4 sm:p-5 space-y-6 print:hidden ${activeTab !== 'edit' ? 'hidden sm:flex' : ''}`}>
          


          {/* SECTION 1: INVOICE CONFIGURATION */}
          <div className="border border-slate-200/80 rounded-2xl p-4 space-y-4 shadow-sm">
            <h2 className="text-xs font-black text-secondary uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <FileText className="h-4 w-4 text-primary" />
              Bill Info
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Bill Number (No.)</label>
                <input
                  type="text"
                  value={billNo}
                  onChange={(e) => setBillNo(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 font-mono font-bold text-red-600 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Date</label>
                <input
                  type="text"
                  value={billDate}
                  onChange={(e) => setBillDate(e.target.value)}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 font-semibold text-secondary focus:outline-none focus:border-primary"
                  placeholder="DD.MM.YYYY"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: CUSTOMER INFORMATION */}
          <div className="border border-slate-200/80 rounded-2xl p-4 space-y-4 shadow-sm">
            <h2 className="text-xs font-black text-secondary uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <User className="h-4 w-4 text-primary" />
              Party details (M/s)
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">M/s. (Customer Name)</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs border border-slate-200 rounded-lg p-2.5 font-bold text-secondary focus:outline-none focus:border-primary"
                  placeholder="Recipient or Business Name"
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Party's GSTIN</label>
                <input
                  type="text"
                  value={customerGst}
                  onChange={(e) => setCustomerGst(e.target.value.toUpperCase())}
                  className="w-full text-xs border border-slate-200 rounded-lg p-2.5 font-semibold text-secondary focus:outline-none focus:border-primary uppercase"
                  placeholder="Customer GST Number (Optional)"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: PRODUCT ENTRY */}
          <div className="border border-slate-200/80 rounded-2xl p-4 space-y-4 shadow-sm">
            <h2 className="text-xs font-black text-secondary uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
              <PlusCircle className="h-4 w-4 text-primary" />
              Add Product Details
            </h2>
            <form onSubmit={addItem} className="space-y-3">
              <div>
                <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Particulars (Product Name)</label>
                <input
                  type="text"
                  value={particulars}
                  onChange={(e) => setParticulars(e.target.value)}
                  className="w-full text-xs border border-slate-200 rounded-lg p-2.5 font-semibold text-secondary focus:outline-none focus:border-primary"
                  placeholder="E.g. Calpol 650mg"
                  required
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Mfrs. Name</label>
                  <input
                    type="text"
                    value={mfr}
                    onChange={(e) => setMfr(e.target.value)}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2.5 font-semibold text-secondary focus:outline-none focus:border-primary"
                    placeholder="E.g. GSK"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Batch No.</label>
                  <input
                    type="text"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2.5 font-semibold text-secondary focus:outline-none focus:border-primary uppercase"
                    placeholder="BT882"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Expiry Date</label>
                  <input
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2.5 font-semibold text-secondary focus:outline-none focus:border-primary"
                    placeholder="MM/YY"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Quantity (Qty)</label>
                  <input
                    type="number"
                    min="1"
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2.5 font-semibold text-secondary focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Rate / Price (₹)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    value={rate || ''}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full text-xs border border-slate-200 rounded-lg p-2.5 font-semibold text-secondary focus:outline-none focus:border-primary"
                    placeholder="₹ 0.00"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold text-xs tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-1"
              >
                <Plus className="h-4 w-4" />
                Add Item
              </button>
            </form>
          </div>

          {/* SECTION 4: PRODUCT LIST WORKSPACE */}
          <div className="border border-slate-200/80 rounded-2xl p-4 space-y-3 shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <h2 className="text-xs font-black text-secondary uppercase tracking-wider">
                Added Items ({items.length})
              </h2>
              {items.length > 0 && (
                <button
                  onClick={() => setItems([])}
                  className="text-3xs font-black uppercase text-red-500 hover:text-red-700 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
            {items.length === 0 ? (
              <p className="text-3xs text-slate-400 font-semibold text-center py-4">No products added yet.</p>
            ) : (
              <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="py-2.5 flex justify-between items-center text-xs">
                    <div className="max-w-[80%]">
                      <p className="font-bold text-slate-800 truncate">{item.particulars}</p>
                      <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                        Qty: <strong className="text-slate-800">{item.qty}</strong> | Rate: <strong className="text-slate-800">₹{item.rate.toFixed(2)}</strong> | Total: <strong className="text-primary">₹{(item.qty * item.rate).toFixed(2)}</strong>
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      title="Remove Item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* RIGHT COLUMN: TAX INVOICE PREVIEW */}
        <section className={`flex-1 bg-slate-100 flex flex-col items-center justify-start overflow-y-auto p-3 sm:p-8 ${activeTab !== 'preview' ? 'hidden sm:flex' : ''}`}>
          
          {/* Print PDF Action Panel */}
          <div className="w-full max-w-[210mm] bg-white border border-slate-200/80 rounded-2xl p-4 mb-4 flex justify-between items-center print:hidden shadow-sm">
            <div>
              <h3 className="text-xs font-black text-secondary uppercase tracking-wider">Invoice Rendered</h3>
              <p className="text-3xs text-slate-500 font-medium mt-0.5">Download direct PDF locally styled exactly like the physical bill book.</p>
            </div>
            <button
              onClick={handleDownloadPDF}
              disabled={items.length === 0}
              className="bg-primary hover:bg-primary-hover disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider transition-colors shadow-lg hover:shadow-primary/10 flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </button>
          </div>

          {/* INVOICE PREVIEW WRAPPER: Scaling container that fits large A4 preview on tiny mobile devices */}
          <div 
            className="w-full max-w-[210mm] overflow-hidden flex justify-center items-start print:overflow-visible print:h-auto"
            style={{ height: containerHeight }}
          >
            
            {/* PHYSICAL BILL BOOK SLIP LAYOUT: Designed in medical blue ink style matching reference image */}
            <div 
              id="bill-slip" 
              className="min-w-[760px] w-[760px] min-h-[1075px] bg-white p-8 sm:p-10 font-sans text-xs text-blue-950 leading-normal relative print-container border-4 border-blue-900/35 origin-top flex flex-col justify-between"
              style={{
                transform: scale < 1 ? `scale(${scale})` : 'none',
              }}
            >
              
              {/* Header Container */}
              <div className="flex justify-between items-start border-b border-blue-900 pb-3">
                {/* Blue Medical Cross Logo */}
                <MedicalLogo />

                {/* Center Title, Address, & GSTIN */}
                <div className="text-center flex-1 px-4">
                  <h1 className="text-lg sm:text-xl font-black text-blue-900 uppercase tracking-wide font-serif">
                    A & A <span className="text-[11px] sm:text-xs font-bold font-sans tracking-normal capitalize text-blue-950">Medicals And General Store</span>
                  </h1>
                  <p className="text-[9px] font-bold text-blue-900 tracking-tight mt-1">
                    # 2, Vidya Nagar, 3rd Cross, Bommasandra, Bangalore - 560099.
                  </p>
                  <p className="text-[10px] font-black text-blue-900 uppercase tracking-widest mt-1.5 bg-blue-50/50 inline-block px-3.5 py-0.5 border border-blue-900/30 rounded">
                    GSTIN : 29GHBPD6906A1ZO
                  </p>
                </div>

                {/* Mobiles */}
                <div className="text-right text-[8px] sm:text-[9px] font-bold text-blue-900 shrink-0 font-mono space-y-0.5">
                  <p>Mob : 7760167274</p>
                  <p className="pr-0">8951318969</p>
                </div>
              </div>

              {/* Metadata Form Fields Row (Dotted line placeholders filled with actual details) */}
              <div className="grid grid-cols-12 gap-y-3.5 py-4 border-b border-blue-900 text-[10px] font-bold text-blue-900">
                {/* No. (Red) & Date */}
                <div className="col-span-8 flex items-baseline">
                  <span>No.</span>
                  <span className="text-red-600 text-xs sm:text-sm font-black ml-2 px-1 tracking-wider">{billNo}</span>
                </div>
                <div className="col-span-4 flex items-baseline justify-end">
                  <span className="mr-1">Date:</span>
                  <span className="font-mono border-b border-dashed border-blue-900/50 px-2 flex-1 text-right text-slate-800 font-semibold">{billDate}</span>
                </div>

                {/* M/s (Recipient Name) */}
                <div className="col-span-12 flex items-baseline">
                  <span className="mr-1.5 shrink-0">M/s.</span>
                  <span className="border-b border-dashed border-blue-900/50 px-2 flex-1 text-slate-800 font-extrabold text-xs">{customerName || '...........................................................................................................'}</span>
                </div>

                {/* Party's GSTIN */}
                <div className="col-span-12 flex items-baseline">
                  <span className="mr-1.5 shrink-0">Party's GSTIN :</span>
                  <span className="border-b border-dashed border-blue-900/50 px-2 font-mono flex-1 text-slate-800 font-bold">{customerGst || '...........................................................................................................'}</span>
                </div>
              </div>

              {/* The Bill Table (Clean blue lines, matching reference layout) */}
              <div className="py-2.5">
                <table className="w-full border border-blue-950 text-[10px] font-bold text-blue-900 border-collapse table-fixed">
                  <thead>
                    <tr className="border-b border-blue-900 text-[9px] uppercase">
                      <th className="py-2 border-r border-blue-900 text-center w-[6%]">Sl. No.</th>
                      <th className="py-2 border-r border-blue-900 px-2 text-left w-[42%]">Particulars</th>
                      <th className="py-2 border-r border-blue-900 text-center w-[10%]">Mfrs. Name</th>
                      <th className="py-2 border-r border-blue-900 text-center w-[10%]">Batch No.</th>
                      <th className="py-2 border-r border-blue-900 text-center w-[10%]">Expiry Date</th>
                      <th className="py-2 border-r border-blue-900 text-right pr-2 w-[10%]">Rate</th>
                      <th className="py-2 border-r border-blue-900 text-center w-[5%]">Qty</th>
                      <th colSpan={2} className="py-2 text-center w-[12%]">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Render up to 18 rows to let the bill cover the full A4 page height */}
                    {Array.from({ length: Math.max(18, items.length) }).map((_, index) => {
                      const item = items[index];
                      const totalCost = item ? item.qty * item.rate : null;
                      const formattedCost = totalCost !== null ? formatRsP(totalCost) : null;
                      const formattedRate = item ? item.rate.toFixed(2) : '';

                      return (
                        <tr key={index} className="h-7 border-b border-blue-900/40 text-[9.5px] font-bold">
                          {/* Sl. No */}
                          <td className="w-[6%] border-r border-blue-900 text-center text-blue-900/70">{index + 1}</td>
                          
                          {/* Particulars */}
                          <td className="w-[42%] border-r border-blue-900 px-2 text-slate-800 font-extrabold truncate text-left">
                            {item ? item.particulars : ''}
                          </td>
                          
                          {/* Mfrs. Name */}
                          <td className="w-[10%] border-r border-blue-900 text-center text-slate-600 font-medium truncate">
                            {item ? item.mfr : ''}
                          </td>
                          
                          {/* Batch No */}
                          <td className="w-[10%] border-r border-blue-900 text-center font-mono text-slate-700 truncate">
                            {item ? item.batch : ''}
                          </td>
                          
                          {/* Expiry Date */}
                          <td className="w-[10%] border-r border-blue-900 text-center font-mono text-slate-600">
                            {item ? item.expiry : ''}
                          </td>
                          
                          {/* Rate */}
                          <td className="w-[10%] border-r border-blue-900 text-right pr-2 font-mono text-slate-800">
                            {formattedRate}
                          </td>
                          
                          {/* Qty */}
                          <td className="w-[5%] border-r border-blue-900 text-center font-mono text-slate-800">
                            {item ? item.qty : ''}
                          </td>
                          
                          {/* Amount (Split into Rs. and P. columns) */}
                          <td className="w-[8%] border-r border-dashed border-blue-900/30 text-right pr-1 font-mono font-black text-slate-900">
                            {formattedCost ? formattedCost.rs : ''}
                          </td>
                          <td className="w-[4%] text-center font-mono text-[8px] text-slate-700">
                            {formattedCost ? formattedCost.p : ''}
                          </td>
                        </tr>
                      );
                    })}

                    {/* D.L. No. and Total Row (Enforces exact column widths for seamless alignment) */}
                    <tr className="border-t border-blue-950 font-bold bg-blue-50/10 h-7 text-[9.5px]">
                      <td colSpan={6} className="border-r border-blue-900 py-1.5 px-2 text-left text-blue-900/80 font-semibold">
                        D.L. No. KA-B62-288718
                      </td>
                      <td className="border-r border-blue-900 text-center py-1.5 text-[9px] uppercase font-black text-blue-900">
                        Total
                      </td>
                      <td className="border-r border-dashed border-blue-900/30 text-right pr-1 font-mono font-black text-slate-900">
                        {formatRsP(grandTotal).rs}
                      </td>
                      <td className="text-center font-mono text-[8px] text-slate-700">
                        {formatRsP(grandTotal).p}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bottom Rupees in Words & Signatory box - structured with the same dimensions */}
              <div className="grid grid-cols-12 border-l border-r border-b border-blue-950 text-[10px] font-bold text-blue-900">
                {/* D.L. No & Rupees in Words (Left) */}
                <div className="col-span-8 p-3 border-r border-blue-950 flex items-baseline">
                  <span className="mr-1.5 shrink-0 text-[8px] uppercase tracking-wider text-blue-900/70">Rupees in Words</span>
                  <span className="border-b border-dashed border-blue-900/50 pb-0.5 flex-1 text-slate-800 font-extrabold italic text-[9.5px] text-left">
                    {grandTotal > 0 ? `${convertNumberToWords(grandTotal)}` : '.........................................................................................'}
                  </span>
                </div>

                {/* For A&A Signatory (Right) */}
                <div className="col-span-4 p-2.5 flex flex-col items-center justify-between h-16 text-center bg-slate-50/10">
                  <span className="text-[7.5px] font-black uppercase text-blue-900/80">For A & A Medicals And General Store</span>
                  <div className="w-28 border-t border-dashed border-blue-900/50 pt-0.5 mt-4 text-[7px] font-bold text-blue-900/50 uppercase tracking-wider">
                    Auth. Signatory
                  </div>
                </div>
              </div>

              {/* Bottom Copyright disclaimer */}
              <div className="text-center text-[7px] text-blue-900/60 font-bold uppercase tracking-widest mt-6">
                Thank you. Genuine wholesale and retail medicines.
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
