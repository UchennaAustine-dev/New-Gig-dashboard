'use client'

import { useState } from 'react'
import { PaymentHistory } from '@/components/payment-history'
import { PaymentDetails } from '@/components/payment-details'

export default function PaymentsPage() {
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment)
    setIsDrawerOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">All Payments</h1>
        </div>
        <PaymentHistory 
          onViewDetails={handleViewDetails} 
          itemsPerPage={10} 
          showAllLink={false} 
          showPagination={true}
        />
        <PaymentDetails
          payment={selectedPayment}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </div>
    </div>
  )
}

