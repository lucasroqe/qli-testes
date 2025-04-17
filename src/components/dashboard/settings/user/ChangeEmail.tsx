"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { formSchema } from "@/lib/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { LoaderCircle, Eye, EyeOff } from "lucide-react";

//TERMINAR 
export function ChangeEmail() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function onSubmit(values: any) {

      await authClient.changeEmail(
    {
        newEmail: values.email
      },
      {}
    );
  
      toast.success("Dados alterados com sucesso");
      router.refresh();
      form.reset()
  }

  return (
    <>
      <div>
        <h1 className="text-4xl mb-5">Altere seus dados cadastrais</h1>
      </div>
      <div className="max-w-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Novo e-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle size={16} className="animate-spin" />
              ) : (
                "Alterar senha"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
