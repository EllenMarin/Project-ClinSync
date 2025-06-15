import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format, isSameDay } from "date-fns";

type TimeSlot = {
  id: string;
  startTime: string;
  endTime: string;
  status: "available" | "booked" | "unavailable";
  patientName?: string;
};

type DaySchedule = {
  date: Date;
  timeSlots: TimeSlot[];
};

// Mock data
const generateMockSchedule = (): DaySchedule[] => {
  const today = new Date();
  const schedule: DaySchedule[] = [];

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);

    const timeSlots: TimeSlot[] = [
      {
        id: `slot-${i}-1`,
        startTime: "09:00",
        endTime: "09:30",
        status: Math.random() > 0.7 ? "booked" : "available",
        patientName: Math.random() > 0.7 ? "John Smith" : undefined,
      },
      {
        id: `slot-${i}-2`,
        startTime: "09:30",
        endTime: "10:00",
        status: Math.random() > 0.7 ? "booked" : "available",
        patientName: Math.random() > 0.7 ? "Emily Johnson" : undefined,
      },
      {
        id: `slot-${i}-3`,
        startTime: "10:00",
        endTime: "10:30",
        status: Math.random() > 0.7 ? "booked" : "available",
        patientName: Math.random() > 0.7 ? "Michael Brown" : undefined,
      },
      {
        id: `slot-${i}-4`,
        startTime: "10:30",
        endTime: "11:00",
        status: "unavailable",
      },
      {
        id: `slot-${i}-5`,
        startTime: "11:00",
        endTime: "11:30",
        status: Math.random() > 0.7 ? "booked" : "available",
        patientName: Math.random() > 0.7 ? "Sarah Davis" : undefined,
      },
      {
        id: `slot-${i}-6`,
        startTime: "11:30",
        endTime: "12:00",
        status: Math.random() > 0.7 ? "booked" : "available",
        patientName: Math.random() > 0.7 ? "Robert Wilson" : undefined,
      },
    ];

    schedule.push({
      date,
      timeSlots,
    });
  }

  return schedule;
};

export function ScheduleManagement() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [schedule, setSchedule] = useState<DaySchedule[]>(generateMockSchedule());

  const selectedDaySchedule = schedule.find((day) => 
    selectedDate && isSameDay(day.date, selectedDate)
  );

  const handleStatusChange = (slotId: string, newStatus: "available" | "unavailable") => {
    setSchedule(schedule.map(day => {
      if (selectedDate && isSameDay(day.date, selectedDate)) {
        const updatedTimeSlots = day.timeSlots.map(slot => {
          if (slot.id === slotId && slot.status !== "booked") {
            return {
              ...slot,
              status: newStatus,
              patientName: undefined
            };
          }
          return slot;
        });
        return { ...day, timeSlots: updatedTimeSlots };
      }
      return day;
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Management</CardTitle>
        <CardDescription>
          Manage your available appointment slots and view bookings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calendar">
          <TabsList className="mb-4">
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </div>

              <div>
                {selectedDate && (
                  <>
                    <h3 className="font-medium mb-2">
                      Schedule for {format(selectedDate, "EEEE, MMMM d, yyyy")}
                    </h3>
                    {selectedDaySchedule?.timeSlots.length ? (
                      <div className="space-y-2">
                        {selectedDaySchedule.timeSlots.map((slot) => (
                          <div 
                            key={slot.id} 
                            className={`p-3 rounded-md border flex justify-between items-center ${
                              slot.status === "booked" 
                                ? "bg-blue-50 border-blue-200" 
                                : slot.status === "unavailable" 
                                ? "bg-gray-50 border-gray-200" 
                                : "bg-green-50 border-green-200"
                            }`}
                          >
                            <div>
                              <div className="font-medium">
                                {slot.startTime} - {slot.endTime}
                              </div>
                              {slot.status === "booked" && slot.patientName && (
                                <div className="text-sm text-gray-500">
                                  Patient: {slot.patientName}
                                </div>
                              )}
                            </div>

                            {slot.status !== "booked" ? (
                              <Select
                                defaultValue={slot.status}
                                onValueChange={(value) => 
                                  handleStatusChange(slot.id, value as "available" | "unavailable")
                                }
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="available">Available</SelectItem>
                                  <SelectItem value="unavailable">Unavailable</SelectItem>
                                </SelectContent>
                              </Select>
                            ) : (
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No schedule available for this date.</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div className="space-y-4">
              {schedule.slice(0, 7).map((day) => (
                <div key={day.date.toISOString()} className="space-y-2">
                  <h3 className="font-medium">
                    {format(day.date, "EEEE, MMMM d, yyyy")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {day.timeSlots.map((slot) => (
                      <div 
                        key={slot.id} 
                        className={`p-2 rounded-md border text-sm ${
                          slot.status === "booked" 
                            ? "bg-blue-50 border-blue-200" 
                            : slot.status === "unavailable" 
                            ? "bg-gray-50 border-gray-200" 
                            : "bg-green-50 border-green-200"
                        }`}
                      >
                        <div className="font-medium">
                          {slot.startTime} - {slot.endTime}
                        </div>
                        <div className="text-xs text-gray-500">
                          {slot.status === "booked" 
                            ? `Booked: ${slot.patientName}` 
                            : slot.status === "unavailable" 
                            ? "Unavailable" 
                            : "Available"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
