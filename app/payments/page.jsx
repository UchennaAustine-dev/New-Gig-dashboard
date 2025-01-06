"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // for navigation
import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { ArrowLeft } from "lucide-react"; // Lucide React Icon
import { PaymentHistory } from "@/components/payment-history";
import { PaymentDetails } from "@/components/payment-details";

export default function PaymentsPage() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter(); // Access router for navigation

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Back Button */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        <h1 className="text-2xl font-bold">All Payments</h1>

        {/* Payment History */}
        <PaymentHistory
          onViewDetails={handleViewDetails}
          itemsPerPage={10}
          showAllLink={false}
          showPagination={true}
        />

        {/* Payment Details */}
        <PaymentDetails
          payment={selectedPayment}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </div>
    </div>
  );
}
