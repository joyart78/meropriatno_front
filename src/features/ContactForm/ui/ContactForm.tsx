"use client";

import { useState } from "react";
import { Button } from "../../../shared/ui/Button";
import styles from "./ContactForm.module.css";
import { useSendContactFormMutation } from "../../../shared/api/baseApi";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [send, { isLoading, isSuccess }] = useSendContactFormMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await send(form).unwrap();
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      alert("Произошла ошибка. Попробуйте позже.");
    }
  };

  if (isSuccess) {
    return <p className={styles.success}>Спасибо! Мы свяжемся с вами.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Ваше имя"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          className={styles.input}
          placeholder="Телефон"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="email"
        name="email"
        className={styles.input}
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        className={styles.textarea}
        placeholder="Расскажите о вашем событии"
        value={form.message}
        onChange={handleChange}
        required
      />
      <Button
        type="submit"
        disabled={isLoading}
        style={{ alignSelf: "flex-start" }}
      >
        {isLoading ? "Отправка..." : "Отправить заявку"}
      </Button>
    </form>
  );
}
