import { useEffect, useState } from "react";
import Image from "next/image";

const OneStep = ({ currentStep, step, pastIcon, currentIcon, futureIcon }) => {
  const [stepActive, setStepActive] = useState();

  useEffect(() => {
    if (currentStep > step) {
      setStepActive("stepper__onePast");
    } else if (currentStep === step) {
      setStepActive("stepper__oneCurrent");
    } else if (currentStep < step) {
      setStepActive("stepper__oneFuture");
    }
  });

  return (
    <div className={`stepper__one ${stepActive}`}>
      {currentStep > step && <Image src={pastIcon} height="32" width="32" />}
      {currentStep === step && (
        <Image src={currentIcon} height="32" width="32" />
      )}
      {currentStep < step && <Image src={futureIcon} height="32" width="32" />}
      <p>Step {step}</p>
      <p>Business Information</p>
    </div>
  );
};

export default OneStep;
