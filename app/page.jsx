import { PaymentDashboard } from "@/components/payment-dashboard";

export default function Home() {
  return (
    <div className="body-container">
      <main className="min-h-screen bg-gray-50/50 p-4 md:p-6 lg:p-8">
        <PaymentDashboard />
      </main>
    </div>
  );
}
