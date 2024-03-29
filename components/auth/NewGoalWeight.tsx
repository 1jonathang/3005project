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
import { NewWeightSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import { Button } from "../ui/button";
import { newGoalWeight } from "@/actions/new-goalweight";

type Props = {};

export const NewGoalWeightForm = (props: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewWeightSchema>>({
    resolver: zodResolver(NewWeightSchema),
    defaultValues: {
      weight: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof NewWeightSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newGoalWeight(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerText="Update goal weight"
      headerLabel="Enter your new goal weight"
      backButtonLabel="Back to stats"
      backButtonHref="/stats"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goal Weight (lbs)</FormLabel>
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
            Update goal weight
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
