import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PaymentOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Number of Payments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2000</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">New Payment</CardTitle>
          <span className="text-xs text-muted-foreground">Jun 12th, 2023</span>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7</div>
        </CardContent>
      </Card>
    </div>
  )
}

