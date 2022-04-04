import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  function deleteHandler(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    });
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => onDelete(deleteHandler(id))}>
        Delete Question
      </button>
    </li>
  );
}

export default QuestionItem;