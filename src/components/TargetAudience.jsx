import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const TargetAudience = () => {
    const targets = [
        "B2B 제조업 / 장비 렌탈 / 특수 청소 / 전문 시공 업체",
        "모바일에서 글씨가 다 깨지는 10년 전 홈페이지를 방치 중인 분",
        "쓸데없는 화려함보다 '당장 문의 전화를 오게 만드는' 직관적인 랜딩이 필요하신 분",
        "외주 플랫폼 수수료 떼이는 게 아까워 내 소유의 '다이렉트 영업 채널'이 필요하신 분"
    ];

    return (
        <section id="audience" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Pexels Background with severe tint */}
            <div
                className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 opacity-10 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/50" />

            <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold mb-8">
                        🎯 최적의 매칭 타겟
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
                        이런 대표님들께<br />
                        가장 강력한 효과를 냅니다.
                    </h2>

                    <p className="text-lg text-slate-600 font-medium mb-12 max-w-2xl leading-relaxed">
                        업종의 특성을 개발자가 완벽히 이해해야만, 홈페이지가 실제 영업 사원의 역할을 수행할 수 있습니다. IT 용어가 아닌 대표님의 언어로 소통합니다.
                    </p>

                    <div className="space-y-6">
                        {targets.map((target, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.2 }}
                                className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-blue-200 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-5 h-5 text-blue-600" />
                                </div>
                                <p className="text-xl text-slate-800 font-bold leading-relaxed break-keep">
                                    {target}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TargetAudience;
