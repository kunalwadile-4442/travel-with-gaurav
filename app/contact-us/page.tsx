"use client";
import MainLayout from '@/components/layouts/main-layout';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { App_url } from '@/constant/static';
import { customToast } from '@/components/customToast';


const formSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    mobile_no: z.string().min(1, "Mobile number is required"),
    email: z.string().email("Invalid email address"),
    consultation: z.string().optional(),
    project_information: z.string().optional(),
});

const ContactUs = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            mobile_no: "",
            email: "",
            consultation: "",
            project_information: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "contact",
                    ...values,
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to send");
            customToast.success("Thank you! We'll get back to you soon.");
            form.reset();
        } catch {
            customToast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <MainLayout>
            <section className="py-16 -mt-7">
                <div className="lg:mx-10 px-6">
                    <div className="flex flex-col md:flex-row md:justify-between mb-14">
                        <h2 className="text-3xl capitalize font-manrope font-bold text-[#000000]">
                            Book Your Ride with Dhanashree Tours & Travel
                        </h2>
                        <p className="text-slate_gray font-medium font-manrope text-md max-w-xl mt-4 md:mt-0">
                            Contact us for local rentals, airport transfers, and outstation trips across Pune and Maharashtra. We ensure safe, comfortable, and affordable travel.
                        </p>
                    </div>
                    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] gap-6">
                        <div className="p-8 bg-[#F2F3F6] rounded-lg">
                            <Form {...form}>
                                <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1 gap-5">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                            <FormField
                                                control={form.control}
                                                name="first_name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-medium font-inter text-[#101828]">
                                                            First Name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter your first name"
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
                                                name="last_name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-medium font-inter text-[#101828]">
                                                            Last Name
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Enter your last name"
                                                                className="rounded-[10px] h-12 bg-white border-[#D1D5DB] text-black"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="mobile_no"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-medium font-inter text-[#101828]">
                                                        Phone
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter your mobile number"
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
                                                    <FormLabel className="font-medium font-inter text-[#101828]">
                                                        Email
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter your email address"
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
                                            name="consultation"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-medium font-inter text-[#101828]">
                                                        Consultation
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Trip type (Local / Airport / Outstation)"
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
                                            name="project_information"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-medium font-inter text-[#101828]">
                                                        Travel Details
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            rows={10}
                                                            placeholder="Share your travel details (date, pickup location, destination, number of passengers)"
                                                            className="rounded-[10px] h-28 bg-white border-[#D1D5DB] text-black"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="flex items-center mt-3 gap-5">
                                        <button
                                            type="submit"
                                            disabled={form.formState.isSubmitting}
                                            className="w-fit px-10 tracking-wider shadow-md my-4 bg-[#111827] text-white text-[15px] py-2.5 rounded-full font-inter font-medium flex items-center gap-2 disabled:opacity-70"
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
                                    </div>
                                </form>
                            </Form>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            <div className="p-8 bg-[#F2F3F6] rounded-lg">
                                <div className="space-y-4 text-sm flex gap-4 items-center">
                                    <div className="">
                                        <MapPin size={25} className="text-[#0B5394] mt-0.5" />
                                    </div>
                                    <div className="">
                                        <h1 className='font-manrope font-bold text-[#000000] text-lg'>Our Location</h1>
                                        <span className='font-manrope text-[#475569] font-normal'>
                                           Pimpri Chinchwad, Pune
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4 text-sm flex gap-4 items-center">
                                    <div className="">
                                        <Mail size={25} className="text-[#0B5394] mt-0.5" />
                                    </div>
                                    <div className="">
                                        <h1 className='font-manrope font-bold text-[#000000] text-lg'>Email</h1>
                                        <span className='font-manrope text-[#475569] font-normal'>
                                            dhanashreetravels9464@gmail.com
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4 text-sm flex gap-4 items-center">
                                    <div className="">
                                        <Phone size={25} className="text-[#0B5394] mt-0.5" />
                                    </div>
                                    <div className="">
                                        <h1 className='font-manrope font-bold text-[#000000] text-lg'>Call Us</h1>
                                        <span className='font-manrope text-[#475569] font-normal'>
                                            <span className="font-semibold"> Mobile :</span> +91 8626009464
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Image
                                    src={App_url.image.contact_us}
                                    alt="Contact Us"
                                    className='rounded-[10px] object-cover w-full h-full'
                                    width={400}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default ContactUs
