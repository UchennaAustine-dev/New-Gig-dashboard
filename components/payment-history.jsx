'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Calendar } from '@/components/ui/calendar'
import { MoreHorizontal, Receipt, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { MOCK_PAYMENTS } from '@/lib/data'

const getStatusStyles = (status) => {
  switch (status) {
    case 'New':
      return 'bg-blue-100 text-blue-600'
    case 'Shipped':
      return 'bg-red-100 text-red-600'
    case 'Out for Delivery':
      return 'bg-orange-100 text-orange-600'
    case 'Delivered':
      return 'bg-green-100 text-green-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

export function PaymentHistory({ onViewDetails, itemsPerPage = 5, showAllLink = true, showPagination = false }) {
  const [date, setDate] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(MOCK_PAYMENTS.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPayments = showPagination ? MOCK_PAYMENTS.slice(startIndex, endIndex) : MOCK_PAYMENTS.slice(0, itemsPerPage)

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="space-y-1.5">
          <h2 className="text-lg font-semibold">Payment History</h2>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">{MOCK_PAYMENTS.length} Orders</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {date ? format(date, 'PPP') : 'Pick a date'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </DropdownMenuContent>
          </DropdownMenu>
          {showAllLink && (
            <Link href="/payments">
              <Button variant="outline">See all</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Transaction Number</TableHead>
              <TableHead>Customer's Name</TableHead>
              <TableHead>Amount Paid</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Action</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPayments.map((payment) => (
              <TableRow key={payment.transactionNumber}>
                <TableCell>
                  <input type="checkbox" className="rounded border-gray-300" />
                </TableCell>
                <TableCell>{payment.transactionNumber}</TableCell>
                <TableCell>{payment.customerName}</TableCell>
                <TableCell>{payment.amountPaid}</TableCell>
                <TableCell>
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusStyles(payment.status)}`}>
                  ●{payment.status}
                  </span>
                </TableCell>
                <TableCell>{payment.dateCreated}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewDetails(payment)}
                  >
                    View Details
                  </Button>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Receipt className="mr-2 h-4 w-4" />
                        See Receipt
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {showPagination && (
        <div className="flex items-center justify-between px-4 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}

