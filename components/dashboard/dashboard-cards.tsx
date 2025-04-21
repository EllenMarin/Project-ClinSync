import { Eye, CalendarClock, DollarSign, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function DashboardCards() {
  const cards = [
    {
      title: "Total Patients",
      value: "1,284",
      description: "Active patients",
      change: "+14.6%",
      icon: Eye,
      trend: "up"
    },
    {
      title: "Appointments",
      value: "340",
      description: "This month",
      change: "+5.2%",
      icon: CalendarClock,
      trend: "up"
    },
    {
      title: "Revenue",
      value: "$24,689",
      description: "This month",
      change: "+10.3%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "New Patients",
      value: "56",
      description: "This week",
      change: "+18.7%",
      icon: TrendingUp,
      trend: "up"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="flex items-center pt-1">
              <CardDescription className="text-xs">{card.description}</CardDescription>
              <div className={`ml-auto text-xs font-medium ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {card.change}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}