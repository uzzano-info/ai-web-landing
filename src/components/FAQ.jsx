import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "Vercel 무료 서버를 쓰면 도메인 주소 끝에 '.vercel.app'이 붙는다던데 괜찮은가요?",
            a: "B2B 고객이나 서비스 문의 고객은 주소의 생김새보다 '웹사이트가 모바일에서 얼마나 빠르고 깔끔하게 열리는지'를 가장 중요하게 생각합니다. 무료 접속 서버 덕분에 대표님은 매월 3만 원씩 평생 절약할 수 있습니다. 만약 명함에 넣기 위해 깔끔한 '.com'이나 '.co.kr' 주소가 꼭 필요하시다면, 도메인 구매 실비(연 1~2만 원 수준)만 부담해 주세요. 제가 무료로 사이트와 완벽하게 연결해 드립니다. 매월 돈 내는 것보다 수십 배 이득입니다."
        },
        {
            q: "제가 IT나 코딩을 전혀 모르는데 관리가 가능할까요?",
            a: "네, 걱정하지 마세요. 텍스트나 이미지 교체가 필요하실 경우, 제공해 드린 소스코드 내에서 어디를 수정해야 하는지 누구나 따라 할 수 있는 직관적인 커스텀 매뉴얼을 함께 제공해 드립니다. 유지보수 한다고 매번 프리랜서를 고용할 필요가 없습니다."
        },
        {
            q: "24시간 당일 완성은 대체 어떻게 가능한가요?",
            a: "결제 전, 현재 비즈니스 상태와 타겟 고객을 진단하는 구글 폼(사전 질문지)을 작성해 주시면 이를 바탕으로 제가 구글 최신 AI 개발 도구를 활용하여 디자인과 하드코딩을 동시에 진행합니다. 질문지에 답변을 충실히 해주실수록 퀄리티 높은 결과물이 단 24시간 만에 뽑혀 나옵니다."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-4 bg-slate-50 text-blue-600 rounded-2xl mb-6 shadow-sm border border-slate-100">
                        <MessageCircleQuestion className="w-8 h-8" />
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
                    >
                        자주 묻는 질문
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-blue-200 transition-colors shadow-sm"
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-slate-900 pr-8 text-lg break-keep">{faq.q}</span>
                                <ChevronDown
                                    className={`w-6 h-6 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-500' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-2 text-slate-600 font-medium leading-relaxed border-t border-slate-100 bg-slate-50 break-keep">
                                            <span className="text-blue-600 font-bold mr-2">A.</span>
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
