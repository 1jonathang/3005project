"use client";

import * as z from "zod";
import React, { useState, useTransition } from "react";
import { CardWrapper } from "./CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { Button } from "../ui/button";
import { NewHeightSchema } from "@/schemas";
import { newHeight } from "@/actions/new-height";

type Props = {};

export const NewHeightForm = (props: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewHeightSchema>>({
    resolver: zodResolver(NewHeightSchema),
    defaultValues: {
      height: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof NewHeightSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newHeight(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerText="Update your height"
      headerLabel="Enter your new height"
      backButtonLabel="Back to stats"
      backButtonHref="/stats"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Height (cm)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="100"
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit" className="w-full">
            Update height
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
