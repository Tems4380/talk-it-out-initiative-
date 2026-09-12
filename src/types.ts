export interface Topic {
  id: string;
  title: string;
  category: 'Expression' | 'Listening' | 'Conflict & Repair' | 'Emotions & Pressure' | 'Confidence';
  description: string;
  whyItMatters: string;
  realLifeScenario: string;
  keyQuestion: string;
  practiceTip: string;
}

export interface Pillar {
  id: string;
  step: number;
  name: string;
  tagline: string;
  description: string;
  microAction: string;
  iconName: string;
}

export interface ChallengeItem {
  id: string;
  quote: string;
  theme: string;
  context: string;
  dailyPrompt: string;
}

export interface PodcastSegment {
  id: string;
  category: 'I SHOULD HAVE SAID...' | 'SAY IT BETTER' | 'WHAT DID YOU MEAN?' | 'LET\'S TALK ABOUT IT';
  description: string;
  focus: string;
  sampleTheme: string;
  status: 'Coming Soon' | 'In Production';
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Weekly Session' | 'Community Conversation' | 'Workshop' | 'Live Recording';
  date: string;
  time: string;
  venue: string;
  description: string;
  format: 'Interactive Group' | 'Role Play & Discussion' | 'Media Session';
  isPlaceholder?: boolean;
}

export interface QuestionSubmission {
  id: string;
  name?: string;
  contact?: string;
  question: string;
  permissionGranted: boolean;
  createdAt: string;
}
