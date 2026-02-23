import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-950">
            {/* Background Image Loading from Pexels (Professional Business/Tech setting) */}
            <div
                className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2400')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Heavy Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/30 to-transparent" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl w-full"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold mb-8 shadow-lg shadow-blue-500/10">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                        </span>
                        매월 나가는 '월세' 홈페이지는 이제 그만.
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-8 tracking-tight break-keep">
                        단순한 웹사이트가 아닌,<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                            평생 귀하의 디지털 자산
                        </span>
                        을 짓습니다.
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed break-keep">
                        구글 최신 AI 개발 도구를 활용하여, 첫 제작비 이후엔 숨겨진 유지비가 1원도 없는 압도적으로 빠른 맞춤형 홈페이지를 완성합니다.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95"
                        >
                            1:1 맞춤 제작 문의하기
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#pricing"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 rounded-2xl font-bold text-lg transition-all flex items-center justify-center"
                        >
                            투명한 비용 확인
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm md:text-base font-medium text-slate-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span>평생 서버 유지비 0원</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span>100% 원본 소스코드 제공</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span>상위 1% 초고속 로딩</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Modern gradient blur effect on bottom */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Hero;
