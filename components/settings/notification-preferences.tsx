"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Bell, Calendar, Mail, MessageSquare, RefreshCw, ShieldAlert } from "lucide-react";

type NotificationType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  enabled: boolean;
};

export function NotificationPreferences() {
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      id: "appointment_reminder",
      title: "Appointment Reminders",
      description: "Receive notifications about upcoming appointments.",
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
      enabled: true,
    },
    {
      id: "appointment_changes",
      title: "Appointment Changes",
      description: "Be notified when an appointment is rescheduled or cancelled.",
      icon: <RefreshCw className="h-5 w-5 text-orange-500" />,
      enabled: true,
    },
    {
      id: "medical_updates",
      title: "Medical Updates",
      description: "Get updates on test results and medical records.",
      icon: <ShieldAlert className="h-5 w-5 text-green-500" />,
      enabled: true,
    },
    {
      id: "messages",
      title: "Messages",
      description: "Receive notifications for new messages from doctors or staff.",
      icon: <MessageSquare className="h-5 w-5 text-purple-500" />,
      enabled: false,
    },
    {
      id: "email_notifications",
      title: "Email Notifications",
      description: "Receive email updates for important notifications.",
      icon: <Mail className="h-5 w-5 text-indigo-500" />,
      enabled: true,
    },
    {
      id: "system_alerts",
      title: "System Alerts",
      description: "Important system notifications about account security and updates.",
      icon: <Bell className="h-5 w-5 text-red-500" />,
      enabled: true,
    },
  ]);

  const toggleNotification = (id: string) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, enabled: !notification.enabled }
          : notification
      )
    );
  };

  const saveChanges = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log(notifications);
      setIsLoading(false);
      toast.success("Notification preferences saved");
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Configure which notifications you want to receive.
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center justify-between space-x-4 rounded-lg border p-4"
          >
            <div className="flex items-start space-x-4">
              <div className="mt-0.5">{notification.icon}</div>
              <div>
                <h4 className="text-sm font-medium">{notification.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
            <Switch
              checked={notification.enabled}
              onCheckedChange={() => toggleNotification(notification.id)}
            />
          </div>
        ))}
      </div>

      <Button onClick={saveChanges} disabled={isLoading}>
        {isLoading ? "Saving..." : "Save preferences"}
      </Button>
    </div>
  );
}
