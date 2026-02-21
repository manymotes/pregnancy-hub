import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About My Pregnancy Week - Editorial Standards & Medical Disclaimer',
  description: 'Learn about My Pregnancy Week, our editorial methodology, medical disclaimer, and commitment to providing ACOG-aligned pregnancy information.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        About My Pregnancy Week
      </h1>

      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Your comprehensive, evidence-based guide to pregnancy, from conception to birth and beyond.
        </p>

        {/* Critical Medical Disclaimer - Prominently Placed */}
        <section className="mb-10 bg-red-50 border-2 border-red-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Important Medical Disclaimer
          </h2>
          <div className="text-red-900 space-y-3">
            <p className="font-semibold text-lg">
              This content is for informational purposes only and is NOT medical advice.
            </p>
            <p>
              The information provided on My Pregnancy Week is intended for general educational purposes and should never be used as a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="font-medium">
              Always consult your healthcare provider, OB-GYN, or midwife for personalized medical guidance regarding your pregnancy, health conditions, or any symptoms you may be experiencing.
            </p>
            <p>
              If you are experiencing a medical emergency, please call 911 or your local emergency services immediately. Do not delay seeking medical care based on information you read on this website.
            </p>
            <p className="text-sm italic">
              Every pregnancy is unique. What applies to one person may not apply to you. Individual medical advice from your healthcare team is essential for making informed decisions about your pregnancy care.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            My Pregnancy Week is an independent health information website created to provide expectant parents with accessible, well-researched pregnancy information. We are a small team of content creators passionate about making pregnancy education available to everyone.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Important to note:</strong> We are not a medical practice, hospital, or healthcare facility. We do not employ physicians, nurses, or licensed healthcare providers. Our website is an educational resource, not a source of medical care or diagnosis.
          </p>
          <p className="text-gray-700">
            We believe that informed parents make confident parents. Our goal is to help you understand what to expect during pregnancy so you can have meaningful conversations with your healthcare provider and make informed decisions about your care.
          </p>
        </section>

        {/* Editorial Methodology */}
        <section className="mb-10 bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Editorial Methodology</h2>
          <p className="text-gray-700 mb-4">
            We take our responsibility to provide accurate information seriously. Here is how we develop and maintain our content:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Sources & Guidelines</h3>
          <p className="text-gray-700 mb-4">
            Our content is developed to align with guidelines published by the <strong>American College of Obstetricians and Gynecologists (ACOG)</strong>, the leading professional organization for OB-GYNs in the United States. We also reference information from:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Centers for Disease Control and Prevention (CDC)</li>
            <li>National Institutes of Health (NIH)</li>
            <li>World Health Organization (WHO)</li>
            <li>American Academy of Pediatrics (AAP)</li>
            <li>Peer-reviewed medical journals and research studies</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Development Process</h3>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Research:</strong> We review current medical guidelines, research studies, and authoritative health sources when developing content.</li>
            <li><strong>Writing:</strong> Content is written in plain language to be accessible to readers of all backgrounds.</li>
            <li><strong>Accuracy Check:</strong> We cross-reference information against multiple authoritative sources.</li>
            <li><strong>Regular Updates:</strong> We periodically review content to ensure it reflects current medical understanding and guidelines.</li>
          </ol>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Limitations</h3>
          <p className="text-gray-700">
            While we strive for accuracy, we acknowledge that medical knowledge evolves, guidelines change, and we may not always have the most current information. This is another reason why consulting directly with your healthcare provider is essential - they have access to the latest medical knowledge and can apply it to your specific situation.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-700 mb-4">
            My Pregnancy Week provides educational content on various pregnancy-related topics:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1 font-bold">-</span>
              <span><strong>Week-by-week pregnancy guides</strong> covering fetal development and what to expect each week</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1 font-bold">-</span>
              <span><strong>Trimester-specific information</strong> with milestones and common experiences</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1 font-bold">-</span>
              <span><strong>Nutrition guidance</strong> based on general prenatal nutrition recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1 font-bold">-</span>
              <span><strong>Symptom information</strong> to help you understand common pregnancy experiences</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1 font-bold">-</span>
              <span><strong>Calculators and tools</strong> like due date estimators (for educational purposes only)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1 font-bold">-</span>
              <span><strong>Preparation resources</strong> including checklists and planning guides</span>
            </li>
          </ul>
        </section>

        {/* YMYL Specific Notice */}
        <section className="mb-10 bg-amber-50 border border-amber-300 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Health Information Notice</h2>
          <p className="text-gray-700 mb-4">
            Pregnancy and maternal health are serious medical topics. We understand that the information we provide could influence important health decisions. For this reason:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We do not diagnose medical conditions</li>
            <li>We do not recommend specific treatments or medications</li>
            <li>We do not provide personalized medical advice</li>
            <li>We encourage readers to verify all information with qualified healthcare professionals</li>
            <li>We clearly label content as educational and informational</li>
          </ul>
          <p className="text-gray-700 mt-4 font-medium">
            Your health and the health of your baby are too important to rely on any single source of information. Please use our content as a starting point for conversations with your healthcare team, not as a replacement for professional care.
          </p>
        </section>

        {/* When to Seek Medical Help */}
        <section className="mb-10 bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Seek Medical Help</h2>
          <p className="text-gray-700 mb-4">
            Please contact your healthcare provider or seek emergency care immediately if you experience:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Vaginal bleeding or fluid leakage</li>
            <li>Severe abdominal pain or cramping</li>
            <li>Decreased fetal movement</li>
            <li>Severe headache, vision changes, or sudden swelling</li>
            <li>Signs of preterm labor (regular contractions before 37 weeks)</li>
            <li>Fever over 100.4F (38C)</li>
            <li>Any symptom that concerns you</li>
          </ul>
          <p className="text-gray-700 mt-4 font-medium">
            When in doubt, always contact your healthcare provider. It is better to ask and be reassured than to wait and risk complications.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions, feedback, or concerns about our content? We welcome your input as it helps us improve our resources.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Please note:</strong> We cannot provide medical advice, answer health questions, or respond to inquiries about specific medical situations. For any health concerns, please contact your healthcare provider.
          </p>
          <p className="text-gray-700">
            For general website inquiries, you can reach us through our contact channels.
          </p>
        </section>

        {/* Final Disclaimer */}
        <section className="mt-10 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-500 italic">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}. My Pregnancy Week is committed to providing helpful pregnancy education aligned with ACOG guidelines. This website does not provide medical advice. Always consult with qualified healthcare professionals for medical concerns. The use of this website does not create a doctor-patient relationship.
          </p>
        </section>
      </div>
    </div>
  )
}
