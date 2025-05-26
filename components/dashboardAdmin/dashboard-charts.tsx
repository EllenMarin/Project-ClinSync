"use client"

import { BarChart as BarChartIcon, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const appointmentData = [
  { name: "Mon", appointments: 12 },
  { name: "Tue", appointments: 18 },
  { name: "Wed", appointments: 14 },
  { name: "Thu", appointments: 20 },
  { name: "Fri", appointments: 16 },
  { name: "Sat", appointments: 10 },
  { name: "Sun", appointments: 5 },
];

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 5400 },
  { name: "Mar", revenue: 6800 },
  { name: "Apr", revenue: 4200 },
  { name: "May", revenue: 7200 },
  { name: "Jun", revenue: 8100 },
  { name: "Jul", revenue: 6500 },
];

export function DashboardCharts() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>
              Clinic performance metrics
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="appointments">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="appointments">
              <div className="flex items-center">
                <BarChartIcon className="mr-2 h-4 w-4" />
                Appointments
              </div>
            </TabsTrigger>
            <TabsTrigger value="revenue">
              <div className="flex items-center">
                <Activity className="mr-2 h-4 w-4" />
                Revenue
              </div>
            </TabsTrigger>
          </TabsList>
          <div className="mt-4 h-[300px]">
            <TabsContent value="appointments" className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={appointmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="appointments" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="revenue" className="h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--chart-2))" 
                    strokeWidth={2} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}