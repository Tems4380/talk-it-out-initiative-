import { Topic, Pillar, ChallengeItem, PodcastSegment, EventItem } from '../types';

export const CORE_PHILOSOPHY = {
  quote: "Everyone has something to say. Not everyone has learned how to say it.",
  subtext: "Talk It Out believes that people should be able to express their thoughts, feelings, ideas, concerns and opinions without unnecessary fear of being misunderstood, judged or dismissed.",
  journey: ["LISTEN", "THINK", "EXPRESS", "RESPOND", "CLARIFY", "REPAIR"]
};

export const WHY_QUESTIONS = [
  "I should have said that differently.",
  "I didn't know what to say.",
  "I wish I had spoken up.",
  "They misunderstood what I meant.",
  "I was too angry to explain myself.",
  "I assumed what they meant.",
  "I should have listened first."
];

export const PILLARS: Pillar[] = [
  {
    id: "listen",
    step: 1,
    name: "LISTEN",
    tagline: "Hear people before preparing your response.",
    description: "Listening is not simply waiting for your turn to talk. It is paying genuine attention to what is being said, the tone behind it, and what remains unsaid.",
    microAction: "In your next conversation, wait 3 seconds after the other person stops talking before you respond.",
    iconName: "Ear"
  },
  {
    id: "think",
    step: 2,
    name: "THINK",
    tagline: "Pause, process and understand before reacting.",
    description: "Reaction is an emotional impulse; response is an intentional choice. Learn to create space between what you hear and what you say.",
    microAction: "Before replying when defensive, ask yourself: 'What am I feeling right now, and why?'",
    iconName: "Brain"
  },
  {
    id: "express",
    step: 3,
    name: "EXPRESS",
    tagline: "Communicate your thoughts, feelings, opinions and needs with confidence.",
    description: "Your voice matters. Learn how to articulate what you mean clearly, calmly and honestly without shrinking or becoming aggressive.",
    microAction: "Use 'I feel' or 'From my perspective' instead of accusing or suppressing your truth.",
    iconName: "MessageCircle"
  },
  {
    id: "respond",
    step: 4,
    name: "RESPOND",
    tagline: "Learn to communicate even when emotions and pressure are present.",
    description: "High-pressure moments often cause us to shut down or lash out. We build the poise to remain engaged even when a conversation gets tense.",
    microAction: "Lower your speaking volume and slow your tempo when the room's temperature rises.",
    iconName: "ShieldCheck"
  },
  {
    id: "clarify",
    step: 5,
    name: "CLARIFY",
    tagline: "Ask instead of assuming.",
    description: "Most misunderstandings happen in the gap between what someone intended and what we assumed. Clarification replaces guesswork with certainty.",
    microAction: "Ask: 'Help me understand, did you mean...?' before drawing a conclusion.",
    iconName: "HelpCircle"
  },
  {
    id: "repair",
    step: 6,
    name: "REPAIR",
    tagline: "Take responsibility, apologize and make room for better conversations.",
    description: "Communication will inevitably break down at times. True maturity is knowing how to return, own your mistakes, apologize sincerely, and rebuild trust.",
    microAction: "Practice a clean apology without adding 'but' or shifting blame.",
    iconName: "HeartHandshake"
  }
];

export const EXPERIENCE_STEPS = [
  {
    stage: "LEARN",
    label: "Communication Concepts",
    description: "Deconstruct why everyday interactions go wrong, uncover communication traps, and discover practical conversational frameworks.",
    tag: "Understand the Tools"
  },
  {
    stage: "PRACTICE",
    label: "Role-Play & Real Scenarios",
    description: "Step into safe, guided role-play simulations with peers. Practice expressing boundaries, disagreeing, and navigating hard moments.",
    tag: "Try in a Safe Space"
  },
  {
    stage: "APPLY",
    label: "Weekly Life Challenge",
    description: "Take one clear, tangible communication challenge into your family, school, church, friendships, or work during the week.",
    tag: "Put into Everyday Life"
  },
  {
    stage: "REFLECT",
    label: "Small Group Debrief",
    description: "Come back together to share what went well, what felt uncomfortable, and what you noticed about your communication habits.",
    tag: "Honest Feedback"
  },
  {
    stage: "GROW",
    label: "Long-Term Habit Change",
    description: "Over time, develop natural poise, empathy, active listening, and the quiet confidence to speak up whenever it matters.",
    tag: "Lasting Culture"
  }
];

export const SESSION_FLOW = [
  {
    step: "01",
    title: "Casual Conversation & Check-In",
    detail: "Warm, unhurried opening where participants relax, connect, and break the ice in a judgment-free space."
  },
  {
    step: "02",
    title: "Communication Lesson",
    detail: "A 15-minute focused interactive insight on a core concept (e.g. tone, assumptions, active listening, or anger)."
  },
  {
    step: "03",
    title: "Real-Life Scenario",
    detail: "Deconstruct an authentic real-life scenario commonly faced by young people at home, church, school, or with friends."
  },
  {
    step: "04",
    title: "Practice / Role Play",
    detail: "Hands-on, guided conversational exercises where you rehearse what to say and test how it feels in real time."
  },
  {
    step: "05",
    title: "Small Group Discussion",
    detail: "Unpack personal experiences in intimate circles. Ask questions you were previously afraid to ask."
  },
  {
    step: "06",
    title: "Weekly Challenge",
    detail: "Leave with one actionable communication assignment to intentionally test in your everyday world throughout the week."
  }
];

export const TOPICS: Topic[] = [
  {
    id: "why-dont-we-say",
    title: "Why Don't We Say What We Really Mean?",
    category: "Expression",
    description: "Unpacking the fear of rejection, people-pleasing, indirect hints, and the gap between what is in our head and what leaves our mouth.",
    whyItMatters: "Hinting and sugar-coating leave others guessing, leading to resentment and chronic misunderstandings.",
    realLifeScenario: "Agreeing to help a friend with a major favor even though you are exhausted and overwhelmed, then being silently resentful.",
    keyQuestion: "What stops you from saying the honest truth with kindness?",
    practiceTip: "Try starting with: 'To be honest, I want to support you, but right now I can't take this on.'"
  },
  {
    id: "finding-your-voice",
    title: "Finding Your Voice",
    category: "Confidence",
    description: "Building the inner conviction that your perspective is valid, even if you are young, introverted, or speaking to older authority figures.",
    whyItMatters: "When you stay silent, you withhold the unique value, perspective, and boundaries you were meant to bring.",
    realLifeScenario: "Sitting in a committee or family meeting, having a clear solution, but staying quiet out of fear of looking silly.",
    keyQuestion: "Who taught you that your voice doesn't matter?",
    practiceTip: "Speak in the first 10 minutes of a group conversation with a simple validating remark or question."
  },
  {
    id: "does-my-opinion-matter",
    title: "Does My Opinion Matter?",
    category: "Confidence",
    description: "Navigating cultural dynamics, age hierarchies, and self-doubt when expressing thoughts in traditional or conservative spaces.",
    whyItMatters: "Respecting elders or leaders does not require total erasure of your personal voice or critical thinking.",
    realLifeScenario: "Feeling dismissed by an older relative or colleague before you even finish expressing your perspective.",
    keyQuestion: "How can we honor elders and leaders while still speaking with clarity and truth?",
    practiceTip: "Frame your thought respectfully: 'I respect your viewpoint on this. May I share another angle I noticed?'"
  },
  {
    id: "listening-before-responding",
    title: "Listening Before Responding",
    category: "Listening",
    description: "Overcoming the mental habit of crafting your rebuttal, defense, or witty retort while the other person is still talking.",
    whyItMatters: "If your brain is rehearsing your answer, you are not listening—you are merely waiting to strike.",
    realLifeScenario: "A friend is telling you about a hurtful incident, and you immediately interrupt with advice or your own story.",
    keyQuestion: "Can you summarize what the other person said to their satisfaction before you state your view?",
    practiceTip: "Practice echoing: 'What I hear you saying is... Did I get that right?'"
  },
  {
    id: "thats-not-what-i-meant",
    title: "That's Not What I Meant",
    category: "Expression",
    description: "How intent and impact often diverge: understanding how tone, body language, phrasing, and timing alter your message.",
    whyItMatters: "Good intentions don't cancel out hurtful phrasing. Learning to bridge the gap prevents unnecessary fractures.",
    realLifeScenario: "Sending a short text message that sounded cold or sarcastic, creating days of awkward tension.",
    keyQuestion: "Do you focus more on defending your intention or understanding how you were received?",
    practiceTip: "Say: 'I can see how what I said sounded hurtful. That wasn't my intent, but I apologize for how it landed.'"
  },
  {
    id: "dont-assume-ask",
    title: "Don't Assume. Ask.",
    category: "Listening",
    description: "The discipline of active curiosity: dismantling mind-reading, second-guessing motives, and imaginary narratives.",
    whyItMatters: "Assumptions fill silence with worst-case fears. Asking questions provides grounding facts.",
    realLifeScenario: "A friend walks past you without greeting. You assume they are mad at you, when in reality they just got bad news.",
    keyQuestion: "What evidence do you actually have for the story you created in your head?",
    practiceTip: "Check your assumption gently: 'Hey, I noticed you seemed quiet today. Is everything okay with you?'"
  },
  {
    id: "how-to-disagree-without-disrespect",
    title: "How to Disagree Without Disrespect",
    category: "Conflict & Repair",
    description: "Mastering the art of holding firm to your convictions without attacking someone's character, intelligence, or dignity.",
    whyItMatters: "Disagreement is a natural part of human community; contempt and insults are choices.",
    realLifeScenario: "A heated debate on values or faith where the conversation quickly devolves into personal insults.",
    keyQuestion: "Can you challenge an idea without demolishing the human being holding it?",
    practiceTip: "Distinguish the person from the point: 'I value our relationship deeply, though I see this particular issue quite differently.'"
  },
  {
    id: "communicating-when-youre-angry",
    title: "Communicating When You're Angry",
    category: "Emotions & Pressure",
    description: "Tactics for emotional regulation, vocal pacing, and knowing when to ask for a temporary pause before saying things you cannot take back.",
    whyItMatters: "Words spoken in anger are often remembered long after the anger has faded.",
    realLifeScenario: "Lashing out during an argument with a sibling, saying the most cutting thing you know will hurt them.",
    keyQuestion: "Do you use anger to express a legitimate hurt, or to inflict punishment?",
    practiceTip: "Request a timeout: 'I care about this conversation, but I am too heated right now. Let's step back for 20 minutes and talk.'"
  },
  {
    id: "when-you-want-to-shut-down",
    title: "When You Want to Shut Down",
    category: "Emotions & Pressure",
    description: "Recognizing stonewalling, withdrawal, and the silent treatment as protective mechanisms, and learning gentle ways to stay engaged.",
    whyItMatters: "Going silent punishes both you and the other person, creating an emotional wall that grows harder to breach.",
    realLifeScenario: "Shutting down and giving one-word answers for three days after someone criticizes your work or behavior.",
    keyQuestion: "What fear causes you to retreat inside your shell?",
    practiceTip: "Signal your need without ghosting: 'I feel overwhelmed right now, but I promise I am not ignoring you. Give me an hour to process.'"
  },
  {
    id: "how-to-apologize",
    title: "How to Apologize",
    category: "Conflict & Repair",
    description: "The four components of a genuine apology: acknowledging the specific harm, taking ownership, feeling empathy, and offering restitution.",
    whyItMatters: "Weak apologies ('I'm sorry if your feelings were hurt') often cause more damage than the original infraction.",
    realLifeScenario: "Offering an excuse-laden apology that leaves the other person feeling unheard and invalidated.",
    keyQuestion: "Are you apologizing to relieve your own guilt, or to heal the person you injured?",
    practiceTip: "Use the formula: 'I was wrong for [specific action]. It hurt you because [empathy]. I am sorry, and here is how I will do better.'"
  },
  {
    id: "difficult-conversations",
    title: "Difficult Conversations",
    category: "Conflict & Repair",
    description: "Frameworks for preparing, opening, and navigating high-stakes conversations about boundaries, money, unmet expectations, and hurts.",
    whyItMatters: "Unaddressed problems do not vanish; they ferment into bitterness and broken relationships.",
    realLifeScenario: "Needing to tell a friend that their constant jokes at your expense are crossing a line.",
    keyQuestion: "What is the cost of NOT having this conversation in 6 months?",
    practiceTip: "Name the purpose upfront: 'I'm bringing this up because our friendship is important to me and I want us to be close.'"
  },
  {
    id: "the-conversation-youve-been-avoiding",
    title: "The Conversation You've Been Avoiding",
    category: "Conflict & Repair",
    description: "Confronting the emotional dread of that one pending conversation you keep postponing week after week.",
    whyItMatters: "Avoidance gives an issue more power over your peace of mind than the conversation itself ever would.",
    realLifeScenario: "Avoiding an honest conversation with your parents about your career desires or school pressures.",
    keyQuestion: "What is the worst-case scenario you are imagining, and how likely is it?",
    practiceTip: "Schedule the conversation: 'Can we sit down for 15 minutes tomorrow evening? There's something important on my heart I'd love to share.'"
  }
];

export const CHALLENGES: ChallengeItem[] = [
  {
    id: "c1",
    quote: "This week, ask instead of assuming.",
    theme: "Assumptions vs. Clarity",
    context: "Whenever you catch yourself assuming what someone meant, why they responded late, or why they looked upset—stop. Ask them directly with kindness.",
    dailyPrompt: "Notice one moment today where you imagined a story in your head. Gently ask for clarity instead."
  },
  {
    id: "c2",
    quote: "This week, express one opinion you would normally keep to yourself.",
    theme: "Finding Voice",
    context: "Practice speaking up in a setting where you usually stay silent—whether in class, at church, in a friendship circle, or at home.",
    dailyPrompt: "Identify one moment where you thought of something valuable. Speak it with clarity and calm confidence."
  },
  {
    id: "c3",
    quote: "This week, listen without preparing your response.",
    theme: "Active Presence",
    context: "Give someone your full, undivided attention. Don't look at your phone, don't interrupt, and don't calculate your counter-argument.",
    dailyPrompt: "In at least one conversation today, keep your focus entirely on understanding their heart before speaking."
  },
  {
    id: "c4",
    quote: "This week, have one conversation you've been avoiding.",
    theme: "Courage & Resolution",
    context: "We all have that one conversation we put off out of discomfort. Set aside fear, prepare with empathy, and step into it.",
    dailyPrompt: "Write down the conversation you need to have, what you want to communicate, and send the invitation to talk."
  }
];

export const PODCAST_SEGMENTS: PodcastSegment[] = [
  {
    id: "should-have-said",
    category: "I SHOULD HAVE SAID...",
    description: "Real conversations and reflections about things people wish they had communicated differently.",
    focus: "Reflecting on missed opportunities, unsaid words, and what we learned when we stayed quiet or said the wrong thing.",
    sampleTheme: "The moment I let fear silence my boundary with a close friend.",
    status: "In Production"
  },
  {
    id: "say-it-better",
    category: "SAY IT BETTER",
    description: "Take a poorly communicated statement and explore how it could be expressed more clearly.",
    focus: "Transforming accusatory, vague, or passive-aggressive phrasing into clear, empathetic, and constructive language.",
    sampleTheme: "Rewriting: 'You never care about what I want' into actionable emotional clarity.",
    status: "In Production"
  },
  {
    id: "what-did-you-mean",
    category: "WHAT DID YOU MEAN?",
    description: "Explore how words, tone, context and assumptions can create misunderstanding.",
    focus: "Dissecting how generational differences, cultural nuances, and digital messaging alter conversational meaning.",
    sampleTheme: "When 'K' or 'Fine' means three completely different things depending on the tone.",
    status: "In Production"
  },
  {
    id: "lets-talk-about-it",
    category: "LET'S TALK ABOUT IT",
    description: "Long-form conversations around difficult communication topics.",
    focus: "Deep, unhurried dialogues tackling complex conversational hurdles with guests, community leaders, and peers.",
    sampleTheme: "How to talk to African parents about mental health, expectations, and personal dreams.",
    status: "In Production"
  }
];

export const EVENTS: EventItem[] = [
  {
    id: "weekly-session-next",
    title: "Weekly Talk It Out Community Session",
    category: "Weekly Session",
    date: "Every Sunday Afternoon",
    time: "4:00 PM – 5:30 PM (WAT)",
    venue: "Youth Hall, Community Center / Church Space [Local Hub]",
    description: "Our weekly gathering designed for teens and young adults to explore real communication principles, engage in live role-play, and connect in small groups.",
    format: "Interactive Group"
  },
  {
    id: "special-youth-workshop",
    title: "Navigating Hard Conversations: The Teen & Young Adult Workshop",
    category: "Workshop",
    date: "[UPCOMING EVENT] — Date To Be Announced",
    time: "10:00 AM – 1:00 PM (WAT)",
    venue: "[VENUE TO BE CONFIRMED]",
    description: "An intensive interactive workshop focusing on managing emotional pressure, speaking respectfully to authority, and repairing damaged friendships.",
    format: "Role Play & Discussion"
  },
  {
    id: "live-recording-special",
    title: "Talk It Out Live Podcast Recording & Open Mic",
    category: "Live Recording",
    date: "[UPCOMING EVENT] — Date To Be Announced",
    time: "3:00 PM – 5:00 PM (WAT)",
    venue: "[STUDIO / COMMUNITY HUB VENUE]",
    description: "A community open mic and live recording session featuring real stories of conversations people wish they had handled differently.",
    format: "Media Session"
  }
];

export const SAMPLE_QUESTIONS = [
  "How do I tell someone they've hurt me?",
  "How do I disagree respectfully?",
  "How do I talk to my parents when I disagree with them?",
  "How do I communicate when I'm angry?",
  "How do I apologize?"
];
