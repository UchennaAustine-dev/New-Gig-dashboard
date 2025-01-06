'use client'

import { useState } from 'react'
import { PaymentOverview } from './payment-overview'
import { PaymentHistory } from './payment-history'
import { PaymentDetails } from './payment-details'

export function PaymentDashboard() {
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment)
    setIsDrawerOpen(true)
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <PaymentOverview />
      <PaymentHistory onViewDetails={handleViewDetails} itemsPerPage={5} showAllLink={true} showPagination={false} />
      <PaymentDetails
        payment={selectedPayment}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  )
}

