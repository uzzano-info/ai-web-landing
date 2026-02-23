import React from 'react';
import { Rocket } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6 opacity-90 hover:opacity-100 transition-opacity">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/20">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <span className="text-xl font-black text-white tracking-tight">
                                Antigravity
                            </span>
                        </a>
                        <p className="text-slate-400 font-medium leading-relaxed max-w-sm mb-6">
                            구글 최신의 AI 개발 도구를 활용하여, 임대료 없는 독립적인 디지털 자산을 건축해 드립니다.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">서비스 링크</h4>
                        <ul className="space-y-4">
                            <li><a href="#ownership" className="text-slate-400 hover:text-white transition-colors font-medium text-sm">진짜 내 소유란?</a></li>
                            <li><a href="#comparison" className="text-slate-400 hover:text-white transition-colors font-medium text-sm">서비스 비교</a></li>
                            <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors font-medium text-sm">제작 비용</a></li>
                            <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors font-medium text-sm">자주 묻는 질문</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">빠른 문의</h4>
                        <ul className="space-y-4 text-slate-400 font-medium text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs">A</span>
                                카카오비즈니스
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs">M</span>
                                antigravity.dev@gmail.com
                            </li>
                            <li className="text-slate-500 text-xs mt-4">
                                * 평일 10:00 - 18:00 (주말/공휴일 후속 작업)
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm font-medium text-center md:text-left">
                        © {new Date().getFullYear()} Antigravity Web Solutions. All rights reserved. 본 사이트의 모든 자료는 저작권법의 보호를 받습니다.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">이용약관</a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">개인정보처리방침</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
