import React from 'react'

export default function CustomerReview({proRating, product}) {
    return (
        <div>
            {product.reviews && product.reviews.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                    <div className="grid gap-4">
                        {product.reviews.map((review, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl">
                                <div className="flex items-center mb-4">
                                    <div className="flex mr-3">
                                        {proRating(review.rating)}
                                    </div>
                                    <span className="font-medium text-gray-900">{review.reviewerName}</span>
                                    <span className="ml-auto text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                                </div>
                                <p className="text-gray-700">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
