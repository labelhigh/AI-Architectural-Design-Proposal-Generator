import React from 'react';

export const Header: React.FC = () => {
  return (
    <aside className="w-full md:w-80 lg:w-96 bg-white md:h-screen md:sticky md:top-0 p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col">
      <div className="flex flex-col flex-grow">
        {/* Top part */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            AI 建築設計
            <br />
            <span className="text-indigo-600">建議書生成器</span>
          </h1>
          <p className="text-slate-500 mt-2 mb-6">
            (模擬原型)
          </p>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mb-6"></div>
          <p className="text-slate-600 leading-relaxed">
            透過幾個簡單的步驟，我們的 AI 將根據您的需求，生成一份專業的建築設計初步建議書。
            請完成以下設定，開始您的建築之旅。
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Bottom part (PRO promotion) */}
        <div className="mt-8">
          <div className="p-5 bg-indigo-50 rounded-lg border border-indigo-200 text-center">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.416l-1.757 -1.712a.392 .392 0 0 1 .217 -.665l2.428 -.352l1.086 -2.199a.392 .392 0 0 1 .702 0l1.086 2.199l2.428 .352a.392 .392 0 0 1 .217 .665l-1.757 1.712l.415 2.416a.392 .392 0 0 1 -.568 .41l-2.172 -1.138z" />
                  <path d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.416l-1.757 -1.712a.392 .392 0 0 1 .217 -.665l2.428 -.352l1.086 -2.199a.392 .392 0 0 1 .702 0l1.086 2.199l2.428 .352a.392 .392 0 0 1 .217 .665l-1.757 1.712l.415 2.416a.392 .392 0 0 1 -.568 .41l-2.172 -1.138z" />
                  <path d="M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.416l-1.757 -1.712a.392 .392 0 0 1 .217 -.665l2.428 -.352l1.086 -2.199a.392 .392 0 0 1 .702 0l1.086 2.199l2.428 .352a.392 .392 0 0 1 .217 .665l-1.757 1.712l.415 2.416a.392 .392 0 0 1 -.568 .41l-2.172 -1.138z" />
                </svg>
              </div>
            <h4 className="font-semibold text-indigo-800">想要更專業的報告？</h4>
            <p className="text-sm text-indigo-700 mt-1 mb-4">
              升級 PRO 版本以生成更詳盡的分析與財務評估。
            </p>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-md shadow-indigo-500/20">
              訂閱 PRO 版本
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};