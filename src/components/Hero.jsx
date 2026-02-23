import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#050B14] overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-wide mb-8">
                        프리미엄 하이엔드 웹사이트 제작
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
                        템플릿 공장에 똑같은 돈 내고,<br className="hidden md:block" />
                        매월 홈페이지 월세 내시겠습니까?
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                        공장형 찍어내기가 아닙니다. 구글 최신 AI 도구를 활용해,<br className="hidden sm:block" />
                        평생 유지비 0원으로 진짜 내 소유의 자산을 지어드립니다.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
                        <a href="#contact" className="w-full sm:w-auto px-8 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/25">
                            월세 없는 내 홈페이지 만들기
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Core USPs Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-[4xl] lg:max-w-5xl mx-auto bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 p-3 md:p-5 text-left shadow-2xl"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                            <div className="p-3 md:p-4 flex flex-col items-center md:items-start text-center md:text-left">
                                <span className="text-indigo-400 font-bold text-sm mb-1">유지 비용</span>
                                <span className="text-white font-bold md:font-semibold text-lg md:text-base">평생 0원<br /><span className="text-xs text-gray-400 font-normal mt-1 block">(무료 클라우드 서버 활용)</span></span>
                            </div>
                            <div className="p-3 md:p-4 flex flex-col items-center md:items-start text-center md:text-left">
                                <span className="text-indigo-400 font-bold text-sm mb-1">소유권</span>
                                <span className="text-white font-bold md:font-semibold text-lg md:text-base">소스코드 원본<br /><span className="text-xs text-gray-400 font-normal mt-1 block">100% 영구 소유</span></span>
                            </div>
                            <div className="p-3 md:p-4 flex flex-col items-center md:items-start text-center md:text-left">
                                <span className="text-indigo-400 font-bold text-sm mb-1">제작 방식</span>
                                <span className="text-white font-bold md:font-semibold text-lg md:text-base">최신 AI 도구 활용<br /><span className="text-xs text-gray-400 font-normal mt-1 block">맞춤형 구조 설계</span></span>
                            </div>
                            <div className="p-3 md:p-4 flex flex-col items-center md:items-start text-center md:text-left">
                                <span className="text-indigo-400 font-bold text-sm mb-1">확장성</span>
                                <span className="text-white font-bold md:font-semibold text-lg md:text-base">무한 확장<br /><span className="text-xs text-gray-400 font-normal mt-1 block">(추후 예약, DB 연동 등)</span></span>
                            </div>
                            <div className="p-3 md:p-4 flex flex-col items-center md:items-start text-center md:text-left col-span-2 md:col-span-1">
                                <span className="text-indigo-400 font-bold text-sm mb-1">웹 속도</span>
                                <span className="text-white font-bold md:font-semibold text-lg md:text-base">상위 1% 속도<br /><span className="text-xs text-gray-400 font-normal mt-1 block">(검색 엔진 최적화)</span></span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Fade into next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>
    );
};

export default Hero;
