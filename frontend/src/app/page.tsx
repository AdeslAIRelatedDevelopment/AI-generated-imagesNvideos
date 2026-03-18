"use client";

import { useMemo, useState } from "react";

const RAW_REQUIREMENT_PLACEHOLDER = `例：参考左图，自行布局：（至少有一张主人也在）
狗狗在不同场景下穿着比基尼，如海滩、泳池、生日聚会、度假、湖边、暑假旅行、水上活动或水上聚会有各种各样游泳圈那种等等。
每个场景尽量用不同的狗模特、不同姿势（至少不能一模一样），狗狗所在场景里的位置也尽量不要全部一样。
移动版则居中展示。
狗模特倾向于用【比如贵宾犬、比熊犬、吉娃娃、约克夏梗、马尔济斯、迷你雪纳瑞、西施犬、博美犬、查理王猎犬等等】。`;

type SizeOption = "1600x1600" | "1464x600" | "600x450" | "other";

export default function ImageWorkbenchPage() {
  const [size, setSize] = useState<SizeOption>("1600x1600");
  const [customSize, setCustomSize] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resolvedSizeText = useMemo(() => {
    if (size === "1600x1600") return "1600 × 1600";
    if (size === "1464x600") return "1464 × 600";
    if (size === "600x450") return "600 × 450";
    return customSize.trim() ? customSize.trim() : "（未填写）";
  }, [customSize, size]);

  return (
    <main className="min-h-dvh bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100/70 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[460px_1fr]">
          {/* 左侧：输入区 */}
          <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="text-base font-semibold text-slate-900">原始需求</div>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                      必填
                    </span>
                  </div>
                </div>
                <textarea
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-4 focus:ring-slate-200"
                  rows={8}
                  placeholder={RAW_REQUIREMENT_PLACEHOLDER}
                />
              </div>

              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="text-base font-semibold text-slate-900">参考图片</div>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                      选填
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">最多上传 8 张，后续支持上传与预览</div>
                </div>

                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4">
                    <div className="text-sm font-medium text-slate-900">商品图</div>
                    <div className="mt-1 text-xs text-slate-500">上传占位（暂不支持真实上传）</div>
                    <div className="mt-3 h-16 rounded-lg border border-dashed border-slate-200 bg-white/60" />
                  </div>

                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4">
                    <div className="text-sm font-medium text-slate-900">元素/构图参考图</div>
                    <div className="mt-1 text-xs text-slate-500">上传占位（暂不支持真实上传）</div>
                    <div className="mt-3 h-16 rounded-lg border border-dashed border-slate-200 bg-white/60" />
                  </div>

                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4">
                    <div className="text-sm font-medium text-slate-900">姿势参考图</div>
                    <div className="mt-1 text-xs text-slate-500">上传占位（暂不支持真实上传）</div>
                    <div className="mt-3 h-16 rounded-lg border border-dashed border-slate-200 bg-white/60" />
                  </div>

                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4">
                    <div className="text-sm font-medium text-slate-900">风格参考图</div>
                    <div className="mt-1 text-xs text-slate-500">上传占位（暂不支持真实上传）</div>
                    <div className="mt-3 h-16 rounded-lg border border-dashed border-slate-200 bg-white/60" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <div className="text-base font-semibold text-slate-900">尺寸选择</div>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                    选填
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input
                      type="radio"
                      name="size"
                      className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-400"
                      checked={size === "1600x1600"}
                      onChange={() => setSize("1600x1600")}
                    />
                    1600 × 1600
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input
                      type="radio"
                      name="size"
                      className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-400"
                      checked={size === "1464x600"}
                      onChange={() => setSize("1464x600")}
                    />
                    1464 × 600
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input
                      type="radio"
                      name="size"
                      className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-400"
                      checked={size === "600x450"}
                      onChange={() => setSize("600x450")}
                    />
                    600 × 450
                  </label>
                  <label className="flex items-center gap-2 text-sm text-slate-700">
                    <input
                      type="radio"
                      name="size"
                      className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-400"
                      checked={size === "other"}
                      onChange={() => setSize("other")}
                    />
                    其他
                  </label>

                  {size === "other" ? (
                    <input
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-4 focus:ring-slate-200"
                      placeholder="例如：1200 × 628"
                      value={customSize}
                      onChange={(e) => setCustomSize(e.target.value)}
                    />
                  ) : null}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <div className="text-base font-semibold text-slate-900">风格倾向</div>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                    选填
                  </span>
                </div>
                <input
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 placeholder:text-slate-400 focus:ring-4 focus:ring-slate-200"
                  placeholder="例：清爽、明亮、度假感、夏日氛围、适合电商展示"
                />
              </div>
            </div>
          </section>

          {/* 右侧：结果区 */}
          <section className="grid gap-5">
            {/* 优化提示词模块（与生成结果同级，放在上方） */}
            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
                >
                  优化提示词
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-600"
                  onClick={() => setIsSubmitting(true)}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "任务生成中..." : "提交任务"}
                </button>
              </div>

              <textarea
                className="mt-3 min-h-[160px] w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-slate-200 focus:ring-4 focus:ring-slate-200"
                defaultValue="生成适用于电商平台的狗狗泳装主题图片，围绕海滩、泳池、生日聚会、湖边度假、水上活动等场景展开。每个场景使用不同的小型犬模特，如贵宾犬、比熊犬、吉娃娃、约克夏梗、马尔济斯、迷你雪纳瑞、西施犬、博美犬、查理王猎犬等。要求不同狗狗姿势、不同画面站位、不同构图，不要重复。整体画面清爽、明亮、具有夏日度假氛围，适合电商展示。移动端版本构图偏居中。"
              />
            </div>

            {/* 生成结果模块 */}
            <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-base font-semibold text-slate-900">生成结果</h2>
                <div className="text-sm text-gray-500">
                  当前模型：Nano Banana 2
                  {/* 实际模型为 gemini-3.1-flash-image-preview，仅用于展示友好名称 */}
                </div>
              </div>

              <div className="mt-4">
                <div className="aspect-[4/3] w-full rounded-xl border border-dashed border-slate-200 bg-slate-50/70" />
                <div className="mt-2 text-xs text-slate-500">
                  （占位：后续展示生成图片列表、参数与选中状态；当前尺寸：{resolvedSizeText}）
                </div>
                {/* 未来：每张生成图旁边会有单独下载按钮；当多选图片时，默认下载 zip */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

