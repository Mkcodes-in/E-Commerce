import React, { useState, useEffect } from 'react'

export default function OrderSummary({ cartItems }) {
    const [subtotal, setSubtotal] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [taxAmount, setTaxAmount] = useState(0);
    const [total, setTotal] = useState(0);

    const discountPercentage = 10;
    const taxPercentage = 18;

    // Calculate subtotal from cart items
    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    // Calculate discount amount
    const calculateDiscount = (amount) => {
        return amount * (discountPercentage / 100);
    };

    // Calculate tax amount
    const calculateTax = (amount) => {
        return amount * (taxPercentage / 100);
    };

    // Calculate total amount
    const calculateTotal = (subtotal, discount, tax) => {
        return subtotal - discount + tax;
    };

    useEffect(() => {
        if (cartItems && cartItems.length > 0) {
            const subTotalAmount = calculateSubtotal();
            const discount = calculateDiscount(subTotalAmount);
            const tax = calculateTax(subTotalAmount - discount);
            const finalTotal = calculateTotal(subTotalAmount, discount, tax);

            setSubtotal(subTotalAmount);
            setDiscountAmount(discount);
            setTaxAmount(tax);
            setTotal(finalTotal);
        } else {
            setSubtotal(0);
            setDiscountAmount(0);
            setTaxAmount(0);
            setTotal(0);
        }
    }, [cartItems]);

    return (
        <div className='lg:col-span-1'>
            <div className='p-6 shadow-sm rounded-lg border border-gray-100 bg-white sticky top-28'>
                <h2 className='text-xl font-bold text-gray-900 mb-6'>Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal ({cartItems?.length || 0} items)</span>
                        <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Discount ({discountPercentage}%)</span>
                        <span className="font-medium text-green-600">-₹{discountAmount.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Tax ({taxPercentage}%)</span>
                        <span className="font-medium">₹{taxAmount.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between mb-6 pt-4 border-t border-gray-200 text-lg font-bold">
                        <span>Total Amount</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>

                    <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium cursor-pointer">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}