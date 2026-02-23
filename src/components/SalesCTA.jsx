import React from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall } from 'lucide-react';

const SalesCTA = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-gray-50 rounded-[3rem] p-8 md:p-14 shadow-xl border border-gray-100"
                >
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                            대표님만의 진정한<br />
                            온라인 자산을 구축하세요.
                        </h2>
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 mb-10">
                        <div className="prose prose-lg text-gray-700 font-medium leading-relaxed max-w-none">
                            <p className="mb-6 indent-4">
                                대표님, 수십만 원짜리 임대형 홈페이지 만드시려다가 오셨죠? 당장 제작비는 비슷해 보이지만, <strong className="text-red-500">매월 서버비로 3만 원씩, 3년이면 100만 원 넘게 뺏긴다는 건</strong> 아무도 말해주지 않습니다.
                            </p>
                            <p className="indent-4">
                                저는 최신 AI 개발 도구를 사용해 아예 처음부터 빠르고 가볍게 맞춤형으로 코딩해 드립니다. <strong className="text-indigo-600 bg-indigo-50 px-1">평생 매월 나가는 유지비 0원</strong>, 그리고 언제든 수정하고 다른 곳으로 이사 갈 수 있도록 사이트의 <strong className="text-gray-900 underline decoration-indigo-400 decoration-4 underline-offset-4">원본 소스코드까지 통째로</strong> 대표님께 넘겨드립니다.
                            </p>
                            <p className="mt-8 text-right text-gray-500 font-bold">
                                - AI 맞춤 웹제작 대표 올림
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:01000000000" className="px-8 py-5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl text-lg flex items-center justify-center gap-3 transition-colors shadow-lg">
                            <PhoneCall className="w-6 h-6" />
                            전화로 빠른 상담
                        </a>
                        <a href="#" className="px-8 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-indigo-500/30">
                            <Send className="w-6 h-6" />
                            카카오톡 견적 문의
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SalesCTA;
