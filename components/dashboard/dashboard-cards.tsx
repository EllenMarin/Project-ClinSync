import { Eye, CalendarClock, TrendingUp, EuroIcon, ArrowRightIcon} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export function DashboardCards() {
  const cards = [
    {
      title: "Total Patients",
      value: "1,284",
      description: "Active patients",
      change: "+14.6%",
      icon: Eye,
      trend: "up",
      href: "/patients"
    },
    {
      title: "Appointments",
      value: "340",
      description: "This month",
      change: "+5.2%",
      icon: CalendarClock,
      trend: "up",
      href: "/appointments"
    },
    {
      title: "Revenue",
      value: "24,689€",
      description: "This month",
      change: "+10.3%",
      icon: EuroIcon,
      trend: "up",
      href: "/revenue"
    },
    {
      title: "New Patients",
      value: "56",
      description: "This week",
      change: "+18.7%",
      icon: TrendingUp,
      trend: "up",
      href: "/new-patients"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <div className=' rounded-full p-2  border border-primary'>
              <card.icon className="w-12 h-12 text-primary rounded-full p-3 bg-primary-foreground" />
            </div>
            
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{card.value}</div>
            <div className="flex items-center pt-1">
              <CardDescription className="text-xs">{card.description}</CardDescription>
              <div className={`ml-auto text-xs font-medium ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {card.change}
              </div>
            </div>
            <div className="flex items-center pt-1 text-sm text-primary">
              <Link href={card.href}> View All </Link>
              <ArrowRightIcon className="w-4 h-4 ml-1 text-primary" />
              
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}