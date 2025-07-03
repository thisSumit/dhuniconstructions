import React from 'react'

const page = () => {
  return (
    <main className="container text-black mx-auto px-4 py-10 my-[150px]">
        <section className="mb-10">
            <h2 className="md:text-8xl text-6xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
                Dhuni Constructions Pvt. Ltd. ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, & protect your personal information when you interact with our services.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3">Information We Collect</h3>
            <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Personal Information:</strong> Name, email address, phone number, & details provided through forms.</li>
                <li><strong>Non-Personal Information:</strong> Browser type, IP address, & usage data via cookies & analytics tools.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3">How We Use Your Information</h3>
            <ul className="list-disc pl-6 text-gray-700">
                <li>To provide & improve our services.</li>
                <li>To communicate updates, offers, or project information.</li>
                <li>To process bookings & provide customer support.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3">Data Protection</h3>
            <p className="text-gray-700 leading-relaxed">
                We implement robust security measures to protect your information from unauthorized access, alteration, or disclosure.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3">Third-Party Sharing</h3>
            <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information. However, we may share data with trusted partners for service delivery or legal compliance.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3">Your Rights</h3>
            <p className="text-gray-700 leading-relaxed">
                You have the right to access, update, or delete your personal data. For assistance, please contact us at <a href="mailto:dhuniconstructionspvtltd@gmail.com" className="text-blue-600 underline">dhuniconstructionspvtltd@gmail.com</a>.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-lg md:text-xl font-semibold mb-3">Cookies Policy</h3>
            <p className="text-gray-700 leading-relaxed">
                We use cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.
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