import React from "react";
import { FC } from "react";

interface CertificateProps {
  name: String;
}

const Certificate: FC<CertificateProps> = ({ name }) => {
  return (
    <>
      <div className="">Hello World! My name is {name}</div>;
    </>
  );
};
export default Certificate;
