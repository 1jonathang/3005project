"use client";

import React, { useState } from "react";
import * as z from "zod";
import { CardWrapper } from "./CardWrapper";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { login } from "@/actions/login";
import { useTransition } from "react";
import { register } from "@/actions/register";

type Props = {};

export const RegisterForm = (props: Props) => {
  // to disable components while server action is being processed
  const [isPending, startTransition] = useTransition();
  // if there is error in user submission, use this to set error box
  const [error, setError] = useState<string | undefined>("");
  // same thing as error
  const [success, setSuccess] = useState<string | undefined>("");

  // creating the form type we will pass into our form component
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  // onsubmit function for when you click login button
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    // clear all errors or success messages when call onsubmit again
    setError("");
    setSuccess("");

    // server action
    // creating transition to disable all components while server action is being processed
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerText="Welcome!"
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
      socialMessage="Sign up with credentials"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Johnny Sins"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="carleton@carleton.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="****"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error}/>
          <FormSuccess message={success}/>
          <Button disabled={isPending} type="submit">
           Sign up
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
