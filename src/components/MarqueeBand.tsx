const words = ["FULL-STACK", "IT SYSTEMS", "WEB EXPERIENCES", "MOTION", "NETWORKS", "PROBLEM SOLVING"];

export function MarqueeBand() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {[...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}><i />{word}</span>
        ))}
      </div>
    </div>
  );
}
