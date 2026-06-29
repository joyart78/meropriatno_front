"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/Button";
import { useSendContactFormMutation } from "@/shared/api/baseApi";
import styles from "./ContactForm.module.css";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const PHONE_REGEX = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>();

  const [send, { isLoading, isSuccess }] = useSendContactFormMutation();

  const onSubmit = async (data: FormValues) => {
    try {
      await send(data).unwrap();
      reset();
    } catch {
      alert("Произошла ошибка. Попробуйте позже.");
    }
  };

  if (isSuccess) {
    return <p className={styles.success}>Спасибо! Мы свяжемся с вами.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <input
            {...register("name", { required: "Введите имя" })}
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            placeholder="Ваше имя"
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <input
            {...register("phone", {
              required: "Введите телефон",
              pattern: {
                value: PHONE_REGEX,
                message: "Неверный формат телефона",
              },
            })}
            className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
            placeholder="Телефон"
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <input
          {...register("email", {
            required: "Введите email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Неверный формат email",
            },
          })}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
          placeholder="Email"
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <textarea
          {...register("message", {
            required: "Напишите пару слов о вашем событии",
            minLength: {
              value: 10,
              message: "Минимум 10 символов",
            },
          })}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          placeholder="Расскажите о вашем событии"
        />
        {errors.message && (
          <span className={styles.error}>{errors.message.message}</span>
        )}
      </div>

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
