import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span className="brand-mark">&lt;/&gt;</span>
        <strong>{site.name}</strong>
      </div>
      <p>Designed and engineered as an interactive digital system.</p>
      <a href="#home">Back to top <ArrowUp size={14} /></a>
    </footer>
  );
}
