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
    summary: "Strip away assumptions until you reach undeniable facts, then reason up from there.",
    origin: "Aristotle. Applied to modern business by Elon Musk.",
    story: `In 2002, Elon Musk wanted to send a rocket to Mars. He got quotes from aerospace manufacturers: $65 million per rocket. The numbers made his vision impossible.

Instead of accepting the price, he asked a different question: what is a rocket actually MADE of?

Aerospace-grade aluminium alloys, titanium, copper, carbon fibre — commodity materials available on the open market. He looked up the price of each raw material. The answer: about 2% of the quoted rocket price.

So instead of buying rockets, SpaceX built them. The Falcon 9 costs around $62 million total to manufacture. Comparable rockets from competitors cost $150–300 million.

That's first-principles thinking. Not "how do I get a cheaper rocket?" but "what is a rocket, fundamentally?" Musk didn't invent anything new — he refused to accept convention as reality.

Most of us accept prices, rules, processes, and constraints without asking whether they're actually load-bearing. First principles asks: is this true because it's true, or true because everyone stopped questioning it?`,
    examples: [
      { domain: "Engineering", icon: "⚙️", text: "Slow database query. Convention: add an index, tune the query, increase memory. First principles: what is the query actually computing? What's the minimum information needed to answer it? The answer is often to redesign the data model, not optimise the query." },
      { domain: "Everyday Life", icon: "💡", text: "Weddings 'cost' ₹20–50 lakhs because 'that's what weddings cost.' First principles: a wedding is two people declaring commitment in front of people they love, with food and music. The cost of the components is a fraction of the convention price." },
      { domain: "Business", icon: "📊", text: "Airbnb: hotels cost $200/night because hotels have buildings, staff, overhead. First principles: what does a traveller actually need? A clean space to sleep. What if the space already exists and is temporarily empty? Airbnb was born." }
    ],
    howTo: [
      "State the problem or assumption you're questioning.",
      "Ask 'why is this true?' Then ask 'why?' again. Repeat 5 times.",
      "Stop when you hit something verifiable independently — a physical law, a measurable fact.",
      "Those are your first principles. Build back up from them.",
      "Each layer you add: ask 'is this necessary or assumed?'"
    ],
    watchOut: [
      { title: "Don't reinvent everything", text: "First-principles thinking is expensive. Use it for high-stakes, expensive, or stuck problems. For everyday decisions, convention exists for good reasons. Don't agonise over coffee orders from first principles." },
      { title: "You still need domain knowledge", text: "First principles isn't beginner's luck. Musk spent years studying aerospace before concluding rockets were overpriced. You need to know enough to identify which assumptions are load-bearing vs vestigial." }
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
  }

};
