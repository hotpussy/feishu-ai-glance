'use client';

import { Copy, ExternalLink, Search, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const aiFeatures = [
  {
    title: "文档 AI 速览",
    desc: "自动生成文档要点总结，一键掌握长文档核心内容",
    scene: "阅读长文档、周报、会议记录",
    prompt: "帮我总结这份文档的核心要点和行动项",
    link: "https://www.feishu.cn/hc/zh-CN/articles/338082285897"
  },
  {
    title: "知识问答 (Knowledge AI)",
    desc: "最懂企业知识的 AI，有问必答，基于企业文档和知识库",
    scene: "内部政策查询、业务知识检索",
    prompt: "根据公司知识库，解释我们的报销流程",
    link: "https://www.feishu.cn/hc/zh-CN/articles/257240089464"
  },
  {
    title: "飞书 aily 智能体",
    desc: "企业专属 AI 智能伙伴，可定制、带记忆、操作文档/表格/任务",
    scene: "自动化工作流、个人/团队助手",
    prompt: "作为我的项目管理助手，帮我生成本周进度报告",
    link: "https://www.feishu.cn/content/article/7631864469689240764"
  },
  {
    title: "多维表格 Base AI",
    desc: "AI 智能搭建业务系统、生成表格/仪表盘/工作流",
    scene: "数据管理、业务系统快速搭建",
    prompt: "帮我从描述创建一个 CRM 多维表格系统",
    link: "https://www.feishu.cn/hc/zh-CN/articles/519714421437"
  },
  {
    title: "智能会议纪要",
    desc: "实时转录、声纹识别、自动总结行动项和待办",
    scene: "会议记录与跟进",
    prompt: "总结刚才的会议，提取行动项和负责人",
    link: ""
  },
  {
    title: "OpenClaw 智能体插件 (2026)",
    desc: "让 AI 智能体直接操作飞书文档、日历、多维表格和群聊",
    scene: "自动化复杂多步工作流",
    prompt: "总结最新会议纪要并起草跟进邮件",
    link: ""
  },
  {
    title: "AI Notes & 飞书妙搭",
    desc: "AI 驱动的笔记增强和低代码轻应用生成",
    scene: "快速原型开发和内部工具",
    prompt: "根据需求生成一个请假审批轻应用",
    link: ""
  }
];

export default function FeishuAIGlance() {
  const [copied, setCopied] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDark, setIsDark] = useState(true);

  const copyToClipboard = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    setCopied(title);
    setTimeout(() => setCopied(null), 2000);
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const filteredFeatures = aiFeatures.filter(feature => 
    feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.scene.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-zinc-950 to-zinc-900 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              飞书 AI 能力速览
            </h1>
            <p className={`text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>2026 年最新 · 一站式掌握飞书强大 AI 能力</p>
          </div>
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all"
            aria-label="切换主题"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="relative mb-10 max-w-md mx-auto">
          <Search className="absolute left-5 top-4 text-zinc-400" size={20} />
          <input
            type="text"
            placeholder="搜索 AI 能力、场景或提示词..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-5 py-4 bg-zinc-900/80 dark:bg-white border border-zinc-700 dark:border-zinc-300 rounded-2xl text-lg focus:outline-none focus:border-blue-500 placeholder:text-zinc-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredFeatures.length > 0 ? filteredFeatures.map((feature, index) => (
            <div key={index} className={`rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-2xl group ${isDark ? 'bg-zinc-900/70 border border-zinc-800 hover:border-blue-500/50' : 'bg-white border border-zinc-200 hover:border-blue-500 shadow'}`}>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 dark:text-blue-600">{feature.title}</h3>
              <p className="mb-7 leading-relaxed text-zinc-300 dark:text-zinc-600">{feature.desc}</p>
              
              <div className="space-y-6">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1.5">适用场景</span>
                  <p className="text-zinc-400 dark:text-zinc-700">{feature.scene}</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs uppercase tracking-widest text-zinc-500">推荐提示词</span>
                    <button 
                      onClick={() => copyToClipboard(feature.prompt, feature.title)}
                      className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      <Copy size={18} /> {copied === feature.title ? '✅ 已复制' : '复制'}
                    </button>
                  </div>
                  <div className="bg-zinc-950 dark:bg-zinc-100 p-5 rounded-2xl text-sm font-mono text-emerald-300 dark:text-emerald-700 border border-zinc-800 dark:border-zinc-200 whitespace-pre-wrap leading-relaxed">
                    {feature.prompt}
                  </div>
                </div>
              </div>

              {feature.link && (
                <a 
                  href={feature.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                >
                  查看官方文档 <ExternalLink size={16} />
                </a>
              )}
            </div>
          )) : (
            <div className="col-span-2 text-center py-24">
              <p className="text-2xl text-zinc-400">没有找到匹配的内容</p>
              <p className="text-zinc-500 mt-2">试试其他关键词吧～</p>
            </div>
          )}
        </div>

        <div className="mt-20 text-center text-zinc-500 text-sm">
          Made with ❤️ for Feishu users • Deployed on Vercel<br />
          <a href="https://github.com/hotpussy/feishu-ai-glance" target="_blank" className="underline hover:text-blue-400">GitHub 仓库</a>
        </div>
      </div>
    </div>
  );
}
