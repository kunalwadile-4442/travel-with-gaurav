"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { customToast } from "@/components/customToast";
import { closeContactPopup, openContactPopup } from "@/redux/modules/main/action";
import * as z from "zod";

const popupFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().optional(),
});

type PopupFormValues = z.infer<typeof popupFormSchema>;

interface ContactFormPopupProps {
  trigger?: React.ReactNode;
}

export function ContactFormPopup({ trigger }: ContactFormPopupProps) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state?.combinedReducer?.mainReducer?.contact_popup_open ?? false);
  const form = useForm<PopupFormValues>({
    resolver: zodResolver(popupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: PopupFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "popup",
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send");
      }

      customToast.success("Thank you! We'll get back to you soon.");
      form.reset();
      setTimeout(() => dispatch(closeContactPopup()), 2000);
    } catch {
      customToast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => open ? dispatch(openContactPopup()) : dispatch(closeContactPopup())}>
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-manrope font-bold">
            Quick Inquiry - Dhanashree Tours and Travel
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium font-inter text-[#101828]">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      className="rounded-[10px] h-12 bg-white border-[#D1D5DB] text-black"
                      {...field}
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
                  <FormLabel className="font-medium font-inter text-[#101828]">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      className="rounded-[10px] h-12 bg-white border-[#D1D5DB] text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium font-inter text-[#101828]">Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone"
                      className="rounded-[10px] h-12 bg-white border-[#D1D5DB] text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium font-inter text-[#101828]">Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message..."
                      rows={3}
                      className="rounded-[10px] bg-white border-[#D1D5DB] text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full px-10 tracking-wider shadow-md py-2.5 rounded-full bg-[#136AED] hover:bg-[#1158d4] text-white text-[15px] font-inter font-medium flex items-center justify-center gap-2 disabled:opacity-70 transition-colors"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
