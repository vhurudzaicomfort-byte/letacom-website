// Minimal, dependency-free highlighter for JSON and shell snippets.
function highlight(code: string) {
  const re = /("(?:[^"\\]|\\.)*")(\s*:)?|\b(-?\d+(?:\.\d+)?)\b|\b(true|false|null)\b|(\bcurl\b|-H|-X|-d)/g;
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index));
    if (m[1]) {
      out.push(<span key={k++} className={m[2] ? "text-[#7fa8ff]" : "text-emerald-300"}>{m[1]}</span>);
      if (m[2]) out.push(m[2]);
    } else if (m[3]) out.push(<span key={k++} className="text-amber-300">{m[3]}</span>);
    else if (m[4]) out.push(<span key={k++} className="text-fuchsia-300">{m[4]}</span>);
    else if (m[5]) out.push(<span key={k++} className="text-sky-300">{m[5]}</span>);
    last = re.lastIndex;
  }
  out.push(code.slice(last));
  return out;
}

export function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <figure className="overflow-hidden rounded-xl bg-navy-950 ring-1 ring-white/10">
      {label && <figcaption className="border-b border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/50">{label}</figcaption>}
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed text-white/85">
        <code className="font-mono">{highlight(code)}</code>
      </pre>
    </figure>
  );
}
