import React from 'react'

const page = () => {
  return (
    <main className="container mx-auto text-black px-4 my-[150px] py-10">
        <section className="mb-8">
            <h2 className="md:text-8xl text-6xl font-semibold mb-4">Term of Service</h2>
            <p className="text-gray-700">
                Welcome to Dhuni Constructions Pvt. Ltd. By accessing or using our website & services, you agree to these Terms of Service. Please read them carefully before proceeding.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">1. Ownership</h3>
            <p className="text-gray-700">
                All content, designs, & intellectual property on this website are owned by Dhuni Constructions Pvt. Ltd. Unauthorized use is strictly prohibited.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">2. User Responsibilities</h3>
            <p className="text-gray-700">
                Users agree to provide accurate information & not misuse our website for fraudulent activities or security breaches.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">3. Bookings & Payments</h3>
            <p className="text-gray-700">
                All bookings are subject to availability. Payment terms will be communicated during the booking process.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">4. Limitation of Liability</h3>
            <p className="text-gray-700">
                Dhuni Constructions Pvt. Ltd. is not liable for any damages arising from the use of our website or services.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-lg font-semibold mb-3">5. Governing Law</h3>
            <p className="text-gray-700">
                These terms are governed by the laws of India. Disputes will be handled under the jurisdiction of Nagpur courts.
            </p>
        </section>
        <footer className="bg-gray-900 text-black py-6">
        <div className="container mx-auto text-center">
            <p className="text-sm">© 2024 Dhuni Constructions Pvt. Ltd. All Rights Reserved.</p>
        </div>
    </footer>
    </main>
  )
}

export default page