"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Calendar, Clock } from "lucide-react"

const bookingSchema = z.object({
  patientName: z.string().min(2, "Name must be at least 2 characters long"),
  patientEmail: z.string().email("Invalid email"),
  gender: z.string().min(1, "Select gender"),
  age: z.string().min(1, "Age is required").regex(/^\d+$/, "Age must be a number"),
  patientPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  selectDate: z.string().min(1, "Select a date"),
  selectTime: z.string().min(1, "Select a time"),
  specialistDoctor: z.string().min(1, "Select a specialist"),
  problem: z.string().min(10, "Describe the issue with at least 10 characters"),
})

type BookingFormData = z.infer<typeof bookingSchema>

export default function BookingPage() {
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      patientName: "",
      patientEmail: "",
      gender: "",
      age: "",
      patientPhone: "",
      selectDate: "",
      selectTime: "",
      specialistDoctor: "",
      problem: "",
    },
  })

  const onSubmit = (data: BookingFormData) => {
    console.log("Appointment data:", data)
    alert("Appointment booked successfully!")
  }

  const handleCancel = () => {
    form.reset()
  }

  return (
    <div className=" bg-gray-50 ">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
            {/* Header */}
            <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Book Appointment</h1>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FormField
                    control={form.control}
                    name="patientName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Patient Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter full name" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="patientEmail"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Patient Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="Enter email address" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Gender</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="h-10">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Age</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter age" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <FormField
                    control={form.control}
                    name="patientPhone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Phone</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter phone number" className="h-10" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="selectDate"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Select Date</FormLabel>
                        <FormControl>
                            <div className="relative">
                            <Input type="date" className="h-10" {...field} />
                            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="selectTime"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Select Time</FormLabel>
                        <FormControl>
                            <div className="relative">
                            <Input type="time" className="h-10" {...field} />
                            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="specialistDoctor"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Specialist</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="h-10">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="dr-silva">Dr. Silva - Cardiologist</SelectItem>
                            <SelectItem value="dr-santos">Dr. Santos - Neurologist</SelectItem>
                            <SelectItem value="dr-oliveira">Dr. Oliveira - Orthopedist</SelectItem>
                            <SelectItem value="dr-costa">Dr. Costa - Dermatologist</SelectItem>
                            <SelectItem value="dr-lima">Dr. Lima - Pediatrician</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                {/* Row 3: Problem */}
                <FormField
                    control={form.control}
                    name="problem"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Describe the Problem</FormLabel>
                        <FormControl>
                        <Textarea placeholder="Describe the issue" className="min-h-[100px] resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-4">
                    <Button type="button" variant="outline" onClick={handleCancel} className="px-6">
                    Cancel
                    </Button>
                    <Button type="submit" className="px-6 bg-teal-600 hover:bg-teal-700">
                    Book Appointment
                    </Button>
                </div>
                </form>
            </Form>
            </div>
            
        </div>
    </div>
  )
}
