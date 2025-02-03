import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Border } from '@/components/Border'

type PricingPlan = {
  name: string
  price: string
  features: string[]
  image?: ImageProps
}

export function PricingTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold text-neutral-900">Pricing Plans</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch min-h-screen bg-gray-100 py-12">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
            <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Hobby</h3>
                <p className="text-sm text-gray-600">For individuals</p>
            </div>
            <div className="mb-6 flex-grow">
                <p className="text-gray-700 text-sm">This plan is ideal for individual users and hobbyists who are looking for essential functionalities to support their personal projects and interests.</p>
            </div>
            <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-800">$9<span className="text-lg text-gray-600">/monthly</span></span>
            </div>
            <div className="mb-4">
                <button className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Get started
                </button>
            </div>
            <div className="text-left">
                <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Limited number of users</li>
                <li>Limited storage</li>
                <li>Basic support</li>
                </ul>
            </div>
            </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 md:mb-0">
            <div className="text-white bg-gradient-to-r from-purple-800 via-purple-700 to-purple-500 p-10 rounded-lg shadow-md p-6 h-full">
                <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold mb-2">Pro</h3>
                    <p className="text-sm">For startups</p>
                </div>
                <div className="mb-6 flex-grow">
                    <p className="text-sm">If a small business or a startup, this plan is designed to cater to your needs. It offers a balance of essential features and scalability.</p>
                </div>
                <div className="text-center mb-6">
                    <span className="text-4xl font-bold">$49<span className="text-lg">/monthly</span></span>
                </div>
                <div className="mb-4">
                    <button className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                    Get started
                    </button>
                </div>
                <div className="text-left">
                    <ul className="list-disc pl-5 text-sm">
                    <li>Unlimited number of users</li>
                    <li>Unlimited storage</li>
                    <li>Advanced support</li>
                    <li>Advanced analytics</li>
                    <li>Multiple integrations</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 lg:w-1/4 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
            <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Top Notch</h3>
                <p className="text-sm text-gray-600">For tailored occasions</p>
            </div>
            <div className="mb-6 flex-grow">
                <p className="text-gray-700 text-sm">This top-tier plan caters to large enterprises and corporations, offering enterprise-level needs with dedicated support.</p>
            </div>
            <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-800">$99<span className="text-lg text-gray-600">/monthly</span></span>
            </div>
            <div className="mb-4">
                <button className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Get started
                </button>
            </div>
            <div className="text-left">
                <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Unlimited number of users</li>
                <li>Unlimited storage</li>
                <li>Advanced support</li>
                <li>Advanced analytics</li>
                <li>Multiple integrations</li>
                <li>Advanced customization</li>
                <li>99.9% SLA</li>
                </ul>
            </div>
            </div>
        </div>

        </div>
    </section>
  )
}
