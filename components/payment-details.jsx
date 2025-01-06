'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function PaymentDetails({ payment, open, onClose }) {
  if (!payment) return null

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>{payment.transactionNumber}</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="customerName">Customer's name</Label>
            <Input
              id="customerName"
              value={payment.customerName}
              readOnly
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="customerEmail">Customer's Email</Label>
            <Input
              id="customerEmail"
              type="email"
              value={payment.customerEmail}
              readOnly
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={payment.phoneNumber}
              readOnly
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="status">Payment Status</Label>
              <Select defaultValue={payment.status}>
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="New">New</SelectItem>
                  <SelectItem value="Shipped">Shipped</SelectItem>
                  <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount paid</Label>
              <Input
                id="amount"
                value={payment.amountPaid}
                readOnly
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>View Receipt</Label>
            <div className="rounded-lg border bg-muted/50 p-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="text-4xl font-bold">{payment.amountPaid}</div>
                <p className="text-sm text-muted-foreground">
                  Transaction reference: {payment.transactionNumber}
                </p>
                <Button className="w-full">Pay Now</Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

