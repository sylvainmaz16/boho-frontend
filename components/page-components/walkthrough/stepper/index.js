import OneStep from "./OneStep";

const Stepper = ({ currentStep }) => {
  return (
    <div className="stepper">
      <OneStep
        currentStep={currentStep}
        step={1}
        pastIcon="https://res.cloudinary.com/dkceblkn7/image/upload/v1640950997/boho%20vendor%20assets/Group_329_3_nu6ecm.svg"
        currentIcon="https://res.cloudinary.com/dkceblkn7/image/upload/v1640950925/boho%20vendor%20assets/Group_329_2_o7wjit.svg"
        futureIcon=""
      />
      <OneStep
        currentStep={currentStep}
        step={2}
        pastIcon="https://res.cloudinary.com/dkceblkn7/image/upload/v1640950956/boho%20vendor%20assets/Group_331_2_limcdi.svg"
        currentIcon="https://res.cloudinary.com/dkceblkn7/image/upload/v1640951010/boho%20vendor%20assets/Group_330_1_qkia2y.svg"
        futureIcon="https://res.cloudinary.com/dkceblkn7/image/upload/v1640951034/boho%20vendor%20assets/Group_331_3_lecp1v.svg"
      />
      <OneStep
        currentStep={currentStep}
        step={3}
        pastIcon="https://res.cloudinary.com/dkceblkn7/image/upload/v1640951022/boho%20vendor%20assets/Group_5_hcdjjg.svg"
        currentIcon="https://res.cloudinary.com/dkceblkn7/image/upload/v1640950968/boho%20vendor%20assets/Group_332_2_zvyoly.svg"
        futureIcon="https://res.cloudinary.com/dkceblkn7/image/upload/v1640951046/boho%20vendor%20assets/Group_6_pspgdr.svg"
      />
      <OneStep
        currentStep={currentStep}
        step={4}
        pastIcon=""
        currentIcon=""
        futureIcon="https://res.cloudinary.com/dkceblkn7/image/upload/v1640951059/boho%20vendor%20assets/Group_333_1_mcjnlr.svg"
      />
    </div>
  );
};

export default Stepper;
