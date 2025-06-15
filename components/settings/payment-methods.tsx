"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { CreditCard, PlusCircle, Trash2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type PaymentCard = {
  id: string;
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  isDefault: boolean;
  cardType: "visa" | "mastercard" | "amex";
};

const creditCardSchema = z.object({
  cardHolder: z.string().min(2, { message: "Card holder name is required" }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Card number must be 16 digits" }),
  expiryMonth: z.string().min(1, { message: "Expiry month is required" }),
  expiryYear: z.string().min(1, { message: "Expiry year is required" }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV must be 3 or 4 digits" }),
  isDefault: z.boolean().default(false),
});

type CreditCardFormValues = z.infer<typeof creditCardSchema>;

export function PaymentMethods() {
  const [cards, setCards] = useState<PaymentCard[]>([
    {
      id: "card-1",
      cardHolder: "John Doe",
      cardNumber: "**** **** **** 4567",
      expiryDate: "04/25",
      isDefault: true,
      cardType: "visa",
    },
    {
      id: "card-2",
      cardHolder: "John Doe",
      cardNumber: "**** **** **** 1234",
      expiryDate: "09/24",
      isDefault: false,
      cardType: "mastercard",
    },
  ]);

  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<CreditCardFormValues>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      cardHolder: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      isDefault: false,
    },
  });

  const onSubmit = (data: CreditCardFormValues) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const expiryDate = `${data.expiryMonth}/${data.expiryYear.slice(-2)}`;
      const lastFour = data.cardNumber.slice(-4);

      const newCard: PaymentCard = {
        id: `card-${Date.now()}`,
        cardHolder: data.cardHolder,
        cardNumber: `**** **** **** ${lastFour}`,
        expiryDate,
        isDefault: data.isDefault,
        cardType: determineCreditCardType(data.cardNumber),
      };

      if (data.isDefault) {
        setCards([
          ...cards.map(card => ({ ...card, isDefault: false })),
          newCard,
        ]);
      } else {
        setCards([...cards, newCard]);
      }

      setIsLoading(false);
      setIsAddCardOpen(false);
      form.reset();
      toast.success("Credit card added successfully");
    }, 1000);
  };

  const determineCreditCardType = (cardNumber: string): "visa" | "mastercard" | "amex" => {
    // Simplified card type detection
    const firstDigit = cardNumber.charAt(0);
    if (firstDigit === "4") return "visa";
    if (firstDigit === "5") return "mastercard";
    return "amex";
  };

  const removeCard = (id: string) => {
    const removedCard = cards.find(card => card.id === id);
    setCards(cards.filter(card => card.id !== id));

    if (removedCard?.isDefault && cards.length > 1) {
      // If we removed the default card, make another one default
      const newCards = cards.filter(card => card.id !== id);
      if (newCards.length > 0) {
        newCards[0].isDefault = true;
      }
      setCards(newCards);
    }

    toast.success("Credit card removed");
  };

  const setDefaultCard = (id: string) => {
    setCards(
      cards.map(card => ({
        ...card,
        isDefault: card.id === id,
      }))
    );
    toast.success("Default payment method updated");
  };

  const getCardIcon = (type: "visa" | "mastercard" | "amex") => {
    // In a real app, you would use proper SVG icons for each card type
    return <CreditCard className={`h-5 w-5 ${type === 'visa' ? 'text-blue-600' : type === 'mastercard' ? 'text-orange-600' : 'text-purple-600'}`} />;
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Payment Methods</h3>
        <p className="text-sm text-muted-foreground">
          Manage your credit cards and payment preferences.
        </p>
      </div>

      <div className="space-y-4">
        <RadioGroup value={cards.find(card => card.isDefault)?.id}>
          {cards.map((card) => (
            <div key={card.id} className="flex items-start space-x-2 rounded-lg border p-4">
              <RadioGroupItem
                value={card.id}
                id={card.id}
                checked={card.isDefault}
                onClick={() => setDefaultCard(card.id)}
                className="mt-1"
              />
              <div className="flex flex-1 items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center">
                    {getCardIcon(card.cardType)}
                    <Label
                      htmlFor={card.id}
                      className="ml-2 text-sm font-medium"
                    >
                      {card.cardType.charAt(0).toUpperCase() + card.cardType.slice(1)} ending in
                      {card.cardNumber.slice(-4)}
                    </Label>
                    {card.isDefault && (
                      <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {card.cardHolder} • Expires {card.expiryDate}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeCard(card.id)}
                >
                  <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                </Button>
              </div>
            </div>
          ))}
        </RadioGroup>

        <Dialog open={isAddCardOpen} onOpenChange={setIsAddCardOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add new payment method
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add Payment Method</DialogTitle>
              <DialogDescription>
                Add a new credit or debit card to your account.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="cardHolder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cardholder Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="1234 5678 9012 3456" 
                          maxLength={16} 
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="expiryMonth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry Month</FormLabel>
                        <FormControl>
                          <Input placeholder="MM" maxLength={2} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="expiryYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry Year</FormLabel>
                        <FormControl>
                          <Input placeholder="YYYY" maxLength={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="123" 
                            maxLength={4} 
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="isDefault"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Set as default payment method</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsAddCardOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Adding..." : "Add card"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
