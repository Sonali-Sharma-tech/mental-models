/* Rich deep-dive data for all 27 mental models.
   Schema: id, name, cat, catColor, tagline, summary, origin,
   story (paragraphs joined by \n\n), examples[3], howTo[5],
   watchOut[2], related[3], interactive, svgHero. */

const DEEP_MODELS = {

  /* ═══════════════ THINKING BETTER ═══════════════ */

  inversion: {
    id: "inversion",
    name: "Inversion",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Flip the problem upside down.",
    summary: "Instead of asking how to succeed, ask how to guarantee failure — then avoid those things.",
    origin: "Mathematician Carl Jacobi, 19th century. Popularised by Charlie Munger.",
    story: `Carl Jacobi, a brilliant 19th-century German mathematician, had a favourite piece of advice for solving hard problems: "Man muss immer umkehren" — always invert.

He wasn't talking about pessimism. He meant: when the forward path is foggy, map the reverse path first. Figure out every route to catastrophe, and you've automatically found the boundaries of success.

Charlie Munger, Warren Buffett's partner at Berkshire Hathaway, adopted this as a core thinking tool. In a famous speech he said: "Tell me where I'm going to die, so I'll never go there." He doesn't just ask what makes a great company — he asks what destroys companies, and invests in businesses that avoid those failure modes.

The key insight: our brains are wired to think forward. Inversion forces us off autopilot and into territory our gut would never explore.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Don't ask 'how do we make this system reliable?' Ask: 'what are all the ways this system could fail?' Then eliminate each one. This is how safety-critical systems (planes, nuclear plants) are designed." },
      { domain: "Everyday Life", icon: "🧠", text: "Struggling with productivity? Don't ask 'how do I become more productive?' Ask 'what reliably destroys my productivity?' (phone in sight, no sleep, unclear goals). Remove those first." },
      { domain: "Business", icon: "📊", text: "Berkshire Hathaway's investment filter is 90% inversion: avoid companies with bad management, commodity economics, heavy debt, and regulatory exposure. What's left is a great investment." }
    ],
    howTo: [
      "State your goal clearly: 'I want to make great decisions.'",
      "Invert it: 'How would I guarantee terrible decisions?'",
      "List 5–10 specific failure modes honestly.",
      "For each failure mode, ask: 'Am I currently doing any of this?'",
      "Fix the failures first. The goal often takes care of itself."
    ],
    watchOut: [
      { title: "Inversion ≠ pessimism", text: "Thinking about failure doesn't mean expecting it. It's a tool for mapping the territory, not a prediction. Use it alongside forward thinking, not instead of it." },
      { title: "Not every problem inverts cleanly", text: "Inversion shines on complex, high-stakes decisions. For simple choices ('which coffee should I order?'), it's overkill. Save it for the decisions that matter." }
    ],
    related: ["first-principles", "second-order", "occam"],
    interactive: "inversion-flip",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="invG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4cc9f0" stop-opacity="0.3"/><stop offset="100%" stop-color="#c77dff" stop-opacity="0.1"/></linearGradient>
    <marker id="arr1" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#4cc9f0"/></marker>
    <marker id="arr2" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto"><path d="M10,0 L0,5 L10,10 Z" fill="#ef476f"/></marker>
  </defs>
  <circle cx="200" cy="150" r="130" fill="url(#invG)" stroke="#4cc9f0" stroke-width="1" stroke-opacity="0.3"/>
  <text x="110" y="90" font-size="56" class="float">😀</text>
  <path d="M165,130 Q200,90 235,130" stroke="#4cc9f0" stroke-width="2.5" fill="none" marker-end="url(#arr1)"/>
  <path d="M235,170 Q200,210 165,170" stroke="#ef476f" stroke-width="2.5" fill="none" marker-end="url(#arr2)"/>
  <text x="230" y="220" font-size="56" class="float" style="animation-delay:1.2s">🙃</text>
  <text x="60" y="155" font-size="13" fill="#4cc9f0" font-family="system-ui" font-weight="600">Forward</text>
  <text x="290" y="155" font-size="13" fill="#ef476f" font-family="system-ui" font-weight="600">Inverted</text>
</svg>`
  },

  occam: {
    id: "occam",
    name: "Occam's Razor",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "When in doubt, simplest wins.",
    summary: "Among competing explanations, the one with the fewest assumptions is usually correct.",
    origin: "William of Ockham, 14th-century Franciscan friar.",
    story: `William of Ockham was a 14th-century English friar who spent much of his life arguing against the elaborate metaphysical structures of medieval philosophy. His famous principle: "entia non sunt multiplicanda praeter necessitatem" — entities should not be multiplied beyond necessity.

Translation: don't add explanations you don't need.

This became a foundational rule for science. Galileo used it to defend heliocentrism (one moving Earth is simpler than complex retrograde planet motion). Einstein invoked it constantly. The principle isn't a guarantee — sometimes the truth IS complex — but it's a powerful default.

The reason it works: each additional assumption is another place you could be wrong. The more elaborate your theory, the more likely some part of it breaks. Simple explanations have fewer attack surfaces.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Bug appears in production. Could be a race condition, network instability, or memory leak. Or… it could be a missing null check. Check the null check first. It's almost always the boring explanation." },
      { domain: "Everyday Life", icon: "🤝", text: "Friend hasn't replied to your message. Possibilities: they're angry, ignoring you, in a coma, devising revenge. Or: they're busy. Busy is the simplest assumption — and almost always right." },
      { domain: "Business", icon: "📊", text: "Sales dropped 10% this quarter. Maybe it's competitor sabotage. Maybe a market shift. Or — your prices went up. Check the boring stuff first." }
    ],
    howTo: [
      "List every plausible explanation you can think of.",
      "For each, count the assumptions it requires.",
      "Start with the explanation needing the fewest.",
      "Test it. If it holds, you're done.",
      "Only escalate to more complex theories if the simple ones genuinely fail."
    ],
    watchOut: [
      { title: "Simple ≠ correct", text: "The universe sometimes really is complex. Quantum mechanics is bizarre but true. Don't reject a complicated explanation just because a simpler one exists — you need evidence either way." },
      { title: "Don't oversimplify humans", text: "Human behaviour rarely has one cause. The 'simplest' explanation for a relationship problem is rarely the full story. Use Occam's Razor for diagnosing systems, less for diagnosing people." }
    ],
    related: ["hanlon", "first-principles", "inversion"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="150" x2="360" y2="150" stroke="#4cc9f0" stroke-width="2" stroke-opacity="0.3"/>
  <circle cx="100" cy="150" r="14" fill="#9090b8" opacity="0.5"/>
  <circle cx="200" cy="150" r="26" fill="#4cc9f0" class="pulse"/>
  <circle cx="300" cy="150" r="14" fill="#9090b8" opacity="0.5"/>
  <text x="78" y="195" font-size="13" fill="#9090b8" font-family="system-ui">complex</text>
  <text x="170" y="105" font-size="14" fill="#4cc9f0" font-family="system-ui" font-weight="700">simplest ✓</text>
  <text x="276" y="195" font-size="13" fill="#9090b8" font-family="system-ui">complex</text>
  <path d="M180,140 L188,148 M188,140 L180,148" stroke="#0e0e1a" stroke-width="2" stroke-linecap="round"/>
  <path d="M212,140 L220,148 M220,140 L212,148" stroke="#0e0e1a" stroke-width="2" stroke-linecap="round"/>
</svg>`
  },

  hanlon: {
    id: "hanlon",
    name: "Hanlon's Razor",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Don't blame malice when stupidity explains it.",
    summary: "Most apparent attacks are mistakes. Assume incompetence before assuming intent.",
    origin: "Robert J. Hanlon, 1980 (with similar ideas attributed to Goethe and Napoleon).",
    story: `The principle: "Never attribute to malice that which is adequately explained by stupidity." Robert Hanlon coined the modern phrasing in 1980, but the idea is centuries old. Goethe wrote something similar. Napoleon allegedly said the same.

Why does this matter? Because human brains are wired to interpret negative outcomes as deliberate. Someone cuts you off in traffic — your brain says "they hate you." Statistically, they're just distracted.

Hanlon's Razor isn't naive optimism. It's a practical reset that helps you stay calm, communicate better, and not waste energy on imaginary enemies. It also forces honesty: how often have YOU been the "malicious" person in someone else's story, when actually you just messed up?

The cost of assuming malice (when it's actually stupidity) is enormous: ruined relationships, escalated conflicts, lost time. The cost of assuming stupidity (when it's actually malice) is usually small — you'll see the pattern eventually if it's real.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Coworker pushed code that broke production. Was it sabotage? Almost certainly not. They probably skipped tests, misunderstood a dependency, or merged the wrong branch. Lead with that assumption." },
      { domain: "Everyday Life", icon: "🤝", text: "Friend forgot your birthday. Are they passive-aggressively withdrawing? Probably they're stressed, distracted, or had a calendar fail. Don't escalate — ask casually first." },
      { domain: "Business", icon: "📊", text: "A vendor sent the wrong invoice for the third time. Fraud? Far more likely: their accounting software is bad, or one specific employee is overwhelmed. Investigate before accusing." }
    ],
    howTo: [
      "Notice the moment your anger spikes.",
      "Pause before reacting. Ask: 'Could this be a mistake or oversight?'",
      "List three non-malicious explanations.",
      "Pick the most plausible. Respond as if it's true.",
      "If the pattern persists across many incidents, reconsider — but only then."
    ],
    watchOut: [
      { title: "Some malice is real", text: "This razor is a default, not a law. If someone repeatedly does the same harmful thing after being told, the 'stupidity' interpretation is no longer adequate. Patterns matter." },
      { title: "Stupidity at scale = malice", text: "An individual mistake is forgivable. A system that repeatedly produces the same mistake — and refuses to fix it — starts to look indistinguishable from malice." }
    ],
    related: ["occam", "confirmation", "fence"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <text x="60" y="150" font-size="68">😠</text>
  <text x="160" y="180" font-size="20" fill="#9090b8" font-family="system-ui" font-weight="700">VS</text>
  <text x="240" y="150" font-size="68" class="bounce">🤷</text>
  <rect x="40" y="200" width="140" height="46" fill="#ef476f" fill-opacity="0.1" stroke="#ef476f" rx="8"/>
  <text x="58" y="222" font-size="13" fill="#ef476f" font-family="system-ui" font-weight="600">"They hate me"</text>
  <text x="58" y="240" font-size="11" fill="#9090b8" font-family="system-ui">(usually wrong)</text>
  <rect x="220" y="200" width="140" height="46" fill="#06d6a0" fill-opacity="0.1" stroke="#06d6a0" rx="8"/>
  <text x="238" y="222" font-size="13" fill="#06d6a0" font-family="system-ui" font-weight="600">"They forgot"</text>
  <text x="238" y="240" font-size="11" fill="#9090b8" font-family="system-ui">(usually right)</text>
</svg>`
  },

  fence: {
    id: "fence",
    name: "Chesterton's Fence",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Don't tear it down until you know why it's there.",
    summary: "Before removing or changing something, understand why it exists. The reason might still be valid.",
    origin: "G.K. Chesterton, 1929 (in his book 'The Thing').",
    story: `In a 1929 essay, English writer G.K. Chesterton described a scene: imagine you're walking down a road and find a fence in the middle of nowhere, with no obvious purpose. The energetic reformer's instinct is to say "this fence is useless — tear it down!"

Chesterton said: NO. Find out who built it, and why. Maybe there's no good reason. Or maybe there's a bull on the other side you haven't noticed.

The principle: before removing anything — code, process, rule, tradition — understand WHY it exists. Don't optimise away things you don't understand. Sometimes that ugly piece of code is handling an edge case from 2003 that will absolutely break production again if you delete it.

This is one of the most important rules in engineering, but it applies everywhere. People accumulate weird customs, processes, and rules for reasons that aren't always obvious. The instinct to "clean up" without investigating first has caused more disasters than almost any other.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Found a weird if-statement in legacy code that 'shouldn't be needed.' Don't delete it. Find out why it's there. It's probably handling a real edge case the original engineer ran into. The fence is load-bearing." },
      { domain: "Everyday Life", icon: "🏛️", text: "Family tradition that seems pointless? Ask first why it started. The reason might no longer apply, or it might still be solving a problem you haven't noticed yet." },
      { domain: "Business", icon: "📊", text: "Inherited a clunky-looking process at a new job? Don't 'modernise' it on day one. Ask why it works that way. The mess might be the result of hard-won lessons from past disasters." }
    ],
    howTo: [
      "Encounter something that looks pointless or weird.",
      "Pause. Resist the urge to remove it.",
      "Ask: 'Why does this exist? Who set it up?'",
      "Find documentation, ask people, dig through history.",
      "Decide AFTER understanding. Sometimes you still remove it — but now informed."
    ],
    watchOut: [
      { title: "Some fences ARE pointless", text: "This isn't an excuse to keep everything forever. After investigating, sometimes the answer is 'no good reason' and you should remove it. The point is INVESTIGATE FIRST, not preserve always." },
      { title: "Don't use it as procrastination", text: "Set a deadline for your investigation. Don't use 'still researching the fence' as an excuse to never improve a system. A week of investigation, then decide." }
    ],
    related: ["occam", "first-principles", "second-order"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="80" y1="100" x2="80" y2="240" stroke="#4cc9f0" stroke-width="4"/>
  <line x1="160" y1="100" x2="160" y2="240" stroke="#4cc9f0" stroke-width="4"/>
  <line x1="240" y1="100" x2="240" y2="240" stroke="#4cc9f0" stroke-width="4"/>
  <line x1="320" y1="100" x2="320" y2="240" stroke="#4cc9f0" stroke-width="4"/>
  <line x1="60" y1="140" x2="340" y2="140" stroke="#4cc9f0" stroke-width="4"/>
  <line x1="60" y1="200" x2="340" y2="200" stroke="#4cc9f0" stroke-width="4"/>
  <text x="180" y="80" font-size="42" fill="#ffd166" class="pulse" font-family="system-ui" font-weight="800">?</text>
  <text x="60" y="270" font-size="13" fill="#9090b8" font-family="system-ui">Why is this here? Find out before removing.</text>
</svg>`
  },

  "first-principles": {
    id: "first-principles",
    name: "First Principles",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Break it down to atoms. Rebuild from truth.",
    summary: "Strip away every assumption — even the ones you don't notice — until you reach undeniable facts. Reason upward from those facts only.",
    origin: "Aristotle, 4th century BC (Posterior Analytics). Refined by Descartes (1637). Popularised in modern science by Feynman, in modern business by Elon Musk.",
    story: `First-principles thinking is older than science itself. Aristotle, in 4th-century BC Greece, defined a "first principle" as the foundational thing from which all else is derived — not believed because it follows from something else, but the bedrock everything else stands on. He insisted: if you don't trace your reasoning back to first principles, you're just rearranging beliefs you absorbed from someone else.

Two thousand years later, René Descartes took the idea radical. In 1637 he decided to doubt EVERYTHING he could possibly doubt — every sense, every memory, every belief he'd absorbed from his teachers. He stripped his thinking down until he hit one thing he couldn't doubt: the fact that he was thinking. <em>Cogito ergo sum</em> — I think, therefore I am. From that single first principle, he tried to rebuild philosophy. Whether he succeeded is debated. The method changed everything.

Richard Feynman, the 20th-century physicist, brought the discipline back to working scientists. His famous warning: <em>"I learned very early the difference between knowing the NAME of something and knowing something."</em> Most people, he argued, hold beliefs because they've heard them repeated — not because they've verified them from the ground up. Verification is everything; familiarity is nothing.

In 2002, Elon Musk wanted rockets to Mars. Quotes from aerospace manufacturers: $65 million per rocket. The numbers made his vision impossible. Instead of accepting the price, he asked Aristotle's question: <em>what is a rocket actually MADE OF?</em> Aerospace-grade aluminium, titanium, copper, carbon fibre — commodity materials available on the open market. He looked up the price of each raw material. The total: about 2% of the quoted rocket price. So SpaceX started building rockets instead of buying them. The Falcon 9 costs around $62M to manufacture vs $150–300M for competitors. Same insight Aristotle had. Different century.

Most thinking happens by analogy: <strong>"how do other people do this?"</strong> Then "do that, but a little better." Faster, safer, bounded by what already exists. First-principles thinking is the opposite: <strong>"what IS this thing, fundamentally?"</strong> Then "what's the simplest way to make it from scratch?" Slower, harder, sometimes embarrassing — and the only path to the truly new.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Slow database query, taking 8 seconds. Convention: add an index, tune the query, increase server memory — apply known optimisations. First principles: what is this query ACTUALLY computing? Often the real answer needs 200 rows out of 50 million scanned. Redesign the data model — pre-compute and store the 200 rows. Query time drops to 0.05 seconds. The optimisation tutorial would have given you 4 seconds. First principles gave you 0.05." },
      { domain: "Everyday Life", icon: "💡", text: "Indian weddings 'cost' ₹20–50 lakhs because 'that's what weddings cost.' First principles: what IS a wedding? Two people declaring commitment, in front of people they love, with food and music. Honest cost of those components: ₹2–5 lakhs. The remaining ₹15–45 lakhs is convention — banquet halls, designer outfits, ceremonial photographers — none of which appear in the actual definition. Convention isn't bad. But it's not the same as necessity." },
      { domain: "Business", icon: "📊", text: "Tesla applied this to batteries. Industry quote in 2010: $600/kWh — accepted as the physical lower bound. Musk's engineers broke a cell down to its raw metals: cobalt, nickel, aluminium, lithium, carbon. Material cost: $80/kWh. The remaining $520 was the cost of NOT thinking from first principles — supply-chain inefficiency, intermediaries, conventional manufacturing. Today, Tesla cells run roughly $130/kWh. The 'physics' floor was a convention floor wearing a physics costume." }
    ],
    howTo: [
      "Write the belief or assumption DOWN, in your own words. You can't interrogate what you can't see — the first move is making the implicit explicit.",
      "Ask 'is this TRUE?' — not 'is this useful?' or 'is this conventional?' Truth is the only foundation. The other two are downstream.",
      "Apply the 5 Whys: drill into the belief by asking 'why?' five times. Each why peels off a layer of assumption. The first is easy. The fifth often hits something you've never thought through.",
      "Distinguish PHYSICS from CONVENTION. Some constraints are reality (a kilogram of aluminium costs the metal price). Others are 'how it's done' (rockets cost $65M because aerospace is structured a certain way). Convention can be challenged. Physics can't.",
      "Stop when you hit something verifiable independently — a physical law, a measurable fact, a basic definition. That is your first principle.",
      "Rebuild ONLY what's needed for your specific goal. Don't reconstruct convention that already works correctly. First principles is for the parts that are stuck or expensive — not everything you touch.",
      "Test your reconstruction against reality before scaling. First-principles thinking can produce confident-sounding errors when you're missing knowledge you don't know you're missing."
    ],
    watchOut: [
      { title: "Don't first-principles everything", text: "This is expensive thinking. Time, energy, social capital. Use it for high-stakes, expensive, or stuck problems. For everyday decisions — what coffee to order, which email to send first — convention is fine. Convention exists because most of the time, it works." },
      { title: "You still need domain knowledge", text: "Musk spent years studying aerospace before concluding rockets were overpriced. First-principles thinking isn't beginner's luck. Without enough knowledge to identify which assumptions are load-bearing vs vestigial, you'll question the wrong things AND accept the wrong things." },
      { title: "The 'expert in 30 minutes' trap", text: "A few hours of first-principles thinking in an unfamiliar domain feels powerful. It usually isn't. Medicine, law, climate science contain decades of accumulated knowledge experts spent careers absorbing. Your 'fresh insight' is often Dunning-Kruger dressed in better clothes." },
      { title: "The social cost is real", text: "First-principles conclusions often contradict received wisdom. People will dismiss you — even when you're right. Musk was mocked for SpaceX in 2002. The conviction needed to push through requires either huge confidence (which can fail you) or huge evidence (which takes time to gather). Be prepared to be alone for a while." }
    ],
    related: ["inversion", "second-order", "occam"],
    interactive: "first-principles-breakdown",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="155" y="20" width="90" height="36" fill="#4cc9f0" rx="6" class="float"/>
  <text x="175" y="44" font-size="14" fill="#0e0e1a" font-weight="700" font-family="system-ui">PROBLEM</text>
  <line x1="200" y1="56" x2="200" y2="80" stroke="#4cc9f0" stroke-width="2" stroke-dasharray="4,3"/>
  <rect x="100" y="80" width="80" height="30" fill="#c77dff" rx="5"/>
  <text x="115" y="100" font-size="11" fill="#0e0e1a" font-weight="600" font-family="system-ui">Assumption</text>
  <rect x="220" y="80" width="80" height="30" fill="#c77dff" rx="5"/>
  <text x="235" y="100" font-size="11" fill="#0e0e1a" font-weight="600" font-family="system-ui">Convention</text>
  <line x1="140" y1="110" x2="160" y2="135" stroke="#9090b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="260" y1="110" x2="240" y2="135" stroke="#9090b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <rect x="130" y="135" width="60" height="26" fill="#ffd166" rx="5" class="float" style="animation-delay:.4s"/>
  <rect x="210" y="135" width="60" height="26" fill="#ffd166" rx="5" class="float" style="animation-delay:.7s"/>
  <line x1="160" y1="161" x2="180" y2="185" stroke="#9090b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="240" y1="161" x2="220" y2="185" stroke="#9090b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <rect x="155" y="185" width="90" height="30" fill="#06d6a0" rx="5" class="pulse"/>
  <text x="170" y="205" font-size="11" fill="#0e0e1a" font-weight="700" font-family="system-ui">TRUTH ✓</text>
</svg>`
  },

  "second-order": {
    id: "second-order",
    name: "Second-Order Thinking",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Then what? AND then what after that?",
    summary: "Most decisions are evaluated on immediate effects. Second-order thinkers trace consequences 2, 3, 4 steps deeper.",
    origin: "Howard Marks, investor (book 'The Most Important Thing'). Concept dates back to military and chess strategy.",
    story: `Howard Marks, the legendary investor at Oaktree Capital, built his career on a simple observation: most people stop thinking after the first consequence. They see a benefit and act. They don't ask "and then what?"

First-order thinking: "I'll eat 10 cookies. Yum!"
Second-order: "Then I'll feel sick. Then I'll skip dinner. Then I won't sleep well. Then tomorrow's meeting suffers."

In investing, Marks describes how everyone sees the same news. The first-order reaction ("good news → buy") is already priced in by the time you act. The money is made by people who think about second-order effects: "good news today, but what does that imply about supply, competition, regulation in 6 months?"

The pattern repeats everywhere. Policy decisions, business strategy, personal choices, parenting. The first effect is what you intended. The second is what you didn't see coming. The third is where things get either great or catastrophic.

The discipline: train yourself to stop after every decision and force one more "and then what?"`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Add caching to speed up an API. (Order 1: faster response.) Order 2: stale data sometimes shown. Order 3: support tickets about wrong info. Order 4: trust erodes. The 'fix' creates a worse problem if you stop at order 1." },
      { domain: "Everyday Life", icon: "🧠", text: "Skip your morning workout to start work early. (Order 1: more time today.) Order 2: low energy by 2pm. Order 3: less productive afternoon. Order 4: net less work done." },
      { domain: "Business", icon: "📊", text: "Cut prices to win customers. (Order 1: more sales.) Order 2: competitors match. Order 3: price war. Order 4: industry margins destroyed for everyone, including you. Most price wars start with 'this is a great move.'" }
    ],
    howTo: [
      "State the decision and its first effect (what you're hoping for).",
      "Ask: 'And then what happens?'",
      "Note that effect. Then ask 'and then?' again.",
      "Continue 3–5 levels deep.",
      "Make your decision based on the deepest order, not the first."
    ],
    watchOut: [
      { title: "Don't go infinite", text: "Stop at 3–4 levels. Beyond that, predictions become speculation. The discipline is moving past order 1 — not modelling order 12." },
      { title: "Some second-order effects don't materialise", text: "Predictions are uncertain. Don't refuse a clearly good decision because of imagined cascading consequences. Use second-order as a check, not a veto." }
    ],
    related: ["inversion", "first-principles", "sunk-cost"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="150" r="14" fill="#4cc9f0"/>
  <text x="38" y="190" font-size="11" fill="#4cc9f0" font-family="system-ui" font-weight="700">act</text>
  <circle cx="130" cy="150" r="22" fill="#4cc9f0" opacity="0.7"/>
  <text x="115" y="200" font-size="11" fill="#4cc9f0" font-family="system-ui">then</text>
  <circle cx="220" cy="150" r="32" fill="#4cc9f0" opacity="0.5"/>
  <text x="208" y="210" font-size="11" fill="#4cc9f0" font-family="system-ui">then</text>
  <circle cx="330" cy="150" r="44" fill="#4cc9f0" opacity="0.3" class="pulse"/>
  <text x="312" y="220" font-size="11" fill="#4cc9f0" font-family="system-ui" font-weight="700">THEN</text>
  <line x1="64" y1="150" x2="108" y2="150" stroke="#4cc9f0" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="152" y1="150" x2="188" y2="150" stroke="#4cc9f0" stroke-width="1" stroke-dasharray="3,3" opacity="0.7"/>
  <line x1="252" y1="150" x2="286" y2="150" stroke="#4cc9f0" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
</svg>`
  },

  reversibility: {
    id: "reversibility",
    name: "Reversibility",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Reversible: try fast. One-way doors: think hard.",
    summary: "Match decision speed to whether you can undo it. Most decisions are reversible — those should be fast.",
    origin: "Jeff Bezos, Amazon shareholder letter, 1997.",
    story: `In Amazon's 1997 letter to shareholders, Jeff Bezos divided decisions into two types. Type 1: "one-way doors" — irreversible, consequential. Take time, deliberate, get input, run pre-mortems. Type 2: "two-way doors" — reversible. If you're wrong, you can step back. Move fast.

Bezos's insight: most companies treat all decisions like Type 1. They build slow, cautious processes for everything. The result is paralysis — death by deliberation. Amazon's edge was recognising that 90% of decisions are Type 2 and applying speed to them.

The mistake works in both directions. Treating Type 1 like Type 2 (deciding quickly on something you can't undo) is catastrophic. Treating Type 2 like Type 1 (agonising over reversible choices) burns time and demoralises teams.

The skill is correctly classifying which kind of decision you're facing. Most are reversible. A surprising number of "permanent" decisions actually aren't — they just feel embarrassing to undo.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Try a new framework on a small project? Two-way door. Just try it. Pick a database for your core platform with millions of rows? One-way door. Spend the time." },
      { domain: "Everyday Life", icon: "💡", text: "Try a new haircut? Two-way (grows back in weeks). Get a tattoo? One-way (mostly). Change jobs? Mostly two-way — old companies often rehire returning employees." },
      { domain: "Business", icon: "📊", text: "Run a pricing experiment for 30 days? Two-way. Acquire another company? One-way. Knowing the difference shapes how much process you should add." }
    ],
    howTo: [
      "Classify the decision: reversible or not?",
      "If reversible: decide in seconds or minutes. Try. Adjust.",
      "If irreversible: take real time. Get diverse input. Run a pre-mortem.",
      "Don't conflate the two. Speed on Type 1 = disaster. Slow on Type 2 = paralysis.",
      "Ask: 'Is this actually irreversible, or just embarrassing to reverse?' Often it's the latter."
    ],
    watchOut: [
      { title: "Some 'reversible' decisions aren't", text: "Firing someone is technically reversible but emotionally destructive. Posting something publicly might be 'deletable' but the screenshot exists. Audit assumed reversibility carefully." },
      { title: "One-way doors aren't always one-way", text: "Many 'permanent' decisions can be undone at a cost. Marriage. Job changes. Business pivots. The cost is real but doesn't make it impossible. Don't paralyse on illusion." }
    ],
    related: ["opportunity", "sunk-cost", "second-order"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="80" width="120" height="160" fill="#06d6a0" rx="10"/>
  <circle cx="155" cy="160" r="6" fill="#0e0e1a"/>
  <text x="86" y="262" font-size="13" fill="#06d6a0" font-family="system-ui" font-weight="700">⇄ TWO-WAY</text>
  <text x="78" y="278" font-size="11" fill="#9090b8" font-family="system-ui">decide fast</text>
  <rect x="220" y="80" width="120" height="160" fill="#ef476f" rx="10"/>
  <circle cx="315" cy="160" r="6" fill="#0e0e1a"/>
  <text x="244" y="262" font-size="13" fill="#ef476f" font-family="system-ui" font-weight="700">→ ONE-WAY</text>
  <text x="240" y="278" font-size="11" fill="#9090b8" font-family="system-ui">deliberate</text>
</svg>`
  },

  /* ═══════════════ MIND TRAPS ═══════════════ */

  confirmation: {
    id: "confirmation",
    name: "Confirmation Bias",
    cat: "Mind Traps",
    catColor: "#ef476f",
    tagline: "You find what you're already looking for.",
    summary: "The brain automatically collects evidence that confirms existing beliefs and ignores everything that contradicts them.",
    origin: "Named and studied by Peter Wason (1960). One of the most replicated findings in cognitive psychology.",
    story: `In 1960, psychologist Peter Wason gave participants a simple puzzle. He showed them the sequence 2 — 4 — 6 and said it followed a rule. Their job: discover the rule by testing other sequences. Wason would tell them if each new sequence fit the rule.

Nearly everyone tested sequences like 8, 10, 12 or 14, 16, 18 — all following their hypothesis ("even numbers going up by 2"). Almost nobody tested 1, 2, 3. Almost nobody tested 10, 7, 3.

The actual rule was simply: any three numbers in ascending order.

The participants didn't fail because they were stupid. They failed because the human brain is wired to confirm, not to test. Every brain does this — yours, mine, every expert's. It's a default operating mode, not a flaw in certain people.

This is why echo chambers form online. Why smart people hold beliefs that don't survive scrutiny. Why code reviews miss bugs the author wrote. The brain builds a story and then searches for supporting evidence — editing out everything else.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Code review: the author reads their own code and sees what they intended it to do. They miss the bug because their brain fills in the expected behaviour. This is why review by someone else is so valuable — a fresh brain has no story to confirm." },
      { domain: "Everyday Life", icon: "🏡", text: "Apartment hunting: once you fall in love with one, you notice all its good features and explain away the bad ones. Other apartments suddenly feel wrong. Your brain picked a winner and stopped evaluating." },
      { domain: "Business", icon: "📊", text: "Customer discovery: founders interview 10 potential customers. They unconsciously ask questions that invite validation ('You'd find this useful, right?') and unconsciously ignore signals that contradict their thesis." }
    ],
    howTo: [
      "Name your current belief clearly: 'I believe X is true.'",
      "Ask: 'What would prove me WRONG?' — then actually look for it.",
      "Find your smartest critic and genuinely listen without defending.",
      "Pre-mortem: imagine the project failed. What was the reason?",
      "Separate data collection from interpretation — get raw info before analysing."
    ],
    watchOut: [
      { title: "You cannot eliminate it — only manage it", text: "Confirmation bias is a factory setting. The goal is building systems that compensate: checklists, devil's advocates, blind reviews, structured decision processes. Willpower alone won't fix it." },
      { title: "Don't overcorrect into contrarianism", text: "Deliberately seeking disconfirmation doesn't mean every mainstream view is wrong. Sometimes the evidence really does support the popular belief. The goal is testing, not reflexive opposition." }
    ],
    related: ["inversion", "availability", "survivorship"],
    interactive: "wason-task",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs><filter id="blr"><feGaussianBlur stdDeviation="3"/></filter></defs>
  <circle cx="200" cy="150" r="90" fill="#ef476f" fill-opacity="0.08" stroke="#ef476f" stroke-width="1" stroke-opacity="0.3"/>
  <circle cx="200" cy="150" r="55" fill="#ef476f" fill-opacity="0.12" stroke="#ef476f" stroke-width="1.5" stroke-opacity="0.5"/>
  <text x="178" y="165" font-size="36" class="pulse">✅</text>
  <text x="60" y="70" font-size="28" opacity="0.2" filter="url(#blr)">❌</text>
  <text x="310" y="70" font-size="28" opacity="0.2" filter="url(#blr)">❌</text>
  <text x="50" y="240" font-size="28" opacity="0.15" filter="url(#blr)">❌</text>
  <text x="315" y="240" font-size="28" opacity="0.15" filter="url(#blr)">❌</text>
  <text x="105" y="270" font-size="13" fill="#ef476f" font-family="system-ui" text-anchor="middle">Sees what fits</text>
  <text x="300" y="270" font-size="13" fill="#9090b8" font-family="system-ui" text-anchor="middle">Ignores the rest</text>
</svg>`
  },

  survivorship: {
    id: "survivorship",
    name: "Survivorship Bias",
    cat: "Mind Traps",
    catColor: "#ef476f",
    tagline: "You only hear from the winners.",
    summary: "The losers, failures, and dropouts are invisible. Conclusions drawn only from survivors are wildly misleading.",
    origin: "Statistician Abraham Wald, 1943. Studying WWII bomber damage.",
    story: `During WWII, the US military wanted to add armour to its bombers. They studied returning planes and found the damage clustered on wings, tails, and the rear fuselage. The conclusion seemed obvious: armour those areas.

Statistician Abraham Wald said: STOP. You're studying the wrong planes.

The bombers you're examining are the ones that came back. Where they have damage, the plane survived. Where you DON'T see damage on returning planes — engines, cockpit, fuel system — those are exactly the spots where hits are fatal. The planes that took those hits never returned to be examined.

Add armour to the parts WITHOUT visible damage on survivors.

This single insight saved countless lives. And it generalises everywhere. Whenever you look at a population of "winners" — successful startups, famous YouTubers, people who quit their jobs and got rich — you're only seeing the survivors. The thousands who tried the same thing and failed are invisible. Their absence distorts every conclusion.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "'All the great engineers I know dropped out of college!' True statement. Also: 99% of college dropouts didn't become great engineers. You're hearing from survivors, not from the population." },
      { domain: "Everyday Life", icon: "🎬", text: "Famous YouTubers say 'just be yourself!' True for them. Also: millions of people were themselves and got 0 subscribers. The advice is filtered through a survival filter you can't see." },
      { domain: "Business", icon: "📊", text: "Books about successful startups extract patterns from survivors. The same patterns exist in failed startups. Without studying both, you can't tell which patterns are causal and which are coincidence." }
    ],
    howTo: [
      "Hear a success formula? Ask: who tried the same thing and failed?",
      "Look for the dataset of failures. If it doesn't exist, conclusions are unreliable.",
      "Be especially sceptical of post-hoc explanations from successful people.",
      "Look at base rates: what percentage of people who tried this succeeded?",
      "When making a bet, study failures more than successes."
    ],
    watchOut: [
      { title: "Sometimes survivors did do something special", text: "Don't dismiss all advice as survivorship bias. Some patterns really are causal. The point is to verify with non-survivors, not to ignore everyone successful." },
      { title: "Failure data is hard to find", text: "People don't write 'why my startup failed' as eagerly as 'why my startup succeeded.' Be patient and creative in finding the missing half of the dataset." }
    ],
    related: ["confirmation", "availability", "anchoring"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <text x="60" y="160" font-size="80" class="float">✈️</text>
  <circle cx="135" cy="115" r="6" fill="#ef476f"/>
  <circle cx="160" cy="125" r="6" fill="#ef476f"/>
  <circle cx="115" cy="140" r="6" fill="#ef476f"/>
  <circle cx="180" cy="135" r="6" fill="#ef476f"/>
  <text x="240" y="140" font-size="48" opacity="0.2">✈️</text>
  <text x="310" y="120" font-size="36" opacity="0.12">✈️</text>
  <text x="80" y="240" font-size="13" fill="#ef476f" font-family="system-ui" font-weight="700">visible (survivors)</text>
  <text x="220" y="240" font-size="13" fill="#9090b8" font-family="system-ui">invisible (didn't return)</text>
  <text x="60" y="265" font-size="11" fill="#9090b8" font-family="system-ui">→ armour where damage ISN'T</text>
</svg>`
  },

  "sunk-cost": {
    id: "sunk-cost",
    name: "Sunk Cost Fallacy",
    cat: "Mind Traps",
    catColor: "#ef476f",
    tagline: "Don't keep going just because you've already started.",
    summary: "Past investments shouldn't drive future decisions. The money, time, or effort is gone whether you continue or not.",
    origin: "Microeconomic concept; popularised in psychology research by Hal Arkes & Catherine Blumer (1985).",
    story: `You're 30 minutes into a movie. It's terrible. Some people walk out. Most stay because "I already paid for the ticket."

But the money is gone whether you stay or leave. Staying just adds wasted TIME on top of wasted money. The rational choice is to leave. The emotional choice is to stay.

This is the sunk cost fallacy: letting past investments drive future decisions, even when those investments are irretrievable. The brain treats walking away as "admitting waste," so it doubles down to feel like the original investment "still counts."

The damage is enormous. People stay in bad jobs because they "invested 5 years." Companies pour millions into failing projects because they've "already spent so much." Couples stay in dysfunctional relationships out of "history."

The cure is uncomfortable but simple: imagine you're starting fresh today. Would you START this thing now, knowing what you know? If no, walking away isn't waste — continuing is. The waste already happened. The choice now is whether to add more.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Spent 2 weeks building a feature with the wrong architecture. Pressure to 'just finish it.' But the right move is rebuilding correctly — the 2 weeks are gone either way. Continuing wastes more." },
      { domain: "Everyday Life", icon: "💡", text: "Read 200 pages of a book you hate. Quitting feels wrong. But finishing means burning 5 more hours on something that won't pay off. Reading time is finite." },
      { domain: "Business", icon: "📊", text: "Million dollars sunk into a failing project. The instinct: 'we can't quit now, we've invested too much.' But money already spent doesn't predict future success. The next million is what matters." }
    ],
    howTo: [
      "Notice the phrase 'I've already invested so much in this.'",
      "That's the warning sign. Stop and reset.",
      "Imagine you're deciding fresh, with no prior investment.",
      "Would you START this today? If no, continuing is the waste.",
      "Cut. Redirect resources. Past spending is a fact, not an obligation."
    ],
    watchOut: [
      { title: "Not all 'stick with it' is sunk cost", text: "Sometimes effort really IS about to pay off — that's why you started. Distinguish: are you continuing because of evidence it'll work, or because you can't stomach quitting? Be honest." },
      { title: "Reputational sunk costs are real", text: "Quitting publicly has social costs that ARE valid future considerations (not sunk). Just be sure the social cost is real, not exaggerated by your discomfort." }
    ],
    related: ["opportunity", "second-order", "reversibility"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="200" cy="220" rx="80" ry="14" fill="#9090b8" opacity="0.3"/>
  <text x="120" y="180" font-size="44" fill="#ef476f" class="float">💸</text>
  <text x="180" y="180" font-size="44" fill="#ef476f" class="float" style="animation-delay:.4s">💸</text>
  <text x="240" y="180" font-size="44" fill="#ef476f" class="float" style="animation-delay:.8s">💸</text>
  <path d="M150,200 Q200,230 250,200" stroke="#ef476f" stroke-width="2" fill="none"/>
  <text x="100" y="265" font-size="13" fill="#9090b8" font-family="system-ui">already gone — don't throw more after it</text>
</svg>`
  },

  anchoring: {
    id: "anchoring",
    name: "Anchoring Bias",
    cat: "Mind Traps",
    catColor: "#ef476f",
    tagline: "First number you hear glues to your brain.",
    summary: "Initial reference points distort all subsequent judgements — even when the reference is irrelevant or random.",
    origin: "Amos Tversky & Daniel Kahneman, 1974.",
    story: `Tversky and Kahneman ran a famous experiment. They spun a wheel of fortune in front of subjects (rigged to land on either 10 or 65), then asked: 'What percentage of African countries are members of the UN?'

Subjects who saw 10 guessed lower (~25%). Subjects who saw 65 guessed higher (~45%). The random number anchored their estimate, even though everyone knew the wheel was random and unrelated to the UN.

Anchoring is one of the most reliable cognitive biases ever measured. It survives education, expertise, even being told about anchoring. The first number you encounter pulls all subsequent numbers toward it.

This is why retailers display 'WAS ₹3000, NOW ₹1200!' The brain anchors on ₹3000 — even if the real value is ₹500. It's why salary negotiations are won or lost in the first offer. Why polls phrase questions carefully. Why charities lead with 'every year, X people die.'

You can't eliminate it. But you can NOTICE it — and that's most of the battle.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Asked to estimate a project. Someone says 'similar work took team B 2 months.' Your estimate is now anchored to 2 months — regardless of whether your project is genuinely similar. The anchor pulls you." },
      { domain: "Everyday Life", icon: "🛍️", text: "'This shirt was ₹3000, now ₹1200!' Brain says: deal! But the real value of the shirt might be ₹500. You're anchored on the original price tag, which the seller chose specifically to anchor you." },
      { domain: "Business", icon: "📊", text: "Salary negotiation. Employer says ₹15L. You counter ₹17L. You wanted ₹25L but you're now anchored. The first number set the conversation's range — and they chose it." }
    ],
    howTo: [
      "Before any negotiation or estimate, decide YOUR number first.",
      "Avoid hearing their number until you've committed to yours.",
      "If anchored, REJECT the anchor explicitly: 'I'm going to set that aside.'",
      "Re-evaluate from scratch using independent data.",
      "Use ranges, not points — they're harder to anchor."
    ],
    watchOut: [
      { title: "You can't fully avoid this", text: "Even people who know about anchoring are anchored. The goal is reducing the effect, not eliminating it. Be humble." },
      { title: "Don't refuse all reference points", text: "Some anchors are useful information. The question is whether they're earned references or strategic plants. Distinguish before discarding." }
    ],
    related: ["confirmation", "availability", "dunning-kruger"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="100" font-size="56" class="float">⚓</text>
  <line x1="200" y1="120" x2="200" y2="220" stroke="#ef476f" stroke-width="2" stroke-dasharray="3,3"/>
  <text x="100" y="180" font-size="20" fill="#9090b8" font-family="system-ui" text-decoration="line-through">₹3000</text>
  <text x="220" y="180" font-size="22" fill="#ef476f" font-family="system-ui" font-weight="900">₹1200</text>
  <text x="120" y="260" font-size="13" fill="#9090b8" font-family="system-ui" text-anchor="middle">first number anchors brain</text>
</svg>`
  },

  availability: {
    id: "availability",
    name: "Availability Heuristic",
    cat: "Mind Traps",
    catColor: "#ef476f",
    tagline: "What's easy to remember FEELS more common.",
    summary: "The brain estimates frequency by recall ease. Vivid, recent, or emotional events feel more likely than they are.",
    origin: "Amos Tversky & Daniel Kahneman, 1973.",
    story: `Tversky and Kahneman noticed that people estimate how COMMON something is by how EASILY they can recall examples of it.

Plane crashes are vivid, on the news, memorable. People overestimate their frequency. Car crashes are common but boring — underestimated. Result: people fear flying more than driving, despite driving being far more dangerous per mile.

This isn't laziness. It's how the brain saves energy. Recalling examples is fast; calculating actual base rates is slow. So the brain takes a shortcut: 'I can think of 5 examples easily, so it must be common.'

The heuristic is mostly fine for evolutionary contexts (a tribe member who can quickly recall 'tigers attacked here' is useful). But in modern environments saturated with media — where vivid events are amplified far beyond their actual frequency — the heuristic systematically misleads.

This is why people fear shark attacks, terrorism, and home invasions more than the things actually likely to kill them (heart disease, car accidents, falls). What we SEE in our minds dominates what's TRUE.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Recent production incident? Team obsesses over THAT category of problem. Other classes of risk get ignored — even though the recent one was a one-off, and the ignored ones are systemic." },
      { domain: "Everyday Life", icon: "📺", text: "Watch news about crime → think crime is rising. Statistics often show it's falling. Vividness ≠ frequency. The news selects rare-but-shocking, by design." },
      { domain: "Business", icon: "📊", text: "Just heard about a competitor making a flashy announcement? Suddenly you think the industry is moving fast. Maybe — or maybe you only saw the loudest event of the month." }
    ],
    howTo: [
      "Notice when 'feels common' is your evidence.",
      "Pause. Look up actual base rates instead.",
      "Be especially sceptical of frequencies you learned through media.",
      "Vividness is an unreliable proxy for probability.",
      "Anchor on data, not gut. Trust the spreadsheet over the headline."
    ],
    watchOut: [
      { title: "Recall isn't all wrong", text: "Sometimes 'I keep seeing this' IS evidence of a real pattern. Use availability as a HINT to look up data, not as a final answer to discard." },
      { title: "Don't dismiss your intuition entirely", text: "Vivid memories sometimes encode real signal. The discipline is checking, not blindly trusting OR blindly rejecting." }
    ],
    related: ["anchoring", "confirmation", "survivorship"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <text x="80" y="160" font-size="80">🦈</text>
  <text x="220" y="160" font-size="50" opacity="0.4">🚗</text>
  <text x="60" y="230" font-size="13" fill="#ef476f" font-family="system-ui" font-weight="700">FEELS scarier</text>
  <text x="60" y="248" font-size="11" fill="#9090b8" font-family="system-ui">vivid + dramatic</text>
  <text x="220" y="230" font-size="13" fill="#06d6a0" font-family="system-ui" font-weight="700">ACTUALLY riskier</text>
  <text x="220" y="248" font-size="11" fill="#9090b8" font-family="system-ui">10000× more deaths</text>
</svg>`
  },

  "dunning-kruger": {
    id: "dunning-kruger",
    name: "Dunning-Kruger Effect",
    cat: "Mind Traps",
    catColor: "#ef476f",
    tagline: "The less you know, the more you THINK you know.",
    summary: "Beginners overestimate their competence because they lack the skill to evaluate it. Experts underestimate because they see the depth.",
    origin: "David Dunning & Justin Kruger, 1999 (Cornell University).",
    story: `Two psychologists at Cornell tested how accurately people judged their own competence. The results were striking: people who scored WORST on tests rated their own performance HIGHEST. People who scored BEST rated themselves more modestly.

Why? To know you're bad at something, you need enough skill to evaluate it. Beginners are confident because they don't yet see the mountain ahead. Experts are humble because they see exactly how much they don't know.

This isn't a flaw — it's structural. The same skill required to do something well is required to evaluate doing it well. Without the meta-skill, you can't tell what you're missing.

Day 1 with a new framework: 'This is easy!' Week 2: 'Wait, this is hard. I'm trash.' Year 1: 'OK, I know some things, but I now see there's a lot more.' Year 5: 'I have so much to learn.' This curve is universal. It's why founders are over-confident, drivers think they're above-average, and undergrads believe they understand economics.

The cure is awareness — and consistently checking your work against people who actually know.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Day 1 with a new language: 'I'm a pro!' Week 2: 'I'm trash, this is hard.' Year 1: 'I know enough to be useful.' Year 5: 'I see how deep this rabbit hole goes.' This curve is the engineer's lifecycle." },
      { domain: "Everyday Life", icon: "🚗", text: "New drivers consistently rate themselves as above-average drivers. Statistically impossible — half must be below average. The least skilled rate themselves the highest." },
      { domain: "Business", icon: "📊", text: "First-time founder: 'We'll disrupt this market in 6 months.' Experienced founder: 'Here are 47 things that might kill us, let me think through each.' The experience shows in the humility." }
    ],
    howTo: [
      "Starting something new? Assume you're worse than you think.",
      "Find an expert. Let them correct you. Don't defend.",
      "Ship work and get external feedback regularly.",
      "Be especially sceptical of your own confidence in early days.",
      "Stay teachable forever — the moment you stop learning, the curve catches up."
    ],
    watchOut: [
      { title: "Don't paralyse yourself with self-doubt forever", text: "There IS a curve — you eventually become competent. The point is humility while learning, not endless impostor syndrome after you're skilled." },
      { title: "Experts have blind spots too", text: "Doesn't mean experts are always right. Even experts have areas of confident-but-wrong. The discipline applies at every level." }
    ],
    related: ["confirmation", "anchoring", "fence"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="240" x2="370" y2="240" stroke="#9090b8" stroke-width="1"/>
  <line x1="40" y1="240" x2="40" y2="40" stroke="#9090b8" stroke-width="1"/>
  <path d="M40,220 Q70,40 130,220 Q200,260 280,150 Q330,80 370,50" stroke="#ef476f" stroke-width="3" fill="none"/>
  <circle cx="80" cy="80" r="6" fill="#ef476f" class="pulse"/>
  <text x="92" y="75" font-size="11" fill="#ef476f" font-family="system-ui" font-weight="600">"I'm a pro!"</text>
  <circle cx="155" cy="232" r="6" fill="#ffd166"/>
  <text x="120" y="258" font-size="11" fill="#ffd166" font-family="system-ui">"I'm trash"</text>
  <circle cx="350" cy="60" r="6" fill="#06d6a0"/>
  <text x="280" y="40" font-size="11" fill="#06d6a0" font-family="system-ui" font-weight="600">actually skilled</text>
  <text x="40" y="280" font-size="11" fill="#9090b8" font-family="system-ui">experience →</text>
  <text x="20" y="55" font-size="11" fill="#9090b8" font-family="system-ui" transform="rotate(-90, 20, 55)">confidence</text>
</svg>`
  },

  /* ═══════════════ TIME & EFFORT ═══════════════ */

  opportunity: {
    id: "opportunity",
    name: "Opportunity Cost",
    cat: "Time & Effort",
    catColor: "#ffd166",
    tagline: "Saying yes to one = saying no to another.",
    summary: "Every choice has a hidden price tag — the value of the alternatives you didn't pick.",
    origin: "Frédéric Bastiat, 1850 ('What is Seen and What is Not Seen').",
    story: `In 1850, French economist Frédéric Bastiat wrote an essay titled 'What is Seen and What is Not Seen.' His insight: when you make any choice, the visible benefit is obvious, but the invisible cost — what you could have done instead — is the REAL price.

If you spend ₹10,000 on a phone, the cost isn't ₹10,000. The cost is everything else that ₹10,000 could have bought: a course, a trip, an investment. That set of alternatives is the opportunity cost.

This applies to every resource: money, time, attention, relationships. Every 'yes' is a hidden 'no.' Every hour spent on one thing is an hour not spent on anything else.

Most people only see the seen — the thing they chose. They don't grieve the unchosen alternatives. This makes them feel rich, but it also makes them oblivious to the real economics of their choices.

Charlie Munger frames it sharply: 'The first thing you have to do is invert. The second thing is to ask, what's the opportunity cost?' Almost every decision improves when you stop asking 'is this good?' and start asking 'what better thing am I giving up?'`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Spent 2 hours debugging a trivial issue. The cost wasn't 2 hours — it was the feature you didn't build, the meeting you skipped, the documentation you didn't write. Trivial bugs have non-trivial opportunity costs." },
      { domain: "Everyday Life", icon: "💡", text: "Buy a ₹1,00,000 watch. Cost isn't the money — it's the trip you can't take, the stocks you didn't buy, the months of compounding lost. Things often look cheap when you ignore opportunity cost." },
      { domain: "Business", icon: "📊", text: "Hire an engineer for project A. The cost includes the engineer you can't hire for project B — and the revenue project B would have produced. Resources are zero-sum at any moment." }
    ],
    howTo: [
      "Before saying yes, ask: 'What am I saying NO to by doing this?'",
      "List 3 alternatives explicitly. Compare values, not just the focal option.",
      "Apply this to time, not just money. Hours don't refund.",
      "Say no fast to low-value asks — the opportunity cost compounds.",
      "Track what you give up. Calibrate over time."
    ],
    watchOut: [
      { title: "Don't paralyse on alternatives", text: "There are infinite alternatives. At some point, choose. The discipline is acknowledging the cost — not avoiding decisions because cost exists." },
      { title: "Some opportunity costs are imaginary", text: "Be realistic about what was actually possible. The 'lost trip' was only an alternative if you could and would have actually taken it. Hypothetical alternatives don't count." }
    ],
    related: ["pareto", "sunk-cost", "second-order"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="80" width="120" height="160" fill="#ffd166" rx="10" class="pulse"/>
  <text x="98" y="170" font-size="48">🍭</text>
  <text x="76" y="262" font-size="14" fill="#ffd166" font-family="system-ui" font-weight="800">CHOSEN</text>
  <rect x="220" y="80" width="120" height="160" fill="#9090b8" rx="10" opacity="0.3"/>
  <text x="258" y="170" font-size="48" opacity="0.4">🧸</text>
  <text x="234" y="262" font-size="14" fill="#9090b8" font-family="system-ui" font-weight="800">GIVEN UP</text>
  <text x="200" y="290" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">every yes = a hidden no</text>
</svg>`
  },

  pareto: {
    id: "pareto",
    name: "Pareto Principle",
    cat: "Time & Effort",
    catColor: "#ffd166",
    tagline: "20% of causes create 80% of results.",
    summary: "Effort and outcomes are wildly unequal. Find the small number of things that drive most of the value.",
    origin: "Vilfredo Pareto (1896). Applied to quality management by Joseph Juran.",
    story: `Vilfredo Pareto was an Italian economist who in 1896 noticed something odd about land ownership in Italy: 80% of the land was owned by 20% of the population. He found this ratio so striking that he checked his own garden — and found that 20% of his pea pods contained 80% of the peas.

He began checking everywhere. Tax records across multiple countries: roughly the same ratio. Wealth distribution: similar pattern. The exact numbers varied, but the principle held: outcomes cluster around a small number of inputs.

Joseph Juran, a quality management consultant in the 1940s, applied this to manufacturing and called it 'the vital few and the trivial many.' His insight: fix the top 20% of defects and you eliminate 80% of your quality problems. This became core to how Japanese manufacturers like Toyota rebuilt after WWII.

The principle shows up everywhere: 20% of bugs cause 80% of crashes. 20% of customers generate 80% of revenue. 20% of features get used 80% of the time. The uncomfortable implication: 80% of what you do today probably doesn't matter much. The question is — which 20%?`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "20% of code contains 80% of the bugs. Profilers consistently show 20% of functions consume 80% of execution time. Don't optimise everything — find the bottleneck and fix that one thing." },
      { domain: "Everyday Life", icon: "👔", text: "Open your wardrobe. You probably wear 20% of your clothes 80% of the time. The rest takes space, creates decision fatigue, and complicates getting dressed. This is why capsule wardrobes work." },
      { domain: "Business", icon: "📊", text: "20% of customers generate 80% of revenue — and often need the least support. Many businesses grow faster by serving best customers better, not acquiring more average ones." }
    ],
    howTo: [
      "List everything contributing to your goal (tasks, customers, features, habits).",
      "Roughly estimate the impact of each.",
      "Sort by impact. Identify the top 20%.",
      "Protect and prioritise those. Cut or delegate the bottom 80%.",
      "Re-run quarterly — the vital few shifts over time."
    ],
    watchOut: [
      { title: "80/20 is a pattern, not a law", text: "The exact numbers vary: sometimes 90/10, sometimes 70/30. The principle is unequal distribution, not 'exactly 80 and 20.' Don't force the numbers; look for the inequality." },
      { title: "The 80% isn't always cuttable", text: "Some 'low-impact' work is load-bearing infrastructure. The 80% of code rarely run might be your error handling. Audit before you cut." }
    ],
    related: ["compounding", "opportunity", "second-order"],
    interactive: "pareto-visual",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="145" r="118" fill="#1a1a2e" stroke="#ffd166" stroke-width="1" stroke-opacity="0.3"/>
  <path d="M200,145 L200,27 A118,118 0 1,1 83,200 Z" fill="#ffd166" fill-opacity="0.85" class="pulse"/>
  <path d="M200,145 L83,200 A118,118 0 0,1 200,27 Z" fill="#ef476f" fill-opacity="0.7"/>
  <text x="145" y="130" font-size="28" font-weight="800" fill="#0e0e1a" font-family="system-ui">80%</text>
  <text x="148" y="155" font-size="12" fill="#0e0e1a" font-family="system-ui">results</text>
  <text x="118" y="220" font-size="16" font-weight="700" fill="#ef476f" font-family="system-ui">20% causes</text>
  <text x="200" y="280" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">the vital few drive almost everything</text>
</svg>`
  },

  parkinson: {
    id: "parkinson",
    name: "Parkinson's Law",
    cat: "Time & Effort",
    catColor: "#ffd166",
    tagline: "Work expands to fill the time you give it.",
    summary: "Tasks swell to consume whatever time is allotted, regardless of how much they actually need.",
    origin: "Cyril Parkinson, British historian, 1955 (essay in The Economist).",
    story: `Cyril Parkinson was studying the British Civil Service when he noticed something strange: as administrative tasks grew, more bureaucrats were hired — but the actual workload didn't increase. Tasks were expanding to consume the available staff.

He generalised the observation into 'Parkinson's Law': work expands to fill the time available for its completion.

If you give yourself a week to write an email, the email takes a week. Give yourself an hour, somehow it gets done in an hour. Same email. Same effort required. The container shapes the contents.

The mechanism is partly procrastination, partly perfectionism, partly that humans are bad at detecting when 'enough' is enough. With time to spare, we polish, we second-guess, we add detail nobody needs. With a tight deadline, we ship the essential and let the rest go.

The implication is liberating: most tasks don't actually need the time we allocate. Cut your estimate in half. Set a tight deadline. Notice that what gets cut is mostly fluff. Repeat.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Got a week to ship a feature? Takes a week. Got two days because of a fire drill? Somehow ships in two days, slightly less polished but functional. Often the tight version was good enough." },
      { domain: "Everyday Life", icon: "📋", text: "Empty Saturday. Errands and chores expand to consume the entire day. Pack the same Saturday with friends and a movie — the chores still get done, in fewer hours." },
      { domain: "Business", icon: "📊", text: "Project deadline 6 months. Ships at 5 months 28 days. Move the deadline to 3 months — mysteriously, it still ships on time. The original 6 months were never required." }
    ],
    howTo: [
      "Estimate honestly how long a task NEEDS — not how long it'll take comfortably.",
      "Set the deadline at half that estimate.",
      "Force the artificial constraint. Don't let yourself slide.",
      "Notice what gets cut. Usually it's polish, not substance.",
      "Iterate. Each cycle teaches you what's actually load-bearing."
    ],
    watchOut: [
      { title: "Doesn't apply to genuinely unbounded tasks", text: "Some discoveries take their own time. Hard research, creative breakthroughs, healing — these can't be deadline-pressured. Use Parkinson where the work is well-defined." },
      { title: "Tight deadlines can sacrifice quality", text: "If applied carelessly, deadlines compress quality, not just fluff. Calibrate carefully. The point is finding the minimum viable timeline, not the impossibly minimum." }
    ],
    related: ["pareto", "opportunity", "compounding"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="120" width="80" height="60" fill="#ffd166" rx="6"/>
  <text x="68" y="100" font-size="11" fill="#ffd166" font-family="system-ui">small task</text>
  <text x="68" y="200" font-size="11" fill="#9090b8" font-family="system-ui">tight deadline</text>
  <rect x="180" y="60" width="180" height="180" fill="#ef476f" rx="6" class="pulse" opacity="0.7"/>
  <text x="180" y="40" font-size="11" fill="#ef476f" font-family="system-ui">…same task</text>
  <text x="180" y="260" font-size="11" fill="#9090b8" font-family="system-ui">…spacious deadline</text>
</svg>`
  },

  compounding: {
    id: "compounding",
    name: "Compounding",
    cat: "Time & Effort",
    catColor: "#ffd166",
    tagline: "Tiny + consistent + time = enormous.",
    summary: "Small actions repeated with patience create results that feel impossible at the start.",
    origin: "Mathematics (exponential growth). Applied to investing by Benjamin Franklin and Warren Buffett.",
    story: `In 1790, Benjamin Franklin left £1,000 to the cities of Boston and Philadelphia in his will — with one condition: the money could not be touched for 200 years. By 1990, it had grown to over $6.5 million.

He wasn't trying to be generous. He was demonstrating a point: most people massively underestimate what time does to consistent, small returns.

Warren Buffett is often held up as a genius investor. He is — but his superpower is patience, not picks. 97% of his net worth was accumulated after his 65th birthday. He started investing at 11. He's been compounding for 80+ years.

The devastating truth of compounding: the results look flat for a long time, then suddenly explode. This is why people quit too early. The gains are mostly invisible until they're overwhelming.

This works in reverse too. Small bad habits, small debts, small skill gaps — they compound. That's the uncomfortable side of the same law.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Writing 1 technical post per week feels pointless in month one. By year three, you have 150 posts, 50k readers, speaking invitations, and job offers. The posts from year one are now doing work while you sleep." },
      { domain: "Everyday Life", icon: "📚", text: "Reading 20 pages a day feels trivial. In a year: 7,300 pages — roughly 25 books. In 10 years: 250 books. Most CEOs read 50+ books a year. You can too, with 20 pages a day." },
      { domain: "Business", icon: "📊", text: "Customer referrals: if each customer brings 1 more, and they each bring 1 more — you double every cycle. This is why virality is so valued. The math becomes impossible to fight against." }
    ],
    howTo: [
      "Find something worth compounding: a skill, a habit, a relationship, money.",
      "Make it daily or weekly — consistency beats intensity.",
      "Reinvest your returns: knowledge into more learning, money into more investment.",
      "Protect the chain — one missed week isn't fatal, a month is.",
      "Be patient through the 'flat' phase. The explosion is coming."
    ],
    watchOut: [
      { title: "Negative compounding works too", text: "A small bad habit compounded over years is a catastrophe. 1 cigarette a day, ₹50 of debt, 30 mins less sleep every night. The model cuts both ways." },
      { title: "The rate has to be real", text: "Compounding assumes a consistent return. Be sceptical of 'guaranteed' high-rate compounding (Ponzi schemes look exactly like this). 7% real annually is historically solid; 30% is fantasy." }
    ],
    related: ["pareto", "opportunity", "second-order"],
    interactive: "compounding-calc",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="260" width="28" height="10" fill="#ffd166" rx="3"/>
  <rect x="70" y="252" width="28" height="18" fill="#ffd166" rx="3"/>
  <rect x="110" y="238" width="28" height="32" fill="#ffd166" rx="3"/>
  <rect x="150" y="215" width="28" height="55" fill="#ffd166" rx="3"/>
  <rect x="190" y="178" width="28" height="92" fill="#ffd166" rx="3"/>
  <rect x="230" y="120" width="28" height="150" fill="#ffd166" rx="3"/>
  <rect x="270" y="50" width="28" height="220" fill="#ffd166" rx="3" class="pulse"/>
  <rect x="310" y="10" width="28" height="260" fill="#ffd166" rx="3" class="pulse"/>
  <text x="345" y="40" font-size="28" fill="#ffd166" class="bounce">📈</text>
  <line x1="20" y1="270" x2="380" y2="270" stroke="#2a2a44" stroke-width="2"/>
</svg>`
  },

  /* ═══════════════ CHAOS & RISK ═══════════════ */

  "black-swan": {
    id: "black-swan",
    name: "Black Swan",
    cat: "Chaos & Risk",
    catColor: "#c77dff",
    tagline: "Rare events that change everything.",
    summary: "Improbable, unpredictable events with massive impact — easily explained after, impossible to forecast before.",
    origin: "Nassim Nicholas Taleb, 2007 (book 'The Black Swan').",
    story: `For centuries, Europeans assumed all swans were white. They had never seen any other kind. The phrase 'black swan' was used to mean 'something that doesn't exist.' Then in 1697, Dutch explorers discovered black swans in Australia. One observation destroyed centuries of confident knowledge.

Nassim Taleb generalised this in 2007 into a theory of rare events. A 'Black Swan' has three properties: it's unpredictable; it has massive impact; and after it happens, people invent explanations that make it seem inevitable.

9/11. The 2008 financial crisis. COVID-19. The internet. None of these were forecast accurately by experts. All of them were 'obvious in retrospect.' All of them reshaped the world.

Taleb's argument: stop trying to predict Black Swans (you can't). Instead, recognise that they happen, and structure your life so you can survive bad ones and benefit from good ones. Avoid catastrophic single points of failure. Take lots of small bets with limited downside but enormous upside. Don't bet everything on the assumption that the future will look like the past.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "AWS goes down for hours. Half the internet breaks. Companies depended on a single provider for 'reliable' infrastructure. The Black Swan reveals the hidden concentration risk." },
      { domain: "Everyday Life", icon: "💡", text: "Pandemic. Job market collapse. Loved one dies suddenly. These don't fit into normal planning — but they reshape everything. The question isn't predicting them but surviving them." },
      { domain: "Business", icon: "📊", text: "AI emerges in 2022 and disrupts entire industries in months. Smart money was on 'incremental progress' for decades. Black Swans don't follow the trend line — they create a new one." }
    ],
    howTo: [
      "Stop trying to predict Black Swans — you can't.",
      "Build robustness: avoid catastrophic single points of failure.",
      "Take small bets with limited downside and enormous upside (positive black swans).",
      "Don't extrapolate the past as if it guarantees the future.",
      "Accept that some events are not forecastable; structure for survival, not prediction."
    ],
    watchOut: [
      { title: "Don't see Black Swans everywhere", text: "Most days are normal. Most events are ordinary. Treating every surprise as a Black Swan leads to paranoia and over-preparation. Reserve the concept for genuinely rare-and-impactful." },
      { title: "Over-preparation has costs", text: "Defending against every possible disaster paralyses life and business. The skill is calibrating your defence to the threat — not building a bunker against everything." }
    ],
    related: ["antifragile", "murphy", "second-order"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <text x="40" y="180" font-size="48">🦢</text>
  <text x="100" y="180" font-size="48">🦢</text>
  <text x="160" y="180" font-size="48">🦢</text>
  <text x="220" y="180" font-size="48">🦢</text>
  <text x="285" y="180" font-size="60" filter="url(#dim)" class="pulse" style="filter:brightness(0.2)">🦢</text>
  <text x="40" y="240" font-size="13" fill="#9090b8" font-family="system-ui">all swans are white...</text>
  <text x="270" y="240" font-size="13" fill="#c77dff" font-family="system-ui" font-weight="700">until ONE wasn't</text>
</svg>`
  },

  antifragile: {
    id: "antifragile",
    name: "Antifragility",
    cat: "Chaos & Risk",
    catColor: "#c77dff",
    tagline: "Some things get STRONGER from chaos.",
    summary: "Beyond robust. Antifragile systems gain from disorder — stress, volatility, and shocks make them better.",
    origin: "Nassim Nicholas Taleb, 2012 (book 'Antifragile').",
    story: `Taleb noticed our language had no word for the OPPOSITE of fragile. Fragile breaks under stress. Robust survives stress. But what about things that THRIVE on stress?

He coined 'antifragile.' Examples: muscles tear under exercise, then regrow stronger. Immune systems exposed to mild infection become more capable. Markets that experience small failures avoid catastrophic ones. Antifragile systems eat chaos and get better.

The implication is profound: protecting things from all stress doesn't make them stronger — it makes them weaker. Children raised in over-sterile environments have weaker immune systems. Economies protected from all small recessions accumulate hidden risk that explodes catastrophically. People who never struggle don't develop resilience.

The skill is identifying which systems in your life are antifragile, and exposing them to controlled stress. Not all chaos is good — some things really do break. But if you mistake antifragile systems for fragile ones and over-protect them, you make them brittle.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Chaos engineering at Netflix: they intentionally crash servers in production to make the system more resilient. Each forced failure exposes weakness, which gets fixed. The system gets stronger from being attacked." },
      { domain: "Everyday Life", icon: "💪", text: "Lifting weights tears muscle fibres. The body responds by growing them back stronger. Constant comfort produces atrophy; controlled stress produces strength. Same logic for emotional resilience." },
      { domain: "Business", icon: "📊", text: "Restaurants that survive recessions emerge stronger because weak competitors die, real estate gets cheaper, talent becomes available. The stress culls fragility and rewards adaptable operators." }
    ],
    howTo: [
      "Identify which systems in your life are antifragile (gain from stress) vs fragile.",
      "EXPOSE antifragile systems to controlled chaos.",
      "PROTECT fragile systems — don't accidentally test them to destruction.",
      "Build optionality: many small bets with limited downside.",
      "Embrace controlled failure as data and as growth."
    ],
    watchOut: [
      { title: "Not everything is antifragile", text: "Some things just BREAK under stress — relationships, reputations, certain technologies. Don't force-test fragile systems thinking it'll make them stronger." },
      { title: "Antifragile gains come with risk", text: "You ARE going to lose sometimes. The strategy works because the WINS pay for the losses. If you can't afford the losses, the strategy isn't for you." }
    ],
    related: ["black-swan", "compounding", "second-order"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="80" cy="220" r="20" fill="#06d6a0"/>
  <path d="M80,220 Q120,80 160,220" stroke="#06d6a0" stroke-width="2" fill="none" stroke-dasharray="3,3"/>
  <circle cx="160" cy="180" r="28" fill="#06d6a0"/>
  <path d="M160,180 Q220,40 280,180" stroke="#06d6a0" stroke-width="2" fill="none" stroke-dasharray="3,3"/>
  <circle cx="280" cy="120" r="38" fill="#06d6a0" class="pulse"/>
  <text x="60" y="270" font-size="13" fill="#9090b8" font-family="system-ui">stress → bigger, stronger</text>
</svg>`
  },

  murphy: {
    id: "murphy",
    name: "Murphy's Law",
    cat: "Chaos & Risk",
    catColor: "#c77dff",
    tagline: "Whatever can go wrong, will go wrong.",
    summary: "Plan for failure, because failure plans for you. Optimism alone doesn't build reliable systems.",
    origin: "Edward Murphy, US Air Force engineer, 1949.",
    story: `Edward Murphy was an engineer working on rocket sled tests in 1949. A technician installed sensors backwards. Murphy is reputed to have grumbled: 'If there's any way to do it wrong, he'll find it.'

The phrase took on a life of its own. It became 'Murphy's Law': anything that can go wrong, will. A wry, half-joking acknowledgement that engineering must assume failure modes will be hit eventually — not as paranoia, but as design discipline.

In aerospace, where Murphy worked, this philosophy is literal. Every backup has a backup. Every assumption is tested. Pessimism builds safer planes than optimism.

But Murphy's Law isn't just for engineers. It's a check against magical thinking everywhere: 'we don't need a contingency plan, what could go wrong?' Many things, eventually. The question isn't IF something will go wrong but WHEN. Plan for it now — when it's cheap — rather than discover it later, when it's expensive.

The cost of preparation is small. The cost of being unprepared is sometimes catastrophic.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Demo to investors. Wifi dies. Power outage. Bug appears. The one time things WILL break is the demo. Bring your own hotspot, screenshots as backup, a recorded version. Plan for Murphy." },
      { domain: "Everyday Life", icon: "🍞", text: "Toast falls butter-side down. Charger dies right when you need it. The bus is late on the rainiest day. Carry a backup charger. Allow extra time. Murphy is real." },
      { domain: "Business", icon: "📊", text: "Backup system fails right when primary fails. (This is why you need a backup of the backup. And why you should test your backups regularly — untested backups don't exist.)" }
    ],
    howTo: [
      "Identify the worst possible outcomes for what you're doing.",
      "Estimate probabilities — not all worst-cases are equally likely.",
      "For high-likelihood, high-impact failures, plan a response.",
      "Build redundancy where it matters; don't bother where it doesn't.",
      "TEST your backups. Untested backups are imaginary."
    ],
    watchOut: [
      { title: "Don't get paralysed", text: "Most things go fine most of the time. Murphy's Law is about preparation, not paranoia. If preparing costs more than the risk it covers, don't bother." },
      { title: "Cost of preparation must be less than cost of failure", text: "Spending ₹10 lakh to prevent a ₹50,000 problem is bad engineering. Calibrate." }
    ],
    related: ["black-swan", "antifragile", "goodhart"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <text x="160" y="120" font-size="68" class="bounce">🍞</text>
  <line x1="80" y1="200" x2="320" y2="200" stroke="#9090b8" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="120" y="250" font-size="13" fill="#c77dff" font-family="system-ui" font-weight="700">always butter-side down</text>
</svg>`
  },

  goodhart: {
    id: "goodhart",
    name: "Goodhart's Law",
    cat: "Chaos & Risk",
    catColor: "#c77dff",
    tagline: "When a measure becomes the target, it stops measuring.",
    summary: "Optimising any metric distorts it. The number stops representing what it was supposed to indicate.",
    origin: "Charles Goodhart, British economist, 1975.",
    story: `Charles Goodhart was studying monetary policy in 1975 when he noticed: as soon as the British government started TARGETING a specific economic measure (like money supply), the measure stopped correlating with what it was supposed to indicate.

People game it. The measure becomes the goal, not the proxy.

The most vivid example: Soviet nail factories were rewarded for nail count → made millions of tiny worthless nails. Switched the metric to nail weight → made giant useless ones. The metric was always 'making good nails,' but the workers optimised what was measured, not what was meant.

Modern examples are everywhere. Track engineers by lines of code → engineers write more code (worse code). Track customer support by tickets closed → agents close tickets fast without solving problems. Track teachers by test scores → teachers teach to the test.

The deeper lesson: measurement is hard. Any metric is a PROXY for what you actually care about. The proxy is never perfect. When you reward people for hitting the proxy, they optimise the proxy, not the underlying thing.

The cure is partial: track multiple metrics that cancel each other's gaming. Re-evaluate metrics regularly. Be sceptical of any single 'KPI' that drives everything.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Track engineers by lines of code per month. Engineers write more verbose code. Code quality drops, complexity rises, bugs increase. The metric corrupted the goal — productivity actually fell." },
      { domain: "Everyday Life", icon: "👟", text: "Track 10,000 steps per day on a fitness app. People obsessively pace around the house. 'Walking' becomes a number-hitting exercise rather than meaningful movement. The score is healthy; the person isn't necessarily." },
      { domain: "Business", icon: "📊", text: "Customer support tracked by tickets closed per hour. Agents close tickets fast without solving real problems. Customer satisfaction tanks; the dashboard looks great. Classic Goodhart." }
    ],
    howTo: [
      "Pick a metric. Imagine: how would someone game this?",
      "If gaming is easy, find a different metric.",
      "Track multiple counter-balancing metrics so no single one dominates.",
      "Re-evaluate metrics regularly — quarterly at least.",
      "Be sceptical when one number is driving every decision."
    ],
    watchOut: [
      { title: "Some metrics are worth tracking despite gaming", text: "Imperfect measurement beats no measurement. Don't refuse to measure because of Goodhart. Measure carefully, with awareness of gaming." },
      { title: "Don't track NOTHING out of fear", text: "Goodhart isn't a reason to operate by gut. It's a reason to choose metrics carefully, balance them, and watch for distortion." }
    ],
    related: ["murphy", "network", "second-order"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="150" r="80" fill="none" stroke="#c77dff" stroke-width="2" opacity="0.4"/>
  <circle cx="200" cy="150" r="55" fill="none" stroke="#c77dff" stroke-width="2" opacity="0.6"/>
  <circle cx="200" cy="150" r="30" fill="#c77dff" class="pulse"/>
  <line x1="40" y1="150" x2="180" y2="150" stroke="#ffd166" stroke-width="3"/>
  <polygon points="180,144 195,150 180,156" fill="#ffd166"/>
  <text x="200" y="270" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">target moves; arrow chases meaning</text>
</svg>`
  },

  streisand: {
    id: "streisand",
    name: "Streisand Effect",
    cat: "Chaos & Risk",
    catColor: "#c77dff",
    tagline: "Hiding something makes everyone want to see it.",
    summary: "Attempts to suppress information often amplify it dramatically. Silence often beats fighting.",
    origin: "Internet meme, 2003 (referencing Barbra Streisand's 2003 lawsuit).",
    story: `In 2003, a photographer took aerial photos of the entire California coast as part of an environmental erosion study. He posted them online. One photo happened to include Barbra Streisand's mansion.

She sued to suppress it. Before the lawsuit: the photo had been downloaded 6 times — and 2 of those were by her own lawyers.

After the lawsuit hit the news: 420,000 downloads in a single month. The world suddenly cared about a photo nobody had noticed, specifically because someone tried to hide it.

The phenomenon was named the 'Streisand Effect.' It captures something deep about human psychology: we're attracted to what's forbidden. Tell people 'don't look' and they look harder. Tell them 'this is censored' and they want it more.

This is why most attempts to legally suppress information online backfire. PR teams that respond to mild critics with cease-and-desist letters create viral moments. Companies that try to bury bad reviews end up with the reviews trending.

The counter-intuitive lesson: sometimes the best response to negative information is to ignore it. Outrage and lawsuits often amplify what they try to bury.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Company tries to delete a critical review on Hacker News. The review goes to the front page. The deletion attempt becomes the story. The original review now has 100x the visibility." },
      { domain: "Everyday Life", icon: "🚪", text: "Tell someone 'don't open this drawer.' Now it's the only drawer they want to open. The forbidden creates curiosity that wouldn't have existed otherwise." },
      { domain: "Business", icon: "📊", text: "Sue or threaten a critic on Twitter. The critic's audience grows 10x overnight. Reporters cover the lawsuit. The criticism reaches more people than ever." }
    ],
    howTo: [
      "Want to suppress something? FIRST estimate the consequence of trying.",
      "Often: silence and time work better than fighting.",
      "If you must respond, address head-on, briefly, then pivot.",
      "Never sue your customers or critics unless legally essential.",
      "Apologise > deny. Acknowledgement defuses; denial inflames."
    ],
    watchOut: [
      { title: "Sometimes you DO need to defend yourself", text: "Streisand isn't a rule against ever responding. Defamation, fraud, or critical legal issues may need real action regardless of optics." },
      { title: "Real legal threats need lawyers anyway", text: "If a regulator or court is involved, attention from the public is secondary. Don't apply Streisand to genuine legal exposure." }
    ],
    related: ["goodhart", "network", "prisoner"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="120" y="100" width="160" height="100" fill="#1a1a2e" stroke="#c77dff" stroke-width="2" rx="10"/>
  <text x="170" y="170" font-size="42">🤐</text>
  <text x="40" y="80" font-size="32" class="pulse">👀</text>
  <text x="320" y="80" font-size="32" class="pulse" style="animation-delay:.3s">👀</text>
  <text x="40" y="240" font-size="32" class="pulse" style="animation-delay:.6s">👀</text>
  <text x="320" y="240" font-size="32" class="pulse" style="animation-delay:.9s">👀</text>
  <text x="170" y="270" font-size="11" fill="#c77dff" font-family="system-ui">hiding it draws every eye</text>
</svg>`
  },

  /* ═══════════════ PEOPLE & SYSTEMS ═══════════════ */

  maslow: {
    id: "maslow",
    name: "Maslow's Hierarchy",
    cat: "People & Systems",
    catColor: "#06d6a0",
    tagline: "Basics before fancy stuff.",
    summary: "Humans have stacked needs. You can't focus on the top until the bottom is met.",
    origin: "Abraham Maslow, 1943 ('A Theory of Human Motivation').",
    story: `In 1943, psychologist Abraham Maslow proposed that human motivation isn't random — it follows a hierarchy. From the bottom: physiological needs (food, sleep, water), safety (shelter, security), love and belonging (relationships), esteem (respect, achievement), and at the top, self-actualisation (becoming your fullest self).

His insight: you can't focus on higher levels until the lower ones are met. A starving person doesn't write poetry. A person without safety doesn't pursue mastery. A person without belonging struggles with esteem.

This isn't a rigid rule — Maslow himself acknowledged exceptions. Some people self-actualise while struggling. Some skip levels. But as a default frame, it explains a lot. Why employees can't be 'creative' if they're worried about being fired. Why kids can't focus in school if they're hungry. Why a friend going through a divorce can't help you with your career strategy this week.

For yourself, Maslow's hierarchy is a diagnostic. Stuck on a high goal? Often the problem is below. For others, it's a humility check. Don't expect higher work from someone whose basics are shaky.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Burned-out, sleep-deprived engineer can't be creative. Fix the basics — sleep, workload, safety — before expecting breakthrough work. The pyramid is real even at desks." },
      { domain: "Everyday Life", icon: "🤝", text: "Helping a struggling friend? Don't lecture about life goals if they can't pay rent. Address the bottom first. Higher-level advice lands like noise to someone in survival mode." },
      { domain: "Business", icon: "📊", text: "Employee can't focus on innovation if they're worried about job security. Pay them well, give them stability, then expect creative output. Skip the bottom and the top doesn't happen." }
    ],
    howTo: [
      "Identify what someone (or you) is struggling with.",
      "Locate it on the pyramid: physiological, safety, belonging, esteem, or self-actualisation.",
      "Address from the bottom up.",
      "Don't skip layers — gaps undermine higher work.",
      "Re-check periodically; needs shift over time."
    ],
    watchOut: [
      { title: "The pyramid is a model, not a strict rule", text: "Some people self-actualise while struggling. Artists do their best work in poverty. The hierarchy is a useful default, not a universal law." },
      { title: "Don't dismiss others' struggles", text: "Don't use the pyramid to invalidate someone's pain ('they should fix X first'). It's a diagnostic for YOU helping them, not a verdict on their priorities." }
    ],
    related: ["tragedy", "prisoner", "network"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <polygon points="200,30 230,70 170,70" fill="#c77dff"/>
  <polygon points="170,70 230,70 250,110 150,110" fill="#4cc9f0"/>
  <polygon points="150,110 250,110 270,150 130,150" fill="#06d6a0"/>
  <polygon points="130,150 270,150 290,190 110,190" fill="#ffd166"/>
  <polygon points="110,190 290,190 310,230 90,230" fill="#ef476f"/>
  <text x="178" y="55" font-size="9" fill="#0e0e1a" font-family="system-ui" font-weight="700">self</text>
  <text x="180" y="98" font-size="9" fill="#0e0e1a" font-family="system-ui" font-weight="700">esteem</text>
  <text x="170" y="138" font-size="9" fill="#0e0e1a" font-family="system-ui" font-weight="700">belonging</text>
  <text x="180" y="178" font-size="9" fill="#0e0e1a" font-family="system-ui" font-weight="700">safety</text>
  <text x="172" y="218" font-size="9" fill="#0e0e1a" font-family="system-ui" font-weight="700">survival</text>
</svg>`
  },

  network: {
    id: "network",
    name: "Network Effects",
    cat: "People & Systems",
    catColor: "#06d6a0",
    tagline: "More users = more value for everyone.",
    summary: "Some products get exponentially more valuable as more people use them. The network IS the product.",
    origin: "Theodore Vail (AT&T, ~1908). Formalised by Bob Metcalfe (Metcalfe's Law).",
    story: `One phone is useless. Two phones connect 1 person. A million phones connect everyone to everyone. The phone network's VALUE grew faster than its size — every new user made the system more valuable for ALL existing users.

Theodore Vail, head of AT&T, was the first to articulate this in business terms around 1908. Decades later, Bob Metcalfe (inventor of Ethernet) formalised it: the value of a network grows roughly with the square of its users.

The implication is enormous. Network-effect products develop deep moats. WhatsApp is locked in not because of features but because everyone you know is on it. Visa is valuable to retailers because consumers have it; valuable to consumers because retailers accept it. Self-reinforcing.

This is why early adoption matters so much for these products. Below 'critical mass,' the network is too thin to be useful — most people don't join because there's no one to interact with. Above critical mass, growth becomes exponential and self-sustaining.

But network effects can REVERSE. When users start leaving, value drops, more leave, faster. MySpace, Friendster, Vine. The same forces that built them tore them down.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "GitHub: useless if your team isn't there. As soon as everyone's there, switching costs become enormous — code, history, integrations, contributor identity. The network is the moat." },
      { domain: "Everyday Life", icon: "🗣️", text: "English isn't dominant because it's the best language. It's dominant because billions of people speak it. The network value compounds across business, science, entertainment." },
      { domain: "Business", icon: "📊", text: "Visa and Mastercard: valuable to retailers because consumers carry them. Valuable to consumers because retailers accept them. Each side reinforces the other. Hard to disrupt." }
    ],
    howTo: [
      "Building a product? Look for inherent network effects.",
      "If yes: focus relentlessly on early adoption — math compounds.",
      "Make inviting friends frictionless — onboarding is the whole game.",
      "Aim for critical mass — the threshold where it grows on its own.",
      "Once dominant, the network is your moat. Defend it."
    ],
    watchOut: [
      { title: "Network effects can reverse", text: "When users leave, value drops, more leave (death spiral). MySpace went from billion-dollar valuation to nothing in 3 years. Networks aren't permanent." },
      { title: "Some 'network effects' are actually just market share", text: "Big customer base ≠ network effect. Real network effects mean each user makes the product more valuable for OTHER users. Be honest about which you have." }
    ],
    related: ["critical-mass", "tragedy", "compounding"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="200" y1="150" x2="80" y2="80" stroke="#06d6a0" stroke-width="1"/>
  <line x1="200" y1="150" x2="320" y2="80" stroke="#06d6a0" stroke-width="1"/>
  <line x1="200" y1="150" x2="80" y2="220" stroke="#06d6a0" stroke-width="1"/>
  <line x1="200" y1="150" x2="320" y2="220" stroke="#06d6a0" stroke-width="1"/>
  <line x1="80" y1="80" x2="320" y2="80" stroke="#06d6a0" stroke-width="1" opacity="0.5"/>
  <line x1="80" y1="220" x2="320" y2="220" stroke="#06d6a0" stroke-width="1" opacity="0.5"/>
  <line x1="80" y1="80" x2="80" y2="220" stroke="#06d6a0" stroke-width="1" opacity="0.5"/>
  <line x1="320" y1="80" x2="320" y2="220" stroke="#06d6a0" stroke-width="1" opacity="0.5"/>
  <circle cx="200" cy="150" r="14" fill="#06d6a0" class="pulse"/>
  <circle cx="80" cy="80" r="10" fill="#06d6a0"/>
  <circle cx="320" cy="80" r="10" fill="#06d6a0"/>
  <circle cx="80" cy="220" r="10" fill="#06d6a0"/>
  <circle cx="320" cy="220" r="10" fill="#06d6a0"/>
</svg>`
  },

  tragedy: {
    id: "tragedy",
    name: "Tragedy of the Commons",
    cat: "People & Systems",
    catColor: "#06d6a0",
    tagline: "Shared stuff gets destroyed because no one owns it.",
    summary: "Rational individual decisions about a shared resource lead to its collective destruction.",
    origin: "Garrett Hardin, 1968 (essay in Science magazine).",
    story: `Imagine a village with shared grazing land. Each shepherd benefits 100% from adding one more sheep, but the cost of overgrazing is shared across everyone. So each shepherd, individually, is rational to add more sheep. Collectively, they destroy the pasture and starve.

This is the Tragedy of the Commons. Garrett Hardin published it in 1968 to describe why shared resources tend toward depletion: every individual gains the full benefit of taking, but pays only a fraction of the cost. The math always favours over-use.

It applies to fisheries (overfishing), atmosphere (climate), public spaces (degradation), shared codebases (technical debt), open APIs (abuse). Anywhere the cost is shared and the benefit is private, abuse follows.

Elinor Ostrom won the 2009 Nobel Prize in Economics for showing this isn't inevitable — communities CAN self-govern commons effectively, with the right rules and enforcement. But the default state, without coordination, is collapse.

The cure is one of: privatisation (assign ownership), regulation (limit use), or community governance (self-policing rules). All three are imperfect. The disease is real.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Shared codebase. Every team adds quick hacks for their own urgency. No team owns 'overall code quality.' Result: technical debt mountain that everyone curses but nobody fixes." },
      { domain: "Everyday Life", icon: "🏞️", text: "Public parks, public restrooms, free Wi-Fi at cafes — they tend to degrade because no individual owns them. The well-maintained ones almost always have explicit rules and enforcement." },
      { domain: "Business", icon: "📊", text: "Shared APIs or databases. Every team takes; no team maintains. Until they break catastrophically and everyone suddenly cares — usually too late." }
    ],
    howTo: [
      "Identify shared resources at risk.",
      "Assign clear ownership where possible.",
      "If ownership impossible, set strict limits (regulation, quotas, rate-limits).",
      "Make individual cost = individual benefit (taxes, fees).",
      "Make abuse visible — sunlight is a disinfectant."
    ],
    watchOut: [
      { title: "Not every shared system fails", text: "Communities self-govern shared resources successfully sometimes. Ostrom won a Nobel proving this. Tragedy is the DEFAULT, not the inevitable outcome." },
      { title: "Over-regulation can destroy what it tries to protect", text: "Heavy-handed rules can kill the resource being protected. The Soviet Union over-regulated land into starvation. Calibrate." }
    ],
    related: ["prisoner", "network", "goodhart"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="200" cy="200" rx="150" ry="50" fill="#06d6a0" fill-opacity="0.15" stroke="#06d6a0" stroke-width="1"/>
  <text x="170" y="210" font-size="32">🌾</text>
  <text x="60" y="120" font-size="32" class="bounce">🐑</text>
  <text x="160" y="100" font-size="32" class="bounce" style="animation-delay:.3s">🐑</text>
  <text x="260" y="100" font-size="32" class="bounce" style="animation-delay:.6s">🐑</text>
  <text x="320" y="120" font-size="32" class="bounce" style="animation-delay:.9s">🐑</text>
  <text x="100" y="270" font-size="13" fill="#9090b8" font-family="system-ui">each rational; collectively ruinous</text>
</svg>`
  },

  prisoner: {
    id: "prisoner",
    name: "Prisoner's Dilemma",
    cat: "People & Systems",
    catColor: "#06d6a0",
    tagline: "Trust together = win. Betray = both lose.",
    summary: "Mutual cooperation beats mutual defection — but defecting is individually rational. Trust is fragile.",
    origin: "Merrill Flood & Melvin Dresher, RAND Corporation, 1950.",
    story: `Two suspects are arrested separately. The police offer each a deal. If both stay silent (cooperate with each other), each gets a light sentence. If ONE betrays the other (defects), the betrayer walks and the silent one gets the full sentence. If BOTH betray, both get medium sentences.

The math: betraying is always better for the individual. If your partner stays silent, you walk by betraying. If your partner betrays, you'd be punished worst by staying silent. So the rational move is ALWAYS betray.

But if both prisoners follow this rational logic, they both betray, and both get medium sentences — when they could have BOTH stayed silent and gotten light sentences. Mutual cooperation beats mutual defection. But cooperation requires trust, and trust is fragile.

This puzzle, from RAND in 1950, became one of the most studied frameworks in game theory. It captures something deep: in many real situations, what's rational for the individual is destructive for the group.

The redemption: when the game is REPEATED — people interact over time — cooperation becomes possible. Strategies like 'tit-for-tat' (start cooperative, retaliate if betrayed, forgive after) win in long-run iterated games. This is why repeat business beats one-time deals.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Two competing teams could share knowledge to ship better products. Each fears being outflanked. Both work in silos. Both ship slower. Mutual cooperation would have helped both." },
      { domain: "Everyday Life", icon: "🤝", text: "Roommates could split chores fairly. Each suspects the other will slack. Both slack. The apartment is gross. Trust requires going first — and getting burned sometimes." },
      { domain: "Business", icon: "📊", text: "Two countries in arms race. Both could disarm — both better off. Each fears the other won't. Both arm. Resources wasted. The game theory of geopolitics is mostly Prisoner's Dilemma." }
    ],
    howTo: [
      "Identify whether mutual cooperation > mutual defection.",
      "Build trust through small, repeated interactions.",
      "Use tit-for-tat: start cooperative, retaliate proportionally if betrayed, forgive afterwards.",
      "Make cooperation visible and rewarded.",
      "Avoid one-shot games with strangers when stakes are high."
    ],
    watchOut: [
      { title: "In one-shot games, betrayal is often rational", text: "Don't be naive. With a stranger you'll never see again, expecting cooperation can get you exploited. Calibrate by relationship." },
      { title: "Some 'dilemmas' are just bad deals", text: "Walk away if cooperation is genuinely impossible. Not every conflict is a Prisoner's Dilemma — sometimes the right move is don't play." }
    ],
    related: ["tragedy", "network", "streisand"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="80" width="120" height="140" fill="#06d6a0" fill-opacity="0.12" stroke="#06d6a0" stroke-width="2" rx="10"/>
  <rect x="220" y="80" width="120" height="140" fill="#ef476f" fill-opacity="0.12" stroke="#ef476f" stroke-width="2" rx="10"/>
  <text x="100" y="160" font-size="42">🤝</text>
  <text x="260" y="160" font-size="42">⚔️</text>
  <text x="76" y="245" font-size="11" fill="#06d6a0" font-family="system-ui" font-weight="700">cooperate: BOTH win</text>
  <text x="234" y="245" font-size="11" fill="#ef476f" font-family="system-ui" font-weight="700">betray: BOTH lose</text>
  <text x="184" y="155" font-size="14" fill="#9090b8" font-family="system-ui" font-weight="700">VS</text>
</svg>`
  },

  /* ═══════════════ HOW YOU THINK (Cognitive Psychology) ═══════════════ */

  "implementation-intentions": {
    id: "implementation-intentions",
    name: "Implementation Intentions",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "If [trigger], then [action].",
    summary: "Goals fail. If-then plans succeed. Linking a specific trigger to a specific action bypasses willpower and decision fatigue.",
    origin: "Peter Gollwitzer, NYU psychologist, 1999.",
    story: `Peter Gollwitzer's 1999 paper revealed an uncomfortable truth: setting a goal almost doesn't matter. People who say "I want to exercise more" or "I'll learn this concept" mostly don't follow through. Goals are ABOUT doing something. They're not doing anything.

What works dramatically better is something he called an "implementation intention" — a pre-formed, specific if-then plan: "If it's 7am Monday, then I will do 20 push-ups before checking my phone." The structure of that sentence, oddly, is what makes it work.

Why? Because in the moment, the brain doesn't deliberate. It just runs the script. The trigger fires; the action follows. No willpower needed because no decision is happening.

Studies have documented dramatic effects. Voter turnout: 4.1 percentage points higher with if-then plans vs reminders alone. Breast self-exams: 100% completion vs 53%. Drug recovery, weight loss, exam performance — across hundreds of studies, the same pattern: if-then plans roughly double follow-through compared to plain goals.

The implication for learning: you DON'T succeed by deciding to "learn mental models." You succeed by writing a sentence like "If I close this browser tab, then I will write down one application of what I just read." That single sentence is more powerful than any motivation.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Goal: 'I want to read more papers.' Outcome: doesn't happen. Implementation intention: 'If I sit at my desk Monday morning, then I will read one paper before opening Slack.' Outcome: it happens, week after week." },
      { domain: "Everyday Life", icon: "🧠", text: "Goal: 'I want to exercise.' Vague, drifts. Implementation intention: 'If I finish brushing my teeth in the morning, then I will do 10 squats before leaving the bathroom.' Trigger is concrete, action is specific. Habit forms." },
      { domain: "Business", icon: "📊", text: "Goal: 'Our team will be more strategic.' Empty. Implementation intention: 'If we open Monday standup, then we will spend the first 5 minutes naming the highest-leverage task before anything else.' This actually changes behaviour." }
    ],
    howTo: [
      "Pick a goal you keep failing to act on.",
      "Identify a SPECIFIC moment in your day that already happens reliably.",
      "Write: 'If [that moment], then I will [specific small action].'",
      "Make the action small enough that it can't be excused away.",
      "Re-read the if-then plan once in the morning. The brain runs the script in the moment."
    ],
    watchOut: [
      { title: "Vague triggers don't work", text: "'If I have time, then I will…' isn't an implementation intention — it's still a goal in disguise. The trigger has to be a specific time, place, event, or cue. 'After my morning coffee' beats 'when I feel ready.'" },
      { title: "Don't stack too many", text: "Two or three if-then plans active at once is fine. Ten is not. Each plan competes for cognitive bandwidth. Stack new ones only after the previous ones become automatic." }
    ],
    related: ["self-reference", "compounding", "second-order"],
    interactive: "implementation-intentions-builder",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="120" width="120" height="60" fill="#7c83ff" fill-opacity="0.2" stroke="#7c83ff" stroke-width="2" rx="10"/>
  <text x="78" y="148" font-size="11" fill="#7c83ff" font-family="system-ui" font-weight="700">IF</text>
  <text x="74" y="167" font-size="13" fill="#7c83ff" font-family="system-ui">trigger fires</text>
  <path d="M170,150 L230,150" stroke="#7c83ff" stroke-width="2" marker-end="url(#iiArr)"/>
  <defs><marker id="iiArr" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#7c83ff"/></marker></defs>
  <rect x="230" y="120" width="120" height="60" fill="#06d6a0" fill-opacity="0.2" stroke="#06d6a0" stroke-width="2" rx="10"/>
  <text x="258" y="148" font-size="11" fill="#06d6a0" font-family="system-ui" font-weight="700">THEN</text>
  <text x="252" y="167" font-size="13" fill="#06d6a0" font-family="system-ui">action runs</text>
  <text x="100" y="240" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">no willpower needed</text>
  <text x="290" y="240" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">automatic execution</text>
</svg>`
  },

  "self-reference": {
    id: "self-reference",
    name: "Self-Reference Effect",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "Make it about YOU and it sticks.",
    summary: "The brain dramatically prefers information connected to the self. Same content, different framing — wildly different retention.",
    origin: "Rogers, Kuiper & Kirker, 1977.",
    story: `In 1977, three psychologists ran a clean experiment. They showed participants a list of personality words (kind, lazy, generous, etc.) and asked one of three questions about each: is it printed in capital letters? does it rhyme with a word? does it describe YOU?

Later, surprise memory test. Words processed for visual features (capitals): poorly remembered. Words processed for sound (rhyme): slightly better. Words processed for self-relevance: dramatically better. Same words. Same exposure time. Just a different question — and memory tripled.

The result has been replicated for nearly 50 years. The medial prefrontal cortex literally activates more for self-related information. The brain treats "me" as the most important node in the entire memory network. Anything attached to that node gets encoded with priority.

This is why personalised teaching works so well, why marketers ask "imagine yourself…", and why journaling changes how you remember an event. It's also why most learning fails: information presented as abstract facts about other people, other companies, other situations slides off the brain. The same information presented as "here's what this means for YOU" sticks for years.

For the brain, "self-relevant" = "important." Important things get saved. The shortcut to better memory is making everything personal.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Reading 'database indexes speed up queries' = forgettable abstract fact. Asking 'which of MY queries would benefit from an index?' and answering it = unforgettable. Same information, but now it's about YOU and YOUR code." },
      { domain: "Everyday Life", icon: "🧠", text: "Reading about Inversion as a concept: vague memory of 'flip the problem.' Reading about Inversion AND being asked 'what's a problem in your life right now? Now invert it' — that decision still applies to you a year later." },
      { domain: "Business", icon: "📊", text: "Generic case studies about other companies: easily forgotten. Asking 'how does this apply to OUR company specifically?' converts a forgettable case study into actionable strategy. Always ask the personal-relevance question." }
    ],
    howTo: [
      "Whenever you read a concept, immediately stop.",
      "Ask: 'Where in MY life right now does this apply?'",
      "Force a specific, concrete answer — not 'someday at work.'",
      "Write the personal application in 1-2 sentences.",
      "The act of personalisation moves the concept from semantic to autobiographical memory."
    ],
    watchOut: [
      { title: "Don't fake the personal connection", text: "If you can't honestly find personal relevance, the effect doesn't fire. Forced or fake connections don't help. Sometimes the answer is 'this doesn't apply to me right now' — and that's also useful information." },
      { title: "Self-reference can over-narrow learning", text: "Always asking 'how does this help ME' can blind you to ideas valuable for OTHERS or for the future. Use this as a primary technique, but balance with abstract understanding too." }
    ],
    related: ["generation-effect", "implementation-intentions", "first-principles"],
    interactive: "self-reference-demo",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="150" r="50" fill="#7c83ff" fill-opacity="0.25" stroke="#7c83ff" stroke-width="2"/>
  <text x="186" y="160" font-size="22" fill="#7c83ff" font-family="system-ui" font-weight="900">YOU</text>
  <circle cx="100" cy="80" r="14" fill="#7c83ff" opacity="0.7"/>
  <line x1="115" y1="92" x2="160" y2="125" stroke="#7c83ff" stroke-width="2"/>
  <circle cx="300" cy="80" r="14" fill="#7c83ff" opacity="0.7"/>
  <line x1="285" y1="92" x2="240" y2="125" stroke="#7c83ff" stroke-width="2"/>
  <circle cx="80" cy="220" r="14" fill="#7c83ff" opacity="0.7"/>
  <line x1="95" y1="208" x2="158" y2="170" stroke="#7c83ff" stroke-width="2"/>
  <circle cx="320" cy="220" r="14" fill="#7c83ff" opacity="0.7"/>
  <line x1="305" y1="208" x2="242" y2="170" stroke="#7c83ff" stroke-width="2"/>
  <text x="80" y="55" font-size="11" fill="#9090b8" font-family="system-ui">concept</text>
  <text x="280" y="55" font-size="11" fill="#9090b8" font-family="system-ui">concept</text>
  <text x="60" y="255" font-size="11" fill="#9090b8" font-family="system-ui">concept</text>
  <text x="300" y="255" font-size="11" fill="#9090b8" font-family="system-ui">concept</text>
</svg>`
  },

  "generation-effect": {
    id: "generation-effect",
    name: "Generation Effect",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "Try first. Then learn.",
    summary: "Information you struggle to GENERATE is remembered far better than information you simply READ — even if your guess is wrong.",
    origin: "Slamecka & Graf, 1978. Replicated thousands of times since.",
    story: `In 1978, psychologists Norman Slamecka and Peter Graf ran a deceptively simple experiment. Two groups studied the same word pairs. Group A simply read them: hot–cold, fast–slow, etc. Group B saw only the first word and had to GENERATE the second from a hint.

Group B remembered nearly twice as much, even though both groups spent the same amount of time. The act of generating — the mental effort of REACHING for the answer — created stronger memory traces than passive reading.

This is the Generation Effect. It has been replicated thousands of times across age groups, materials, and contexts. It works even when the generation attempt FAILS. Even when you guess wrong, your wrong attempt primes the brain to encode the correct answer when it arrives. The failure creates a "slot" the right answer fits into.

This contradicts most teaching. Education tends to present information first and test second. The Generation Effect says: flip it. Force a guess BEFORE the answer. The struggle, even brief and unsuccessful, transforms what would have been forgettable into something that sticks.

For self-directed learners, this is one of the highest-leverage techniques available. Cover the answer. Force a guess. THEN reveal. Every time. The 5 seconds of effort pay enormously.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Reading documentation: weak retention. Trying to write the code first, then checking the docs to see what you got wrong: vastly stronger retention. Your wrong attempts mark exactly where new information needs to land." },
      { domain: "Everyday Life", icon: "🧠", text: "Learning someone's name. Hearing it: forgotten in 30 seconds. Trying to recall it 5 minutes later — even if you fail and have to ask — sticks for months. The retrieval attempt is the encoding event." },
      { domain: "Business", icon: "📊", text: "In meetings, asking 'what do you think the answer is?' before presenting your view doesn't just collect opinions. It primes everyone in the room to encode the actual answer more deeply when you reveal it." }
    ],
    howTo: [
      "Encounter a question or problem.",
      "Cover the answer. Force yourself to guess — even a wild guess.",
      "Commit to your guess. Speak it aloud or write it down.",
      "Now reveal the answer. Compare. Notice the gap.",
      "The gap between your guess and the truth is exactly where memory is forming."
    ],
    watchOut: [
      { title: "Doesn't work with completely unfamiliar material", text: "If you have ZERO context, generation is impossible — there's nothing to retrieve. You need at least some background knowledge for this to fire. With foreign vocabulary on day 1, just learn first." },
      { title: "Confidence calibration matters", text: "Generating with low confidence and being right: weak boost. Generating with high confidence and being WRONG: huge boost (this is the Hypercorrection Effect). The technique rewards committed effort, not hedged guesses." }
    ],
    related: ["desirable-difficulties", "curiosity-gap", "first-principles"],
    interactive: "generation-effect-demo",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="60" width="100" height="80" fill="#7c83ff" fill-opacity="0.15" stroke="#7c83ff" stroke-width="2" rx="10"/>
  <text x="100" y="105" font-size="20" fill="#7c83ff" font-family="system-ui" font-weight="700" text-anchor="middle">?</text>
  <text x="80" y="130" font-size="11" fill="#7c83ff" font-family="system-ui">guess first</text>
  <path d="M170,100 L230,100" stroke="#9090b8" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#geArr)"/>
  <defs><marker id="geArr" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#9090b8"/></marker></defs>
  <rect x="240" y="60" width="100" height="80" fill="#06d6a0" fill-opacity="0.15" stroke="#06d6a0" stroke-width="2" rx="10"/>
  <text x="290" y="108" font-size="28" fill="#06d6a0" font-family="system-ui" font-weight="900" text-anchor="middle">!</text>
  <text x="252" y="130" font-size="11" fill="#06d6a0" font-family="system-ui">reveal answer</text>
  <text x="100" y="180" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">attempt creates slot</text>
  <text x="290" y="180" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">answer fits into it</text>
  <text x="200" y="240" font-size="13" fill="#7c83ff" font-family="system-ui" font-weight="700" text-anchor="middle">2x retention vs reading</text>
</svg>`
  },

  "desirable-difficulties": {
    id: "desirable-difficulties",
    name: "Desirable Difficulties",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "Easy learning is fake learning.",
    summary: "When learning feels effortless, it usually isn't working. The brain encodes deeply only when it has to struggle.",
    origin: "Robert Bjork, UCLA, 1994. Refined over 30+ years of cognitive science research.",
    story: `Robert Bjork has spent fifty years at UCLA proving the same uncomfortable point: when learning FEELS smooth and easy, it's usually not actually working.

Re-reading a textbook chapter feels productive. The familiarity of the second pass tricks the brain into thinking "I know this now." A week later, you can barely recall the topic. The fluency was an illusion.

Compare that to closing the book and forcing yourself to write down what you remember. It's frustrating. Slow. You realise how much you missed. It feels worse. And it works enormously better. Studies show retention 2-4x higher from this single switch.

Bjork called these counterintuitive techniques "desirable difficulties." Spaced practice (uncomfortable because you've forgotten between sessions). Interleaved practice (uncomfortable because you keep switching topics). Self-testing (uncomfortable because you fail). Each one feels like worse learning while it's happening — and produces dramatically better learning when measured later.

This single insight overturns most study habits, most training programs, most self-help advice. The discomfort isn't a sign you're learning wrong. It's the SIGNAL that you're learning right. Smooth learning is the warning sign, not the goal.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Reading a book on a new framework feels like learning. It isn't. Closing the book and trying to build something with it — getting stuck, looking up only when blocked — that's the desirable difficulty. Hours of fumbling beat days of comfortable reading." },
      { domain: "Everyday Life", icon: "🌍", text: "Memorising vocabulary by reading the list 10 times: feels productive, almost nothing sticks. Forcing yourself to recall each word with the page covered: feels frustrating, sticks for weeks." },
      { domain: "Business", icon: "📊", text: "Onboarding a new hire by giving them documents to read: feels thorough, they remember little. Throwing them into a small project where they must figure things out (with safety nets): feels chaotic, they actually learn the system." }
    ],
    howTo: [
      "Replace re-reading with self-testing — close the book, recall, check.",
      "Replace blocked practice (one topic for hours) with interleaved (mix topics in one session).",
      "Replace immediate feedback with slightly-delayed feedback (a few minutes, not seconds).",
      "Embrace forgetting between sessions — it's the friction that makes recall stronger.",
      "When learning feels too smooth, manufacture friction. That's the signal you need."
    ],
    watchOut: [
      { title: "Difficulty must be desirable, not just hard", text: "Random pointless friction doesn't help. The difficulty has to require deeper processing of the material. Studying in a moving car is hard but useless — your difficulty must engage the content." },
      { title: "Beginners need scaffolding first", text: "Bjork himself notes: complete beginners benefit from some smoothness before being thrown into difficulty. The principle applies most strongly once you have a basic foundation. Don't make day-1 brutal." }
    ],
    related: ["generation-effect", "self-reference", "compounding"],
    interactive: "desirable-difficulties-demo",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="240" x2="370" y2="240" stroke="#9090b8" stroke-width="1"/>
  <line x1="40" y1="40" x2="40" y2="240" stroke="#9090b8" stroke-width="1"/>
  <path d="M40,80 Q120,90 200,170 Q280,240 360,250" stroke="#ef476f" stroke-width="3" fill="none" opacity="0.6"/>
  <path d="M40,200 Q120,180 200,140 Q280,80 360,50" stroke="#7c83ff" stroke-width="3" fill="none"/>
  <text x="48" y="74" font-size="11" fill="#ef476f" font-family="system-ui" font-weight="600">re-reading (feels easy)</text>
  <text x="220" y="60" font-size="11" fill="#7c83ff" font-family="system-ui" font-weight="600">self-testing (feels hard)</text>
  <text x="280" y="270" font-size="11" fill="#9090b8" font-family="system-ui">time →</text>
  <text x="20" y="40" font-size="11" fill="#9090b8" font-family="system-ui" transform="rotate(-90, 20, 40)">retention</text>
</svg>`
  },

  "curiosity-gap": {
    id: "curiosity-gap",
    name: "Curiosity Gap",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "Gaps create the hunger to know.",
    summary: "Curiosity isn't a personality trait. It's the brain's response to a visible gap between what you know and what you suspect you should know.",
    origin: "George Loewenstein, 1994 (Information Gap Theory of Curiosity).",
    story: `In 1994, behavioural economist George Loewenstein at Carnegie Mellon proposed something simple but unusual: curiosity isn't an inborn trait. It's a state — triggered when your brain detects a GAP between what you currently know and what you sense you SHOULD know.

The gap creates discomfort. The brain treats it like an open loop, an itch. Filling the gap relieves the discomfort. So you click, you read, you ask.

This is why "you won't believe what happens next" headlines work. They surface a gap and dangle the resolution. Why mystery novels keep you reading. Why pop quizzes make people pay attention. Why Wikipedia rabbit holes happen — every link surfaces a new gap.

The implication is profound for learning. Most education and content presents answers without first making you feel the question. The brain receives "facts" with no felt need for them — and discards them within hours. The trick isn't to TEACH information. It's to make people CRAVE it first.

Once you see this, you see it everywhere. Great teachers open with a question, not a definition. Great writers withhold the answer for one paragraph longer than feels comfortable. Great products show you what you don't know before they tell you what to do.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "A great tech blog post starts with 'Here's a bug that should have been impossible…' before explaining the architecture. The bug creates a gap. The architecture answers the gap. Same content, but now you actually read it." },
      { domain: "Everyday Life", icon: "🧠", text: "A friend says 'I'll tell you a secret about Sarah… actually, never mind.' Now you HAVE to know. They opened a gap and refused to close it. The discomfort is real and physical." },
      { domain: "Business", icon: "📊", text: "Apple's keynote format: 'Today we're going to share three things. The first is… we'll come back to that.' They open three gaps in five seconds. You sit through the entire presentation to close them." }
    ],
    howTo: [
      "Before teaching anything, ask: what's the question this answers?",
      "Open with the question. Not the topic. Not the definition. The question.",
      "Make the gap visible: 'Most people get this wrong. Here's why.'",
      "Withhold the resolution slightly longer than feels comfortable.",
      "Once delivered, the answer sticks because it filled a felt need."
    ],
    watchOut: [
      { title: "Clickbait fatigue is real", text: "Surface a gap that doesn't deliver and you train people to distrust you. The gap must be real and the resolution must be worth the wait. Used cynically, this technique destroys trust faster than it builds attention." },
      { title: "Gaps must be calibrated", text: "Too small a gap (you already know it) — boring. Too large (you can't even imagine the answer) — overwhelming. The sweet spot is 'I have a guess, but I'm not sure.' That's where curiosity lives." }
    ],
    related: ["self-reference", "generation-effect", "inversion"],
    interactive: "curiosity-gap-demo",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7c83ff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#c77dff" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect x="60" y="100" width="120" height="100" fill="#7c83ff" fill-opacity="0.2" stroke="#7c83ff" stroke-width="2" rx="10"/>
  <text x="78" y="158" font-size="14" fill="#7c83ff" font-family="system-ui" font-weight="700">what you</text>
  <text x="78" y="176" font-size="14" fill="#7c83ff" font-family="system-ui" font-weight="700">know</text>
  <rect x="220" y="100" width="120" height="100" fill="none" stroke="#7c83ff" stroke-width="2" stroke-dasharray="6,4" rx="10"/>
  <text x="240" y="158" font-size="14" fill="#9090b8" font-family="system-ui">what you</text>
  <text x="240" y="176" font-size="14" fill="#9090b8" font-family="system-ui">should know</text>
  <text x="190" y="156" font-size="32" fill="#7c83ff" class="pulse" font-family="system-ui" font-weight="900">?</text>
  <path d="M180,150 L220,150" stroke="#7c83ff" stroke-width="2" marker-end="url(#cgArr)" stroke-dasharray="0"/>
  <defs><marker id="cgArr" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#7c83ff"/></marker></defs>
  <text x="100" y="240" font-size="12" fill="#9090b8" font-family="system-ui">the gap creates the pull</text>
</svg>`
  },

  "critical-mass": {
    id: "critical-mass",
    name: "Critical Mass",
    cat: "People & Systems",
    catColor: "#06d6a0",
    tagline: "Below the threshold: nothing. Above it: explosion.",
    summary: "Many systems do nothing until they hit a threshold — then they take off on their own. The work is reaching the threshold.",
    origin: "Nuclear physics (1940s). Applied to social systems by Mark Granovetter (1978).",
    story: `In nuclear physics, 'critical mass' is the minimum amount of fissile material needed to sustain a chain reaction. Below it: nothing happens. Above it: BOOM. The transition is sharp, not gradual.

Sociologist Mark Granovetter applied this to social behaviour in 1978. Imagine a riot. Some people join immediately, some need to see 5 others first, some need to see 50. If the threshold-1 person starts, and they recruit threshold-2, who recruit threshold-3, the riot grows. If the chain breaks anywhere, nothing happens. The same crowd, same conditions, can either riot or stay calm depending on whether the trigger reaches the right thresholds.

This pattern shows up in every social, technological, and biological system. Products need enough users to be useful. Habits need enough repetitions to be automatic. Movements need enough early supporters to feel inevitable. Below the threshold: dies quietly. Above: takes off on its own.

The implication is uncomfortable: most efforts FAIL not because they're bad ideas, but because they don't reach critical mass. The people who quit at 80% of threshold die invisibly while the people who push through 100% become 'overnight successes' (after years of grinding).`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Social network with 100 users: friends won't join because there's no one to talk to. Hits 100,000: explosive growth — everyone you know is on it. Below threshold the product is invisible; above it's inevitable." },
      { domain: "Everyday Life", icon: "🎯", text: "Trying to build a habit. First 21 days are hard. After enough repetitions, it becomes automatic. Below the threshold, every day is willpower. Above, it runs itself." },
      { domain: "Business", icon: "📊", text: "Marketplace (Airbnb, Uber): need enough buyers AND sellers to be useful. Below threshold: chicken-and-egg problem, neither side joins. Above: self-sustaining. Most marketplaces die at 60% of threshold." }
    ],
    howTo: [
      "Identify your critical-mass threshold honestly.",
      "Push HARD to reach it — most efforts fail at 80%.",
      "Don't quit before threshold; the curve is flat there but climbing.",
      "Once over, leverage momentum — let the system grow itself.",
      "Defend the floor: falling below threshold can collapse the whole thing."
    ],
    watchOut: [
      { title: "Some things never reach critical mass", text: "Don't keep pushing forever on something that's structurally unable to ignite. After your best honest effort, evaluate whether the threshold is actually reachable." },
      { title: "Critical mass varies wildly by domain", text: "A blog might reach critical mass at 1,000 readers. A social network needs millions. Research yours specifically — generic advice misleads." }
    ],
    related: ["network", "compounding", "antifragile"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="240" x2="370" y2="240" stroke="#9090b8" stroke-width="1"/>
  <line x1="200" y1="40" x2="200" y2="240" stroke="#c77dff" stroke-width="1" stroke-dasharray="4,4"/>
  <path d="M40,238 L100,232 L150,225 L190,215 L200,180 L220,80 L290,50 L370,40" stroke="#06d6a0" stroke-width="3" fill="none"/>
  <text x="155" y="30" font-size="11" fill="#c77dff" font-family="system-ui" font-weight="700">tipping point</text>
  <text x="40" y="270" font-size="11" fill="#9090b8" font-family="system-ui">flat → explosion</text>
</svg>`
  },

  /* ═══════════════ HOW YOU THINK — Memory Science (added v2) ═══════════════ */

  "spaced-practice": {
    id: "spaced-practice",
    name: "Spaced Practice",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "Memory decays exponentially. Each review flattens the curve.",
    summary: "Reviewing material at expanding intervals (1d, 3d, 1w, 1mo) produces dramatically more durable memory than the same total time spent in one session.",
    origin: "Hermann Ebbinghaus, Berlin, 1879–1885 (Über das Gedächtnis).",
    story: `In 1879, no one had measured human memory rigorously. Hermann Ebbinghaus locked himself in a room with 2,300 nonsense syllables he'd invented (BAF, ZOK, RUL) — chosen specifically because they had no meaning he could lean on. His subject: himself.

For five years he memorised lists, then tested himself at intervals: 20 minutes, 1 hour, 1 day, 1 week. He charted the decline. The result became one of the most replicated findings in cognitive psychology: memory decays roughly exponentially. The steepest drop happens in the first hour. After 24 hours without review, ~70% is gone.

That sounds depressing. It isn't. The curve is the lever.

Each successful retrieval at an INCREASING gap produces a FLATTER decay curve afterwards. Two reviews at expanding intervals produce far more durable memory than ten reviews crammed in one session. Cepeda's 2006 meta-analysis of 317 experiments found spacing beat massing across all of them.

This is the principle behind Anki, Duolingo, SuperMemo, and every serious flashcard system. Cramming feels productive because performance peaks at session-end. Memory peaks much later — and only if you spaced.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Learning a new language? Five 1-hour sessions across 5 days produce ~3x the long-term retention of one 5-hour binge — same total minutes, dramatically different outcome. Anki cards force this on you automatically." },
      { domain: "Everyday Life", icon: "🧠", text: "Memorising a friend's new phone number? Reading it once won't stick. Looking again 1 minute later, 10 minutes later, an hour later — even briefly — encodes it for weeks. The act of retrieving across gaps does the work." },
      { domain: "Business", icon: "📊", text: "Onboarding new hires by dumping 200-page docs on day 1: ~10% retention by week 2. Same content delivered as 3 short sessions on day 1, 3, 8: ~70% retention. Same total reading time, vastly different outcome." }
    ],
    howTo: [
      "After learning something, schedule reviews at expanding intervals: 1 day, 3 days, 1 week, 1 month, 3 months.",
      "Each review = TEST yourself, don't re-read (combine with retrieval practice).",
      "When you nail it, push the next interval further out. When you fail, reset to a shorter gap.",
      "Use a tool (Anki, RemNote, Mochi) — manual scheduling fails because you forget when to review.",
      "Optimal gap ≈ 10–20% of the time you need to remember it for. 1-week test: review every day. 1-year test: every ~28 days."
    ],
    watchOut: [
      { title: "Spacing without retrieval = empty calendar", text: "Reviewing by re-reading on a schedule isn't spaced practice. The benefit comes from forcing retrieval after some forgetting has happened. If review feels effortless, the gap is too short." },
      { title: "The curve never reaches zero, but neither does retention without effort", text: "Skip the schedule for 6 months and most of the gain is gone. Spaced practice isn't 'study and forget' — it's 'maintain forever, with diminishing effort each time'." }
    ],
    related: ["retrieval-practice", "desirable-difficulties", "compounding"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="240" x2="370" y2="240" stroke="#9090b8" stroke-width="1"/>
  <line x1="40" y1="40" x2="40" y2="240" stroke="#9090b8" stroke-width="1"/>
  <path d="M40,60 Q80,180 200,225 Q280,238 370,240" stroke="#ef476f" stroke-width="2" fill="none" opacity="0.4"/>
  <path d="M40,60 Q70,140 100,160 L100,100 Q120,150 160,170 L160,110 Q190,150 230,170 L230,120 Q260,160 370,170" stroke="#7c83ff" stroke-width="2.5" fill="none"/>
  <circle cx="100" cy="100" r="4" fill="#06d6a0"/>
  <circle cx="160" cy="110" r="4" fill="#06d6a0"/>
  <circle cx="230" cy="120" r="4" fill="#06d6a0"/>
  <text x="46" y="50" font-size="11" fill="#ef476f" font-family="system-ui">no review</text>
  <text x="200" y="100" font-size="11" fill="#7c83ff" font-family="system-ui" font-weight="600">spaced reviews</text>
  <text x="40" y="265" font-size="10" fill="#9090b8" font-family="system-ui">days →</text>
</svg>`
  },

  "retrieval-practice": {
    id: "retrieval-practice",
    name: "Retrieval Practice",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "Pulling memory from your brain IS the learning.",
    summary: "Testing yourself produces dramatically more durable memory than re-reading. The act of retrieval is itself an encoding event — even when you fail.",
    origin: "Henry Roediger & Jeffrey Karpicke, Washington University, 2006.",
    story: `In 2006, Henry Roediger and Jeffrey Karpicke ran the experiment that should have ended cramming forever. They gave students a passage to study, then split them into two groups:

Group A re-read the passage four times. Group B read it once, then took three free-recall tests with no rereading allowed.

Five minutes after the session, Group A felt much more confident. Both groups performed about the same on an immediate test.

One week later, Group B remembered roughly 60% more than Group A.

The students predicted the opposite. Asked which method would work better, they said re-reading. They were wrong — and most learners still are. Re-reading FEELS productive because familiarity creates an illusion of mastery. Retrieval feels HARDER because you have to actually pull memory from your brain. That difficulty IS the learning.

Karpicke's follow-up work in 2008 showed something stranger: students who tested themselves into ERRORS and got feedback outperformed students who studied perfectly without testing. The act of failing to retrieve, then learning the right answer, builds stronger memory than effortless review.

Generations of students who highlight, re-read, and review notes are using methods that reliably feel better than they work.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Reading the docs for a new framework feels productive. Closing the docs and trying to write code from memory — getting stuck, looking up only what you can't recall — produces 3-4× the retention. The errors during retrieval are where the learning happens." },
      { domain: "Everyday Life", icon: "🧠", text: "Studying for an exam by re-reading notes for 2 hours: low retention. Same 2 hours doing closed-book practice problems and reviewing only the ones you missed: dramatically higher retention." },
      { domain: "Business", icon: "📊", text: "Training new sales reps by giving them scripts to memorise: poor performance in the field. Same training time spent doing role-plays where they have to retrieve responses under pressure: vastly better real-world performance." }
    ],
    howTo: [
      "After reading anything important, close the source.",
      "Write down — on a blank page — everything you remember.",
      "Open the source. Compare. Mark what you missed.",
      "Repeat in 24 hours, then 3 days, then a week (combine with spaced practice).",
      "When testing, embrace failures — they're the most efficient form of learning, not the cost of it."
    ],
    watchOut: [
      { title: "Don't test before any exposure", text: "Retrieval without prior exposure is just frustration. You need the initial encoding to retrieve from. The order is: learn once → test repeatedly with gaps. Not test before learn." },
      { title: "Recognition ≠ recall", text: "Multiple-choice tests measure recognition, which is much easier than free recall. If you want durable memory, write answers from blank. If you only do MCQs, you're getting a fraction of the benefit." }
    ],
    related: ["spaced-practice", "generation-effect", "desirable-difficulties"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="120" cy="150" rx="60" ry="45" fill="#7c83ff" fill-opacity="0.15" stroke="#7c83ff" stroke-width="2"/>
  <text x="100" y="158" font-size="22" fill="#7c83ff" font-weight="700" font-family="system-ui">brain</text>
  <path d="M180,150 Q220,135 260,150" stroke="#7c83ff" stroke-width="2.5" fill="none" stroke-dasharray="4,4" marker-end="url(#rArr)"/>
  <defs><marker id="rArr" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#7c83ff"/></marker></defs>
  <rect x="265" y="125" width="90" height="50" fill="#06d6a0" fill-opacity="0.15" stroke="#06d6a0" stroke-width="2" rx="8"/>
  <text x="282" y="158" font-size="16" fill="#06d6a0" font-weight="700" font-family="system-ui">memory</text>
  <text x="120" y="220" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">the PULL is the learning</text>
</svg>`
  },

  "chunking": {
    id: "chunking",
    name: "Chunking",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "Experts see patterns where novices see chaos.",
    summary: "Working memory holds ~4 items. Expertise expands the BIT-content of each chunk by orders of magnitude — same memory, vastly more meaning.",
    origin: "William Chase & Herbert Simon, Carnegie Mellon, 1973.",
    story: `If memory were just raw capacity, chess grandmasters should have superhuman recall. They don't.

William Chase and Herbert Simon flashed chess positions for five seconds, then asked subjects to recreate them on an empty board. In one condition, the positions came from real games. In the other, the same pieces were scattered randomly.

On real positions: masters reconstructed ~16 pieces; novices managed ~4. On random scatters: BOTH groups got ~3.

The master's memory wasn't bigger. It was organised. Years of practice had built thousands of recognised patterns — knight outpost on e5, isolated queen pawn, fianchettoed bishop. Each pattern was a CHUNK. The master saw 4 chunks where the novice saw 16 random pieces. Strip the patterns away (the random board), and the advantage vanished.

This is how all expertise works. Doctors see symptom configurations. Senior engineers see architectural smells. Mathematicians see proof shapes. Working memory is fixed at ~4 chunks (Cowan's revision of Miller's 7±2). But expertise raises the bit-content of each chunk by orders of magnitude.

Implication: 'just memorise this list' is the wrong instinct for hard learning. Find the structure first.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Senior engineer sees: 'this is a producer-consumer with a slow consumer' → retrieves a complete solution pattern in one chunk. Junior tries to memorise each line of the queue implementation: loading 30 chunks, all blurry. Same code, completely different cognitive load." },
      { domain: "Everyday Life", icon: "🎵", text: "Musicians don't memorise individual notes — they recognise scales, chords, progressions, and motifs. A piece that looks impossibly long to a beginner contains maybe 10 chunks to an expert: same notes, very different memory cost." },
      { domain: "Business", icon: "📊", text: "Experienced doctors recognise diagnostic patterns in seconds — chest pain + sweating + shortness of breath = MI. Medical students see 12 individual symptoms and try to remember them. Pattern recognition IS expertise." }
    ],
    howTo: [
      "Before memorising anything, look for STRUCTURE — categories, hierarchies, narratives, common patterns.",
      "Group related items into a single named chunk (give each chunk a memorable label).",
      "Practice variations — see the same pattern in different contexts so the chunk becomes flexible.",
      "When stuck, ask: 'Have I seen this shape before in another domain?' Cross-domain analogies expand chunk libraries.",
      "Never try to learn flat lists in fields where structure exists. Find structure first; memorise structure, not items."
    ],
    watchOut: [
      { title: "Chunks are domain-specific", text: "Chess chunks don't transfer to medicine. Decades of pattern-building in one field doesn't speed expertise in another. Don't expect generalisation that doesn't exist." },
      { title: "Building chunks takes time and varied exposure", text: "You can't shortcut the process. A 'speed-learning' course that promises expert-level chunks in a weekend is selling fluency illusion. Real chunks come from thousands of varied encounters." }
    ],
    related: ["retrieval-practice", "deliberate-practice", "first-principles"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <text x="40" y="80" font-size="11" fill="#9090b8" font-family="system-ui">novice sees:</text>
  <circle cx="60" cy="120" r="6" fill="#9090b8"/><circle cx="100" cy="135" r="6" fill="#9090b8"/>
  <circle cx="140" cy="115" r="6" fill="#9090b8"/><circle cx="80" cy="175" r="6" fill="#9090b8"/>
  <circle cx="130" cy="180" r="6" fill="#9090b8"/><circle cx="170" cy="155" r="6" fill="#9090b8"/>
  <circle cx="60" cy="210" r="6" fill="#9090b8"/><circle cx="110" cy="220" r="6" fill="#9090b8"/>
  <circle cx="160" cy="205" r="6" fill="#9090b8"/>
  <text x="220" y="80" font-size="11" fill="#7c83ff" font-family="system-ui">expert sees:</text>
  <ellipse cx="265" cy="125" rx="42" ry="22" fill="#7c83ff" fill-opacity="0.2" stroke="#7c83ff" stroke-width="2"/>
  <text x="252" y="129" font-size="12" fill="#7c83ff" font-weight="700" font-family="system-ui">CHUNK</text>
  <ellipse cx="320" cy="180" rx="42" ry="22" fill="#7c83ff" fill-opacity="0.2" stroke="#7c83ff" stroke-width="2"/>
  <text x="307" y="184" font-size="12" fill="#7c83ff" font-weight="700" font-family="system-ui">CHUNK</text>
  <ellipse cx="265" cy="215" rx="42" ry="22" fill="#7c83ff" fill-opacity="0.2" stroke="#7c83ff" stroke-width="2"/>
  <text x="252" y="219" font-size="12" fill="#7c83ff" font-weight="700" font-family="system-ui">CHUNK</text>
</svg>`
  },

  "memory-palace": {
    id: "memory-palace",
    name: "Memory Palace",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "Hijack your spatial memory for arbitrary content.",
    summary: "Mentally place items along a familiar route. Walking the route retrieves them in order. The brain's spatial machinery is repurposed for anything.",
    origin: "Cicero, ancient Rome (Method of Loci). Modern revival: Joshua Foer, US Memory Championship, 2006.",
    story: `In 2005, Joshua Foer was a journalist covering the US Memory Championship for an article. The competitors weren't savants — they were ordinary people using techniques anyone could learn. Skeptical, Foer trained for a year under coach Ed Cooke. In 2006, he won.

His final scores: a shuffled deck of 52 cards in 1 minute 40 seconds. 100 random digits in 5 minutes. Names and faces of 99 strangers in 15 minutes.

His method was the memory palace — a technique Cicero used 2000 years ago. Walking through a familiar mental space (his childhood kitchen), he placed each item to remember as a vivid, often absurd image at a specific location. Bill Clinton riding a llama on the counter. Einstein moonwalking past the fridge.

To recall: walk the route, encounter each image, decode back to the original item.

The technique exploits a fact about the brain: spatial memory is robust and ancient. Eleanor Maguire scanned the brains of London taxi drivers (who memorise 25,000 streets to pass The Knowledge) and found their posterior hippocampus was significantly larger than controls. The brain's spatial regions are some of its most powerful real estate.

The memory palace hijacks that machinery. When she scanned memory champions later, their brains were structurally normal — but during encoding, they activated the same spatial regions. Same hardware, different content.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Need to remember 12 system design topics for an interview? Place each one in a room of your apartment. CAP theorem on the kitchen table. Sharding in the bathroom. Walk through during the interview to retrieve in order." },
      { domain: "Everyday Life", icon: "🛒", text: "Grocery list of 15 items? Walk through your house, place each item in a vivid scene at each landmark. By the time you reach the store, the list is intact and you don't need to check a phone." },
      { domain: "Business", icon: "📊", text: "Presenting at a conference and want to ditch the slides? Place each section of your talk at a location in a familiar route. Walking the route as you present means natural sequencing without notes." }
    ],
    howTo: [
      "Choose a familiar place (your home, commute, school) where you can navigate in detail mentally.",
      "Identify 10-20 distinct, ORDERED locations along a fixed route (don't randomise — the order is the retrieval cue).",
      "For each item to remember, create a vivid, weird, often funny image at the location. Boring images don't stick.",
      "Walk the route mentally several times after encoding. The walks ARE the practice.",
      "Reuse the SAME palace for short-term lists; build new palaces for permanent stores."
    ],
    watchOut: [
      { title: "Setup time isn't free", text: "Building a fluent palace takes weeks of practice. For a one-shot list of 5 items, it's overkill. Reserve it for content you genuinely need to recall on-demand and in order." },
      { title: "Vivid > literal", text: "Placing 'milk' at the door = forgettable. Placing 'a giant cow squirting milk through the keyhole' = unforgettable. The technique requires creative effort, not just placement." }
    ],
    related: ["chunking", "self-reference", "retrieval-practice"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="100" width="280" height="160" fill="none" stroke="#7c83ff" stroke-width="2" rx="6"/>
  <line x1="200" y1="100" x2="200" y2="260" stroke="#7c83ff" stroke-width="1.5"/>
  <line x1="60" y1="180" x2="340" y2="180" stroke="#7c83ff" stroke-width="1.5"/>
  <polygon points="60,100 200,40 340,100" fill="#7c83ff" fill-opacity="0.15" stroke="#7c83ff" stroke-width="2"/>
  <text x="115" y="150" font-size="22" font-family="system-ui">🔑</text>
  <text x="265" y="150" font-size="22" font-family="system-ui">📚</text>
  <text x="115" y="225" font-size="22" font-family="system-ui">🥛</text>
  <text x="265" y="225" font-size="22" font-family="system-ui">🎩</text>
  <path d="M125,160 Q165,170 270,160 Q310,170 270,235 Q230,245 130,235" stroke="#06d6a0" stroke-width="2" fill="none" stroke-dasharray="3,3"/>
  <text x="100" y="285" font-size="11" fill="#9090b8" font-family="system-ui">walk the route, retrieve the items</text>
</svg>`
  },

  "deliberate-practice": {
    id: "deliberate-practice",
    name: "Deliberate Practice",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "10,000 hours doesn't matter. The KIND of hours does.",
    summary: "Specific goals, focus, edge of ability, immediate feedback, refinement. Most practice is mindless reps; deliberate practice is the few that actually move the needle.",
    origin: "K. Anders Ericsson, Berlin Music Academy, 1993.",
    story: `K. Anders Ericsson studied violinists at the Berlin Music Academy. He grouped them by faculty assessment: "best" (international solo careers), "good" (top orchestras), and "music teachers" (lowest tier). All had the same teachers, same classes, roughly equivalent IQs.

The cumulative hours of solo practice by age 20 told the story: best ~10,000 hours, good ~7,500, teachers ~5,000.

Malcolm Gladwell collapsed this into "the 10,000-hour rule." Ericsson spent the rest of his career publicly correcting that. Hours alone do NOTHING. Mindless repetition for 10,000 hours produces a mediocre 10,000-hour practitioner. The KIND of practice is what matters.

Ericsson's criteria for practice that actually moves the needle:
1. Specific, well-defined goal (not "play for an hour")
2. Full focus, conscious effort (autopilot is not practice)
3. Operating beyond the comfort zone (at the edge of current ability)
4. Immediate, informative feedback (to correct before the wrong representation hardens)
5. Reflection and refinement (each cycle improves the mental representation)

Macnamara's 2014 meta-analysis of 88 studies found deliberate practice explained only ~12% of variance in performance overall. Necessary but not sufficient. Genetics, starting age, opportunity, coaching all matter. The 10,000-hour rule is "more wrong than right."

The skill isn't accumulating hours. It's structuring each hour so it builds something.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Coding for 8 hours making CRUD apps you've made before: zero growth. Spending 2 hours implementing a data structure you've never used, getting feedback from a senior engineer, and rewriting it three times: massive growth. Hours of mindless coding isn't practice." },
      { domain: "Everyday Life", icon: "🎾", text: "Tennis player hitting 1,000 forehands at the same speed and angle: builds bad habits faster. Same player hitting 100 shots with a coach calling out specific corrections, focusing on weight transfer: actually improves." },
      { domain: "Business", icon: "📊", text: "Sales rep doing the same pitch 100 times: gets fluent at one script. Same rep doing 20 pitches with a manager critiquing each one and forcing variations: develops actual skill." }
    ],
    howTo: [
      "Set a SPECIFIC sub-skill goal for the session (not 'practice', but 'work on transitioning between minor and major chords').",
      "Operate at the edge — choose problems that are 60-80% within your current ability. Not too easy (no growth), not too hard (no completion).",
      "Get feedback fast — from a coach, an automated test, a recording you review, anything immediate.",
      "Reflect: what worked, what didn't, what's the next sub-skill to target.",
      "Reps without the above four steps are NOT deliberate practice. They're maintenance at best, bad-habit reinforcement at worst."
    ],
    watchOut: [
      { title: "Most 'practice' is purposeful, not deliberate", text: "Without an expert teacher giving real-time feedback, you're doing what Ericsson called purposeful practice — better than mindless reps, but not the full thing. Don't conflate the two." },
      { title: "Deliberate practice is exhausting", text: "It's mentally costly because it requires sustained focus at the edge of your ability. You can only do 1-4 hours per day before quality degrades. Quantity is the wrong metric." }
    ],
    related: ["chunking", "desirable-difficulties", "compounding"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="240" x2="370" y2="240" stroke="#9090b8" stroke-width="1"/>
  <line x1="40" y1="40" x2="40" y2="240" stroke="#9090b8" stroke-width="1"/>
  <path d="M40,225 Q120,220 200,210 Q280,200 370,195" stroke="#9090b8" stroke-width="2" fill="none" stroke-dasharray="4,4"/>
  <path d="M40,230 Q120,180 200,120 Q280,80 370,50" stroke="#7c83ff" stroke-width="2.5" fill="none"/>
  <text x="200" y="200" font-size="11" fill="#9090b8" font-family="system-ui">naive practice</text>
  <text x="220" y="100" font-size="11" fill="#7c83ff" font-family="system-ui" font-weight="600">deliberate practice</text>
  <text x="40" y="265" font-size="10" fill="#9090b8" font-family="system-ui">hours →</text>
  <text x="20" y="40" font-size="10" fill="#9090b8" font-family="system-ui" transform="rotate(-90, 20, 40)">skill</text>
</svg>`
  },

  /* ═══════════════ ADDED FROM KAHNEMAN, MUNGER, TALEB, CHRISTIAN ═══════════════ */

  "system-1-2": {
    id: "system-1-2",
    name: "System 1 & System 2",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Two minds in one head. Knowing which one is talking is everything.",
    summary: "Most thinking happens fast, automatic, and emotional (System 1). The slow, deliberate, logical mind (System 2) only steps in when called — and is exhausting to use.",
    origin: "Daniel Kahneman, 'Thinking, Fast and Slow' (2011). Built on decades of research with Amos Tversky.",
    story: `Daniel Kahneman won the 2002 Nobel Prize in Economics for showing that humans don't actually decide the way classical economics assumed. We're not rational calculators. We're two minds glued together — and one of them is in charge most of the time.

System 1 is fast, automatic, intuitive, emotional. It runs constantly without effort. When you recognise a friend's face, dodge a flying ball, sense someone is angry, or have a "gut feeling" about a person — that's System 1. It's brilliant at pattern matching and incredibly cheap to run. It's also the home of nearly every cognitive bias.

System 2 is slow, deliberate, effortful. It's what you use to multiply 17 × 24, follow a complex argument, or check whether your code actually does what you think it does. System 2 is metabolically expensive — your pupils literally dilate when it engages — and it has limited capacity. After a few hours of hard System 2 work, you're depleted.

The dangerous truth: System 2 thinks it's in charge. It isn't. Most decisions are made by System 1, and System 2 just generates plausible-sounding rationalisations for what System 1 already decided. This is why people are confidently wrong, why arguments rarely change minds, and why every cognitive bias you've heard of exists.

The skill isn't trying to use System 2 for everything (impossible, exhausting). It's NOTICING which one is currently talking — and slowing down at the moments where the cost of System 1 being wrong is high.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Code review: 'this looks right' is System 1 pattern-matching. 'Let me trace through it line by line' is System 2. The bug System 1 missed is in the line that 'looks right'. Senior engineers know which mode to be in based on stakes." },
      { domain: "Everyday Life", icon: "🧠", text: "Argument with partner: System 1 hears criticism, fires defensive response in 200ms. System 2, if you slow down, can ask 'what are they actually saying?' Most fights are System 1 vs System 1. The first to engage System 2 ends them." },
      { domain: "Business", icon: "📊", text: "Hiring: gut feeling in 30 seconds (System 1) is highly correlated with what later interview structure 'discovers.' But System 1 also encodes biases — that's why structured interviews + scorecards exist. Force System 2 by externalising it." }
    ],
    howTo: [
      "Identify when you're on autopilot (System 1) vs deliberating (System 2).",
      "For high-stakes decisions, deliberately slow down. Write things down — the act of writing forces System 2.",
      "Use checklists, frameworks, and structured decision processes to OUTSOURCE System 2 to systems (less depleting than running it in your head).",
      "Save your System 2 budget for what matters. You only get a few hours of it per day before quality drops.",
      "When you catch yourself with a strong opinion you can't justify, that's System 1 in charge. Force a 'why' before acting."
    ],
    watchOut: [
      { title: "System 1 is often RIGHT", text: "Don't dismiss intuition. System 1 encodes years of pattern recognition. Experts' gut feelings are usually correct (in their domain). The trap is using System 1 in domains where you DON'T have the patterns yet." },
      { title: "System 2 is exhausting and rarely fully engaged", text: "You can't run System 2 all day. Most decisions WILL be made by System 1 — that's not avoidable. The skill is choosing which decisions deserve System 2's scarce attention." }
    ],
    related: ["confirmation", "anchoring", "availability"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="120" cy="150" rx="70" ry="55" fill="#ef476f" fill-opacity="0.15" stroke="#ef476f" stroke-width="2"/>
  <text x="100" y="155" font-size="13" fill="#ef476f" font-weight="700" font-family="system-ui">System 1</text>
  <text x="92" y="175" font-size="10" fill="#ef476f" font-family="system-ui">fast · auto</text>
  <ellipse cx="280" cy="150" rx="70" ry="55" fill="#4cc9f0" fill-opacity="0.15" stroke="#4cc9f0" stroke-width="2"/>
  <text x="260" y="155" font-size="13" fill="#4cc9f0" font-weight="700" font-family="system-ui">System 2</text>
  <text x="252" y="175" font-size="10" fill="#4cc9f0" font-family="system-ui">slow · effort</text>
  <text x="190" y="155" font-size="14" fill="#9090b8" font-family="system-ui">VS</text>
  <text x="80" y="240" font-size="11" fill="#9090b8" font-family="system-ui">most thinking</text>
  <text x="240" y="240" font-size="11" fill="#9090b8" font-family="system-ui">rarely engaged</text>
</svg>`
  },

  "loss-aversion": {
    id: "loss-aversion",
    name: "Loss Aversion",
    cat: "Mind Traps",
    catColor: "#ef476f",
    tagline: "Losses hurt 2× more than equivalent gains feel good.",
    summary: "The pain of losing is psychologically about twice as powerful as the pleasure of gaining the same amount. This single asymmetry distorts most decisions.",
    origin: "Daniel Kahneman & Amos Tversky, 1979 (Prospect Theory). Won Kahneman the 2002 Nobel Prize in Economics.",
    story: `In 1979, Kahneman and Tversky ran a now-famous experiment. They offered subjects a coin flip: heads, win $150. Tails, lose $100. Expected value: +$25. Almost nobody took the bet.

The math was clearly favourable. The decision wasn't. Why? Losing $100 felt psychologically MORE intense than winning $150. They tested the asymmetry rigorously across hundreds of variations. The ratio came out remarkably stable: roughly 2:1. A loss of X feels about as bad as a gain of 2X feels good.

This single asymmetry warps almost every decision humans make.

It's why investors hold losing stocks too long ("I don't want to realise the loss"). Why people stay in bad jobs ("what if the next one is worse?"). Why companies overcompensate to avoid one customer complaint while ignoring ten silent satisfied customers. Why the entire insurance industry exists — we'll pay more than the expected loss just to avoid the possibility of feeling it.

The deeper insight is that loss aversion makes us systematically reject favourable bets. People who refused Kahneman's coin flip would be MUCH richer over a lifetime if they took it 100 times. But emotion overrides arithmetic, every time.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Holding onto legacy code because 'rewrite might fail' — even when the rewrite has 80% expected value gain. The fear of breaking what works (a felt loss) outweighs the expected gain of cleaner code. Same logic kills database migrations." },
      { domain: "Everyday Life", icon: "💡", text: "Staying in a relationship/job/city that's a 5/10 because the alternative MIGHT be a 4. The brain weighs the possible loss (going to 4) twice as heavily as the possible gain (going to 9). Result: people get stuck at 5s for years." },
      { domain: "Business", icon: "📊", text: "Insurance industry: customers pay $2,000/year to insure something with 5% chance of $20,000 loss. Expected loss: $1,000. Customers happily pay double the expected value because the felt cost of the loss is double the dollar amount." }
    ],
    howTo: [
      "When facing a decision, ask: 'Am I weighing the possible loss MORE than mathematically warranted?'",
      "Convert the framing — instead of 'I might lose X', ask 'I'd be paying X for the certainty of not feeling loss.'",
      "Run the favorable bet 100 times in your head. Would the math win out? If yes, take it.",
      "Notice when fear of regret is bigger than the actual stakes. That's loss aversion talking, not reason.",
      "For repeated small bets with positive expected value, just take them. The loss aversion is a feature for survival but a bug for optimization."
    ],
    watchOut: [
      { title: "Loss aversion isn't always wrong", text: "Some losses ARE catastrophic and irrecoverable. Losing your house. Losing health. The asymmetry exists because over evolutionary time, losses really were more dangerous than equivalent gains were valuable. Don't override it for high-stakes irreversible bets." },
      { title: "Don't force yourself into reckless behavior", text: "Recognising loss aversion doesn't mean ignoring it entirely. The goal is calibration — taking the favorable bets while still respecting the catastrophic ones." }
    ],
    related: ["sunk-cost", "anchoring", "reversibility"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="200" y1="40" x2="200" y2="260" stroke="#9090b8" stroke-width="1"/>
  <line x1="40" y1="150" x2="360" y2="150" stroke="#9090b8" stroke-width="1"/>
  <text x="50" y="155" font-size="11" fill="#9090b8" font-family="system-ui">$</text>
  <rect x="160" y="80" width="80" height="70" fill="#ef476f" fill-opacity="0.6"/>
  <text x="166" y="115" font-size="13" fill="#ef476f" font-weight="700" font-family="system-ui">PAIN</text>
  <text x="166" y="135" font-size="10" fill="#ef476f" font-family="system-ui">losing $100</text>
  <rect x="160" y="150" width="80" height="35" fill="#06d6a0" fill-opacity="0.6"/>
  <text x="167" y="172" font-size="11" fill="#06d6a0" font-weight="700" font-family="system-ui">JOY of $100</text>
  <text x="80" y="220" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">losses</text>
  <text x="320" y="220" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">gains</text>
  <text x="80" y="270" font-size="11" fill="#ef476f" font-family="system-ui" font-weight="700" text-anchor="middle">2× the felt impact</text>
</svg>`
  },

  "lindy-effect": {
    id: "lindy-effect",
    name: "Lindy Effect",
    cat: "Chaos & Risk",
    catColor: "#c77dff",
    tagline: "The longer it's lasted, the longer it'll last.",
    summary: "For non-perishable things — books, ideas, technologies — life expectancy INCREASES with age. New stuff is fragile. Old stuff has earned its longevity.",
    origin: "Mandelbrot (mathematics). Popularised by Nassim Taleb in 'Antifragile' (2012).",
    story: `Pick a book that's been in print for 100 years and another that just hit the bestseller list. Which is more likely to be read in 10 years?

Counter-intuitively: the 100-year-old book.

Perishable things (humans, fruit) decay with age — every day brings them closer to expiry. But NON-perishable things (books, technologies, institutions) work the opposite way. Each year a thing has survived is evidence that it'll survive more years. A book that's lasted 2,000 years (Aristotle's Ethics) will probably last 2,000 more. A book that came out last week probably won't last a decade.

Taleb called this the Lindy Effect (named after Lindy's deli in NYC where comedians informally observed that veteran acts had longer expected careers than rookies).

The principle: time has filtered out what doesn't work. Older ideas have already survived 1,000 fashions, 100 paradigm shifts, and millions of skeptics. They've earned their longevity. New ideas haven't been tested.

Practical implication: when picking what to learn, what to use, what to invest in — bet on what's been around. Latin > buzzword frameworks. SQL > the trendy NoSQL of the year. Stoic philosophy > whatever just hit the airport bookstore.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "SQL is 50+ years old. JavaScript frameworks come and go every 18 months. The Lindy bet: SQL will be relevant in 2050. The 'next big thing' framework probably won't. Bet your career on Lindy tech for foundational skills." },
      { domain: "Everyday Life", icon: "📚", text: "Reading: 'Meditations' by Marcus Aurelius (1,900 years) vs the latest self-help bestseller. The bestseller might be brilliant — but probability says you'll get more durable insight from the Stoic. Time has already done the curation." },
      { domain: "Business", icon: "📊", text: "Investing: gold (~5,000 years), real estate (~10,000 years), broad-market index funds (~100 years). All Lindy. Crypto (~15 years), NFTs (~5 years) — high upside, high mortality. Most LOSE everything in time-tested ways." }
    ],
    howTo: [
      "When picking tools, skills, or ideas to invest in: prefer time-tested.",
      "Ask 'how long has this been around?' If the answer is <5 years, treat it as fragile.",
      "When something old seems boring, that's the survivorship signal — it survived because it works.",
      "Apply with caution to specific predictions: Lindy says SOMETHING in this category will last; not necessarily THIS specific instance.",
      "Use as a tiebreaker between equally promising options: pick the older one when nothing else differentiates."
    ],
    watchOut: [
      { title: "Lindy ≠ better. Lindy = more durable.", text: "Sometimes new technology is genuinely revolutionary (electricity, internet, transformers). Lindy isn't a rule against innovation — it's a calibration on how to weigh durability vs novelty. Don't be reactionary." },
      { title: "Doesn't apply to perishable things", text: "Lindy is for ideas, books, technologies, institutions. NOT for biological things (humans, fruit) — those decay normally. Don't invert biological mortality." }
    ],
    related: ["antifragile", "compounding", "second-order"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="240" x2="360" y2="240" stroke="#9090b8" stroke-width="1"/>
  <line x1="40" y1="40" x2="40" y2="240" stroke="#9090b8" stroke-width="1"/>
  <path d="M40,200 Q120,210 200,210 Q280,205 360,200" stroke="#c77dff" stroke-width="2.5" fill="none"/>
  <text x="60" y="225" font-size="22" font-family="system-ui">📜</text>
  <text x="320" y="195" font-size="11" fill="#c77dff" font-family="system-ui" font-weight="700">expected life</text>
  <text x="320" y="210" font-size="11" fill="#c77dff" font-family="system-ui" font-weight="700">grows with age</text>
  <path d="M40,180 Q60,150 80,200 L120,200 L120,170 L160,170 L160,220 L200,220 L200,180 L260,180 L260,235 Q320,238 360,238" stroke="#9090b8" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.5"/>
  <text x="40" y="265" font-size="11" fill="#9090b8" font-family="system-ui">years lasted →</text>
</svg>`
  },

  "optimal-stopping": {
    id: "optimal-stopping",
    name: "Optimal Stopping (37% Rule)",
    cat: "Time & Effort",
    catColor: "#ffd166",
    tagline: "Look at first 37%. Pick the next-best thing.",
    summary: "When you must choose 1 from N options sequentially with no second chances, mathematically optimal: observe first 37%, then take the first option better than all you've seen.",
    origin: "Mathematics, 1960s (Secretary Problem). Popularised in Brian Christian & Tom Griffiths' 'Algorithms to Live By' (2016).",
    story: `Imagine you're hiring a secretary. You'll interview candidates one at a time. After each interview, you must decide: hire or reject. Rejections are final — that candidate is gone. Hires are final — you're done. You don't know how good future candidates will be.

When should you stop and hire?

Mathematicians solved this exactly in the 1960s. The answer: observe the first 37% of candidates without hiring (they're your benchmark), then hire the first candidate who's BETTER than all the benchmark ones. This strategy gives you a 37% chance of getting the best possible candidate — strictly better than any other strategy.

The number 1/e ≈ 36.8% emerges from the math because as you increase candidates, the optimal "look phase" converges to that fraction. It's strange and beautiful. And it generalises.

Apartment hunting? Look at 37% of available units, then commit to the next one that beats them all.

Dating with the goal of marriage? If you expect to date 30 people, observe the first 11, then commit to the next person better than all of them.

Hiring a designer? Interview 37% as benchmarks. Hire the next one who exceeds them.

The technique doesn't guarantee the best — nothing can. It maximises your odds given the constraint of sequential, irrevocable choice.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Choosing a database for a new product: list 10 candidates. Evaluate the first 4 deeply (~37%) without committing. Pick the next one that's clearly better. Faster than evaluating all 10 with diminishing rigor." },
      { domain: "Everyday Life", icon: "🏠", text: "Apartment hunting in NYC: you have 30 days, ~30 viewings. Use first 11 days as observation (don't sign even if you love a place). Days 12-30: commit to the first place that beats them all." },
      { domain: "Business", icon: "📊", text: "Hiring a senior engineer: estimate you'll interview 15 candidates over a quarter. Use first 5 as benchmarks. Hire the next one who exceeds all 5. Resists 'just one more interview' paralysis." }
    ],
    howTo: [
      "Estimate (or commit to) total options you'll see: N.",
      "Calculate 0.37 × N. That's your observation phase.",
      "During observation: rank everyone you see, but don't commit. Reject all of them at the end.",
      "After observation: commit to the FIRST option that's better than your highest-ranked observation.",
      "Don't second-guess. The math is the math. Backing out invalidates the strategy."
    ],
    watchOut: [
      { title: "Assumes irrevocable choice", text: "Most real-world decisions allow renegotiation or coming back. If options aren't actually sequential-only, the strict 37% rule is overkill — you can use simpler heuristics. Apply the rule when commitment really is one-way." },
      { title: "37% is a heuristic, not a law", text: "The exact optimum depends on your goal: if you want top-1, use 37%. If 'top-3 is fine', use a smaller observation phase. Calibrate to your real preferences. Don't treat 37% as sacred." }
    ],
    related: ["reversibility", "opportunity", "second-order"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="200" x2="360" y2="200" stroke="#9090b8" stroke-width="1"/>
  <rect x="40" y="180" width="118" height="40" fill="#ffd166" fill-opacity="0.2" stroke="#ffd166" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="68" y="205" font-size="11" fill="#ffd166" font-family="system-ui" font-weight="700">OBSERVE (37%)</text>
  <rect x="158" y="180" width="202" height="40" fill="#06d6a0" fill-opacity="0.2" stroke="#06d6a0" stroke-width="1.5"/>
  <text x="200" y="205" font-size="11" fill="#06d6a0" font-family="system-ui" font-weight="700">COMMIT to next-best</text>
  <line x1="158" y1="170" x2="158" y2="230" stroke="#7c83ff" stroke-width="2"/>
  <text x="60" y="160" font-size="10" fill="#9090b8" font-family="system-ui">don't pick yet</text>
  <text x="180" y="160" font-size="10" fill="#9090b8" font-family="system-ui">pick first one better than all observed</text>
  <text x="40" y="245" font-size="10" fill="#9090b8" font-family="system-ui">candidate 1</text>
  <text x="320" y="245" font-size="10" fill="#9090b8" font-family="system-ui">candidate N</text>
</svg>`
  },

  "margin-of-safety": {
    id: "margin-of-safety",
    name: "Margin of Safety",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Build a buffer between estimate and ruin.",
    summary: "Your estimates will be wrong. Engineer a buffer between what you think will happen and what would be catastrophic. The buffer IS the safety.",
    origin: "Benjamin Graham, 'The Intelligent Investor' (1949). Adopted by Warren Buffett and Charlie Munger.",
    story: `Benjamin Graham, the father of value investing, articulated it in 1949: only buy a stock when its price is significantly below your estimate of intrinsic value. That gap between estimate and price is your MARGIN OF SAFETY.

Why? Because your estimate WILL be wrong. The world is uncertain, businesses evolve, markets surprise. If you buy at intrinsic value with no buffer, even small estimation errors mean you lose money. If you buy at 50 cents on the dollar of estimated value, you can be quite wrong about the value and still be fine.

Warren Buffett built a $100B fortune on this single principle. Charlie Munger generalised it from investing to engineering, life, and decision-making.

The principle is universal because uncertainty is universal. Bridges aren't built to handle exactly the expected load — they're built for 5x. Code shouldn't run at exactly 100% of memory — leave 30% headroom for spikes. A startup runway shouldn't be exactly 18 months — make it 24 because reality always lags optimistic plans.

The margin is the cost of admitting you might be wrong. The COST of having a margin is smaller scale, slower growth, less aggressive bets. The cost of NOT having one is occasional ruin. For most rational people, the trade favours buffer.

Munger's framing is even sharper: "All I want to know is where I'm going to die, so I'll never go there." The margin of safety is the inversion applied to engineering.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Database: don't run at 95% capacity. Run at 60-70%. The 30% margin absorbs traffic spikes, query bugs, gradual growth. Without it, the first surprise crashes the system. With it, you get warning before disaster." },
      { domain: "Everyday Life", icon: "💰", text: "Emergency fund: 6 months of expenses isn't a wealth strategy — it's a margin of safety. If you lose income, the buffer keeps you out of forced bad decisions (panic-selling, predatory loans, accepting awful jobs)." },
      { domain: "Business", icon: "📊", text: "Project timeline: PMs say 'finish by Q3.' Honest engineers add a 50% margin and say 'Q4 mid.' The margin absorbs the unknown unknowns that always exist. Projects without buffer reliably ship late and broken." }
    ],
    howTo: [
      "Make your honest estimate of how something will play out.",
      "Identify the failure scenario: what would 'wrong' look like?",
      "Calculate the buffer needed: enough that being wrong by a reasonable amount still leaves you OK.",
      "Apply the margin BEFORE committing — bigger stakes = bigger margin.",
      "Treat the margin as cost-of-doing-business, not waste. The margin is what's saving you from your own confidence."
    ],
    watchOut: [
      { title: "Too much margin = wasted capacity", text: "Building a bridge for 100x load when you only need 5x is overkill. Calibrate margin to: how wrong could you reasonably be, and how catastrophic is being wrong? Most projects have too little; some have too much." },
      { title: "Margin doesn't substitute for skill", text: "A bad estimate with a 50% margin still fails 50% of the time. Margin protects against UNKNOWNS, not against systemic incompetence. Improve estimates AND add margin — both, not one." }
    ],
    related: ["antifragile", "inversion", "second-order"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="240" x2="360" y2="240" stroke="#9090b8" stroke-width="1"/>
  <rect x="40" y="180" width="180" height="60" fill="#06d6a0" fill-opacity="0.3" stroke="#06d6a0" stroke-width="2" rx="4"/>
  <text x="80" y="217" font-size="13" fill="#06d6a0" font-weight="700" font-family="system-ui">YOUR ESTIMATE</text>
  <rect x="220" y="180" width="80" height="60" fill="#ffd166" fill-opacity="0.3" stroke="#ffd166" stroke-width="2" stroke-dasharray="4,3" rx="4"/>
  <text x="234" y="215" font-size="11" fill="#ffd166" font-weight="700" font-family="system-ui">MARGIN</text>
  <line x1="300" y1="170" x2="300" y2="250" stroke="#ef476f" stroke-width="2"/>
  <text x="305" y="190" font-size="11" fill="#ef476f" font-family="system-ui" font-weight="700">RUIN</text>
  <text x="305" y="205" font-size="9" fill="#ef476f" font-family="system-ui">line</text>
  <text x="60" y="265" font-size="11" fill="#9090b8" font-family="system-ui">buffer between estimate and disaster</text>
</svg>`
  },

  "sleep-consolidation": {
    id: "sleep-consolidation",
    name: "Sleep Consolidation",
    cat: "How You Think",
    catColor: "#7c83ff",
    tagline: "You don't finish learning while studying. You finish while sleeping.",
    summary: "During sleep, the hippocampus replays the day's traces to the cortex, turning fragile memory into durable memory. Less than 7 hours = pouring water into a leaky bucket.",
    origin: "Matthew Walker (Berkeley) & Robert Stickgold (Harvard), 2000s.",
    story: `Matt Walker's lab at Berkeley ran a deceptively simple experiment. Subjects learned a finger-tapping sequence, then split into two groups.

WAKE group: practice in the morning, retest 12 hours later. SLEEP group: practice in the evening, retest 12 hours later (after a night's sleep). Same task, same total practice, same gap. Only difference: sleep.

Wake group: 0% improvement. Sleep group: ~20% improvement, with NO additional practice. The brain consolidated the skill while they slept.

This isn't motor-skill specific. Walker's lab and Stickgold's at Harvard documented similar effects for declarative memory, emotional memory, problem-solving insight, and creative connection-making. During slow-wave (NREM) sleep, the hippocampus replays the day's traces to the cortex; sleep spindles gate the transfer; what was labile becomes stable. REM sleep does the same for procedural and emotional content.

The implication is unforgiving: if you sleep less than 7 hours, you're pouring water into a leaky bucket. One bad night undoes a day of effort. Worse — Walker's longitudinal data shows the lost memory cannot be recovered by sleeping the next night. The consolidation window passes.

This is the most underrated study habit. It costs zero hours and you literally do it lying down. Most learners ignore it.`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Stuck on a tricky bug at 11pm? Sleep on it. The hippocampus is rerunning the problem space overnight — solutions arrive in the shower because the brain finished work that conscious effort couldn't." },
      { domain: "Everyday Life", icon: "🧠", text: "Studying for a hard exam? The hour right before sleep gives material first crack at consolidation. The 4-hour cram you did instead, ending at 2am, is worse than the same content studied at 9pm followed by 8 hours of sleep." },
      { domain: "Business", icon: "📊", text: "Founders pulling all-nighters before pitch days are sabotaging their own performance. The skills and content they need most — clarity, recall, working memory — are exactly what sleep deprivation destroys." }
    ],
    howTo: [
      "Sleep 7-9 hours. Non-negotiable. This is the single highest-leverage study habit on this list.",
      "Study HARD material in the 1-2 hours before sleep — gives it priority access to consolidation.",
      "No screens 30 minutes before sleep — blue light suppresses melatonin, delays sleep, reduces REM.",
      "No alcohol — it suppresses REM specifically, the stage that consolidates emotional and procedural memory.",
      "Naps work too — even 20-minute naps after learning produce measurable consolidation gains."
    ],
    watchOut: [
      { title: "Lost sleep can't be repaid", text: "Walker's data shows you can't 'catch up' on sleep the next night to recover lost consolidation. The window passes. People who say 'I'll sleep when I'm dead' are losing 20-50% of what they learn during waking hours." },
      { title: "Quantity AND quality matter", text: "Eight hours of fragmented, alcohol-disrupted sleep ≠ eight hours of clean sleep. REM stages cycle every ~90 minutes; you need multiple full cycles for full consolidation benefits." }
    ],
    related: ["spaced-practice", "deliberate-practice", "compounding"],
    interactive: "reflect",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="220" x2="370" y2="220" stroke="#9090b8" stroke-width="1"/>
  <line x1="40" y1="40" x2="40" y2="220" stroke="#9090b8" stroke-width="1"/>
  <line x1="40" y1="220" x2="220" y2="220" stroke="#9090b8" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="100" y="245" font-size="11" fill="#9090b8" font-family="system-ui">wake group: 0%</text>
  <line x1="220" y1="220" x2="370" y2="80" stroke="#7c83ff" stroke-width="3" fill="none"/>
  <circle cx="370" cy="80" r="6" fill="#7c83ff" class="pulse"/>
  <text x="270" y="100" font-size="11" fill="#7c83ff" font-family="system-ui" font-weight="600">sleep group: +20%</text>
  <text x="225" y="245" font-size="22" font-family="system-ui">💤</text>
  <text x="40" y="20" font-size="10" fill="#9090b8" font-family="system-ui">retention</text>
</svg>`
  }

};
