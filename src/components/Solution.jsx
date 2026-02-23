import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap } from 'lucide-react';

const Solution = () => {
    const benefits = [
        {
            icon: <Rocket className="w-8 h-8 text-blue-500" />,
            title: "평생 호스팅(서버) 비용 0원 보장",
            description: "글로벌 최고 수준의 무료 클라우드를 활용하여 구축합니다. 초기 제작비 15만 원을 결제하신 후에는, 평생 단 1원의 월 유지비도 발생하지 않습니다."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
            title: "100% 원본 소스코드 영구 제공",
            description: "플랫폼에 종속된 껍데기가 아닙니다. 언제든 예약, 결제, 고객 DB 관리 시스템 등으로 무한 확장할 수 있는 진짜 '내 소유'의 하드코딩 원본을 넘겨드립니다."
        },
        {
            icon: <Zap className="w-8 h-8 text-blue-500" />,
            title: "상위 1% 초고속 로딩 속도",
            description: "플러그인이 덕지덕지 붙은 템플릿과 달리, 구글 AI 툴로 최적화 코딩된 사이트는 1초 만에 열립니다. 이는 영업 문의 이탈률을 절반 이하로 떨어뜨립니다."
        }
    ];

    return (
        <section id="ownership" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold mb-6 text-sm">
                            💡 7년 차 IT 실무 개발자의 제안
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] mb-8 break-keep">
                            단순 템플릿 조립이 아닌,<br />
                            <span className="text-blue-600">진짜 대표님만의 매장</span>을<br />
                            건축해 드립니다.
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 break-keep">
                            저는 마우스로 대충 끌어다 놓는 하청업자가 아닙니다. 구글의 최신 <strong>AI 개발 도구 (Antigravity)</strong>를 활용하여, 하드코딩 수준의 자유도로 처음부터 끝까지 가볍고 빠르게 맞춤형으로 코딩합니다.
                        </p>

                        <a href="#contact" className="inline-flex p-1 pr-6 bg-slate-900 rounded-full items-center gap-4 group hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 active:scale-95">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Rocket className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-bold">건축 의뢰하기</span>
                        </a>
                    </motion.div>

                    <div className="flex-1 flex flex-col gap-6 w-full">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 flex gap-6 items-start hover:shadow-lg hover:shadow-slate-200/50 transition-all hover:-translate-y-1"
                            >
                                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0 mt-1">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed break-keep">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Solution;
