export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string; // ISO
  readTime: string;
  image: string;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-ai-agent-actually-means",
    title: "What “AI agent” actually means (and what it doesn’t)",
    excerpt:
      "Everyone's shipping an “AI agent” right now. Most of them are a chatbot with a system prompt. Here's the actual difference, and why it matters for what you're paying for.",
    author: "Mirza Md. Shafi Uddin",
    authorRole: "Founder, AI & Software Engineer",
    date: "2026-07-10",
    readTime: "5 min read",
    image: "/images/code-screen.jpg",
    body: [
      {
        type: "p",
        text: "“Agent” has quietly become the most stretched word in software. Right now it gets applied to anything with an LLM API key behind it — a chatbot widget, a form that auto-fills, a script that summarizes an email. Some of those are genuinely agentic. Most aren't. The difference matters, because it's usually the difference between what you're actually paying for and what you think you're paying for.",
      },
      { type: "h2", text: "The actual test" },
      {
        type: "p",
        text: "A chatbot answers a question. An agent does something about it. That's the whole test. If the system can only produce text back to a human who then has to go take the action themselves, you have a well-dressed FAQ, not an agent — however good the writing sounds.",
      },
      {
        type: "p",
        text: "A real agent can look something up, decide what to do with what it found, and take the next step without a human relaying it by hand: check an order status in your system, update a record, escalate to a person when it's genuinely unsure, or hand off cleanly with the right context attached instead of a dead end.",
      },
      { type: "h2", text: "A concrete example" },
      {
        type: "p",
        text: "Say a customer messages asking where their order is. A chatbot answers with generic shipping policy text because that's all it has access to. An agent checks the actual order in your system, sees it's delayed, and either replies with the real status or flags it to a human with the order ID already pulled up — no copy-pasting between five tabs to find that same answer.",
      },
      {
        type: "p",
        text: "Same input, same LLM underneath in both cases. The difference is entirely in what it's wired into.",
      },
      { type: "h2", text: "What to actually ask before buying one" },
      {
        type: "ul",
        items: [
          "What systems does it actually read from and write to — or does it just generate text?",
          "What happens when it doesn't know the answer? Does it guess, or does it hand off?",
          "Can you see what it did, after the fact, not just what it said?",
          "Is there a human in the loop for anything that changes real data or costs real money?",
        ],
      },
      {
        type: "p",
        text: "None of this makes chatbots useless — a well-scoped one is often the right, cheaper answer. But it should be sold as what it is. When we scope an AI System, the first question we ask is whether the workflow actually needs an agent that can act, or whether a good answer is enough. That decision changes the build, the price, and what you should expect from it — and it's the honest starting point, not an upsell.",
      },
    ],
  },
  {
    slug: "rag-explained-without-the-jargon",
    title: "RAG, explained without the jargon",
    excerpt:
      "Retrieval-Augmented Generation sounds like it needs a PhD to understand. It doesn't. Here's what it actually does, and when you genuinely need it.",
    author: "Mirza Md. Shafi Uddin",
    authorRole: "Founder, AI & Software Engineer",
    date: "2026-07-24",
    readTime: "6 min read",
    image: "/images/about-workspace.jpg",
    body: [
      {
        type: "p",
        text: "RAG — Retrieval-Augmented Generation — is one of those terms that sounds more complicated than what it describes. Strip the acronym away and it's this: look something up first, then answer using what you found. That's the entire idea.",
      },
      { type: "h2", text: "Why an LLM needs this at all" },
      {
        type: "p",
        text: "A language model on its own only knows what it was trained on, plus whatever's in the current conversation. It doesn't know your return policy, your current pricing, or what changed in your SOP last month. Ask it directly and it will either say so — or, worse, guess confidently and get it wrong. RAG fixes this by handing the model your actual documents at the moment it needs to answer, instead of hoping it memorized something close enough.",
      },
      { type: "h2", text: "What's actually happening under the hood" },
      {
        type: "ul",
        items: [
          "Your documents — policies, pricing sheets, SOPs, past tickets — get broken into chunks and turned into a searchable index.",
          "When a question comes in, the system searches that index for the most relevant chunks, not the whole document library.",
          "Those chunks get handed to the LLM along with the question, so it answers from what's actually in front of it.",
        ],
      },
      {
        type: "p",
        text: "The model isn't “learning” your documents in any permanent sense. It's re-reading the relevant bits fresh, every time, the way you'd hand someone the right page of a manual instead of asking them to recite it from memory.",
      },
      { type: "h2", text: "The part everyone underestimates" },
      {
        type: "p",
        text: "The LLM is rarely the weak link in a RAG system. The retrieval step is. If the search step pulls the wrong chunk — an outdated pricing page, a policy that was since revised — the model will answer confidently from the wrong source, and it'll sound just as convincing as if it had the right one. Most of the real engineering work in a knowledge assistant is making sure the right document actually gets found, not making the writing sound better.",
      },
      { type: "h2", text: "When you don't need it" },
      {
        type: "p",
        text: "If the answer fits in a paragraph and rarely changes, you don't need RAG — you need a well-written system prompt. RAG earns its complexity when you have real volume of documents, they change often enough that hardcoding them is a maintenance problem, and getting an answer wrong has a real cost. Building it when you don't need it just adds infrastructure without adding accuracy.",
      },
    ],
  },
  {
    slug: "the-audit-before-the-automation",
    title: "The audit before the automation: why we don’t start with a build",
    excerpt:
      "The fastest way to waste money on automation is to automate the wrong process well. Here's why every engagement starts with a diagnostic, not a build.",
    author: "Mirza Md. Shafi Uddin",
    authorRole: "Founder, AI & Software Engineer",
    date: "2026-08-05",
    readTime: "5 min read",
    image: "/images/blog-planning.jpg",
    body: [
      {
        type: "p",
        text: "The most common failure mode in automation isn't a bad build. It's a good build of the wrong thing. Someone gets excited about AI, picks a process because it's visible or annoying, and commissions a system for it — without first checking whether that process was ever a good candidate for automation in the first place.",
      },
      { type: "h2", text: "What actually makes a process worth automating" },
      {
        type: "p",
        text: "Not every repetitive task is a good target. The ones that are worth it tend to share a few things in common:",
      },
      {
        type: "ul",
        items: [
          "It happens often enough that the time adds up — daily or near-daily, not once a quarter.",
          "The decision inside it is mostly rule-based, not deep judgment — 'if X then Y,' not 'it depends on reading the room.'",
          "Getting it wrong occasionally is recoverable, not catastrophic.",
          "It's currently bottlenecked on a person being available, not on a decision only a person can make.",
        ],
      },
      {
        type: "p",
        text: "A process missing most of these isn't a bad idea to eventually improve — it's just not where an automation budget should go first.",
      },
      { type: "h2", text: "Why we scope this before touching a build" },
      {
        type: "p",
        text: "An Audit or Systems Architecture Review exists specifically to check this before any code gets written. It's a short, fixed-price look at one process end to end: the tools involved, the handoffs, where time actually goes, and whether automating it would meaningfully help or just move the bottleneck somewhere else.",
      },
      {
        type: "p",
        text: "Sometimes the honest answer is “not yet” — the volume isn't there, or the process is too judgment-heavy to hand off safely right now. That's a real, useful outcome, even though it doesn't lead to a bigger invoice. We'd rather tell a client that early than build something expensive that quietly gets abandoned three months in because it was never the right target.",
      },
      { type: "h2", text: "The quick win, before the bigger build" },
      {
        type: "p",
        text: "Most audits end with one small, contained automation included — something that ships in days and proves the model works before anyone commits to a larger system. It's a cheap way to build trust in both directions before either side is asking the other to bet on something bigger.",
      },
    ],
  },
  {
    slug: "five-manual-processes-worth-automating-first",
    title: "Five manual processes worth automating first",
    excerpt:
      "Not every manual process is worth fixing. These five show up again and again as the highest-leverage places to start.",
    author: "Mirza Md. Shafi Uddin",
    authorRole: "Founder, AI & Software Engineer",
    date: "2026-08-12",
    readTime: "6 min read",
    image: "/images/hero-workspace.jpg",
    body: [
      {
        type: "p",
        text: "If you're not sure where to point an automation budget, these are the processes that tend to earn it back fastest — not because they're glamorous, but because they're high-frequency, rule-based, and currently bottlenecked on a person just being available.",
      },
      { type: "h2", text: "1. Lead intake and routing" },
      {
        type: "p",
        text: "A lead comes in through WhatsApp, a form, or an ad, and sits until someone manually logs it and decides who follows up. The delay itself is often the actual cost — slower first response measurably kills conversion, independent of how good the eventual reply is.",
      },
      { type: "h2", text: "2. The same support question, answered by hand, every time" },
      {
        type: "p",
        text: "If your team is typing near-identical replies to the same handful of questions all day, that's not a training problem — it's a routing problem. The answer already exists; it's just being retyped by a person instead of surfaced automatically.",
      },
      { type: "h2", text: "3. Status lookups across disconnected tools" },
      {
        type: "p",
        text: "“Where's this order?” shouldn't require checking three systems and a spreadsheet to answer. When the honest answer to a simple question takes five minutes of tab-switching, that's usually a sign the systems were never actually connected — just co-located.",
      },
      { type: "h2", text: "4. Manual data re-entry between systems" },
      {
        type: "p",
        text: "Copying the same customer or order details from one tool into another by hand is pure risk with no upside — it costs time and it's exactly the kind of task where a typo quietly causes a real problem downstream.",
      },
      { type: "h2", text: "5. Follow-ups that depend on someone remembering" },
      {
        type: "p",
        text: "Renewal reminders, quote follow-ups, re-engagement after a few days of silence — these are exactly the tasks that get skipped when someone's busy, because there's no system forcing them to happen. A missed follow-up rarely looks like a failure at the time; it just looks like a lead that went quiet.",
      },
      {
        type: "p",
        text: "None of these require a sophisticated AI system to fix — most are closer to Business Automation than anything agentic. That's usually the point: the highest-leverage automation is rarely the most technically impressive one.",
      },
    ],
  },
  {
    slug: "security-questions-before-an-ai-agent-touches-your-data",
    title: "The security questions to ask before an AI agent touches your data",
    excerpt:
      "An AI agent with access to your CRM or inbox is a new kind of access point. Here's what to ask before you give it one.",
    author: "Shoeb Mahfuz",
    authorRole: "Co-founder, Network & Cybersecurity Engineer",
    date: "2026-08-19",
    readTime: "5 min read",
    image: "/images/blog-security.jpg",
    body: [
      {
        type: "p",
        text: "To be useful, an AI agent usually needs real access — read your inbox, look up a customer record, update a CRM field, sometimes send a message on your behalf. That's a new kind of access point into your business, and it deserves the same scrutiny you'd give any system with that level of reach, not less just because it's framed as AI.",
      },
      { type: "h2", text: "Why this is a different risk than a normal integration" },
      {
        type: "p",
        text: "A traditional integration does one narrow thing, the same way, every time — sync field A to field B. An agent makes a decision in the moment about what to do next, based on a prompt and whatever data it's given. That flexibility is the whole value of it, and it's also exactly why scoping its access matters more, not less.",
      },
      { type: "h2", text: "The questions worth asking before you say yes" },
      {
        type: "ul",
        items: [
          "What data can it actually read — one system, or everything a broad API key happens to expose?",
          "What can it write or change, and is that scoped down to only what the task needs?",
          "Where do the API keys and credentials live, and who else can see them?",
          "Is there a log of what it actually did, not just what it said it did?",
          "What happens when it's confidently wrong — does a mistake get caught, or does it just ship?",
        ],
      },
      {
        type: "p",
        text: "If a vendor can't answer these clearly, that's the answer. “It's powered by GPT-4” is not a security posture.",
      },
      { type: "h2", text: "How we approach this in what we build" },
      {
        type: "p",
        text: "Scope access to exactly what the task needs, not the broadest key that happens to be convenient. Keep credentials out of the agent's own prompt or memory. Log what actually happened, so a mistake is debuggable instead of a mystery. And keep a human in the loop for anything that changes real data or spends real money, until the system has actually earned that trust in production.",
      },
      {
        type: "p",
        text: "None of this is exotic — it's the same discipline you'd want from any system with write access to your business. AI doesn't get a pass on it just because the interface is a chat window.",
      },
    ],
  },
  {
    slug: "why-we-monitor-everything-we-ship",
    title: "Why we monitor everything we ship (and what breaks quietly)",
    excerpt:
      "Automations don't usually fail loudly. They fail quietly, when a third-party API changes something small. Here's why monitoring isn't optional.",
    author: "Shoeb Mahfuz",
    authorRole: "Co-founder, Network & Cybersecurity Engineer",
    date: "2026-08-26",
    readTime: "5 min read",
    image: "/images/dashboard-metrics.jpg",
    body: [
      {
        type: "p",
        text: "An automation almost never fails the way people picture. There's no crash, no error page, nothing that shows up as an outage. It just quietly stops doing part of what it's supposed to do, and everything looks fine from the outside — until a customer notices before you do.",
      },
      { type: "h2", text: "How this actually happens" },
      {
        type: "p",
        text: "A third-party API renames a field. A rate limit gets tightened. An access token expires on a schedule nobody wrote down. A platform changes a default setting in an update nobody asked for. None of these are dramatic events on their own — they're exactly the kind of small, unannounced change that a working automation quietly stops tolerating.",
      },
      {
        type: "p",
        text: "The automation doesn't announce that it's broken. It just starts silently skipping the step that depended on the thing that changed, while everything around it keeps running normally.",
      },
      { type: "h2", text: "Why this is worse than a visible outage" },
      {
        type: "p",
        text: "A visible outage gets fixed fast because everyone can see it. A quiet failure can run for days or weeks before anyone connects the dots — usually only after a customer complains about something that should have been automatic, at which point you're doing damage control instead of a quick fix.",
      },
      { type: "h2", text: "What real monitoring actually checks" },
      {
        type: "ul",
        items: [
          "Not just “is the server up,” but “is the automation still producing the outcome it's supposed to.”",
          "Whether a downstream API's shape has changed since the integration was built.",
          "Whether volume has dropped to zero in a place it shouldn't — often the first sign something's silently broken.",
          "Whether credentials are approaching expiry before they lapse mid-process.",
        ],
      },
      {
        type: "p",
        text: "This is why we treat monitoring as a retainer, not a line item you can skip after launch. A system that worked perfectly on delivery day and was never checked again isn't finished — it's just not broken yet.",
      },
    ],
  },
  {
    slug: "off-the-shelf-or-custom-software",
    title: "Off-the-shelf tool or custom software? A simple way to decide",
    excerpt:
      "Buying a SaaS tool is almost always cheaper than building your own. Except when it isn't. Here's how we actually think about that decision.",
    author: "Mirza Md. Shafi Uddin",
    authorRole: "Founder, AI & Software Engineer",
    date: "2026-09-01",
    readTime: "5 min read",
    image: "/images/join-team-office.jpg",
    body: [
      {
        type: "p",
        text: "The default answer to “should we build this ourselves?” should almost always be no. An existing tool has already been built, tested, and maintained by a team whose full-time job is that one problem. Custom software only makes sense when that default genuinely breaks down — and it's worth being honest about when that actually happens, rather than jumping to a build because it feels more impressive.",
      },
      { type: "h2", text: "The bias should be: buy first" },
      {
        type: "p",
        text: "Most business workflows — CRM, invoicing, scheduling, support tickets — are solved problems. Paying a monthly fee for a tool that already works, is already secure, and gets updated without you lifting a finger is almost always the cheaper, safer choice than building and maintaining your own version of the same thing.",
      },
      { type: "h2", text: "The actual signal it's time to build" },
      {
        type: "p",
        text: "The tell isn't “this tool is annoying.” Most tools are annoying in some way. The real signal is when you're spending more manual effort working around a tool's limitations than the tool is saving you in the first place — duct-taping three SaaS products together with spreadsheets and manual re-entry to approximate a workflow none of them were actually built for.",
      },
      {
        type: "p",
        text: "At that point the tool isn't reducing your manual work anymore. It's just relocating it.",
      },
      { type: "h2", text: "A simple gut check" },
      {
        type: "p",
        text: "Add up the hours your team spends working around a tool's limitations — duplicate entry, manual reconciliation, exporting from one system to paste into another. If that number is climbing every month instead of shrinking, that's the actual signal, not how new or exciting a custom build sounds.",
      },
      { type: "h2", text: "Why this is usually the last system we build, not the first" },
      {
        type: "p",
        text: "This is exactly why Software Engineering sits underneath AI Systems and Business Automation in how we're structured, not ahead of them. Custom software earns its cost once a workflow has actually outgrown what's available off the shelf — usually after an automation or agent is already live and has proven the workflow is worth investing in properly. Building it first, before that's established, is how teams end up maintaining expensive software for a problem that didn't need one.",
      },
    ],
  },
];
