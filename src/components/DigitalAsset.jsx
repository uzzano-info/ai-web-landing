import React from 'react';
import { motion } from 'framer-motion';
import { HardDrive, Webhook, Zap } from 'lucide-react';

const DigitalAsset = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Copy */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="inline-flex items-center gap-2 text-indigo-600 font-bold bg-indigo-50 px-4 py-1.5 rounded-full mb-6"
                        >
                            🏗️ 임대업자 vs 건축가
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-8"
                        >
                            단순한 껍데기 대여가 아닌,<br />
                            <span className="text-indigo-600 inline-block mt-2">'진짜 내 집 마련'</span> 서비스
                        </motion.h2>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-5"
                            >
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                                    <HardDrive className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">소스코드 원본 100% 소유권 제공</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        템플릿 기반 플랫폼이 망하거나 가격을 올리면 속수무책으로 당해야 합니다. 저희는 독립된 디지털 부동산을 짓듯, 소스코드 전체를 대표님 소유로 넘겨드립니다.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex gap-5"
                            >
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                                    <Webhook className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">플랫폼의 한계를 넘는 무한 확장성</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        사업이 커져 자동 견적 계산기나 고객 DB 관리 기능이 필요할 때, 템플릿은 확장이 불가능합니다. 하지만 맞춤형 코드는 어떤 웹앱(Web App) 기능이든 자유롭게 추가 개발이 가능합니다.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-5"
                            >
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                                    <Zap className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">고객 이탈을 막는 상위 1% 로딩 속도</h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        무거운 플러그인으로 떡칠된 템플릿과 질적으로 다릅니다. 최신 스택 하드코딩으로 구현된 1초 빠른 로딩 속도는 고객 이탈률을 절반으로 줄이고 검색 최적화(SEO)를 극대화합니다.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
                        <div className="bg-white p-8 rounded-[3rem] shadow-2xl shadow-indigo-900/10 border border-gray-100">
                            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden relative flex items-center justify-center p-8 text-center group">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-400 via-slate-900 to-slate-900 group-hover:opacity-40 transition-opacity duration-700"></div>
                                <div className="relative z-10">
                                    <div className="text-6xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
                                        Code is Asset.
                                    </div>
                                    <p className="text-lg text-gray-300 font-medium max-w-sm mx-auto">
                                        타인의 플랫폼에 월세를 내지 마십시오. 오늘부터 직접 소유하는 지식 자산을 구축하세요.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DigitalAsset;
