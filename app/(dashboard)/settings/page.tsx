"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { PersonalDetailsForm } from "@/components/settings/personal-details-form";
import { NotificationPreferences } from "@/components/settings/notification-preferences";
import { PaymentMethods } from "@/components/settings/payment-methods";
import { ResetPasswordForm } from "@/components/settings/reset-password-form";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs
        defaultValue="personal"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4 w-[70%] mx-auto"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal Details</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Credit Cards</TabsTrigger>
          <TabsTrigger value="password">Reset Password</TabsTrigger>
        </TabsList>

                  <Card className="w-full">
          <TabsContent value="personal" className="p-6">
            <PersonalDetailsForm />
          </TabsContent>

          <TabsContent value="notifications" className="p-6">
            <NotificationPreferences />
          </TabsContent>

          <TabsContent value="payment" className="p-6">
            <PaymentMethods />
          </TabsContent>

          <TabsContent value="password" className="p-6">
            <ResetPasswordForm />
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
}
