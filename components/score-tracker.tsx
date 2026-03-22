"use client"

import { Button } from "@/components/ui/button"
import { Trophy, RotateCcw, Star, TrendingUp } from "lucide-react"

interface ScoreTrackerProps {
  score: number
  totalQuestions: number
  onReset: () => void
}

export function ScoreTracker({ score, totalQuestions, onReset }: ScoreTrackerProps) {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0
  
  const getStars = () => {
    if (percentage >= 80) return 3
    if (percentage >= 50) return 2
    if (percentage >= 20) return 1
    return 0
  }

  const getMessage = () => {
    if (percentage >= 80) return "Excellent!"
    if (percentage >= 60) return "Good Job!"
    if (percentage >= 40) return "Keep Going!"
    return "Practice More!"
  }

  if (totalQuestions === 0) return null

  return (
    <div className="mt-6 md:mt-12 mb-4 md:mb-8">
      <div className="glass-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-primary/20 overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
        
        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <h3 className="text-sm md:text-lg font-semibold text-foreground">Your Progress</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              className="text-muted-foreground hover:text-destructive text-xs h-8 px-2"
            >
              <RotateCcw className="w-3 h-3 mr-1" />
              Reset
            </Button>
          </div>

          {/* Stats Row - Horizontal on mobile */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Score */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <Trophy className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Score</p>
                <p className="text-lg md:text-2xl font-bold text-foreground">
                  {score}<span className="text-sm text-muted-foreground">/{totalQuestions}</span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-border/50" />

            {/* Percentage */}
            <div>
              <p className="text-xs text-muted-foreground">Accuracy</p>
              <div className="flex items-center gap-1.5">
                <p className="text-lg md:text-2xl font-bold text-foreground">{percentage}%</p>
                <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                  percentage >= 60 
                    ? "bg-green-500/20 text-green-400" 
                    : percentage >= 40 
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                }`}>
                  {getMessage()}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-border/50 hidden sm:block" />

            {/* Stars */}
            <div className="hidden sm:block">
              <p className="text-xs text-muted-foreground mb-1">Rating</p>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 md:w-6 md:h-6 ${
                      star <= getStars()
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 md:mt-4">
            <div className="h-1.5 md:h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
