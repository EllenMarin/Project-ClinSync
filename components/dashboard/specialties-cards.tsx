import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Activity, UserRound, Brain, LucideKey as Kidney, Stethoscope } from 'lucide-react';

const specialties = [
  {
    name: "Cardiology",
    count: 120,
    icon: Heart,
  },
  {
    name: "Neurology",
    count: 86,
    icon: Brain,
  },
  {
    name: "General",
    count: 210,
    icon: Stethoscope,
  },
  {
    name: "Orthopedics",
    count: 94,
    icon: Activity,
  },
  {
    name: "Pediatrics",
    count: 145,
    icon: UserRound,
  },
  {
    name: "Nephrology",
    count: 62,
    icon: Kidney,
  },
];

export function SpecialtiesCards() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight mb-4">Specialties</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {specialties.map((specialty, index) => (
          <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="rounded-full p-3 bg-primary/10">
                <specialty.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{specialty.name}</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">{specialty.count} patients</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}