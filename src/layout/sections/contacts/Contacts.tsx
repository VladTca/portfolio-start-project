import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contact_Styles";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm("service_zv37svi", "template_mbc2t2h", form.current, {
        publicKey: "pyhBXyn8SW3gN6mwJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    e.target.reset();
  };

  return (
    <S.Contacts id={"contacts"}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required name={"user_name"} placeholder={"name"} />
          <S.Field required name={"email"} placeholder={"email"} />
          <S.Field required placeholder={"subject"} name={"subject"} />
          <S.Field
            required
            name={"message"}
            placeholder={"message"}
            as={"textarea"}
          />
          <Button type={"submit"}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
