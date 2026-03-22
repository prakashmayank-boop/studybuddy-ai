import { Brain, Languages, BookCheck, GraduationCap, Zap, Trophy } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Explanations",
    description: "Complex topics ko simple aur easy language mein samjho. AI aapke level ke hisaab se explain karta hai.",
    highlight: "Smart AI"
  },
  {
    icon: Languages,
    title: "English & Hindi Support",
    description: "Apni comfortable language choose karo - English ya Hindi mein padho, jo bhi samajh aaye.",
    highlight: "Bilingual"
  },
  {
    icon: BookCheck,
    title: "Interactive MCQ Quiz",
    description: "Har topic ke baad 10 MCQ questions se khud ko test karo. Instant feedback ke saath learn karo.",
    highlight: "10 Questions"
  },
  {
    icon: GraduationCap,
    title: "Indian Curriculum Ready",
    description: "CBSE, ICSE aur State Boards ke syllabus ke according designed. Class 6-12 tak sab covered.",
    highlight: "All Boards"
  }
]

export function Features() {
  return (
    <div className="mt-6 md:mt-10">
      {/* Section Header */}
      <div className="text-center mb-4 md:mb-6">
        <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Zap className="w-3 h-3 text-accent" />
          <span>What StudyBuddy AI Can Do</span>
          <Zap className="w-3 h-3 text-accent" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-foreground">
          Your Personal <span className="text-primary">AI Study Partner</span>
        </h3>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative glass-card rounded-xl p-4 md:p-5 transition-all duration-300 hover:border-primary/40 hover:bg-card/80"
          >
            {/* Highlight Badge */}
            <div className="absolute -top-2 right-3 px-2 py-0.5 bg-gradient-to-r from-primary to-accent rounded-full text-[10px] font-medium text-white">
              {feature.highlight}
            </div>
            
            <div className="flex gap-3 md:gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="flex items-center justify-center gap-4 md:gap-8 mt-4 md:mt-6 py-3 px-4 rounded-xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-border/50">
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
          <Trophy className="w-4 h-4 text-accent" />
          <span><strong className="text-foreground">10,000+</strong> Students</span>
        </div>
        <div className="w-px h-4 bg-border" />
        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
          <BookCheck className="w-4 h-4 text-primary" />
          <span><strong className="text-foreground">500+</strong> Topics</span>
        </div>
        <div className="w-px h-4 bg-border hidden sm:block" />
        <div className="hidden sm:flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
          <Brain className="w-4 h-4 text-accent" />
          <span><strong className="text-foreground">AI</strong> Powered</span>
        </div>
      </div>
    </div>
  )
}
