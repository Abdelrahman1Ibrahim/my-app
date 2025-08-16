import status from "./taskStatus.png";

interface todoStatus {
  totalNumber: number;
  completeNumber: number;
  inProgressNumber: number;
  notStartedNumber: number;
}

export default function TaskStatus(summary: todoStatus) {
  return (
    <div>
      <p>
        <img src={status} alt="Task Status" />
        <h3>TaskStatus</h3>
      </p>
      <div> 

      </div>
    </div>
  );
}
