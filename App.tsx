
import React, { useState } from 'react';
import { INITIAL_PLAN } from './constants';
import AttractionCard from './components/AttractionCard';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'food' | 'stay'>('itinerary');
  const [selectedDay, setSelectedDay] = useState(0);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '宏村雅游指南',
          text: '我正在宏村旅行，这份行程计划太棒了！',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed');
      }
    } else {
      alert('您的浏览器暂不支持原生分享，请手动复制链接。');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 flex flex-col">
      {/* Hero Section - Reduced height for mobile screens */}
      <header className="relative h-[35vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://picsum.photos/seed/hongcun/1600/900" 
          alt="Hongcun" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 font-serif tracking-tight">宏村雅游</h1>
          <p className="text-sm md:text-xl text-white/80 font-light italic">“画中的乡村，梦里的徽州”</p>
        </div>
        {/* Share Button for Mobile */}
        <button 
          onClick={handleShare}
          className="absolute top-6 right-6 z-30 p-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100-2.684m0 2.684l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </header>

      {/* Navigation - Bottom Sticky for Mobile, Top for Desktop */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-xl z-40 border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-around">
          {(['itinerary', 'food', 'stay'] as const).map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-xs md:text-sm font-semibold transition-all relative ${
                activeTab === tab ? 'text-slate-900' : 'text-slate-400'
              }`}
            >
              {tab === 'itinerary' ? '游览路线' : tab === 'food' ? '地道美食' : '枕水人家'}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-slate-900 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 pb-24">
        {activeTab === 'itinerary' && (
          <div className="space-y-10 animate-in fade-in duration-500">
            {/* Day Selector - Scrollable on small screens */}
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar">
              {INITIAL_PLAN.days.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDay(idx)}
                  className={`flex-shrink-0 px-6 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                    selectedDay === idx 
                      ? 'bg-slate-900 text-white shadow-lg' 
                      : 'bg-white text-slate-500 border border-slate-200'
                  }`}
                >
                  第 {idx + 1} 天：{idx === 0 ? '核心区' : '周边游'}
                </button>
              ))}
            </div>

            <h2 className="text-2xl font-serif text-slate-800 border-l-4 border-slate-900 pl-4 py-1">
              {INITIAL_PLAN.days[selectedDay].title}
            </h2>

            {/* Time Blocks */}
            {[
              { label: '早', key: 'morning', title: '清晨之韵' },
              { label: '午', key: 'afternoon', title: '午后探幽' },
              { label: '晚', key: 'evening', title: '月夜静谧' }
            ].map((block) => {
              const items = (INITIAL_PLAN.days[selectedDay] as any)[block.key];
              if (!items || items.length === 0) return null;
              return (
                <section key={block.key}>
                  <h3 className="text-lg font-bold mb-5 flex items-center gap-3 font-serif">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-inner">
                      {block.label}
                    </span>
                    {block.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((attr: any) => (
                      <AttractionCard key={attr.id} attraction={attr} />
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Mobile Tips Card */}
            <div className="p-6 bg-slate-900 rounded-3xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-xl">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold">游玩小锦囊</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                宏村是一个适合漫步的地方。门票是3天有效的，请务必随身携带身份证并录入指纹。
              </p>
              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="bg-white/10 p-3 rounded-2xl border border-white/5 text-center">
                  <p className="text-white/40 mb-1">最佳拍照</p>
                  <p className="font-medium text-white">月沼倒影</p>
                </div>
                <div className="bg-white/10 p-3 rounded-2xl border border-white/5 text-center">
                  <p className="text-white/40 mb-1">美食推荐</p>
                  <p className="font-medium text-white">宏村烧饼</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'food' && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
             {INITIAL_PLAN.foods.map((food, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-5 items-center active:bg-slate-50 transition-colors">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={`https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop`} alt={food.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-serif">{food.name}</h3>
                  <p className="text-slate-400 text-xs mb-2 line-clamp-1">{food.description}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md border border-amber-100">
                      推荐: {food.recommendation}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'stay' && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            {INITIAL_PLAN.accommodations.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl h-64 shadow-lg">
                <img src={`https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop`} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1">{item.type}</p>
                  <h4 className="text-white text-xl font-bold mb-3 font-serif">{item.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((f, j) => (
                      <span key={j} className="text-[10px] text-white/80 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Mobile safe area spacing */}
      <div className="h-12 safe-bottom"></div>

      {/* AI Assistant - Positioned for mobile thumbs */}
      <ChatWidget />
    </div>
  );
};

export default App;
