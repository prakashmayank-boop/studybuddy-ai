"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Search, Sparkles, Brain, Zap } from "lucide-react"

interface TopicInputProps {
  topic: string
  setTopic: (topic: string) => void
  language: "english" | "hindi"
  setLanguage: (language: "english" | "hindi") => void
  onExplain: () => void
  isLoading: boolean
}

export function TopicInput({
  topic,
  setTopic,
  language,
  setLanguage,
  onExplain,
  isLoading,
}: TopicInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isLoading) {
      onExplain()
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Hero Section - Compact on mobile */}
      <div className="text-center space-y-2 md:space-y-4 pt-2 md:pt-4">
        {/* AI-Powered Badge - Smaller on mobile */}
        <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-xs md:text-sm font-medium text-primary">
          <Brain className="w-3 h-3 md:w-4 md:h-4" />
          <span>AI-Powered Learning</span>
          <Zap className="w-3 h-3 md:w-4 md:h-4 text-accent" />
        </div>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
          Learn Any Topic
          <span className="block md:inline"> </span>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Simply
          </span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-xs md:text-base leading-relaxed px-2">
          Get AI explanations in English or Hindi with interactive quizzes
        </p>
      </div>

      {/* Search Card - More compact on mobile */}
      <div className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 gradient-border">
        <div className="space-y-3 md:space-y-4">
          {/* Input Row */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
              <Input
                placeholder="e.g., Photosynthesis, Pythagoras..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyDown={handleKeyDown}
                className="h-11 md:h-14 pl-10 md:pl-12 text-sm md:text-base bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-lg md:rounded-xl"
                disabled={isLoading}
              />
            </div>
            <Button
              onClick={onExplain}
              disabled={isLoading || !topic.trim()}
              className="h-11 md:h-14 px-6 md:px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold rounded-lg md:rounded-xl glow-button transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
            >
              {isLoading ? (
                <>
                  <Spinner className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span>Explain Topic</span>
                </>
              )}
            </Button>
          </div>
          
          {/* Language Toggle - Compact */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">Language:</span>
              <div className="flex gap-0.5 p-0.5 md:p-1 bg-secondary/50 rounded-lg">
                <button
                  onClick={() => setLanguage("english")}
                  className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-md transition-all duration-200 ${
                    language === "english"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("hindi")}
                  className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-md transition-all duration-200 ${
                    language === "hindi"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Hindi
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="hidden sm:inline">AI Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
