import React from 'react'
import styles from './QuizSlogan.module.scss'
import Image from 'next/image'
type Question = {
  question: string
  image: string
  options?: string[]
  answer?: string
  feedback?: {
    correct: string
    incorrect: string
  }
}

type QuizSloganProps = {
  currentQuestion: number;
  questions: Question[];
  quizCompleted?: boolean;  
  score?: number;           
};

const QuizSlogan: React.FC<QuizSloganProps>  = ({
  currentQuestion,
  questions = [],
  quizCompleted = false,
  score = 0
}) => {
  if (quizCompleted) {
    return (
      <div className={styles.quizSlogan}>
        <div className={styles.quizSlogan_top}>
          <p className={styles.quizSlogan_top_title}>Sigue mejorando</p>
          <p className={styles.quizSlogan_top_desc}>
            {score}/{questions.length} correctas
          </p>
        </div>
        <Image
          src={questions[currentQuestion]?.image}
          width={200}
          height={200}
          alt='quiz image'
        />
      </div>
    )
  }
  return (
    <div className={styles.quizSlogan}>
      <div className={styles.quizSlogan_top}>
        <p className={styles.quizSlogan_top_title}>
          Pregunta #{currentQuestion + 1}
        </p>
        <p>{questions[currentQuestion].question}</p>
      </div>
      <Image
        src={questions[currentQuestion].image}
        width={200}
        height={200}
        alt='quiz image'
      />
    </div>
  )
}

export default QuizSlogan
