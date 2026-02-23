import React from 'react';
import { motion } from 'framer-motion';
import { Check, Flame } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
                    >
                        서비스 가격 및 패키지 안내
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 font-medium"
                    >
                        수십만 원의 기획비와 평생 돈 먹는 유지비를 모두 없앴습니다.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Standard Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col hover:-translate-y-1 transition-transform"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">STANDARD</h3>
                            <p className="text-slate-500 font-medium mb-6">초고속 랜딩페이지</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">150,000</span>
                                <span className="text-slate-500 font-medium">원</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "모바일 최적화 1페이지 랜딩 (회사/서비스/문의)",
                                "평생 무료 서버 세팅 (Vercel 활용)",
                                "원본 소스코드 100% 영구 제공",
                                "사전 질문지(구글 폼) 완료 후 24시간 당일 완성",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium break-keep">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 rounded-xl font-bold bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white transition-colors">
                            스탠다드 신청하기
                        </button>
                    </motion.div>

                    {/* Deluxe Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-950 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-2xl shadow-blue-900/20 flex flex-col relative hover:-translate-y-1 transition-transform"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg shadow-blue-500/30 whitespace-nowrap">
                            <Flame className="w-4 h-4 fill-white" /> BEST CHOICE
                        </div>

                        <div className="mb-8 mt-2">
                            <h3 className="text-2xl font-bold text-white mb-2">DELUXE</h3>
                            <p className="text-slate-400 font-medium mb-6">B2B 리전략 웹사이트</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl md:text-5xl font-black text-white tracking-tight">300,000</span>
                                <span className="text-slate-400 font-medium">원</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {[
                                "스탠다드 패키지 모든 탑재",
                                "서브 페이지 최대 4개 추가 제작 (포트폴리오 등)",
                                "전문 용어를 영업용 카피로 완벽 번역",
                                "AI 기반 비즈니스 세일즈 카피라이팅 기획 작성",
                                "카카오톡/전화 다이렉트 전환 세팅"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-200 font-medium break-keep">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95">
                            디럭스 신청하기
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
