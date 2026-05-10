/* Rich deep-dive data for mental models.
   Each model has: id, name, cat, catColor, tagline, summary,
   origin, story, examples[3], howTo[], watchOut[], related[],
   interactive, svgHero */

const DEEP_MODELS = {

  inversion: {
    id: "inversion",
    name: "Inversion",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Flip the problem upside down.",
    summary: "Instead of asking how to succeed, ask how to guarantee failure — then avoid those things.",
    origin: "19th-century mathematician Carl Jacobi. Popularised by Charlie Munger.",
    story: `Carl Jacobi, a brilliant 19th-century mathematician, had a favourite piece of advice for solving hard problems: <em>"Man muss immer umkehren"</em> — always invert.

He wasn't talking about pessimism. He meant: when the forward path is foggy, map the reverse path first. Figure out every route to catastrophe, and you've automatically found the boundaries of success.

Charlie Munger, Warren Buffett's partner at Berkshire Hathaway, adopted this as a core thinking tool. In a famous speech he said: "Tell me where I'm going to die, so I'll never go there." He doesn't just ask what makes a great company — he asks what destroys companies, and invests in businesses that avoid those failure modes.

The key insight: our brains are wired to think forward. Inversion forces us off autopilot and into territory our gut would never explore.`,
    examples: [
      {
        domain: "Engineering",
        icon: "⚙️",
        text: "Don't ask 'how do we make this system reliable?' Ask: 'what are all the ways this system could fail?' Then eliminate each one. This is how safety-critical systems (planes, nuclear plants) are designed."
      },
      {
        domain: "Everyday Life",
        icon: "🧠",
        text: "Struggling with productivity? Don't ask 'how do I become more productive?' Ask 'what reliably destroys my productivity?' (phone in sight, no sleep, unclear goals). Remove those first."
      },
      {
        domain: "Business",
        icon: "📊",
        text: "Berkshire Hathaway's investment filter is 90% inversion: avoid companies with bad management, commodity economics, heavy debt, and regulatory exposure. What's left is a great investment."
      }
    ],
    howTo: [
      "State your goal clearly: 'I want to make great decisions.'",
      "Invert it: 'How would I guarantee terrible decisions?'",
      "List 5–10 specific failure modes honestly.",
      "For each failure mode, ask: 'Am I currently doing any of this?'",
      "Fix the failures first. The goal often takes care of itself."
    ],
    watchOut: [
      {
        title: "Inversion ≠ pessimism",
        text: "Thinking about failure doesn't mean expecting it. It's a tool for mapping the territory, not a prediction. Use it alongside forward thinking, not instead of it."
      },
      {
        title: "Not every problem inverts cleanly",
        text: "Inversion shines on complex, high-stakes decisions. For simple choices ('which coffee should I order?'), it's overkill. Save it for the decisions that matter."
      }
    ],
    related: ["first-principles", "second-order", "occam"],
    interactive: "inversion-flip",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="invGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4cc9f0" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#c77dff" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <circle cx="200" cy="150" r="130" fill="url(#invGrad)" stroke="#4cc9f0" stroke-width="1" stroke-opacity="0.3"/>
  <text x="110" y="90" font-size="56" class="float">😀</text>
  <path d="M165,130 Q200,90 235,130" stroke="#4cc9f0" stroke-width="2.5" fill="none" marker-end="url(#arrInv)"/>
  <defs>
    <marker id="arrInv" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4cc9f0"/>
    </marker>
    <marker id="arrInv2" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto">
      <path d="M10,0 L0,5 L10,10 Z" fill="#ef476f"/>
    </marker>
  </defs>
  <path d="M235,170 Q200,210 165,170" stroke="#ef476f" stroke-width="2.5" fill="none" marker-end="url(#arrInv2)"/>
  <text x="230" y="220" font-size="56" style="animation: float 3s ease-in-out infinite; animation-delay: 1.2s;" class="float">🙃</text>
  <text x="60" y="155" font-size="13" fill="#4cc9f0" font-family="system-ui" font-weight="600">Forward</text>
  <text x="290" y="155" font-size="13" fill="#ef476f" font-family="system-ui" font-weight="600">Inverted</text>
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
      {
        domain: "Engineering",
        icon: "⚙️",
        text: "Writing 1 technical blog post per week feels pointless in month one. By year three, you have 150 posts, 50k readers, speaking invitations, and job offers. The posts from year one are now doing work while you sleep."
      },
      {
        domain: "Everyday Life",
        icon: "📚",
        text: "Reading 20 pages a day feels trivial. In a year: 7,300 pages — roughly 25 books. In 10 years: 250 books. Most CEOs read 50+ books a year. You can too, with 20 pages a day."
      },
      {
        domain: "Business",
        icon: "📊",
        text: "Customer referrals: if each customer brings 1 more customer, and they each bring 1 more — you double every cycle. This is why virality is so valued. The math becomes impossible to fight against."
      }
    ],
    howTo: [
      "Find something worth compounding: a skill, a habit, a relationship, money.",
      "Make it daily or weekly — consistency beats intensity.",
      "Reinvest your returns: put knowledge back into more learning; put money back into more investment.",
      "Protect the chain — one missed week isn't fatal, a month is.",
      "Be patient through the 'flat' phase. The explosion is coming."
    ],
    watchOut: [
      {
        title: "Negative compounding works too",
        text: "A small bad habit compounded over years is a catastrophe. 1 cigarette a day, $50/month of debt, 30 mins less sleep every night. The model cuts both ways."
      },
      {
        title: "The rate has to be real",
        text: "Compounding assumes a consistent return. Be sceptical of 'guaranteed' high-rate compounding (Ponzi schemes look exactly like this). 7% real annually is historically solid; 30% is a fantasy."
      }
    ],
    related: ["pareto", "opportunity-cost", "second-order"],
    interactive: "compounding-calc",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="30"  y="260" width="28" height="10"  fill="#ffd166" rx="3"/>
  <rect x="70"  y="252" width="28" height="18"  fill="#ffd166" rx="3"/>
  <rect x="110" y="238" width="28" height="32"  fill="#ffd166" rx="3"/>
  <rect x="150" y="215" width="28" height="55"  fill="#ffd166" rx="3"/>
  <rect x="190" y="178" width="28" height="92"  fill="#ffd166" rx="3"/>
  <rect x="230" y="120" width="28" height="150" fill="#ffd166" rx="3"/>
  <rect x="270" y="50"  width="28" height="220" fill="#ffd166" rx="3" class="pulse"/>
  <rect x="310" y="10"  width="28" height="260" fill="#ffd166" rx="3" class="pulse"/>
  <text x="345" y="40" font-size="28" fill="#ffd166" class="bounce">📈</text>
  <line x1="20" y1="270" x2="380" y2="270" stroke="#2a2a44" stroke-width="2"/>
  <text x="25" y="285" font-size="10" fill="#9090b8" font-family="system-ui">Year 1</text>
  <text x="305" y="285" font-size="10" fill="#ffd166" font-family="system-ui" font-weight="bold">Year 20</text>
</svg>`
  },

  "confirmation-bias": {
    id: "confirmation-bias",
    name: "Confirmation Bias",
    cat: "Mind Traps",
    catColor: "#ef476f",
    tagline: "You find what you're already looking for.",
    summary: "The brain automatically collects evidence that confirms existing beliefs and ignores everything that contradicts them.",
    origin: "Named and studied by Peter Wason (1960). One of the most replicated findings in cognitive psychology.",
    story: `In 1960, psychologist Peter Wason gave participants a simple puzzle. He showed them the sequence <strong>2 — 4 — 6</strong> and said it followed a rule. Their job: discover the rule by testing other sequences. Wason would tell them if each new sequence fit the rule or not.

Nearly everyone tested sequences like 8, 10, 12 or 14, 16, 18 — all following their hypothesis ("even numbers going up by 2"). Almost nobody tested 1, 2, 3. Almost nobody tested 10, 7, 3.

The actual rule was simply: <em>any three numbers in ascending order</em>.

The participants didn't fail because they were stupid. They failed because the human brain is wired to confirm, not to test. Every brain does this — yours, mine, every expert's. It's a default operating mode, not a flaw in certain people.

This is why echo chambers form online. Why smart people hold beliefs that don't survive scrutiny. Why code reviews miss bugs the author wrote. The brain builds a story and then searches for supporting evidence — editing out everything else.`,
    examples: [
      {
        domain: "Engineering",
        icon: "⚙️",
        text: "Code review: the author reads their own code and sees what they intended it to do. They miss the bug because their brain fills in the expected behaviour. This is why code review by someone else is so valuable — a fresh brain has no story to confirm."
      },
      {
        domain: "Everyday Life",
        icon: "🏡",
        text: "Apartment hunting: once you fall in love with one, you notice all its good features and explain away the bad ones. Other apartments suddenly feel wrong in ways that might not matter. Your brain picked a winner and stopped evaluating."
      },
      {
        domain: "Business",
        icon: "📊",
        text: "Customer discovery: founders interview 10 potential customers. They unconsciously ask questions that invite validation ('You'd find this useful, right?') and unconsciously ignore signals that contradict their thesis."
      }
    ],
    howTo: [
      "Name your current belief clearly: 'I believe X is true.'",
      "Ask: 'What would prove me WRONG?' — then actually look for it.",
      "Find your smartest critic and genuinely listen without defending.",
      "Pre-mortem: imagine the project failed. What was the reason?",
      "Separate data collection from interpretation — get raw info before analysing."
    ],
    watchOut: [
      {
        title: "You cannot eliminate it — only manage it",
        text: "Confirmation bias is a factory setting. The goal is building systems that compensate: checklists, devil's advocates, blind reviews, structured decision processes. Willpower alone won't fix it."
      },
      {
        title: "Don't overcorrect into contrarianism",
        text: "Deliberately seeking disconfirmation doesn't mean every mainstream view is wrong. Sometimes the evidence really does support the popular belief. The goal is testing, not reflexive opposition."
      }
    ],
    related: ["inversion", "availability-heuristic", "survivorship-bias"],
    interactive: "wason-task",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blurOut">
      <feGaussianBlur stdDeviation="3"/>
    </filter>
  </defs>
  <circle cx="200" cy="150" r="90" fill="#ef476f" fill-opacity="0.08" stroke="#ef476f" stroke-width="1" stroke-opacity="0.3"/>
  <circle cx="200" cy="150" r="55" fill="#ef476f" fill-opacity="0.12" stroke="#ef476f" stroke-width="1.5" stroke-opacity="0.5"/>
  <text x="178" y="165" font-size="36" class="pulse">✅</text>
  <text x="60"  y="70"  font-size="28" opacity="0.2" filter="url(#blurOut)">❌</text>
  <text x="310" y="70"  font-size="28" opacity="0.2" filter="url(#blurOut)">❌</text>
  <text x="50"  y="240" font-size="28" opacity="0.15" filter="url(#blurOut)">❌</text>
  <text x="315" y="240" font-size="28" opacity="0.15" filter="url(#blurOut)">❌</text>
  <text x="130" y="60"  font-size="18" opacity="0.2" filter="url(#blurOut)">✅</text>
  <text x="240" y="60"  font-size="18" opacity="0.2" filter="url(#blurOut)">✅</text>
  <text x="105" y="255" font-size="13" fill="#ef476f" font-family="system-ui" text-anchor="middle">Only sees</text>
  <text x="105" y="270" font-size="13" fill="#ef476f" font-family="system-ui" text-anchor="middle">what fits</text>
  <text x="300" y="255" font-size="13" fill="#9090b8" font-family="system-ui" text-anchor="middle">Ignores the</text>
  <text x="300" y="270" font-size="13" fill="#9090b8" font-family="system-ui" text-anchor="middle">rest</text>
</svg>`
  },

  "first-principles": {
    id: "first-principles",
    name: "First Principles",
    cat: "Thinking Better",
    catColor: "#4cc9f0",
    tagline: "Break it down to the atoms. Rebuild from scratch.",
    summary: "Strip away assumptions until you reach undeniable truths, then reconstruct your thinking from that foundation.",
    origin: "Aristotle's philosophy. Applied in modern business by Elon Musk.",
    story: `In 2002, Elon Musk wanted to send a rocket to Mars. He got quotes from aerospace manufacturers: $65 million per rocket. The numbers made the vision impossible.

Instead of accepting the price, he asked a different question: <em>what is a rocket actually made of?</em>

Aerospace-grade aluminium alloys, titanium, copper, carbon fibre — commodity materials available on the open market. He looked up the price of each raw material. The answer: 2% of the quoted rocket price.

So instead of buying rockets, SpaceX built them. The Falcon 9 costs around $62 million total to manufacture. Comparable rockets from competitors cost $150–300 million.

That's first-principles thinking. Not 'how do I get a cheaper rocket?' but 'what is a rocket, fundamentally?' Musk didn't invent anything new — he just refused to accept convention as reality.

Most of us accept prices, rules, processes, and constraints without asking whether they're actually load-bearing. First principles asks: is this true because it's true, or true because everyone stopped questioning it?`,
    examples: [
      {
        domain: "Engineering",
        icon: "⚙️",
        text: "Slow database query. Convention: add an index, tune the query, increase memory. First principles: what is the query actually computing? What's the minimum information needed to answer it? Often the answer is to redesign the data model, not optimise the query."
      },
      {
        domain: "Everyday Life",
        icon: "💡",
        text: "Weddings 'cost' ₹20–50 lakhs because 'that's what weddings cost.' First principles: a wedding is two people declaring commitment in front of people they love, with food and music. The cost of the fundamental components is a fraction of the convention price."
      },
      {
        domain: "Business",
        icon: "📊",
        text: "Airbnb: hotels cost $200/night because hotels have buildings, staff, and overhead. First principles: what does a traveller actually need? A clean space to sleep. What if you used spaces that already exist and are temporarily empty? AirBnB was born."
      }
    ],
    howTo: [
      "State the problem or assumption you're questioning.",
      "Ask 'why is this true?' — then ask 'why?' again. Repeat 5 times.",
      "Stop when you hit something you can verify independently (a physical law, a measurable fact).",
      "Those are your first principles. Build back up from them.",
      "Every layer you add: ask 'is this necessary or assumed?'"
    ],
    watchOut: [
      {
        title: "Don't reinvent everything",
        text: "First-principles thinking is expensive — it takes time and energy. Use it for high-stakes, expensive, or stuck problems. For everyday decisions, convention exists for good reasons. Don't agonise over your coffee order from first principles."
      },
      {
        title: "You still need domain knowledge",
        text: "First principles isn't beginner's luck. Musk spent years studying aerospace before he concluded rockets were overpriced. You need to know enough to identify which assumptions are load-bearing vs vestigial."
      }
    ],
    related: ["inversion", "second-order", "occam"],
    interactive: "first-principles-breakdown",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect x="155" y="20"  width="90" height="36" fill="#4cc9f0" rx="6" class="float"/>
  <text x="175" y="43"  font-size="14" fill="#0e0e1a" font-weight="700" font-family="system-ui">PROBLEM</text>
  <line x1="200" y1="56" x2="200" y2="80" stroke="#4cc9f0" stroke-width="2" stroke-dasharray="4,3"/>
  <rect x="100" y="80"  width="80" height="30" fill="#c77dff" rx="5"/>
  <text x="115" y="100" font-size="11" fill="#0e0e1a" font-weight="600" font-family="system-ui">Assumption</text>
  <rect x="220" y="80"  width="80" height="30" fill="#c77dff" rx="5"/>
  <text x="235" y="100" font-size="11" fill="#0e0e1a" font-weight="600" font-family="system-ui">Convention</text>
  <line x1="140" y1="110" x2="160" y2="135" stroke="#9090b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="260" y1="110" x2="240" y2="135" stroke="#9090b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <rect x="130" y="135" width="60" height="26" fill="#ffd166" rx="5" class="float" style="animation-delay:.4s"/>
  <rect x="210" y="135" width="60" height="26" fill="#ffd166" rx="5" class="float" style="animation-delay:.7s"/>
  <line x1="160" y1="161" x2="180" y2="185" stroke="#9090b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="240" y1="161" x2="220" y2="185" stroke="#9090b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <rect x="155" y="185" width="90" height="30" fill="#06d6a0" rx="5" class="pulse"/>
  <text x="170" y="205" font-size="11" fill="#0e0e1a" font-weight="700" font-family="system-ui">TRUTH ✓</text>
  <text x="80"  y="260" font-size="11" fill="#9090b8" font-family="system-ui">Strip assumptions down...</text>
  <text x="220" y="260" font-size="11" fill="#06d6a0" font-family="system-ui">...rebuild from truth</text>
</svg>`
  },

  pareto: {
    id: "pareto",
    name: "Pareto Principle",
    cat: "Time & Effort",
    catColor: "#ffd166",
    tagline: "20% of causes create 80% of results.",
    summary: "Effort and outcomes are distributed wildly unequally. Find the small number of things that drive most of the value.",
    origin: "Vilfredo Pareto (1896), Italian economist. Applied to quality management by Joseph Juran (1940s).",
    story: `Vilfredo Pareto was an Italian economist who in 1896 noticed something odd about land ownership in Italy: 80% of the land was owned by 20% of the population. He found this ratio so striking that he checked his own garden — and found that 20% of his pea pods contained 80% of the peas.

He began checking everywhere. Tax records across multiple countries: roughly the same ratio. Wealth distribution: similar pattern. The exact numbers varied, but the principle held: outcomes cluster around a small number of inputs.

Joseph Juran, a quality management consultant in the 1940s, applied this to manufacturing and called it 'the vital few and the trivial many.' His insight: fix the top 20% of defects and you eliminate 80% of your quality problems. This became core to how Japanese manufacturers like Toyota rebuilt after WWII.

The principle shows up everywhere: 20% of bugs cause 80% of crashes. 20% of customers generate 80% of revenue. 20% of features get used 80% of the time. 20% of your efforts produce 80% of your results.

The uncomfortable implication: 80% of what you do today probably doesn't matter much. The question is: which 20%?`,
    examples: [
      {
        domain: "Engineering",
        icon: "⚙️",
        text: "20% of code contains 80% of the bugs. Profilers consistently show that 20% of functions consume 80% of execution time. Rather than optimising everything, find the bottleneck — fix that one thing first."
      },
      {
        domain: "Everyday Life",
        icon: "👔",
        text: "Open your wardrobe. You probably wear 20% of your clothes 80% of the time. The rest takes up space, creates decision fatigue, and makes getting dressed harder. This is why capsule wardrobes work."
      },
      {
        domain: "Business",
        icon: "📊",
        text: "20% of customers generate 80% of revenue — and often require the least support. Many businesses grow faster by doubling down on serving their best customers better, not acquiring more average ones."
      }
    ],
    howTo: [
      "List everything contributing to your goal (tasks, customers, features, habits).",
      "Roughly estimate the impact of each one.",
      "Sort by impact. Identify the top 20%.",
      "Protect and prioritise those. Cut or delegate the bottom 80%.",
      "Re-run this analysis every quarter — the vital few shifts over time."
    ],
    watchOut: [
      {
        title: "80/20 is a pattern, not a law",
        text: "The exact numbers vary: sometimes it's 90/10, sometimes 70/30. The principle is 'unequal distribution', not 'exactly 80 and 20'. Don't force the numbers; look for the inequality."
      },
      {
        title: "The 80% isn't always cuttable",
        text: "Some 'low-impact' work is load-bearing infrastructure. The 80% of code you rarely run might be your error handling. The 80% of customers who buy less might be future top customers. Audit before you cut."
      }
    ],
    related: ["compounding", "opportunity-cost", "second-order"],
    interactive: "pareto-visual",
    svgHero: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="145" r="118" fill="#1a1a2e" stroke="#ffd166" stroke-width="1" stroke-opacity="0.3"/>
  <path d="M200,145 L200,27 A118,118 0 1,1 83,200 Z" fill="#ffd166" fill-opacity="0.85" class="pulse"/>
  <path d="M200,145 L83,200 A118,118 0 0,1 200,27 Z" fill="#ef476f" fill-opacity="0.7"/>
  <text x="145" y="130" font-size="28" font-weight="800" fill="#0e0e1a" font-family="system-ui">80%</text>
  <text x="148" y="155" font-size="12" fill="#0e0e1a" font-family="system-ui">results</text>
  <text x="118" y="220" font-size="16" font-weight="700" fill="#ef476f" font-family="system-ui">20% causes</text>
  <text x="200" y="280" font-size="11" fill="#9090b8" font-family="system-ui" text-anchor="middle">The vital few drive almost everything</text>
</svg>`
  }
};
