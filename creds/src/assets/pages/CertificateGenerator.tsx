import React, { useReducer, useState, ChangeEvent, FormEvent } from "react";
import Modal from "../components/Modal";
import Certificate from "../views/Certificate";

interface FormState {
  name: string;
}

const initialState: FormState = {
  name: "Christopher Castro",
};

type Action = { type: "TEXT_CHANGE"; field: keyof FormState; payload: string };

const reducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "TEXT_CHANGE":
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
};
const CertificateGenerator: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "TEXT_CHANGE",
      field: e.target.name as keyof FormState,
      payload: e.target.value,
    });
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();

    const { name } = formState;

    if (name) {
      console.log("Form Submitted!", formState);
      setIsOpenModal(true);
    } else {
      alert("Invalid Field");
    }
  };

  return (
    <>
      <div className="wrapper bg-gray-900 h-screen flex flex-col text-white items-center justify-center overflow-auto">
        <h1>Enter your name</h1>
        <div className="container border border-white p-8 rounded-lg mt-8 mb-12 bg-gray-800 text-white w-96 text-center">
          <form onSubmit={handleSubmitForm}>
            <input
              className="px-4 py-2 rounded-md bg-gray-300 text-black w-full"
              name="name"
              value={formState.name}
              onChange={handleTextChange}
              id="username"
            />
            <button
              className="bg-blue-300 text-blue-900 rounded-lg p-4 mt-3 transition duration-300 hover:bg-gray-700 hover:text-white"
              type="submit"
            >
              Generate Certificate
            </button>
          </form>
        </div>
      </div>
      <Modal isOpen={isOpenModal} handleClose={() => setIsOpenModal(false)}>
        <Certificate {...formState} />
      </Modal>
    </>
  );
};

export default CertificateGenerator;
