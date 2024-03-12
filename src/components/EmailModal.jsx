/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const EmailModal = ({ children, link, className }) => {
    const [open, setOpen] = useState(false);

    const cancelButtonRef = useRef(null);

    const mailtoLink = `mailto:${link}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${link}`;
    const outlookLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${link}`;
    const yahooLink = `http://compose.mail.yahoo.com/?to=${link}`;

    return (
        <>
            <a
                href={mailtoLink}
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                }}
                className={className}
            >
                {children}
            </a>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Choisissez votre boîte email :
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <ul>
                                                    <li>
                                                        <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-black font-bold hover:underline py-2">
                                                            <img src="../dist/icons/gmail.png" className="w-8 h-auto mr-3" alt="Gmail" />
                                                            Gmail
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={outlookLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-black font-bold hover:underline py-2">
                                                            <img src="../dist/icons/outlook.png" className="w-8 h-auto mr-3" alt="Gmail" />
                                                            Outlook
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={yahooLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-black font-bold hover:underline py-2">
                                                            <img src="../dist/icons/yahoo.png" className="w-8 h-auto mr-3" alt="Gmail" />
                                                            Yahoo Mail
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="mt-4 text-sm text-gray-600">
                                                    Si votre client de messagerie n'est pas dans la liste, vous pouvez utiliser cette adresse e-mail :
                                                    <span className="font-semibold text-black">
                                                        {' '}
                                                        {link}
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-[#E97665] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default EmailModal;
