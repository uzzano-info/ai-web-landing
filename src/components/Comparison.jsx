import React from 'react';
import { motion } from 'framer-motion';

const Comparison = () => {
    return (
        <section id="comparison" className="py-24 bg-slate-950">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-indigo-400 font-bold bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full mb-6"
                    >
                        📊 고객 설득 논리
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6"
                    >
                        당장 싸다고 시작했다가 <br className="hidden md:block" /> 나중에 피눈물 흘리는 이유
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-900/20"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] text-left">
                            <thead>
                                <tr className="border-b border-slate-800">
                                    <th className="p-6 md:p-8 font-bold text-slate-400 w-1/3 text-lg">핵심 요소</th>
                                    <th className="p-6 md:p-8 font-bold text-rose-400 w-1/3 text-lg bg-rose-950/20">템플릿 복사 업체</th>
                                    <th className="p-6 md:p-8 font-bold text-indigo-400 w-1/3 text-lg bg-indigo-950/20">귀하의 맞춤형 서비스</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                <tr className="group hover:bg-slate-800/50 transition-colors">
                                    <td className="p-6 md:p-8 font-semibold text-slate-300">유지 비용</td>
                                    <td className="p-6 md:p-8 text-slate-400 bg-rose-950/10 group-hover:bg-rose-950/20 transition-colors">매월 2~3만 원 (평생 지불)</td>
                                    <td className="p-6 md:p-8 font-bold text-indigo-300 bg-indigo-950/10 group-hover:bg-indigo-950/20 transition-colors text-xl">평생 0원</td>
                                </tr>
                                <tr className="group hover:bg-slate-800/50 transition-colors">
                                    <td className="p-6 md:p-8 font-semibold text-slate-300">소유권</td>
                                    <td className="p-6 md:p-8 text-slate-400 bg-rose-950/10 group-hover:bg-rose-950/20 transition-colors">플랫폼 임대 (코드 소유 불가)</td>
                                    <td className="p-6 md:p-8 font-bold text-indigo-300 bg-indigo-950/10 group-hover:bg-indigo-950/20 transition-colors">원본 100% 영구 소유</td>
                                </tr>
                                <tr className="group hover:bg-slate-800/50 transition-colors">
                                    <td className="p-6 md:p-8 font-semibold text-slate-300">제작 방식</td>
                                    <td className="p-6 md:p-8 text-slate-400 bg-rose-950/10 group-hover:bg-rose-950/20 transition-colors">남들과 똑같은 드래그 앤 드롭</td>
                                    <td className="p-6 md:p-8 font-bold text-indigo-300 bg-indigo-950/10 group-hover:bg-indigo-950/20 transition-colors">구글 AI 도구 활용 맞춤 개발</td>
                                </tr>
                                <tr className="group hover:bg-slate-800/50 transition-colors">
                                    <td className="p-6 md:p-8 font-semibold text-slate-300">확장성</td>
                                    <td className="p-6 md:p-8 text-slate-400 bg-rose-950/10 group-hover:bg-rose-950/20 transition-colors">정해진 기능 외 추가 개발 불가</td>
                                    <td className="p-6 md:p-8 font-bold text-indigo-300 bg-indigo-950/10 group-hover:bg-indigo-950/20 transition-colors">예약 시스템 등 언제든 무한 확장</td>
                                </tr>
                                <tr className="group hover:bg-slate-800/50 transition-colors">
                                    <td className="p-6 md:p-8 font-semibold text-slate-300">웹 속도</td>
                                    <td className="p-6 md:p-8 text-slate-400 bg-rose-950/10 group-hover:bg-rose-950/20 transition-colors">무겁고 느림 (고객 이탈 발생)</td>
                                    <td className="p-6 md:p-8 font-bold text-indigo-300 bg-indigo-950/10 group-hover:bg-indigo-950/20 transition-colors">상위 1% 초고속 로딩 (SEO 보장)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Comparison;
