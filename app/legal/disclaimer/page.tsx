import React from 'react'

const page = () => {
    return (
        <main className="container mx-auto text-black px-4 my-[150px] py-10">
            <section className="mb-8">
                <h2 className="md:text-8xl text-6xl font-semibold mb-4">Disclaimer</h2>
                <p className="text-gray-700">
                    The information on this website is for general purposes only. Dhuni Constructions Pvt. Ltd. makes no guarantees regarding accuracy or completeness.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-3">1. No Professional Advice</h3>
                <p className="text-gray-700">
                    This website does not offer legal, financial, or real estate advice. Users should consult professionals for specific guidance.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-3">2. Third-Party Links</h3>
                <p className="text-gray-700">
                    We may provide links to external sites for convenience, but we are not responsible for their content or accuracy.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-3">3. Limitation of Liability</h3>
                <p className="text-gray-700">
                    Dhuni Constructions Pvt. Ltd. is not liable for any damages arising from the use or inability to use this website or its content.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-3">4. Updates & Changes</h3>
                <p className="text-gray-700">
                    We reserve the right to update this Disclaimer at any time. Users are responsible for reviewing it periodically.
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