import { useState, useEffect } from "react";
import SectionHeader from "../shared/SectionHeader";
import InputsRegular from "./components/InputsRegular";

const AboutYouForm = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  return (
    <form className="aboutYou__form wrapper-form">
      <section className="walkthrough__section">
        <SectionHeader content="Tell us about you" />
        <InputsRegular
          label="First name"
          htmlFor="firstName"
          value={firstName}
          setValue={setFirstName}
          placeholder="First name"
          type="text"
        />
        <InputsRegular
          label="Last name"
          htmlFor="lasttName"
          value={lastName}
          setValue={setLastName}
          placeholder="Last name"
          type="text"
        />
        <InputsRegular
          label="Phone number"
          htmlFor="phone"
          value={phone}
          setValue={setPhone}
          placeholder="123-1234-1234"
          type="tel"
        />
        <InputsRegular
          label="Email"
          htmlFor="email"
          value={email}
          setValue={setEmail}
          placeholder="email@domain.com"
          type="email"
        />
      </section>
      <section>
        <SectionHeader content="Tell us about your business" />
      </section>
      <section>
        <SectionHeader content="Where are you located" />
      </section>
    </form>
  );
};

export default AboutYouForm;
