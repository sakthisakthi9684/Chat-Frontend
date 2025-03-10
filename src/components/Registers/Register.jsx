  import React, { useState } from "react";
  import EmailVerification from "./EmailVerification.JSX";
  import OtpVerification from "./OtpVerification.JSX";
  import RegisterForm from "./RegisterForm.JSX";

  const Register = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
        {step === 1 && (
          <EmailVerification setEmail={setEmail} goToOtp={() => setStep(2)} />
        )}
        {step === 2 && (
          <OtpVerification email={email} goToRegister={() => setStep(3)} />
        )}
        {step === 3 && <RegisterForm email={email} />}
      </div>
    );
  };

  export default Register;
