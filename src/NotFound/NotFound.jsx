/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-[#E97665] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button type="button" className="mt-5">
                <a
                    href="/"
                    className="relative inline-block text-sm font-medium text-[#E97665] group active:text-[#E97665] focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#E97665] group-hover:translate-y-0 group-hover:translate-x-0"
                    />

                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        <Link to="/">Go Home</Link>
                    </span>
                </a>
            </button>
        </main>

    );
}
