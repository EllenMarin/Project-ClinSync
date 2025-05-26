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
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Specialties</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {specialties.map((specialty, index) => (
          <Card key={index} className="rounded-3xl overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div>
                <specialty.icon className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <CardTitle className="text-lg text-muted-foreground">{specialty.name}</CardTitle>
                <p className="mt-1 text-sm text-primary">{specialty.count} patients</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
      </CardContent>
    </Card>
  );
}