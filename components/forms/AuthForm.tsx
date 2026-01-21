"use client";

import { object, z, ZodType } from "zod";

import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ROUTES from "@/constants/route";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long." })
    .max(50, { message: "Username must be at most 50 characters long." }),
});

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;

  formType: "SIGN_IN" | "SIGN_UP";
  onSubmit: (data: T) => Promise<{
    success: boolean;
  }>;
}

const AuthForm = <T extends FieldValues>({ schema, defaultValues, onSubmit, formType }: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: standardSchemaResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {};

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-6">
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-2.5">
                  <FormLabel className="paragraph-medium text-dark400_light700">
                    {field.name === "email"
                      ? "Email address"
                      : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      type={field.name == "password" ? "password" : "text"}
                      placeholder="shadcn"
                      {...field}
                      className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-12 border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="primary-gradient rounded-2 font-inter paragraph-medium !text-light-900 min-h-12 w-full px-4 py-3"
          >
            {form.formState.isSubmitting
              ? buttonText === "Sign In"
                ? "Signing In ..."
                : "Signing Up ..."
              : buttonText}
          </Button>

          {formType === "SIGN_IN" ? (
            <p>
              Don&apos;t have an account ?{" "}
              <Link href={ROUTES.SIGN_UP} className="paragraph-semibold primary-text-gradient">
                Sign up
              </Link>
            </p>
          ) : (
            <p>
              Already have an account ?{" "}
              <Link href={ROUTES.SIGN_IN} className="paragraph-semibold primary-text-gradient">
                Sign in
              </Link>
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
