"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Brain, 
  CheckCircle2, 
  XCircle, 
  ChevronRight,
  Trophy,
  RotateCcw,
  Target
} from "lucide-react"

interface QuizSectionProps {
  topic: string
  language: "english" | "hindi"
  onComplete: (correct: number, total: number) => void
  quizCompleted: boolean
}

interface Question {
  question: string
  options: string[]
  correctIndex: number
}

export function QuizSection({
  topic,
  language,
  onComplete,
  quizCompleted,
}: QuizSectionProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const generateQuestions = (): Question[] => {
      if (language === "english") {
        return [
          {
            question: `What is the main concept of ${topic}?`,
            options: [
              "A fundamental principle in science",
              "A mathematical formula",
              "A historical event",
              "None of the above"
            ],
            correctIndex: 0
          },
          {
            question: `Which subject does ${topic} primarily belong to?`,
            options: ["Science", "Mathematics", "Social Studies", "All of the above"],
            correctIndex: 3
          },
          {
            question: `Why is learning ${topic} important?`,
            options: [
              "It helps in exams only",
              "It has no practical use",
              "It helps understand real-world applications",
              "It is not important"
            ],
            correctIndex: 2
          },
          {
            question: `What is the best way to understand ${topic}?`,
            options: [
              "Memorizing without understanding",
              "Practice with examples and questions",
              "Skipping difficult parts",
              "Reading once before exam"
            ],
            correctIndex: 1
          },
          {
            question: `Which class level typically covers ${topic} in India?`,
            options: ["Primary (1-5)", "Middle (6-8)", "Secondary (9-10)", "All levels"],
            correctIndex: 3
          },
          {
            question: `How can ${topic} be applied in daily life?`,
            options: [
              "It cannot be applied",
              "Through observation and practice",
              "Only in laboratories",
              "Only in textbooks"
            ],
            correctIndex: 1
          },
          {
            question: `What should you do if you find ${topic} difficult?`,
            options: [
              "Give up immediately",
              "Ask teacher or use learning resources",
              "Skip the topic",
              "Copy from friends"
            ],
            correctIndex: 1
          },
          {
            question: `Which resource is best for learning ${topic}?`,
            options: [
              "Only textbooks",
              "Only videos",
              "Multiple resources including AI tools",
              "No resources needed"
            ],
            correctIndex: 2
          },
          {
            question: `What is a key characteristic of ${topic}?`,
            options: [
              "It is very simple",
              "It requires logical thinking",
              "It needs no practice",
              "It is outdated"
            ],
            correctIndex: 1
          },
          {
            question: `After learning ${topic}, what should you do?`,
            options: [
              "Forget about it",
              "Practice and revise regularly",
              "Never look at it again",
              "Only study before exams"
            ],
            correctIndex: 1
          }
        ]
      } else {
        return [
          {
            question: `${topic} की मुख्य अवधारणा क्या है?`,
            options: [
              "विज्ञान में एक मौलिक सिद्धांत",
              "एक गणितीय सूत्र",
              "एक ऐतिहासिक घटना",
              "उपरोक्त में से कोई नहीं"
            ],
            correctIndex: 0
          },
          {
            question: `${topic} मुख्य रूप से किस विषय से संबंधित है?`,
            options: ["विज्ञान", "गणित", "सामाजिक अध्ययन", "उपरोक्त सभी"],
            correctIndex: 3
          },
          {
            question: `${topic} सीखना क्यों महत्वपूर्ण है?`,
            options: [
              "यह केवल परीक्षाओं में मदद करता है",
              "इसका कोई व्यावहारिक उपयोग नहीं है",
              "यह वास्तविक दुनिया के अनुप्रयोगों को समझने में मदद करता है",
              "यह महत्वपूर्ण नहीं है"
            ],
            correctIndex: 2
          },
          {
            question: `${topic} को समझने का सबसे अच्छा तरीका क्या है?`,
            options: [
              "बिना समझे याद करना",
              "उदाहरणों और प्रश्नों के साथ अभ्यास",
              "कठिन भागों को छोड़ना",
              "परीक्षा से पहले एक बार पढ़ना"
            ],
            correctIndex: 1
          },
          {
            question: `भारत में ${topic} आमतौर पर किस कक्षा स्तर पर पढ़ाया जाता है?`,
            options: ["प्राथमिक (1-5)", "मध्य (6-8)", "माध्यमिक (9-10)", "सभी स्तर"],
            correctIndex: 3
          },
          {
            question: `${topic} को दैनिक जीवन में कैसे लागू किया जा सकता है?`,
            options: [
              "इसे लागू नहीं किया जा सकता",
              "अवलोकन और अभ्यास के माध्यम से",
              "केवल प्रयोगशालाओं में",
              "केवल पाठ्यपुस्तकों में"
            ],
            correctIndex: 1
          },
          {
            question: `अगर ${topic} कठिन लगे तो क्या करना चाहिए?`,
            options: [
              "तुरंत हार मान लें",
              "शिक्षक से पूछें या सीखने के संसाधनों का उपयोग करें",
              "विषय छोड़ दें",
              "दोस्तों से नकल करें"
            ],
            correctIndex: 1
          },
          {
            question: `${topic} सीखने के लिए कौन सा संसाधन सबसे अच्छा है?`,
            options: [
              "केवल पाठ्यपुस्तकें",
              "केवल वीडियो",
              "AI टूल्स सहित कई संसाधन",
              "कोई संसाधन की जरूरत नहीं"
            ],
            correctIndex: 2
          },
          {
            question: `${topic} की एक प्रमुख विशेषता क्या है?`,
            options: [
              "यह बहुत सरल है",
              "इसमें तार्किक सोच की आवश्यकता है",
              "इसमें अभ्यास की जरूरत नहीं",
              "यह पुराना हो गया है"
            ],
            correctIndex: 1
          },
          {
            question: `${topic} सीखने के बाद क्या करना चाहिए?`,
            options: [
              "इसे भूल जाएं",
              "नियमित रूप से अभ्यास और दोहराव करें",
              "इसे दोबारा कभी न देखें",
              "केवल परीक्षा से पहले पढ़ें"
            ],
            correctIndex: 1
          }
        ]
      }
    }

    setQuestions(generateQuestions())
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setCorrectAnswers(0)
    setIsFinished(false)
  }, [topic, language])

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    
    setShowResult(true)
    if (selectedAnswer === questions[currentQuestion].correctIndex) {
      setCorrectAnswers(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsFinished(true)
      const finalCorrect = selectedAnswer === questions[currentQuestion].correctIndex
        ? correctAnswers
        : correctAnswers
      onComplete(finalCorrect, questions.length)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setCorrectAnswers(0)
    setIsFinished(false)
  }

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100

  if (questions.length === 0) return null

  if (isFinished || quizCompleted) {
    const percentage = Math.round((correctAnswers / questions.length) * 100)
    const getMessage = () => {
      if (percentage >= 80) return language === "english" 
        ? "Excellent! You're a star student!" 
        : "उत्कृष्ट! आप एक स्टार छात्र हैं!"
      if (percentage >= 60) return language === "english"
        ? "Good job! Keep practicing!"
        : "अच्छा किया! अभ्यास करते रहो!"
      if (percentage >= 40) return language === "english"
        ? "Nice try! Review the topic again."
        : "अच्छा प्रयास! विषय को फिर से पढ़ें।"
      return language === "english"
        ? "Keep learning! You'll improve!"
        : "सीखते रहो! आप सुधार करेंगे!"
    }

    return (
      <div className="glass-card rounded-2xl overflow-hidden mt-8 mb-24">
        <div className="relative p-8 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
          
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {language === "english" ? "Quiz Completed!" : "क्विज़ पूरा हुआ!"}
            </h2>
            
            <div className="flex items-center justify-center gap-2 my-4">
              <span className="text-5xl font-bold text-foreground">{correctAnswers}</span>
              <span className="text-2xl text-muted-foreground">/</span>
              <span className="text-2xl text-muted-foreground">{questions.length}</span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-4">
              <Target className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">{percentage}% Accuracy</span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">{getMessage()}</p>
            
            <Button
              onClick={handleRestart}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-3 rounded-xl"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              {language === "english" ? "Try Again" : "फिर से कोशिश करें"}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card rounded-2xl overflow-hidden mt-8 mb-24">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Brain className="h-4 w-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">
              {language === "english" ? "Test Your Knowledge" : "अपना ज्ञान परखें"}
            </h3>
          </div>
          <span className="text-sm font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2 bg-secondary" />
      </div>

      {/* Question */}
      <div className="p-6">
        <h4 className="text-lg font-medium text-foreground mb-6 leading-relaxed">
          {questions[currentQuestion].question}
        </h4>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isCorrect = index === questions[currentQuestion].correctIndex
            const isSelected = selectedAnswer === index
            
            let buttonStyles = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 "
            
            if (showResult) {
              if (isCorrect) {
                buttonStyles += "bg-green-500/10 border-green-500 text-green-400"
              } else if (isSelected && !isCorrect) {
                buttonStyles += "bg-red-500/10 border-red-500 text-red-400"
              } else {
                buttonStyles += "bg-secondary/50 border-border/50 text-muted-foreground opacity-50"
              }
            } else if (isSelected) {
              buttonStyles += "bg-primary/10 border-primary text-foreground"
            } else {
              buttonStyles += "bg-secondary/30 border-border/50 text-muted-foreground hover:bg-secondary/50 hover:border-primary/50 hover:text-foreground"
            }
            
            return (
              <button
                key={index}
                className={buttonStyles}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-sm font-semibold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                {showResult && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                )}
                {showResult && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
              </button>
            )
          })}
        </div>
        
        <div className="flex justify-end mt-6 pt-4 border-t border-border/50">
          {!showResult ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-6 rounded-xl disabled:opacity-50"
            >
              {language === "english" ? "Check Answer" : "उत्तर जांचें"}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-6 rounded-xl"
            >
              {currentQuestion < questions.length - 1 
                ? (language === "english" ? "Next Question" : "अगला प्रश्न")
                : (language === "english" ? "See Results" : "परिणाम देखें")}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
