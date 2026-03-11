/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  LayoutDashboard, 
  PlusCircle, 
  CheckCircle2, 
  Calendar, 
  GraduationCap, 
  Search, 
  Bell, 
  ChevronDown, 
  Mail, 
  Lock, 
  ArrowRight, 
  Globe, 
  HelpCircle,
  Menu,
  X,
  Cloud,
  Zap,
  Clock,
  AlertCircle,
  Rocket,
  Sparkles,
  Smile,
  MoreHorizontal,
  Languages,
  Microscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type Screen = 'landing' | 'auth' | 'dashboard' | 'addTask';

interface Task {
  id: string;
  title: string;
  subject: string;
  description: string;
  deadline: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
}

interface SubjectProgress {
  name: string;
  progress: number;
  icon: React.ReactNode;
  phase: string;
  units: string;
}

// --- Components ---

const Navbar = ({ currentScreen, setScreen }: { currentScreen: Screen, setScreen: (s: Screen) => void }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setScreen('landing')}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <BookOpen size={24} />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">MyHomework</span>
        </div>
        
        <div className="flex items-center gap-4 lg:gap-8">
          {currentScreen === 'landing' ? (
            <>
              <div className="hidden md:flex items-center gap-8">
                <button className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-200">คุณสมบัติ</button>
                <button className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-200">ราคา</button>
                <button className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-200">เกี่ยวกับเรา</button>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setScreen('auth')}
                  className="hidden sm:block text-sm font-extrabold text-slate-800 dark:text-slate-100 hover:text-blue-600 px-4 py-2 transition-colors"
                >
                  เข้าสู่ระบบ
                </button>
                <button 
                  onClick={() => setScreen('auth')}
                  className="rounded-full bg-amber-500 px-6 py-2.5 text-sm font-black text-slate-900 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:scale-105 transition-all"
                >
                  เริ่มต้นใช้งาน
                </button>
              </div>
            </>
          ) : currentScreen === 'dashboard' || currentScreen === 'addTask' ? (
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-1.5 border border-slate-200 dark:border-slate-700">
                <Search size={18} className="text-slate-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="ค้นหางาน..." 
                  className="bg-transparent border-none focus:ring-0 text-sm font-medium w-48"
                />
              </div>
              <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <Bell size={20} />
              </button>
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
                <div className="h-9 w-9 rounded-full bg-blue-100 border-2 border-blue-500 overflow-hidden">
                  <img src="https://picsum.photos/seed/student/100/100" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <ChevronDown size={16} className="text-slate-400" />
              </div>
            </div>
          ) : (
            <button 
              onClick={() => setScreen('landing')}
              className="flex items-center justify-center rounded-full h-10 px-6 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold border border-slate-300 dark:border-slate-600 hover:bg-slate-50 transition-all shadow-sm"
            >
              ความช่วยเหลือ
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

const LandingScreen = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-600">
                <Cloud size={14} />
                <span>ขับเคลื่อนโดย Google Cloud</span>
              </div>
              <h1 className="text-5xl font-black leading-[1.15] tracking-tight text-slate-900 dark:text-white lg:text-7xl">
                จัดการการเรียนของคุณ <span className="text-blue-600">อย่างสบายใจ</span>
              </h1>
              <p className="max-w-xl text-lg font-semibold leading-relaxed text-slate-600 dark:text-slate-300">
                สัมผัสประสิทธิภาพของระบบคลาวด์ เพื่อจัดระเบียบ ติดตาม และส่งงานของคุณได้อย่างราบรื่น ก้าวหน้าในการเรียนด้วยการซิงค์ข้อมูลแบบเรียลไทม์
              </p>
              <div className="italic text-blue-600 font-bold border-l-4 border-amber-500 pl-6 py-2 my-2 text-xl">
                "ก้าวเล็กๆ ในทุกวัน นำไปสู่ความสำเร็จที่ยิ่งใหญ่"
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={onStart}
                  className="rounded-full bg-amber-500 px-10 py-5 text-lg font-black text-slate-900 shadow-xl shadow-amber-500/25 hover:scale-105 transition-transform text-center"
                >
                  เริ่มต้นใช้งานฟรี
                </button>
                <button className="rounded-full border-2 border-slate-300 dark:border-slate-700 px-10 py-5 text-lg font-black text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                  ดูตัวอย่างการใช้งาน
                </button>
              </div>
              <div className="flex items-center gap-5 text-sm font-bold text-slate-500 dark:text-slate-400">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="tracking-tight">มีนักศึกษาเข้าร่วมแล้วกว่า 10,000 คนในเทอมนี้</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-10 rounded-full bg-blue-600/10 blur-3xl opacity-60"></div>
              <div className="absolute -inset-10 bottom-0 rounded-full bg-amber-500/10 blur-3xl opacity-40"></div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xl dark:bg-slate-800 border-[12px] border-white dark:border-slate-700">
                <img 
                  src="https://picsum.photos/seed/study/800/600" 
                  alt="Study" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50/50 py-32 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-20 text-center mx-auto max-w-3xl">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-6">ออกแบบมาเพื่อความสำเร็จของคุณ</h2>
            <p className="text-xl font-bold leading-relaxed text-slate-600 dark:text-slate-300">แพลตฟอร์มของเราให้คำแนะนำที่นุ่มนวลเพื่อให้คุณจัดระเบียบและบรรลุเป้าหมายทางวิชาการโดยปราศจากความเครียด</p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { icon: <Cloud className="text-blue-600" />, title: "การซิงค์ผ่านคลาวด์", desc: "เข้าถึงงานของคุณได้จากทุกอุปกรณ์ด้วยการซิงค์แบบเรียลไทม์ ความก้าวหน้าของคุณจะปลอดภัยเสมอ" },
              { icon: <Bell className="text-amber-500" />, title: "การแจ้งเตือนอัจฉริยะ", desc: "ไม่พลาดกำหนดส่งด้วยการแจ้งเตือนอัตโนมัติและการรวมปฏิทินอัจฉริยะที่ช่วยวางแผนสัปดาห์ของคุณอย่างนุ่มนวล" },
              { icon: <Zap className="text-blue-600" />, title: "การติดตามเกรด", desc: "ตรวจสอบความก้าวหน้าทางวิชาการด้วยข้อมูลเชิงลึกที่ชัดเจนและแผนภูมิแสดงผลการเรียนที่ออกแบบมาให้เข้าใจง่าย" }
            ].map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group rounded-2xl bg-white p-10 transition-all shadow-sm hover:shadow-2xl dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900">
                  {f.icon}
                </div>
                <h3 className="mb-4 text-2xl font-black text-slate-900 dark:text-white">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-base font-semibold leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const AuthScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex-1 flex items-center justify-center w-full px-4 py-12 bg-gradient-to-br from-blue-50 via-white to-amber-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[520px] bg-white dark:bg-slate-900 rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-slate-200 dark:border-slate-800 overflow-hidden"
      >
        <div className="p-10 pb-4 text-center relative">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {isLogin ? 'ยินดีต้อนรับกลับมา' : 'สร้างบัญชีใหม่'}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-[340px] mx-auto">
            {isLogin ? 'ผ่อนคลายสักนิด เราจะช่วยคุณจัดการการเรียนในวันนี้เอง' : 'เริ่มต้นการเดินทางสู่ความสำเร็จทางการเรียนกับเราวันนี้'}
          </p>
          
          <button className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-all shadow-sm">
            <Globe size={16} />
            <span className="text-[11px] font-bold tracking-wider uppercase">TH</span>
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="px-10 py-4">
          <div className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex grow items-center justify-center rounded-lg px-2 h-full text-sm font-bold transition-all ${isLogin ? 'bg-white dark:bg-slate-700 shadow-md text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}
            >
              เข้าสู่ระบบ
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex grow items-center justify-center rounded-lg px-2 h-full text-sm font-bold transition-all ${!isLogin ? 'bg-white dark:bg-slate-700 shadow-md text-blue-600' : 'text-slate-600 dark:text-slate-400'}`}
            >
              ลงทะเบียน
            </button>
          </div>
        </div>

        <div className="px-10 py-2">
          <button className="flex w-full items-center justify-center rounded-xl h-12 px-5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-bold">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            <span>ดำเนินการต่อด้วย Google</span>
          </button>
        </div>

        <div className="px-10 py-6 flex items-center gap-4">
          <div className="h-px grow bg-slate-200 dark:bg-slate-700"></div>
          <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">หรือใช้อีเมล</span>
          <div className="h-px grow bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <form className="px-10 space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div>
            <label className="block text-xs font-extrabold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">ที่อยู่อีเมล</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full h-12 pl-11 pr-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 text-sm font-medium transition-all outline-none"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="block text-xs font-extrabold text-slate-600 dark:text-slate-400 uppercase tracking-wider">รหัสผ่าน</label>
              <button type="button" className="text-xs font-bold text-blue-600 hover:underline transition-all">ลืมรหัสผ่าน?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full h-12 pl-11 pr-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 text-sm font-medium transition-all outline-none"
              />
            </div>
          </div>
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full h-14 bg-blue-600 text-white rounded-xl font-extrabold text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <span>{isLogin ? 'ลงชื่อเข้าใช้' : 'สมัครสมาชิก'}</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </form>

        <div className="p-10 pt-8 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">
            การดำเนินการต่อ แสดงว่าคุณยอมรับ 
            <button className="text-slate-800 dark:text-slate-200 font-bold underline underline-offset-2 decoration-amber-500/40 hover:decoration-amber-500 transition-all mx-1">ข้อกำหนดการให้บริการ</button> และ 
            <button className="text-slate-800 dark:text-slate-200 font-bold underline underline-offset-2 decoration-amber-500/40 hover:decoration-amber-500 transition-all mx-1">นโยบายความเป็นส่วนตัว</button> ของเรา
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const DashboardScreen = ({ onAddTask }: { onAddTask: () => void }) => {
  const [tasks] = useState<Task[]>([
    { id: '1', title: 'ติวสอบย่อยแคลคูลัส', subject: 'คณิตศาสตร์', description: 'ทบทวนโจทย์ฝึกหัดจากบทที่ 4.2 ถึง 4.5 คุณเข้าใจเนื้อหานี้ดีอยู่แล้ว!', deadline: '17:00', priority: 'high', status: 'pending' },
    { id: '2', title: 'เรียงความประวัติศาสตร์', subject: 'ประวัติศาสตร์', description: 'สรุปบรรณานุกรมและตรวจทานคำผิด อีกแค่นิดเดียวจะเสร็จแล้ว!', deadline: 'พรุ่งนี้', priority: 'medium', status: 'in-progress' },
    { id: '3', title: 'รายงานแล็บฟิสิกส์', subject: 'ฟิสิกส์', description: 'วาดกราฟผลการทดลอง ขั้นตอนสุดท้ายสำหรับส่งคืนนี้', deadline: 'อีก 4 ชม.', priority: 'high', status: 'pending' }
  ]);

  const [subjects] = useState<SubjectProgress[]>([
    { name: 'ชีววิทยา', progress: 85, icon: <Microscope size={24} />, phase: 'Exam Prep Phase', units: '8/10' },
    { name: 'ภาษาสเปน', progress: 30, icon: <Languages size={24} />, phase: 'Vocabulary Flow', units: '3/12' }
  ]);

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
      {/* Sidebar */}
      <aside className="w-full border-r border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200 lg:w-72">
        <nav className="flex flex-col gap-1 p-6">
          <button className="flex items-center gap-3 rounded-xl bg-amber-500/15 px-4 py-3.5 text-amber-500 font-bold transition-all ring-1 ring-amber-500/20">
            <LayoutDashboard size={20} />
            <span className="text-base">แดชบอร์ด</span>
          </button>
          <button onClick={onAddTask} className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 rounded-xl transition-colors group">
            <PlusCircle size={20} className="group-hover:text-amber-500 transition-colors" />
            <span className="font-semibold text-base">เพิ่มงานใหม่</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 rounded-xl transition-colors group">
            <CheckCircle2 size={20} className="group-hover:text-amber-500 transition-colors" />
            <span className="font-semibold text-base">งานทั้งหมด</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 rounded-xl transition-colors group">
            <Calendar size={20} className="group-hover:text-amber-500 transition-colors" />
            <span className="font-semibold text-base">ปฏิทิน</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 rounded-xl transition-colors group">
            <GraduationCap size={20} className="group-hover:text-amber-500 transition-colors" />
            <span className="font-semibold text-base">รายวิชา</span>
          </button>
        </nav>
        
        <div className="mt-4 px-6">
          <div className="h-px bg-white/10 mb-8 mx-4"></div>
          <h3 className="px-4 mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">ความก้าวหน้าทางการเรียน</h3>
          <div className="space-y-7 px-4">
            {[
              { label: 'คณิตศาสตร์', val: 75 },
              { label: 'ประวัติศาสตร์', val: 40 },
              { label: 'ฟิสิกส์', val: 90 }
            ].map((s, i) => (
              <div key={i} className="space-y-2.5">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-200">{s.label}</span>
                  <span className="text-amber-500">{s.val}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full bg-amber-500 rounded-full shadow-[0_0_8px_rgba(236,182,19,0.3)]" style={{ width: `${s.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-4">
            <div className="rounded-2xl bg-white/5 p-6 text-center border border-white/5 backdrop-blur-sm">
              <p className="text-xs font-medium text-slate-300 mb-4 italic leading-relaxed">"ความสำเร็จคือผลรวมของความพยายามเล็กๆ ที่ทำซ้ำทุกวัน"</p>
              <div className="flex justify-center gap-1.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className={`size-1.5 rounded-full ${i === 3 ? 'bg-amber-500' : 'bg-amber-500/30'}`}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-slate-50 dark:bg-slate-950">
        {/* Wellness Moment Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 overflow-hidden rounded-3xl bg-slate-900 p-10 shadow-xl shadow-slate-900/20 relative"
        >
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.03] pointer-events-none select-none">
            <Smile size={280} className="absolute -right-16 -top-16" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">หายใจเข้าลึกๆ...</h2>
              <p className="text-lg font-normal text-slate-200 max-w-lg leading-relaxed">
                คุณทำได้ดีมาก อเล็กซ์ มีอีก <span className="text-amber-500 font-bold">4 งาน</span> ที่ต้องดูแลในวันนี้ แต่มาค่อยๆ จัดการไปทีละอย่างนะ
              </p>
            </div>
            <div className="flex items-center gap-5">
              <div className="rounded-2xl bg-white/5 backdrop-blur-md px-6 py-4 text-center border border-white/10 min-w-[120px]">
                <span className="block text-3xl font-bold text-amber-500 leading-none mb-1">5</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">STREAK DAY</span>
              </div>
              <button className="rounded-2xl bg-amber-500 px-8 py-5 font-bold text-slate-900 shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3">
                <Sparkles size={24} />
                <span className="text-base">ช่วงเวลาผ่อนคลาย</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 px-2">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">จุดโฟกัสของคุณวันนี้</h1>
            <p className="mt-2 text-base font-medium text-slate-600 dark:text-slate-300">ก้าวเล็กๆ ที่จัดการได้เพื่อเป้าหมายที่ยิ่งใหญ่</p>
          </div>
          <button 
            onClick={onAddTask}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-900 px-7 py-3.5 font-bold hover:opacity-95 transition-all shadow-md active:scale-95"
          >
            <PlusCircle size={20} />
            <span className="text-base">เพิ่มงานใหม่</span>
          </button>
        </div>

        {/* Tasks Grid */}
        <section>
          <div className="mb-6 flex items-center justify-between px-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Zap size={24} className="text-amber-500" />
              รายการลำดับความสำคัญ
            </h2>
            <button className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-amber-500 transition-colors uppercase tracking-widest">View All</button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tasks.map((task, idx) => (
              <motion.div 
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-7 shadow-sm hover:shadow-xl hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className={`inline-flex rounded-lg px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    task.priority === 'high' ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' : 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                  }`}>
                    {task.priority === 'high' ? 'สำคัญมาก' : 'กำลังดำเนินการ'}
                  </span>
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors mb-2">{task.title}</h3>
                  <p className="text-[15px] font-medium text-slate-600 dark:text-slate-300 leading-relaxed">{task.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    <Clock size={18} />
                    <span>{task.deadline}</span>
                  </div>
                  <button className="size-8 rounded-full border-2 border-slate-200 group-hover:border-amber-500 transition-colors flex items-center justify-center">
                    <div className="size-3 bg-amber-500 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Subject Progress */}
        <section className="mt-14">
          <h2 className="mb-6 text-lg font-bold text-slate-900 dark:text-white px-2">จังหวะการเรียนรายวิชา</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((sub, i) => (
              <div key={i} className="rounded-3xl bg-white dark:bg-slate-900/60 p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="size-14 rounded-2xl bg-slate-900 text-amber-500 flex items-center justify-center shadow-lg shadow-slate-900/10">
                      {sub.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{sub.name}</h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">{sub.phase}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 italic">2 ชม. ที่แล้ว</span>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="flex-1 space-y-3">
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500" style={{ width: `${sub.progress}%` }}></div>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">สำเร็จแล้ว {sub.progress}% ของเนื้อหา</p>
                  </div>
                  <div className="size-20 flex flex-col items-center justify-center rounded-full border-[3px] border-amber-500/20 bg-slate-50 dark:bg-slate-800 shadow-inner">
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{sub.units}</span>
                    <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Units</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const AddTaskScreen = ({ onSave, onCancel }: { onSave: () => void, onCancel: () => void }) => {
  const [showToast, setShowToast] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onSave();
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col items-center py-12 px-6 lg:px-40 bg-slate-50 dark:bg-slate-950">
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed top-6 right-6 z-50 flex items-center gap-4 bg-white dark:bg-slate-800 border-2 border-amber-500/40 p-5 rounded-2xl shadow-2xl shadow-amber-500/20"
          >
            <div className="bg-amber-500 rounded-full p-2 flex items-center justify-center text-slate-900">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">เย้! บันทึกงานสำเร็จแล้ว!</p>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400">คุณเข้าใกล้ความสำเร็จอีกก้าวแล้ว! 🚀</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-[640px] flex flex-col">
        <div className="flex flex-col gap-4 mb-10 text-center">
          <div className="inline-flex items-center justify-center self-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
            เป้าหมายใหม่รออยู่
          </div>
          <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight">มาวางแผนความสำเร็จครั้งต่อไปกัน! ✨</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">คุณกำลังทำได้ดีมาก! ใส่รายละเอียดอีกนิดก็พร้อมแล้ว</p>
        </div>

        <div className="mb-10 px-2">
          <div className="flex justify-between items-end mb-3">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">เกือบเสร็จแล้ว!</span>
            <span className="text-[11px] font-medium text-slate-500 italic">"ก้าวเล็กๆ นำไปสู่ฝันที่ยิ่งใหญ่"</span>
          </div>
          <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-[2px]">
            <div className="h-full bg-gradient-to-r from-blue-600 to-amber-500 w-2/3 rounded-full"></div>
          </div>
        </div>

        <form className="space-y-8 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none" onSubmit={handleSave}>
          <div className="flex flex-col gap-3">
            <label className="text-slate-900 dark:text-white text-lg font-extrabold leading-normal flex items-center gap-3">
              <span className="bg-blue-600/10 text-blue-600 p-2 rounded-lg flex items-center justify-center">
                <GraduationCap size={18} />
              </span>
              เรากำลังจะทำวิชาอะไรกันดี?
            </label>
            <input 
              type="text" 
              placeholder="เช่น คณิตศาสตร์"
              className="w-full rounded-xl text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-600/20 border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-14 px-5 text-base font-bold placeholder:text-slate-400 transition-all outline-none focus:border-blue-600"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-slate-900 dark:text-white text-lg font-extrabold leading-normal flex items-center gap-3">
              <span className="bg-blue-600/10 text-blue-600 p-2 rounded-lg flex items-center justify-center">
                <BookOpen size={18} />
              </span>
              แล้วหัวข้อเฉพาะคืออะไรเหรอ?
            </label>
            <input 
              type="text" 
              placeholder="เช่น การหาอนุพันธ์แคลคูลัส"
              className="w-full rounded-xl text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-600/20 border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-14 px-5 text-base font-bold placeholder:text-slate-400 transition-all outline-none focus:border-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-slate-900 dark:text-white text-lg font-extrabold leading-normal flex items-center gap-3">
                <span className="bg-blue-600/10 text-blue-600 p-2 rounded-lg flex items-center justify-center">
                  <Calendar size={18} />
                </span>
                กำหนดส่งเมื่อไหร่?
              </label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full rounded-xl text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-600/20 border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-14 px-5 text-base font-bold transition-all outline-none focus:border-blue-600"
                />
              </div>
              <p className="text-slate-500 text-xs mt-1 flex items-center gap-1.5 italic font-medium">
                <AlertCircle size={14} className="text-amber-500" />
                ลองทำให้เสร็จก่อนเวลาอย่างน้อย 24 ชม. นะ!
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-slate-900 dark:text-white text-lg font-extrabold leading-normal flex items-center gap-3">
                <span className="bg-blue-600/10 text-blue-600 p-2 rounded-lg flex items-center justify-center">
                  <Zap size={18} />
                </span>
                งานนี้ด่วนแค่ไหน?
              </label>
              <select className="w-full rounded-xl text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-600/20 border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 h-14 px-5 text-base font-bold transition-all outline-none focus:border-blue-600 appearance-none">
                <option value="low">สบายๆ (ต่ำ)</option>
                <option value="medium" selected>สำคัญ (กลาง)</option>
                <option value="high">ด่วนที่สุด (สูง)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button 
              type="submit"
              className="flex-[2] flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white text-lg font-extrabold h-16 rounded-xl transition-all shadow-lg shadow-blue-700/30 active:scale-[0.98]"
            >
              <span>บันทึกงานนี้</span>
              <Rocket size={24} />
            </button>
            <button 
              type="button"
              onClick={onCancel}
              className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-lg font-extrabold h-16 rounded-xl transition-all active:scale-[0.98] border border-slate-200 dark:border-slate-700"
            >
              ไว้ทีหลัง
            </button>
          </div>
        </form>

        <div className="mt-12 grid grid-cols-3 gap-6">
          {[
            { label: 'ต้องทำ', val: 12, color: 'text-blue-600' },
            { label: 'เป้าหมายสัปดาห์', val: 4, color: 'text-slate-900 dark:text-white', highlight: true },
            { label: 'สำเร็จแล้ว', val: 89, color: 'text-slate-900 dark:text-white' }
          ].map((stat, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${stat.highlight ? 'bg-amber-500/5 border-amber-500/30 ring-4 ring-amber-500/5' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'} shadow-sm text-center`}>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${stat.highlight ? 'text-amber-500' : 'text-slate-500'}`}>{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.val}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-10 text-slate-500 text-sm italic font-medium leading-relaxed max-w-sm self-center">
          "เชื่อว่าคุณทำได้ แล้วคุณก็สำเร็จไปครึ่งทางแล้ว" <br/>
          <span className="not-italic font-bold text-slate-400">— ธีโอดอร์ รูสเวลต์</span>
        </p>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentScreen={screen} setScreen={setScreen} />
      
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col"
          >
            {screen === 'landing' && <LandingScreen onStart={() => setScreen('auth')} />}
            {screen === 'auth' && <AuthScreen onLogin={() => setScreen('dashboard')} />}
            {screen === 'dashboard' && <DashboardScreen onAddTask={() => setScreen('addTask')} />}
            {screen === 'addTask' && <AddTaskScreen onSave={() => setScreen('dashboard')} onCancel={() => setScreen('dashboard')} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                <BookOpen size={20} />
              </div>
              <span className="text-lg font-black text-slate-900 dark:text-white">MyHomework</span>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              <button className="hover:text-blue-600 transition-colors">นโยบายความเป็นส่วนตัว</button>
              <button className="hover:text-blue-600 transition-colors">ข้อกำหนดการให้บริการ</button>
              <button className="hover:text-blue-600 transition-colors">ติดต่อฝ่ายสนับสนุน</button>
              <button className="hover:text-blue-600 transition-colors">ศูนย์ช่วยเหลือ</button>
            </div>
            <p className="text-sm font-bold text-slate-400">© 2024 MyHomework Inc. สงวนลิขสิทธิ์ทั้งหมด</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
