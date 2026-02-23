import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, ShieldCheck, Link2 } from 'lucide-react';

const Reframing = () => {
    return (
        <section id="benefits" className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-2 text-indigo-600 font-bold bg-indigo-100 px-4 py-1.5 rounded-full mb-6"
                    >
                        💡 발상의 전환
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight"
                    >
                        유지비의 숨겨진 비밀,<br className="hidden md:block" /> 월 3만 원 vs 평생 0원
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Template Trap */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-red-100 flex flex-col"
                    >
                        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                            <TrendingDown className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">공장형 템플릿의 함정</h3>
                        <p className="text-gray-600 leading-relaxed font-medium mb-8">
                            초기 제작비가 저렴해 보이지만, <span className="text-red-600 font-bold">매월 2~3만 원의 호스팅(서버) 비용</span>을 평생 내야 합니다. 3년이면 100만 원, 5년이면 180만 원의 고정 지출이 발생하며, <strong className="text-gray-900">결제를 멈추는 순간 사이트 전체가 날아갑니다.</strong>
                        </p>
                    </motion.div>

                    {/* The Custom Dev Advantage */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl shadow-indigo-900/20 border border-slate-800 flex flex-col relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />

                        <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                            <ShieldCheck className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">AI 맞춤 개발의 혁신</h3>
                        <p className="text-gray-400 leading-relaxed font-medium mb-8 relative z-10">
                            글로벌 프리미엄 무료 웹 호스팅을 기본으로 적용하여 <span className="text-indigo-400 font-bold text-lg">평생 매월 나가는 서버 유지비가 0원</span>입니다. 제작비 외에 추가되는 고정 지출이 단 1원도 없습니다.
                        </p>

                        <div className="mt-auto bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50 relative z-10 flex gap-4 items-start">
                            <Link2 className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-white font-bold mb-1">독자적인 도메인 연결도 OK</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    무료 주소를 그대로 쓰셔도 무방하며, 명함용 '.com', '.co.kr' 주소가 필요하시면 도메인 구매 실비(연 2만 원 수준)만 부담해 주세요. 완벽하게 무료로 연결해 드립니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Reframing;
