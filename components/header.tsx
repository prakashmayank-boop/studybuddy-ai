import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-accent">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <h1 className="text-lg md:text-2xl font-bold tracking-tight text-foreground">
              StudyBuddy AI
            </h1>
          </div>
          
          <span className="text-xs font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="hidden sm:inline">CBSE / ICSE / State</span>
            <span className="sm:hidden">CBSE+</span>
          </span>
        </div>
      </div>
    </header>
  )
}
