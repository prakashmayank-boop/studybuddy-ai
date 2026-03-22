"use client"

import { Lightbulb, Volume2, Copy, Check, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ExplanationCardProps {
  explanation: string | null
  isLoading: boolean
  language: "english" | "hindi"
}

export function ExplanationCard({
  explanation,
  isLoading,
  language,
}: ExplanationCardProps) {
  const [copied, setCopied] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const handleCopy = async () => {
    if (explanation) {
      await navigator.clipboard.writeText(explanation.replace(/[#*]/g, ""))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSpeak = () => {
    if (!explanation || isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    const text = explanation.replace(/[#*]/g, "").replace(/\n/g, " ")
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = language === "hindi" ? "hi-IN" : "en-IN"
    utterance.rate = 0.9
    
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    
    setIsSpeaking(true)
    window.speechSynthesis.speak(utterance)
  }

  const formatExplanation = (text: string) => {
    const lines = text.split("\n")
    return lines.map((line, index) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-xl font-bold text-foreground mt-4 mb-3 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
            {line.replace("## ", "")}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-lg font-semibold text-primary mt-4 mb-2">
            {line.replace("### ", "")}
          </h3>
        )
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-4 text-muted-foreground flex items-start gap-2 my-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span>{formatBoldText(line.replace("- ", ""))}</span>
          </li>
        )
      }
      if (line.match(/^\d+\./)) {
        return (
          <p key={index} className="ml-2 my-2 text-muted-foreground">
            {formatBoldText(line)}
          </p>
        )
      }
      if (line.startsWith("*") && line.endsWith("*")) {
        return (
          <p key={index} className="italic text-primary/80 mt-6 text-center font-medium">
            {line.replace(/\*/g, "")}
          </p>
        )
      }
      if (line.trim() === "") {
        return <br key={index} />
      }
      return (
        <p key={index} className="text-muted-foreground leading-relaxed">
          {formatBoldText(line)}
        </p>
      )
    })
  }

  const formatBoldText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/)
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-foreground">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <div className="glass-card rounded-2xl overflow-hidden mt-8">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
            <Lightbulb className="h-4 w-4 text-yellow-500" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">AI Explanation</h3>
            <p className="text-xs text-muted-foreground">
              {language === "english" ? "English" : "Hindi"}
            </p>
          </div>
        </div>
        
        {!isLoading && explanation && (
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSpeak}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              <Volume2 className={`h-4 w-4 ${isSpeaking ? "text-primary animate-pulse" : ""}`} />
              <span className="ml-1.5 hidden sm:inline text-xs">
                {isSpeaking ? "Stop" : "Listen"}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="ml-1.5 hidden sm:inline text-xs">
                {copied ? "Copied!" : "Copy"}
              </span>
            </Button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              <BookOpen className="h-6 w-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="mt-6 text-muted-foreground font-medium animate-pulse">
              {language === "english" 
                ? "Preparing your explanation..." 
                : "आपकी व्याख्या तैयार कर रहा हूं..."}
            </p>
            <p className="text-sm text-muted-foreground/60 mt-1">
              {language === "english" ? "This will take a moment" : "कुछ समय लगेगा"}
            </p>
          </div>
        ) : (
          <div className="prose prose-invert max-w-none">
            {explanation && formatExplanation(explanation)}
          </div>
        )}
      </div>
    </div>
  )
}
