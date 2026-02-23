import React from 'react';
import { motion } from 'framer-motion';

const Comparison = () => {
    return (
        <section id="pricing" className="py-24 bg-[#050B14]">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-2 text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-6"
                    >
                        ⚖️ 한눈에 보는 비교
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight"
                    >
                        임대형 복사 템플릿 vs<br className="hidden md:block" /> 프리미엄 맞춤형 코딩
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900 rounded-[2rem] shadow-2xl shadow-indigo-900/20 border border-slate-700/50 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr>
                                    <th className="py-8 px-8 text-lg font-bold text-slate-400 w-1/5 bg-slate-800/50 border-b border-slate-700">비교 항목</th>
                                    <th className="py-8 px-8 text-lg font-bold text-slate-400 w-1/3 bg-slate-800/30 border-b border-l border-slate-700 text-center">공장형 임대 템플릿 복사</th>
                                    <th className="py-8 px-8 text-xl font-black text-indigo-400 w-1/2 bg-indigo-900/20 border-b-2 border-indigo-500 text-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                                        프리미엄 AI 맞춤 개발
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                <tr className="hover:bg-slate-800/30 transition-colors">
                                    <td className="py-6 px-8 font-bold text-slate-300 whitespace-nowrap bg-slate-800/20">유지 비용</td>
                                    <td className="py-6 px-8 text-slate-400 font-medium border-l border-slate-800 text-center">매월 2~3만 원 (평생 지불)</td>
                                    <td className="py-6 px-8 font-black text-white bg-indigo-900/10 text-center text-lg">평생 0원 (무료 클라우드 서버 활용)</td>
                                </tr>
                                <tr className="hover:bg-slate-800/30 transition-colors">
                                    <td className="py-6 px-8 font-bold text-slate-300 whitespace-nowrap bg-slate-800/20">소유권</td>
                                    <td className="py-6 px-8 text-slate-400 font-medium border-l border-slate-800 text-center">플랫폼 임대 (코드 소유 불가)</td>
                                    <td className="py-6 px-8 font-bold text-indigo-200 bg-indigo-900/10 text-center">소스코드 원본 100% 영구 소유</td>
                                </tr>
                                <tr className="hover:bg-slate-800/30 transition-colors bg-slate-900">
                                    <td className="py-6 px-8 font-bold text-slate-300 whitespace-nowrap bg-slate-800/20">제작 방식</td>
                                    <td className="py-6 px-8 text-slate-400 font-medium border-l border-slate-800 text-center">남들과 똑같은 공장형 드래그 앤 드롭</td>
                                    <td className="py-6 px-8 font-bold text-indigo-200 bg-indigo-900/10 text-center">최신 AI 도구를 활용한 맞춤 개발</td>
                                </tr>
                                <tr className="hover:bg-slate-800/30 transition-colors">
                                    <td className="py-6 px-8 font-bold text-slate-300 whitespace-nowrap bg-slate-800/20">확장성</td>
                                    <td className="py-6 px-8 text-slate-400 font-medium border-l border-slate-800 text-center">정해진 기능 외 추가 개발 불가</td>
                                    <td className="py-6 px-8 font-bold text-indigo-200 bg-indigo-900/10 text-center">추후 예약 시스템, DB 연동 등 무한 확장</td>
                                </tr>
                                <tr className="hover:bg-slate-800/30 transition-colors">
                                    <td className="py-6 px-8 font-bold text-slate-300 whitespace-nowrap bg-slate-800/20">웹 속도</td>
                                    <td className="py-6 px-8 text-slate-400 font-medium border-l border-slate-800 text-center">보통 무겁고 느림 (고객 이탈 발생)</td>
                                    <td className="py-6 px-8 font-black text-white bg-indigo-900/10 text-center text-lg">상위 1%의 쾌적한 로딩 (SEO 최적화)</td>
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
