import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-orange-100 bg-opacity-60 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1">
                        <Image
                            src="/images/landing/TheoOrgBGless.png" // Replace with your logo path
                            alt="TheoOrg Logo"
                            width={120}
                            height={40}
                            className="mb-4"
                        />
                        <p className="text-gray-600 text-sm">
                            TheoOrg: Crafting natural, organic soaps and personal care products with sustainable ingredients. Our commitment to eco-friendly practices ensures pure, gentle products for your daily wellness routine.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-600 hover:text-orange-500">Home</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-orange-500">About</Link></li>
                            <li><Link href="/services" className="text-gray-600 hover:text-orange-500">Services</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-orange-500">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h3 className="font-semibold text-gray-800 mb-4">Contact Us</h3>
                        <div className="space-y-2 text-gray-600">
                            <p>123 Street Name</p>
                            <p>City, State 12345</p>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: info@example.com</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="col-span-1">
                        <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-orange-500">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-orange-500">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0023 3z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-orange-500">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} TheoOrg - All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;