import React, { useState } from "react";
import EmailVerification from "./EmailVerification.JSX";
import OtpVerification from "./OtpVerification.JSX";
import RegisterForm from "./RegisterForm.JSX";


const Register = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <>
      {step === 1 && (
        <EmailVerification setEmail={setEmail} goToOtp={() => setStep(2)} />
      )}
      {step === 2 && (
        <OtpVerification email={email} goToRegister={() => setStep(3)} />
      )}
      {step === 3 && <RegisterForm email={email} />}
    </>
  );
};

export default Register;
