import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
            {/* Abstract modern background pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 text-center border border-white/20 shadow-2xl shadow-blue-900/50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 break-keep">
                            막힌 영업 숨통,<br className="md:hidden" />
                            24시간 안에 트여드리겠습니다.
                        </h2>
                        <p className="text-lg md:text-2xl text-blue-100 font-medium mb-12 break-keep">
                            단순 견적이라도 좋습니다. 결제 전 반드시 현재 비즈니스 상황을 먼저 말씀해 주세요.
                        </p>

                        <a href="https://forms.gle/your-form-link-here" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-5 md:px-10 md:py-6 bg-white text-blue-600 font-black rounded-2xl md:rounded-3xl text-xl md:text-2xl inline-flex items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] active:translate-y-0 shadow-2xl shadow-blue-900/50 mx-auto group">
                            <Rocket className="w-8 h-8 md:w-10 md:h-10 text-blue-500 group-hover:scale-110 transition-transform" />
                            1:1 무료 비즈니스 진단 및 상담하기
                        </a>

                        <p className="mt-10 inline-flex px-4 py-2 bg-blue-900/30 rounded-full text-blue-100 text-sm md:text-base font-medium border border-blue-400/20">
                            💬 "결제 전 꼭 '문의 남기기'를 통해 현 상황을 먼저 말씀해 주세요!"
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
