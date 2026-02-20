import React from 'react'
import { ordersData } from '../../utils/constants'
import { MdChair } from 'react-icons/md'

const BookingHistory = () => {
    return (
        <div className='px-6 rounded-md'>
            <h3 className='text-xl font-semibold mb-6'>Booking History</h3>

            {ordersData.map((order) => {
                const seats = Array.isArray(order.seats) ? order.seats.join(', ') : order.seats || 'N/A'
                const dateTime = order.datetime || order.bookingTime || 'N/A'
                return (
                    <div key={order.id} className='bg-white p-5 rounded-md mb-4 shadow-sm'>
                        <div className='flex gap-6'>
                            <img
                                src={order.poster}
                                alt={`${order.title} poster`}
                                className='w-32 h-48 object-cover rounded-md flex-shrink-0'
                            />

                            <div className='flex-1 flex flex-col justify-between'>
                                <div>
                                    <div className='flex items-start justify-between'>
                                        <div>
                                            <p className='font-semibold text-lg'>{order.title}</p>
                                            <p className='text-sm text-gray-500 mt-1'>{order.format}</p>
                                            <p className='text-sm font-medium text-gray-700 mt-3'>{dateTime}</p>
                                            <p className='text-sm text-gray-600 mt-1'>{order.cinema}</p>
                                        </div>
                                        <span className='text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded'>M-Ticket</span>
                                    </div>

                                    <div className='mt-4 text-sm text-gray-700'>
                                        <div className='flex items-center gap-2'>
                                            <MdChair className='inline items-center mr-2 text-gray-600' size={18} />
                                            <span className='font-medium'>{seats}</span>
                                        </div>
                                        <div className='mt-2'>Quantity: <span className='font-medium'>{order.quantity}</span></div>
                                    </div>
                                </div>

                                <div className='mt-4 p-3 bg-gray-50 rounded flex items-center justify-between'>
                                    <div className='text-sm text-gray-700'>
                                        <div>Payment: <span className='font-medium'>{order.paymentMethod}</span></div>
                                        <div className='mt-1'>Booking ID: <span className='font-medium'>{order.id}</span></div>
                                        <div className='mt-1'>Booked at: <span className='font-medium'>{order.bookingTime}</span></div>
                                    </div>
                                    <div className='text-right'>
                                        <div className='text-sm'>Ticket: ₹{Number(order.ticket).toFixed(2)}</div>
                                        <div className='text-sm'>Convenience Fee: ₹{Number(order.fee).toFixed(2)}</div>
                                        <div className='font-semibold text-lg mt-1'>Total: ₹{Number(order.total).toFixed(2)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BookingHistory