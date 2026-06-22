/* ============================================================
   LinkedIn InMail Sequences — Salesforce Personas
   Edit this file to change default copy. Per-message edits made
   in the app's Edit tab are saved separately in your browser and
   override these defaults until you hit Reset.

   Messages 5 (soft intro) and 6 (soft ask) are generated from the
   shared templates below using each persona's `audience` word, so
   they stay consistent. Edit a template to change them everywhere,
   or use the Edit tab to change one persona's copy.
   ============================================================ */

const GROUPS = [
  "Admin & Platform",
  "Dev & Architecture",
  "QA & Testing",
  "Delivery & Product",
  "Business Systems",
  "RevOps & Leadership"
];

// Shared message 5 + 6 templates (aud = persona.audience)
function introMsg(aud){
  return {
    topic: "Soft intro / who I am",
    subjectStyle: "direct",
    subject: "Should've said this first",
    body: `Hi [Name], I've sent a couple notes without saying who I am, which is a bit backwards. I work in the Salesforce world and spend most of my time talking with ${aud} about what's actually going on in their orgs. Not pitching anything, just wanted to connect properly.`
  };
}
function askMsg(aud){
  return {
    topic: "Soft ask",
    subjectStyle: "question",
    subject: "Worth 20 minutes?",
    body: `Hi [Name], last note for a while. If any of this has matched what you're dealing with, I'd enjoy talking it through. 20 minutes, no deck, no demo. And if the timing's off, no worries, I'll check back down the road.`
  };
}

/* Each persona defines messages 1-4. Messages 5-6 are added below. */
const PERSONA_SOURCE = [

/* ===================== ADMIN & PLATFORM ===================== */
{ id:"sf-admin", group:"Admin & Platform", label:"Salesforce Admin", audience:"admins", messages:[
  { topic:"Agentforce governance", subjectStyle:"curiosity", subject:"Who governs Agentforce when it's wrong?",
    body:`Hi [Name], quick thought. Orgs are switching on Agentforce and handing admins the keys to govern it, usually with zero training on what that means. When an agent gives a customer a bad answer, it lands on the admin. Is that conversation happening in your org yet?` },
  { topic:"Friday deployments", subjectStyle:"direct", subject:"Deploys that break at 5pm Friday",
    body:`Hi [Name], an admin told me last week that every deploy feels like defusing a bomb. One wrong step and something 400 reps rely on goes dark, always Friday afternoon. I hear it enough that I'm wondering if it's just normal now. Is that your reality, or has it improved?` },
  { topic:"Role changing", subjectStyle:"question", subject:"Is the admin role actually changing?",
    body:`Hi [Name], honest question. Is the admin role really changing, or does it just feel that way? AI is eating a lot of the config work, but every org I talk to needs admins who think like architects more than ever. How does it look from your seat?` },
  { topic:"Confident AI on dirty data", subjectStyle:"curiosity", subject:"AI making confident calls on dirty data",
    body:`Hi [Name], saw something odd recently. An org pointed Agentforce at their Salesforce data and couldn't work out why the answers were off. The data had been messy for years, but humans always caught it. The AI just ran with it. Who's supposed to catch that now?` }
]},

{ id:"mgr-sf-platform", group:"Admin & Platform", label:"Manager of Salesforce Platform", audience:"platform leaders", messages:[
  { topic:"Inherited AI governance", subjectStyle:"curiosity", subject:"Who owns Agentforce when it goes sideways?",
    body:`Hi [Name], something I keep running into. Leadership greenlights Agentforce, then the platform team inherits it with no real governance plan. When an agent does something it shouldn't, it rolls up to whoever owns the platform. Has that landed on your team yet?` },
  { topic:"Release process at scale", subjectStyle:"direct", subject:"Same release process, a lot more risk",
    body:`Hi [Name], the platform managers I talk to are running deployments on a process built years ago, even as the org keeps growing. Every release carries more risk and less margin for error. Is that what you're managing, or have you changed how releases happen?` },
  { topic:"Release visibility", subjectStyle:"question", subject:"Do you know what's actually in each release?",
    body:`Hi [Name], quick one. How clear is the picture of what's actually changing in each deployment, and who signed off? A lot of platform owners tell me they find out something broke after it's live. How much visibility do you have before things promote?` },
  { topic:"Data readiness", subjectStyle:"curiosity", subject:"Clean enough for AI?",
    body:`Hi [Name], orgs are layering AI on Salesforce data assuming it's clean. It rarely is, and the platform team hears about it when outputs look wrong. How are you thinking about data readiness before more AI gets pointed at the org?` }
]},

{ id:"platform-engineer", group:"Admin & Platform", label:"Platform Engineer", audience:"platform engineers", messages:[
  { topic:"AI volume in the pipeline", subjectStyle:"curiosity", subject:"AI is pushing more into your pipeline",
    body:`Hi [Name], a thought. AI tooling is generating more changes faster, and it all flows through the pipeline you maintain. That pipeline was built for human pace. Now it's catching, or missing, a lot more. How's it holding up on your side?` },
  { topic:"Environment sprawl", subjectStyle:"direct", subject:"Sandboxes, refreshes, and broken envs",
    body:`Hi [Name], platform engineers keep telling me environment management eats their week. Refreshes, drift between sandboxes, configs that don't match prod. Is that where your time goes too, or have you got it tamed?` },
  { topic:"Deploy confidence", subjectStyle:"question", subject:"How confident are you at deploy time?",
    body:`Hi [Name], honest question. When something promotes to production, how sure are you what it's touching downstream? Most engineers I talk to find the dependency surprises the hard way. Does your tooling actually catch them first?` },
  { topic:"Data deployments", subjectStyle:"curiosity", subject:"Moving data between orgs cleanly",
    body:`Hi [Name], data deployments seem to be where things quietly go wrong. Relationships break, records don't map, nobody notices until a report looks off. Is that a headache for you, or have you solved the data side?` }
]},

{ id:"dir-platform-eng", group:"Admin & Platform", label:"Director of Platform Engineering", audience:"platform leaders", messages:[
  { topic:"Accountability at scale", subjectStyle:"curiosity", subject:"Who answers for the platform under AI?",
    body:`Hi [Name], something on my mind. As AI tooling spreads across Salesforce, the platform org becomes accountable for outcomes it didn't fully design. When something goes wrong, the director's name is on it. Is your team set up to govern that, or still figuring it out?` },
  { topic:"Predictable releases", subjectStyle:"direct", subject:"Release dates that keep slipping",
    body:`Hi [Name], the platform directors I talk to are under pressure to make releases predictable while complexity keeps climbing. When a date slips, it's their conversation with the business. Is that gap something you're fighting right now?` },
  { topic:"People vs tooling", subjectStyle:"question", subject:"People problem or tooling problem?",
    body:`Hi [Name], curious how you see it. When delivery slows down, is it your team's capacity or the tooling and process around them? I go back and forth on it with leaders in your seat. Where does it land for you?` },
  { topic:"Quality gate ownership", subjectStyle:"curiosity", subject:"Who owns the quality gate now?",
    body:`Hi [Name], I've asked a lot of platform leaders who owns the quality gate as AI generates more change. Usually a pause, then "good question." Most inherited the tooling before the governance. Is that true where you are?` }
]},

{ id:"devops-engineer", group:"Admin & Platform", label:"DevOps Engineer", audience:"DevOps engineers", messages:[
  { topic:"AI output in CI/CD", subjectStyle:"curiosity", subject:"AI output hitting your CI/CD",
    body:`Hi [Name], a thought. AI is generating more commits, and they all run through the pipeline you own. It's faster, looks fine, and occasionally hides something that tanks prod. How's your pipeline handling the new volume?` },
  { topic:"Manual deploy steps", subjectStyle:"direct", subject:"The deploy steps nobody wrote down",
    body:`Hi [Name], every DevOps engineer I talk to has a few manual deploy steps living only in their head. One sick day and a release stalls. Is that fragility something you've automated away, or still carrying it?` },
  { topic:"Pipeline trust", subjectStyle:"question", subject:"Do you trust what your pipeline reports?",
    body:`Hi [Name], quick one. How much do you trust what the pipeline says it deployed versus what actually changed? A lot of engineers tell me there's a gap. Is yours tight, or are you patching it manually?` },
  { topic:"Rollback reality", subjectStyle:"curiosity", subject:"When a rollback isn't really a rollback",
    body:`Hi [Name], rollbacks on Salesforce are rarely clean, especially once data and metadata mix. People assume they can undo, then can't. Have you got a rollback path you actually trust, or is it cross-your-fingers?` }
]},

/* ===================== DEV & ARCHITECTURE ===================== */
{ id:"sf-developer", group:"Dev & Architecture", label:"Salesforce Developer", audience:"developers", messages:[
  { topic:"AI-generated Apex", subjectStyle:"curiosity", subject:"Who owns AI-generated Apex?",
    body:`Hi [Name], been chewing on this. When AI writes Apex and a dev approves it, the dev owns it. But review was built for human code at human pace. AI output is fast, plausible, and can hide a SOQL query in a loop. How's your team handling that review layer?` },
  { topic:"Tech debt", subjectStyle:"direct", subject:"Is AI making the debt worse?",
    body:`Hi [Name], different angle. Devs keep telling me faster releases are growing the debt pile, not shrinking it. More code landing, less time to clean up underneath. AI speeds things up, but on a shaky foundation that's not always good. Match what you're seeing?` },
  { topic:"Pipeline confidence", subjectStyle:"question", subject:"Sure what your pipeline's doing to metadata?",
    body:`Hi [Name], quick one. How confident are you in what the deployment pipeline does to your metadata? A lot of devs aren't sure what's getting merged or what the dependency check actually catches. Usually they find out when it breaks. You in the same boat?` },
  { topic:"Quality gate", subjectStyle:"curiosity", subject:"Who owns the quality gate for AI code?",
    body:`Hi [Name], I've asked a lot of Salesforce devs who owns the quality gate for AI-generated code. Usually silence, then "good question." Most teams got the tooling before the governance. Has yours actually figured it out?` }
]},

{ id:"sf-architect", group:"Dev & Architecture", label:"Salesforce Architect", audience:"architects", messages:[
  { topic:"AI vs architecture", subjectStyle:"curiosity", subject:"AI building on top of your architecture",
    body:`Hi [Name], a thought. AI is generating changes faster than anyone can review the architectural impact. Each one looks fine alone, but they pile up against the design you're responsible for. How are you keeping that from drifting?` },
  { topic:"Org complexity", subjectStyle:"direct", subject:"Org complexity nobody can fully see",
    body:`Hi [Name], the architects I talk to say their org has grown past what any one person can hold in their head. Dependencies are everywhere and changes ripple in surprising ways. Is mapping that complexity a fight for you too?` },
  { topic:"Design vs firefighting", subjectStyle:"question", subject:"Architecting forward or firefighting?",
    body:`Hi [Name], honest question. How much of your week is designing for what's next versus untangling what's already there? Most architects tell me the ratio isn't where they want it. Where does yours sit?` },
  { topic:"Data model + AI", subjectStyle:"curiosity", subject:"Is the data model ready for what's coming?",
    body:`Hi [Name], orgs are pointing AI at data models that were never built for it, and the architect ends up explaining why the outputs are off. Are you being asked to AI-ready the model, or is that conversation still coming?` }
]},

{ id:"solutions-architect", group:"Dev & Architecture", label:"Solutions Architect", audience:"solutions architects", messages:[
  { topic:"Promise vs platform", subjectStyle:"curiosity", subject:"AI promises landing on your designs",
    body:`Hi [Name], something I keep seeing. The business buys the AI vision, then the solutions architect has to make it real on an org that wasn't built for it. The gap between the promise and the platform is yours to close. Familiar?` },
  { topic:"Multi-cloud", subjectStyle:"direct", subject:"More clouds, same release process",
    body:`Hi [Name], the orgs adding the most clouds, Revenue, Data, CPQ, seem to have the most deployment pain, all on a years-old release process. When a rollout slips, the architect explains why. Is that hitting your projects?` },
  { topic:"Build vs design", subjectStyle:"question", subject:"Does the build match the design?",
    body:`Hi [Name], quick one. By the time something ships, how close is it to what you designed? A lot of architects tell me the gap widens in the handoff. How do you keep the build honest to the plan?` },
  { topic:"Data readiness", subjectStyle:"curiosity", subject:"Clean data before the AI layer?",
    body:`Hi [Name], orgs keep assuming their data is AI-ready when it isn't. Duplicates, stale records, fields filled out three different ways. The architect catches it after the fact. How are you handling readiness before AI goes on top?` }
]},

{ id:"swe-manager", group:"Dev & Architecture", label:"Software Engineering Manager", audience:"engineering leaders", messages:[
  { topic:"Team owns AI code", subjectStyle:"curiosity", subject:"Your team's name on AI-written code",
    body:`Hi [Name], a thought. When your engineers approve AI-generated code, your team owns whatever ships. The review process wasn't built for that volume or speed. How are you protecting quality without slowing everyone down?` },
  { topic:"Velocity vs debt", subjectStyle:"direct", subject:"Shipping faster, cleaning up less",
    body:`Hi [Name], eng managers keep telling me the push for velocity is burying their teams in debt. More lands in prod, less time to fix the foundation. Is that the squeeze your team's feeling, or have you found a balance?` },
  { topic:"Rework share", subjectStyle:"question", subject:"How much of the sprint is rework?",
    body:`Hi [Name], honest question. How much of your team's time goes to new work versus fixing what broke? Most managers I talk to aren't happy with the split. Where does yours land?` },
  { topic:"Quality gate", subjectStyle:"curiosity", subject:"Who owns quality as AI scales?",
    body:`Hi [Name], I keep asking eng leaders who owns the quality gate now that AI writes so much. Usually a pause. Most teams got the tooling before a plan. Has your team sorted that, or is it still informal?` }
]},

{ id:"dir-swe", group:"Dev & Architecture", label:"Director of SW Engineering", audience:"engineering leaders", messages:[
  { topic:"Accountability", subjectStyle:"curiosity", subject:"Accountable for code you didn't write",
    body:`Hi [Name], something on my mind. As AI generates more of the codebase, the eng director answers for output the team only reviewed. When something breaks in prod, it's your conversation with the business. Is your org set up for that yet?` },
  { topic:"Predictable delivery", subjectStyle:"direct", subject:"Delivery dates and the debt underneath",
    body:`Hi [Name], the eng directors I talk to are asked for predictable delivery on top of a foundation that keeps getting shakier. Faster releases, more debt, same pressure. Is that the tension you're managing?` },
  { topic:"People vs process", subjectStyle:"question", subject:"Capacity problem or process problem?",
    body:`Hi [Name], curious how you read it. When delivery slows, is it headcount or the tooling and process around your teams? I hear both from leaders in your seat. Which is it for you?` },
  { topic:"Quality gate", subjectStyle:"curiosity", subject:"Who owns the AI quality gate?",
    body:`Hi [Name], I've asked a lot of eng directors who owns the quality gate as AI scales. Usually silence, then "good question." Most inherited the tools before the governance. True where you are?` }
]},

{ id:"product-engineer", group:"Dev & Architecture", label:"Product Engineer", audience:"product engineers", messages:[
  { topic:"Building on AI output", subjectStyle:"curiosity", subject:"Shipping features on top of AI output",
    body:`Hi [Name], a thought. AI is generating more of the code you build features on. It's fast and looks right, but the bugs are subtler and land in your work. How's that changing how you build and test?` },
  { topic:"Debt slows features", subjectStyle:"direct", subject:"Debt that slows every feature",
    body:`Hi [Name], product engineers tell me the old debt underneath makes every new feature slower to ship. You spend half the time working around it. Is that what's eating your velocity, or have you cleared the path?` },
  { topic:"Confidence shipping", subjectStyle:"question", subject:"Confident when you ship?",
    body:`Hi [Name], quick one. When you ship a feature, how sure are you it didn't break something elsewhere? Most engineers find out from a bug report. Does your safety net actually catch it first?` },
  { topic:"Data quality", subjectStyle:"curiosity", subject:"Features only as good as the data",
    body:`Hi [Name], a feature is only as good as the data behind it, and Salesforce data is usually messier than anyone admits. Does bad data trip up the things you build, or is that someone else's problem upstream?` }
]},

/* ===================== QA & TESTING ===================== */
{ id:"qa-leader", group:"QA & Testing", label:"QA Leader", audience:"QA leaders", messages:[
  { topic:"Testing AI output", subjectStyle:"curiosity", subject:"How do you test what AI wrote?",
    body:`Hi [Name], a thought. AI is generating more code, faster, and it all has to be tested. But coverage was built for human pace. Now QA is the bottleneck or the scapegoat. How's your team keeping up with the volume?` },
  { topic:"Regression load", subjectStyle:"direct", subject:"Regression testing that never ends",
    body:`Hi [Name], QA leaders keep telling me regression eats their cycle. Every release risks breaking something that worked last week, and manual testing can't keep pace. Is that the squeeze your team's in, or have you automated out of it?` },
  { topic:"Sign-off confidence", subjectStyle:"question", subject:"Do you sign off with real confidence?",
    body:`Hi [Name], honest question. When QA signs off on a release, how confident is that sign-off really? A lot of leaders tell me they're approving on partial coverage and hope. Where does your team stand?` },
  { topic:"Owning the gate", subjectStyle:"curiosity", subject:"QA owning a gate it can't fully see",
    body:`Hi [Name], as releases speed up, QA owns the quality gate but gets the least time to do it. When something slips through, it's on QA. Is that dynamic landing on your team, or have you pushed the line back?` }
]},

{ id:"qa-manager", group:"QA & Testing", label:"QA Manager", audience:"QA managers", messages:[
  { topic:"Testing at AI speed", subjectStyle:"curiosity", subject:"Testing AI code at AI speed",
    body:`Hi [Name], a thought. Your team has to test a growing pile of AI-generated changes on the same timeline as before. The volume's up, the window isn't. How's your team absorbing that, or is something giving?` },
  { topic:"Manual regression", subjectStyle:"direct", subject:"Manual regression that won't scale",
    body:`Hi [Name], QA managers tell me manual regression is the thing that breaks first under release pressure. More to test, same headcount. Is that where your team's stretched thin, or have you got automation carrying it?` },
  { topic:"Coverage you'd bet on", subjectStyle:"question", subject:"Coverage you'd actually bet on?",
    body:`Hi [Name], quick one. How much of your test coverage would you genuinely bet a release on? Most managers admit there are gaps that make them nervous. Where are yours?` },
  { topic:"Blame for speed", subjectStyle:"curiosity", subject:"When QA takes the blame for speed",
    body:`Hi [Name], when releases move fast and a bug ships, QA usually catches the heat even when the timeline was the problem. Does that pattern show up for your team, or is the pressure shared fairly?` }
]},

{ id:"dir-qa", group:"QA & Testing", label:"Director of QA", audience:"QA leaders", messages:[
  { topic:"Accountability", subjectStyle:"curiosity", subject:"QA accountable for AI nobody trained on",
    body:`Hi [Name], something on my mind. AI is generating more change, and the QA org is accountable for catching what it gets wrong, usually with no more time or headcount. When something ships broken, it's your conversation. Set up for that yet?` },
  { topic:"Quality vs calendar", subjectStyle:"direct", subject:"Quality vs. the release calendar",
    body:`Hi [Name], the QA directors I talk to are squeezed between a fixed release calendar and growing risk. Say no and you're the blocker, say yes and you own the miss. Is that the bind you're in?` },
  { topic:"Headcount vs tooling", subjectStyle:"question", subject:"Headcount or tooling?",
    body:`Hi [Name], curious how you see it. When quality slips, is it your team's capacity or the tooling and process around them? I hear both from QA leaders. Where does it land for you?` },
  { topic:"Quality gate", subjectStyle:"curiosity", subject:"Who owns the quality gate now?",
    body:`Hi [Name], I keep asking QA directors who really owns the quality gate as AI scales. Usually a pause, then "good question." Most inherited the speed before the safeguards. True for you?` }
]},

{ id:"dir-testing", group:"QA & Testing", label:"Director of Testing", audience:"testing leaders", messages:[
  { topic:"Strategy for human pace", subjectStyle:"curiosity", subject:"A test strategy built for human pace",
    body:`Hi [Name], a thought. Most test strategies were designed for human-written code at human speed. AI broke that assumption, and the testing org is left covering far more, faster. Is your strategy keeping up, or due for a rethink?` },
  { topic:"Automation lag", subjectStyle:"direct", subject:"Automation that never quite catches up",
    body:`Hi [Name], testing directors tell me automation always lags the rate of change, so manual fills the gap and people burn out. Is that the treadmill your team's on, or have you closed the gap?` },
  { topic:"Coverage you'd stake", subjectStyle:"question", subject:"Coverage you'd stake a release on?",
    body:`Hi [Name], honest question. How much of your coverage would you actually bet a release on? Most leaders admit to nervous spots. Where are yours, and could tooling close them?` },
  { topic:"Catching subtle changes", subjectStyle:"curiosity", subject:"Testing the things AI quietly changed",
    body:`Hi [Name], when AI changes something subtle, the test that would've caught it often doesn't exist yet, and the miss lands on testing. Is that a risk you're actively managing, or one that's still ahead of you?` }
]},

{ id:"sdet", group:"QA & Testing", label:"SDET", audience:"folks in test engineering", messages:[
  { topic:"Tests for AI code", subjectStyle:"curiosity", subject:"Writing tests for code AI wrote",
    body:`Hi [Name], a thought. As AI generates more code, you're writing tests for logic no human fully authored. Faster to produce, harder to reason about. How's that changing your test design?` },
  { topic:"Flaky tests", subjectStyle:"direct", subject:"Flaky tests and false confidence",
    body:`Hi [Name], the SDETs I talk to fight flaky tests that pass when they shouldn't, which is worse than failing. On Salesforce it's even messier. Is flakiness eating your time, or have you got it under control?` },
  { topic:"Green = safe?", subjectStyle:"question", subject:"Does green actually mean safe?",
    body:`Hi [Name], quick one. When the suite goes green, how sure are you it means the release is safe? A lot of SDETs tell me coverage and confidence aren't the same thing. Where's the gap for you?` },
  { topic:"Test data", subjectStyle:"curiosity", subject:"Test data that doesn't match prod",
    body:`Hi [Name], test data on Salesforce rarely matches what production actually looks like, so things pass in test and break live. Is realistic test data a fight for you, or have you solved it?` }
]},

/* ===================== DELIVERY & PRODUCT ===================== */
{ id:"delivery-lead", group:"Delivery & Product", label:"Delivery Lead", audience:"delivery leads", messages:[
  { topic:"Did AI help delivery?", subjectStyle:"curiosity", subject:"AI promised speed. Did delivery get easier?",
    body:`Hi [Name], a thought. AI was supposed to make delivery faster, but the leads I talk to say their timelines didn't move much, the work just shifted. Has AI actually changed your delivery, or mostly changed expectations?` },
  { topic:"Release as risk", subjectStyle:"direct", subject:"When the release date is the risk",
    body:`Hi [Name], delivery leads keep telling me the release date is the scariest part, because the process around it is fragile and manual. One bad deploy and the plan slips. Is that the risk you're carrying, or has it tightened up?` },
  { topic:"Estimates vs reality", subjectStyle:"question", subject:"Do your estimates survive the org?",
    body:`Hi [Name], honest question. How often do your delivery estimates hold once the work hits the actual org? Most leads tell me the surprises come from complexity nobody mapped. Where does that bite you?` },
  { topic:"Data-driven slips", subjectStyle:"curiosity", subject:"Delivery slips that trace back to data",
    body:`Hi [Name], a lot of delivery slips I hear about trace back to data, migrations that don't go clean, records that don't map. It surfaces late and blows the timeline. Does that show up in your projects?` }
]},

{ id:"delivery-manager", group:"Delivery & Product", label:"Delivery Manager", audience:"delivery managers", messages:[
  { topic:"Did AI help delivery?", subjectStyle:"curiosity", subject:"Did AI actually change your delivery?",
    body:`Hi [Name], a thought. AI gets pitched as a delivery accelerator, but the managers I talk to say their cycle times barely moved. Has it changed anything real for your team, or just raised what's expected?` },
  { topic:"Fragile releases", subjectStyle:"direct", subject:"Fragile releases, immovable dates",
    body:`Hi [Name], delivery managers tell me the release step is where plans go to die: fragile, manual, unforgiving. When it slips, they're the one explaining it. Is that your reality, or has the process gotten safer?` },
  { topic:"Where timelines break", subjectStyle:"question", subject:"Where do timelines actually break?",
    body:`Hi [Name], quick one. When a delivery slips, where does it usually break, scope, the org's complexity, or the release itself? Most managers point at the same culprit. What is it for you?` },
  { topic:"Data migrations", subjectStyle:"curiosity", subject:"Data migrations that wreck the timeline",
    body:`Hi [Name], data is where I hear delivery quietly goes wrong, migrations that don't map, relationships that break, caught too late. Does the data side blow up your timelines, or have you got it handled?` }
]},

{ id:"product-manager", group:"Delivery & Product", label:"Product Manager", audience:"product managers", messages:[
  { topic:"Roadmap vs org", subjectStyle:"curiosity", subject:"Roadmap velocity vs. the org underneath",
    body:`Hi [Name], a thought. PMs keep telling me the roadmap moves as fast as the org lets it, and the org keeps fighting back. AI was supposed to help, but the foundation slows everything. Is that the gap you're managing?` },
  { topic:"Features that break things", subjectStyle:"direct", subject:"Features that ship and quietly break things",
    body:`Hi [Name], the PMs I talk to lose roadmap time cleaning up after releases that broke something elsewhere. Every fix is a feature you didn't ship. Is that eating your velocity, or have you got release risk handled?` },
  { topic:"Roadmap vs maintenance", subjectStyle:"question", subject:"How much roadmap keeps the lights on?",
    body:`Hi [Name], honest question. What share of your roadmap actually goes to new value versus maintenance and cleanup? Most PMs aren't happy with the answer. Where does yours land?` },
  { topic:"AI vs data", subjectStyle:"curiosity", subject:"AI features only as good as the data",
    body:`Hi [Name], everyone wants AI features, but they're only as good as the Salesforce data behind them, which is usually messier than the demo. Are you being asked to ship AI on data that isn't ready?` }
]},

{ id:"product-owner", group:"Delivery & Product", label:"Product Owner", audience:"product owners", messages:[
  { topic:"AI asks vs readiness", subjectStyle:"curiosity", subject:"Backlog full of AI asks, org not ready",
    body:`Hi [Name], a thought. POs tell me the backlog is filling with AI requests while the org underneath isn't ready for them. You're prioritizing things the platform can't cleanly support yet. Sound familiar?` },
  { topic:"Sprints derailed", subjectStyle:"direct", subject:"Sprints derailed by release fallout",
    body:`Hi [Name], product owners keep telling me a chunk of every sprint gets eaten by fallout from the last release. You plan for value, you spend it on cleanup. Is that the pattern, or have you broken it?` },
  { topic:"Backlog vs reality", subjectStyle:"question", subject:"Does your backlog reflect reality?",
    body:`Hi [Name], quick one. How well does your backlog reflect what the org can actually absorb? A lot of POs are sequencing around hidden complexity. Can you see it before it bites?` },
  { topic:"AI on untrusted data", subjectStyle:"curiosity", subject:"Prioritizing AI on data nobody trusts",
    body:`Hi [Name], it's hard to prioritize an AI feature when nobody trusts the data it'll run on. POs get caught between the ask and the readiness. Are you in that spot, or is the data side solid for you?` }
]},

{ id:"tpm", group:"Delivery & Product", label:"Technical Program Manager", audience:"program leaders", messages:[
  { topic:"Fuzzy AI ownership", subjectStyle:"curiosity", subject:"Coordinating AI work nobody fully owns",
    body:`Hi [Name], a thought. TPMs tell me AI initiatives are the hardest to run because ownership is fuzzy and the risk is new. You're coordinating something no one's fully accountable for yet. Is that the program you're herding?` },
  { topic:"Late dependencies", subjectStyle:"direct", subject:"Dependencies that surface at the worst time",
    body:`Hi [Name], the TPMs I talk to get blindsided by dependencies that show up right before a release. The program looks green until it isn't. Is that visibility gap something you're fighting, or have you got it mapped?` },
  { topic:"Is green real?", subjectStyle:"question", subject:"Is green really green?",
    body:`Hi [Name], honest question. When your program status is green, how sure are you it's real versus reported? Most TPMs find the gaps late. Where does that risk hide for you?` },
  { topic:"Broken handoffs", subjectStyle:"curiosity", subject:"Cross-team releases and broken handoffs",
    body:`Hi [Name], cross-team Salesforce releases seem to break at the handoffs, where one team's change quietly undoes another's. The TPM owns the fallout. Does that show up in your programs?` }
]},

/* ===================== BUSINESS SYSTEMS ===================== */
{ id:"crm-manager", group:"Business Systems", label:"CRM Manager", audience:"CRM managers", messages:[
  { topic:"AI on unclean CRM", subjectStyle:"curiosity", subject:"AI on a CRM that's never quite clean",
    body:`Hi [Name], a thought. CRM managers are being asked to turn on AI features on data they know isn't pristine. The AI runs with what it finds and looks confident doing it. Are you in that spot, or is your data AI-ready?` },
  { topic:"Updates break workflows", subjectStyle:"direct", subject:"Every update breaks something for someone",
    body:`Hi [Name], the CRM managers I talk to say every Salesforce update quietly breaks a workflow somebody depends on, and they hear about it from an angry user. Is that your week, or has it calmed down?` },
  { topic:"Source of truth", subjectStyle:"question", subject:"Is the CRM the source of truth, really?",
    body:`Hi [Name], honest question. When someone needs a number, do they trust the CRM or go around it to a spreadsheet? A lot of managers admit it's the spreadsheet. Where does your org actually look?` },
  { topic:"Adoption slipping", subjectStyle:"curiosity", subject:"Adoption that quietly slips",
    body:`Hi [Name], when reps don't trust the CRM, they work around it, and the data looks fine until it doesn't. CRM managers catch the blame for the gaps. Is adoption slipping on you, or holding steady?` }
]},

{ id:"sf-business-analyst", group:"Business Systems", label:"Salesforce Business Analyst", audience:"business analysts", messages:[
  { topic:"Requirements for AI", subjectStyle:"curiosity", subject:"Requirements for AI nobody fully understands",
    body:`Hi [Name], a thought. BAs are being asked to write requirements for AI features when the behavior isn't fully predictable. You're speccing something that doesn't act like normal config. Is that landing on you yet?` },
  { topic:"Ask vs org gap", subjectStyle:"direct", subject:"The gap between the ask and the org",
    body:`Hi [Name], the BAs I talk to spend their time bridging what the business wants and what the org can actually do, and that gap keeps widening. Is closing it the bulk of your day, or has it eased?` },
  { topic:"Requirements vs build", subjectStyle:"question", subject:"Do requirements survive the build?",
    body:`Hi [Name], quick one. How often does what gets built match what you specced? Most BAs tell me things drift in the handoff and they're left explaining the difference. Where does that bite you?` },
  { topic:"Analysis vs data", subjectStyle:"curiosity", subject:"Analysis only as good as the data",
    body:`Hi [Name], a BA's analysis is only as solid as the data underneath, and Salesforce data is usually messier than people assume. Does bad data undercut your work, or is it clean enough to trust?` }
]},

{ id:"mgr-business-apps", group:"Business Systems", label:"Manager of Business Applications", audience:"business apps leaders", messages:[
  { topic:"AI on stretched apps", subjectStyle:"curiosity", subject:"AI added to apps you have to keep running",
    body:`Hi [Name], a thought. App managers are getting AI bolted onto systems they're already stretched to maintain, with new failure modes nobody's seen. When it misbehaves, it's your team's pager. Is that coming your way?` },
  { topic:"Updates break workflows", subjectStyle:"direct", subject:"Updates that break workflows you own",
    body:`Hi [Name], the app managers I talk to find out about broken workflows from frustrated users, not from IT. Every release is a small gamble. Is that your reality, or have you got better warning?` },
  { topic:"System sprawl", subjectStyle:"question", subject:"How many systems are you really juggling?",
    body:`Hi [Name], honest question. How many connected apps is your team actually keeping alive, and do you trust how they talk to each other? Most managers tell me the integrations are the scary part. Where's yours?` },
  { topic:"Data sprawl", subjectStyle:"curiosity", subject:"Data spread across too many tools",
    body:`Hi [Name], when data lives across a dozen apps, nobody fully trusts any single number, and AI on top just spreads the mess. Is data sprawl a problem you're wrestling, or have you consolidated?` }
]},

{ id:"dir-business-apps", group:"Business Systems", label:"Director of Business Applications", audience:"applications leaders", messages:[
  { topic:"Accountability", subjectStyle:"curiosity", subject:"Accountable for AI across the app stack",
    body:`Hi [Name], something on my mind. As AI spreads across the business apps you own, you're accountable for outcomes the vendors and teams only partly control. When it goes wrong, it's your name. Is your org ready for that?` },
  { topic:"Releases via users", subjectStyle:"direct", subject:"Releases you find out about from users",
    body:`Hi [Name], the app directors I talk to learn about broken workflows from the business, not from a dashboard. That's a trust problem as much as a tech one. Is that pattern hitting you, or have you got ahead of it?` },
  { topic:"Asset or liability", subjectStyle:"question", subject:"Is your stack an asset or a liability?",
    body:`Hi [Name], honest question. Does your app portfolio feel like an asset you're building or a liability you're managing? Most directors I talk to are somewhere uncomfortable in between. Where do you sit?` },
  { topic:"Source of truth", subjectStyle:"curiosity", subject:"One version of the truth, or a dozen?",
    body:`Hi [Name], directors tell me their data lives across too many systems to call any of it the source of truth, and AI just amplifies whatever it's fed. Is consolidation on your plate, or further down the road?` }
]},

{ id:"mgr-business-systems", group:"Business Systems", label:"Manager of Business Systems", audience:"systems leaders", messages:[
  { topic:"AI on fragile plumbing", subjectStyle:"curiosity", subject:"AI riding on systems already stretched",
    body:`Hi [Name], a thought. Systems managers are absorbing AI features on top of integrations that already keep them up at night. New behavior, same fragile plumbing. Is that headed your way, or have you hardened things?` },
  { topic:"Silent integration breaks", subjectStyle:"direct", subject:"Integrations that break quietly",
    body:`Hi [Name], the systems managers I talk to say integrations break silently and surface as a confused user three days later. Is chasing those your reality, or do you catch them upfront now?` },
  { topic:"Systems agreement", subjectStyle:"question", subject:"Do your systems agree with each other?",
    body:`Hi [Name], quick one. When two systems report the same thing differently, who wins, and who reconciles it? Most managers tell me it's a manual mess. How does yours hold together?` },
  { topic:"AI on unreconciled data", subjectStyle:"curiosity", subject:"AI confident on data that doesn't reconcile",
    body:`Hi [Name], when data doesn't reconcile across systems, AI still answers confidently off whatever it grabbed. Someone has to catch it. Is that a risk you're managing, or is the data tied together well?` }
]},

{ id:"dir-info-systems", group:"Business Systems", label:"Director of Information Systems", audience:"IT leaders", messages:[
  { topic:"IT owns the AI", subjectStyle:"curiosity", subject:"IT owns the AI it didn't choose",
    body:`Hi [Name], something I keep hearing. The business buys AI, and IT inherits the job of governing it safely. When it goes wrong, it rolls up to the director of systems. Is that landing on you, or still on the horizon?` },
  { topic:"Ripple effects", subjectStyle:"direct", subject:"Releases that ripple across the business",
    body:`Hi [Name], the IS directors I talk to say one Salesforce change can ripple into systems all over the business, and they find out when something downstream breaks. Is that fragility yours to manage, or contained?` },
  { topic:"Source of truth", subjectStyle:"question", subject:"Do you trust your single source of truth?",
    body:`Hi [Name], honest question. Across all your systems, is there really one source of truth, or several that disagree? Most directors admit it's several. Where does your org land?` },
  { topic:"AI governance", subjectStyle:"curiosity", subject:"Governing AI before it governs you",
    body:`Hi [Name], I ask a lot of IT leaders who owns AI governance across their systems. Usually a pause. Most got the tools before the policy. Is that the gap at your org, or have you closed it?` }
]},

/* ===================== REVOPS & LEADERSHIP ===================== */
{ id:"revops-manager", group:"RevOps & Leadership", label:"Revenue Operations Manager", audience:"RevOps leaders", messages:[
  { topic:"Data readiness for AI", subjectStyle:"curiosity", subject:"Is your Salesforce data ready for AI?",
    body:`Hi [Name], something I keep running into. Orgs turn on Agentforce and point it at their data assuming it's clean. It rarely is, and the forecast comes out confident and wrong. RevOps catches the heat. How are you thinking about readiness before AI goes on top?` },
  { topic:"Multi-cloud", subjectStyle:"direct", subject:"More clouds, same release process",
    body:`Hi [Name], the orgs adding the most clouds, Revenue, Data, CPQ, have the most deployment pain, all on a years-old process. When a rollout slips three months, RevOps explains it to the business. Is that gap hitting your team?` },
  { topic:"Source of truth", subjectStyle:"question", subject:"Where do people go for the pipeline number?",
    body:`Hi [Name], quick one. When someone needs the pipeline number, where do they actually go, and does the answer change by who's asking? RevOps is meant to be the source of truth, but the plumbing's often behind. How close are you?` },
  { topic:"Forecast accountability", subjectStyle:"curiosity", subject:"When the AI forecast is wrong, who owns it?",
    body:`Hi [Name], talked to a RevOps leader whose AI forecast missed badly and the CFO wanted answers. The data model was the culprit, but RevOps built the model, so it got uncomfortable. Have you hit that dynamic yet?` }
]},

{ id:"vp-data-arch", group:"RevOps & Leadership", label:"VP Data Architecture and Innovation", audience:"data leaders", messages:[
  { topic:"Data model = AI strategy", subjectStyle:"curiosity", subject:"The data model is the AI strategy",
    body:`Hi [Name], a thought. Everyone's racing to AI, but it lives or dies on the data model, the part nobody wants to fund. As the person who owns it, you're suddenly the AI bottleneck or the hero. Where does that put you?` },
  { topic:"Innovating on shaky base", subjectStyle:"direct", subject:"Innovation on a foundation that's behind",
    body:`Hi [Name], the data leaders I talk to are asked to innovate fast on a foundation that's years behind. You can't build the future on a model held together with workarounds. Is that the tension you're in?` },
  { topic:"One model or many", subjectStyle:"question", subject:"One model, or many that disagree?",
    body:`Hi [Name], honest question. Across the org, is there one data model you'd stand behind, or several that quietly disagree? Most leaders admit it's several. Where does yours stand?` },
  { topic:"AI wrong on bad data", subjectStyle:"curiosity", subject:"Who answers when AI gets it wrong on bad data?",
    body:`Hi [Name], when AI makes a confident, wrong call on flawed data, the conversation lands on whoever owns the architecture. That accountability feels unfair when the problem is systemic. Have you run into that yet?` }
]},

{ id:"vp-sales-service", group:"RevOps & Leadership", label:"VP / Director of Sales or Service", audience:"Sales and Service leaders", messages:[
  { topic:"Agentforce ROI", subjectStyle:"curiosity", subject:"Agentforce is live. Is it actually working?",
    body:`Hi [Name], something I keep noticing. Sales and Service orgs roll out Agentforce, everyone's excited, then months later nobody can say if it's moving the numbers. Reps use it, but the proof isn't there yet. Is that what you're seeing?` },
  { topic:"Rep workarounds", subjectStyle:"direct", subject:"When reps go around the tools",
    body:`Hi [Name], when AI tools don't work like reps expected, they quietly build workarounds, and those are invisible to management until the data goes sideways. I've watched that cycle a few times. How are you staying ahead of it?` },
  { topic:"Who tells you first", subjectStyle:"question", subject:"IT or a frustrated rep, who tells you first?",
    body:`Hi [Name], quick one. When a Salesforce update breaks a workflow, do you hear it from IT or from an angry rep? Usually the rep, right? That's a trust problem too. Is that the pattern on your team?` },
  { topic:"The 50/50 AI split", subjectStyle:"curiosity", subject:"Half the teams I talk to feel behind on AI",
    body:`Hi [Name], rough tally from my conversations: about half of Sales and Service leaders feel ahead on AI, half feel asked to prove something they don't control. The difference is what was in place before Agentforce. Where does your team land?` }
]}

];

/* Build the final SEQUENCES array: number messages 1-4, append 5 (intro) and 6 (ask). */
const SEQUENCES = PERSONA_SOURCE.map(function(p){
  const msgs = p.messages.map(function(m, i){
    return { number: i + 1, topic: m.topic, subjectStyle: m.subjectStyle, subject: m.subject, body: m.body };
  });
  const intro = introMsg(p.audience); intro.number = 5;
  const ask = askMsg(p.audience); ask.number = 6;
  msgs.push(intro, ask);
  return { id: p.id, group: p.group, label: p.label, audience: p.audience, messages: msgs };
});

if (typeof window !== "undefined") { window.SEQUENCES = SEQUENCES; window.SEQ_GROUPS = GROUPS; }
if (typeof module !== "undefined") { module.exports = { SEQUENCES: SEQUENCES, GROUPS: GROUPS }; }
