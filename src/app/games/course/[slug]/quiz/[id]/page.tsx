'use client'
import NavBar from '@/components/NavBar/NavBar'
import React, { useState } from 'react'
import styles from './quizPage.module.scss'
import QuizSlogan from '@/components/Games/childrens/QuizSlogan/QuizSlogan'
import check from '../../../../../../../public/images/check.png'
import x from '../../../../../../../public/images/x.png'
import Image from 'next/image'
import { quizzQuestions } from '../../../../../../utils/quizzQuestions'
import QuizModal from '@/components/Games/childrens/QuizModal/QuizModal'

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState(null)
  const [userAnswers, setUserAnswers] = useState([])
  const [showContinueButton, setShowContinueButton] = useState(true)

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value)
  }

  const handleNextButton = () => {
    setShowContinueButton(false)
    const currentUserAnswers = [
      ...userAnswers,
      {
        question: quizzQuestions[currentQuestion].question,
        userAnswer: selectedOption,
        correctAnswer: quizzQuestions[currentQuestion].answer
      }
    ]

    setUserAnswers(currentUserAnswers)

    if (selectedOption === quizzQuestions[currentQuestion].answer) {
      setScore(score + 1)
      setFeedbackMessage(quizzQuestions[currentQuestion].feedback.correct)
    } else {
      setFeedbackMessage(quizzQuestions[currentQuestion].feedback.incorrect)
    }

    setTimeout(() => {
      if (currentQuestion < quizzQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption('')
        setFeedbackMessage(null)
        setShowContinueButton(true)
      } else {
        setShowScore(true)
      }
    }, 2000)
  }

  const getQuiz = () => {
    const getQuestions = () => {
      return (
        <div className={styles.quizPage_quiz_questions}>
          {quizzQuestions[currentQuestion].options.map((option, index) => (
            <label
              className={styles.quizPage_quiz_questions_question}
              key={index}
            >
              <input
                type='radio'
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
      )
    }

    if (showScore) {
      const getIconResult = (answer: string) => {
        if (answer.userAnswer === answer.correctAnswer) {
          return <Image alt='check' src={check.src} width={50} height={20} />
        } else {
          return <Image alt='check' src={x.src} width={50} height={20} />
        }
      }
      return (
        <div className={styles.quizPage_score}>
          <QuizModal/>
          <QuizSlogan
            currentQuestion={currentQuestion}
            questions={quizzQuestions}
            quizCompleted={showScore}
            score={score}
          />
          <div className={styles.quizPage_score_questions}>
            {userAnswers.map((answer, index) => (
              <div
                className={styles.quizPage_score_questions_question}
                key={index}
              >
                {getIconResult(answer)}
                <div>
                  <p>{answer.question}</p>
                  <div>
                    <strong>Respuesta correcta:</strong>
                    <p>{answer.correctAnswer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <>
        <div className={styles.quizPage_quiz}>
          <QuizSlogan
            currentQuestion={currentQuestion}
            questions={quizzQuestions}
          />
          {getQuestions()}
          {feedbackMessage && (
            <div className='feedback-section'>{feedbackMessage}</div>
          )}
          <div className={styles.quizPage_quiz_btn}>
            {showContinueButton && (
              <button onClick={handleNextButton}>Continuar</button>
            )}
          </div>
        </div>
      </>
    )
  }

  return (
    <div className={styles.quizPage}>
      <NavBar
        setIsOpen={() => {}}
        showToggle={false}
        showInDesktop={true}
        isOpen={false}
      />
      {getQuiz()}
    </div>
  )
}

export default QuizPage
