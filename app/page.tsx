"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { TopicInput } from "@/components/topic-input"
import { ExplanationCard } from "@/components/explanation-card"
import { QuizSection } from "@/components/quiz-section"
import { ScoreTracker } from "@/components/score-tracker"
import { Features } from "@/components/features"

export default function StudyBuddyApp() {
  const [topic, setTopic] = useState("")
  const [explanation, setExplanation] = useState<string | null>(null)
  const [language, setLanguage] = useState<"english" | "hindi">("english")
  const [isLoading, setIsLoading] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleExplainTopic = async () => {
    if (!topic.trim()) return
    
    setIsLoading(true)
    setShowQuiz(false)
    setQuizCompleted(false)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const explanations = {
      english: `## Understanding ${topic}\n\nThis is a simple explanation of **${topic}** designed for students:\n\n### Key Points:\n1. **Basic Concept**: ${topic} is an important topic that helps us understand how things work in our world.\n\n2. **Why It Matters**: Learning about ${topic} helps you in exams and real-life situations.\n\n3. **Easy Example**: Think of ${topic} like building blocks - each small piece connects to make something bigger!\n\n### Remember:\n- Take notes while studying\n- Practice with examples\n- Ask questions if confused\n\n*Keep learning, you're doing great!*`,
      hindi: `## ${topic} को समझें\n\nयह **${topic}** की एक सरल व्याख्या है, जो छात्रों के लिए बनाई गई है:\n\n### मुख्य बिंदु:\n1. **बुनियादी अवधारणा**: ${topic} एक महत्वपूर्ण विषय है जो हमें समझने में मदद करता है कि हमारी दुनिया में चीजें कैसे काम करती हैं।\n\n2. **यह क्यों मायने रखता है**: ${topic} के बारे में सीखना आपकी परीक्षाओं और वास्तविक जीवन की स्थितियों में मदद करता है।\n\n3. **आसान उदाहरण**: ${topic} को बिल्डिंग ब्लॉक्स की तरह सोचें - प्रत्येक छोटा टुकड़ा कुछ बड़ा बनाने के लिए जुड़ता है!\n\n### याद रखें:\n- पढ़ते समय नोट्स बनाएं\n- उदाहरणों के साथ अभ्यास करें\n- भ्रमित होने पर सवाल पूछें\n\n*सीखते रहो, तुम बहुत अच्छा कर रहे हो!*`
    }
    
    setExplanation(explanations[language])
    setIsLoading(false)
    setShowQuiz(true)
  }

  const handleQuizComplete = (correctAnswers: number, total: number) => {
    setScore(prev => prev + correctAnswers)
    setTotalQuestions(prev => prev + total)
    setQuizCompleted(true)
  }

  const handleResetScore = () => {
    setScore(0)
    setTotalQuestions(0)
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Gradient glow effect at top */}
      <div className="gradient-glow fixed inset-x-0 top-0 h-96 pointer-events-none" />
      
      <Header />
      
      <main className="relative container mx-auto px-4 py-8 max-w-4xl">
        <TopicInput
          topic={topic}
          setTopic={setTopic}
          language={language}
          setLanguage={setLanguage}
          onExplain={handleExplainTopic}
          isLoading={isLoading}
        />
        
        {!explanation && !isLoading && <Features />}
        
        {(explanation || isLoading) && (
          <ExplanationCard
            explanation={explanation}
            isLoading={isLoading}
            language={language}
          />
        )}
        
        {showQuiz && !isLoading && (
          <QuizSection
            topic={topic}
            language={language}
            onComplete={handleQuizComplete}
            quizCompleted={quizCompleted}
          />
        )}
        
        <ScoreTracker
          score={score}
          totalQuestions={totalQuestions}
          onReset={handleResetScore}
        />
      </main>
    </div>
  )
}
