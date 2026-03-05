export interface Flashcard {
  id: string;
  front: string;
  frontAr: string;
  back: string;
  backAr: string;
  timing: 'before' | 'after' | 'none';
  level: 'basic' | 'detailed';
}

export const FLASHCARDS: Flashcard[] = [
  // Basic cards
  {
    id: 'fc1',
    front: "You prayed 5 rak'ahs by mistake",
    frontAr: "صليتَ خمس ركعات بالخطأ",
    back: "Sujud as-Sahw AFTER salam\n— you added something extra",
    backAr: "سجود السهو بعد السلام\n— لأنك أضفت زيادة",
    timing: 'after',
    level: 'basic',
  },
  {
    id: 'fc2',
    front: "You forgot the first tashahhud",
    frontAr: "نسيتَ التشهد الأول",
    back: "Sujud as-Sahw BEFORE salam\n— you forgot something obligatory",
    backAr: "سجود السهو قبل السلام\n— لأنك نسيت واجباً",
    timing: 'before',
    level: 'basic',
  },
  {
    id: 'fc3',
    front: "You're not sure: did you pray 3 or 4 rak'ahs?",
    frontAr: "لستَ متأكداً: هل صليت ٣ أم ٤ ركعات؟",
    back: "More likely count → AFTER salam\nEqually unsure → build on 3, BEFORE salam",
    backAr: "يغلب ظنك → بعد السلام\nمتساوٍ → ابنِ على ٣، قبل السلام",
    timing: 'none',
    level: 'basic',
  },
  // Detailed cards (locked until basics complete)
  {
    id: 'fc4',
    front: "You added an extra sujud in the 3rd rak'ah",
    frontAr: "أضفت سجدة زائدة في الركعة الثالثة",
    back: "AFTER salam\n— adding anything extra = sujud after salam",
    backAr: "بعد السلام\n— أي زيادة = سجود بعد السلام",
    timing: 'after',
    level: 'detailed',
  },
  {
    id: 'fc5',
    front: "You forgot tashahhud then remembered before standing up",
    frontAr: "نسيت التشهد ثم تذكرت قبل أن تقوم",
    back: "Return and complete tashahhud — no sujud as-sahw needed if you return quickly",
    backAr: "ارجع وأتمم التشهد — لا سجود سهو إن رجعت قريباً",
    timing: 'none',
    level: 'detailed',
  },
  {
    id: 'fc6',
    front: "You thought you prayed 2, probably prayed 3 — it's clearer now",
    frontAr: "ظننت أنك صليت ٢ والأرجح أنك صليت ٣",
    back: "Act on most likely (3), then AFTER salam perform sujud as-sahw",
    backAr: "ابنِ على الأرجح (٣) ثم بعد السلام اسجد سجود السهو",
    timing: 'after',
    level: 'detailed',
  },
];

export const BASIC_CARDS = FLASHCARDS.filter(c => c.level === 'basic');
export const DETAILED_CARDS = FLASHCARDS.filter(c => c.level === 'detailed');
