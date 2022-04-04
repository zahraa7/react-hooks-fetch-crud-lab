import React from "react";
import { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [deleteQuestion, setDeleteQuestion] = useState(``);
  console.log(deleteQuestion);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then((data) => data.json())
      .then((data) => {
        setQuestions(data);
      });
  }, [deleteQuestion]);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <QuestionItem
                onDelete={(e) => setDeleteQuestion(e)}
                question={question}
              />
              ;
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;