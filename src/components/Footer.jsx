import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-10 mb-10">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl font-black text-white tracking-tight mb-3">AI 맞춤 웹제작.</h2>
                        <p className="text-sm font-medium text-gray-500">최신 기술로 단 하루 만에 완성하는 압도적인 웹사이트</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors text-sm font-medium">이용약관</a>
                        <a href="#" className="hover:text-white transition-colors text-sm font-medium">개인정보처리방침</a>
                    </div>
                </div>

                <div className="text-sm flex flex-col gap-3 text-gray-500">
                    <p className="font-medium">운영: AI 맞춤 웹제작 | 대표: OOO</p>
                    <p>이메일: contact@example.com | 전화: 010-0000-0000</p>
                    <p>사업자등록번호: 000-00-00000 | 소재지: 대명사거리 빌딩 5층</p>
                    <p className="mt-8 text-gray-600">© {new Date().getFullYear()} AI Custom Web. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
