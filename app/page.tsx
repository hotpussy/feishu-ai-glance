'use client';

import { Copy, ExternalLink } from 'lucide-react';
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
    title: "多维表格 AI",
    desc: "AI 智能搭建业务系统、数据录入润色、侧边栏对话、自动化",
    scene: "数据管理、业务系统快速搭建",
    prompt: "帮我从描述创建一个 CRM 多维表格系统",
    link: "https://www.feishu.cn/hc/zh-CN/articles/519714421437"
  },
  {
    title: "智能会议纪要",
    desc: "实时转录、声纹识别、自动总结行动项",
    scene: "会议记录与跟进",
    prompt: "总结刚才的会议，提取行动项和负责人",
    link: ""
  },
  {
    title: "飞书妙搭 + aPaaS",
    desc: "AI 驱动的原型生成和低代码开发平台",
    scene: "快速开发轻应用和内部工具",
    prompt: "根据需求生成一个请假审批轻应用",
    link: ""
  }
];

export default function FeishuAIGlance() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    setCopied(title);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            飞书 AI 能力速览
          </h1>
          <p className="text-xl text-zinc-400">2026 年最新 · 一站式了解飞书强大 AI 能力</p>
          <p className="text-sm text-zinc-500 mt-2">数据来源于飞书官方文档（实时更新中）</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all group">
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">{feature.title}</h3>
              <p className="text-zinc-300 mb-6 leading-relaxed">{feature.desc}</p>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-500">适用场景</span>
                  <p className="text-zinc-400">{feature.scene}</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-widest text-zinc-500">推荐提示词</span>
                    <button 
                      onClick={() => copyToClipboard(feature.prompt, feature.title)}
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                    >
                      <Copy size={16} /> {copied === feature.title ? '已复制' : '复制'}
                    </button>
                  </div>
                  <div className="bg-zinc-950 p-4 rounded-xl text-sm font-mono text-emerald-300 border border-zinc-800 whitespace-pre-wrap">
                    {feature.prompt}
                  </div>
                </div>
              </div>

              {feature.link && (
                <a 
                  href={feature.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  查看官方文档 <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-zinc-500 text-sm">
          Made with ❤️ for Feishu users • Deployed on Vercel<br />
          <a href="https://github.com/hotpussy/feishu-ai-glance" target="_blank" className="underline hover:text-white">GitHub 仓库</a>
        </div>
      </div>
    </div>
  );
}
