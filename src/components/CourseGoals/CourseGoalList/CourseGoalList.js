import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

const CourseGoalList = (props) => {
  return (
    <div>
      <h4>Click the card to delete it</h4>
      <ul className="goal-list">
        {props.items.map((goal) => (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            onDelete={props.onDeleteItem}
          >
            {goal.text}
          </CourseGoalItem>
        ))}
      </ul>
    </div>
  );
};

export default CourseGoalList;
