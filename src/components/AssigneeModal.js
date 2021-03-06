import React from "react";
import Assignee from "./Assignee";
import Modal from "./Modal";

export const AssigneeModal = (props) => {
  const { closeModal, users, assignUser, assignedUserId } = props;

  return (
    <Modal closeModal={closeModal}>
      <ul>
        {users.map((u) => (
          <Assignee
            id={u.id}
            key={u.id}
            assignedUserId={assignedUserId}
            assignUser={assignUser}
            name={u.name}
          />
        ))}
      </ul>
    </Modal>
  );
};
