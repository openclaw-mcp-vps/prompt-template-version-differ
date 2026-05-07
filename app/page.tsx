export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visual Diff for{" "}
          <span className="text-[#58a6ff]">AI Prompt Templates</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Compare prompt versions side-by-side with highlighted changes and performance impact.
          Know exactly which edits move the needle — and which ones don't.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $15/mo
        </a>
        {/* Fake diff preview */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] text-left overflow-hidden text-sm font-mono">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#30363d] bg-[#0d1117]">
            <span className="text-[#8b949e] text-xs">prompt.txt</span>
            <span className="ml-auto text-xs text-[#3fb950]">v2</span>
            <span className="text-xs text-[#8b949e]">vs</span>
            <span className="text-xs text-[#f85149]">v1</span>
          </div>
          <div className="p-4 space-y-1">
            <div className="px-2 py-0.5 rounded bg-[#1a2a1a] text-[#3fb950]">+ You are a helpful assistant that responds concisely.</div>
            <div className="px-2 py-0.5 rounded bg-[#2a1a1a] text-[#f85149] line-through opacity-60">- You are an AI assistant.</div>
            <div className="px-2 py-0.5 text-[#c9d1d9]">  Always answer in the user's language.</div>
            <div className="px-2 py-0.5 rounded bg-[#1a2a1a] text-[#3fb950]">+ Keep responses under 3 sentences unless asked for detail.</div>
          </div>
          <div className="px-4 py-2 border-t border-[#30363d] flex gap-6 text-xs text-[#8b949e]">
            <span>Accuracy <span className="text-[#3fb950] font-semibold">+12%</span></span>
            <span>Latency <span className="text-[#3fb950] font-semibold">-8ms</span></span>
            <span>Cost <span className="text-[#f85149] font-semibold">+$0.002/req</span></span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited prompt versions",
              "Side-by-side visual diffs",
              "Performance metric tracking",
              "Team collaboration",
              "Export diff reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How does the diff work?</h3>
            <p className="text-[#8b949e] text-sm">We use a line-level and token-level diff algorithm to highlight exactly what changed between any two prompt versions, with color-coded additions and deletions.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">How are performance metrics tracked?</h3>
            <p className="text-[#8b949e] text-sm">You log evaluation results via our API or dashboard. PromptDiff correlates metric changes (accuracy, latency, cost) with specific prompt edits so you can see what actually improved outcomes.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Can I use this with any LLM?</h3>
            <p className="text-[#8b949e] text-sm">Yes. PromptDiff is model-agnostic — it works with OpenAI, Anthropic, Gemini, or any custom model. You bring the prompts and metrics; we handle the versioning and visualization.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} PromptDiff. All rights reserved.
      </footer>
    </main>
  )
}
