export default function VideoPage() {
  return (
    <main className="min-h-dvh bg-slate-50 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">AI视频</h1>
          <div className="mt-2 text-sm text-gray-500">
            当前模型：Veo 3.1 Fast
            {/* 实际模型为 veo-3.1-fast-generate-001 */}
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            视频生成功能后续上线，当前页面仅作为占位。
            <br />
            计划：复用 AI图片 的输入流程与提示词优化能力，输出更适合电商投放的短视频素材。
          </p>

          <div className="mt-6 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center">
            <div className="text-sm font-medium text-slate-700">结果展示区域（占位）</div>
            <div className="mt-1 text-xs text-slate-500">后续展示任务状态、生成视频列表与下载</div>
          </div>
        </section>
      </div>
    </main>
  );
}

