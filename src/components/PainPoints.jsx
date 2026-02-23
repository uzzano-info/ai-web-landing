import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Unlock, Timer } from 'lucide-react';

const PainPoints = () => {
    const points = [
        {
            icon: <Wallet className="w-8 h-8 text-rose-500" />,
            title: "숨만 쉬어도 나가는 유지비",
            description: "제작비는 10만 원인데, 서버비 명목으로 매달 2~3만 원씩 평생 지불해야 합니다. (3년이면 약 100만 원입니다.)"
        },
        {
            icon: <Unlock className="w-8 h-8 text-rose-500" />,
            title: "내 것이 아닌 임대형 껍데기",
            description: "결제를 멈추는 순간 대표님의 사이트는 공중분해 됩니다. 내 소유의 소스코드가 없으니 다른 곳으로 이사 갈 수도 없습니다."
        },
        {
            icon: <Timer className="w-8 h-8 text-rose-500" />,
            title: "느린 속도와 심각한 고객 이탈",
            description: "남들과 똑같이 찍어낸 무거운 템플릿은 로딩이 느립니다. 성격 급한 한국 고객들은 사이트가 열리기도 전에 뒤로 가기를 누릅니다."
        }
    ];

    return (
        <section id="pain-points" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center p-3 bg-red-100 text-2xl rounded-2xl mb-6 shadow-sm border border-red-200"
                    >
                        🚨
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6 break-keep"
                    >
                        10만 원짜리 '임대형 템플릿'의 <br className="hidden md:block" /> 숨겨진 치명적 함정
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto break-keep"
                    >
                        저렴하게 만들었다고 좋아하셨나요? <br className="md:hidden" />결국 대표님은 '템플릿 하청 플랫폼의 월세 세입자'가 되신 겁니다.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden group"
                        >
                            {/* Subtle hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6">
                                    {point.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                                    <span className="text-red-500 mr-2">❌</span>
                                    {point.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium break-keep">
                                    {point.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
