import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import isAfter from "date-fns/isAfter";

const returnRelativeDueDate = due_at => {
  return due_at && isAfter(due_at, new Date(Date.now())) ? (
    `Due in ${formatDistanceToNow(due_at)}`
  ) : due_at && !isAfter(due_at, new Date(Date.now())) ? (
    <span style={{ color: "red" }}>
      {`Due ${formatDistanceToNow(due_at)} ago`}
    </span>
  ) : (
    " No due date"
  );
};

export default returnRelativeDueDate;
