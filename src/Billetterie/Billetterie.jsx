/* eslint-disable no-console */
import React from 'react';
import CategoryImage from '../components/CategoryImage';
import { useSettings } from '../context/ConfigurationContext';
import Tickets from '../Home/components/Tickets';
import { BILLETTERIE_CATEGORY } from '../utils/config';
import useScript from '../utils/useScript';

export default function Billetterie() {
    const { config } = useSettings();
    useScript(`https://widget.weezevent.com/weez.js?nnn=${Date.now()}`);

    if (!config || Object.entries(config).length === 0) return null;

    return (

        <>
            <CategoryImage categoryId={BILLETTERIE_CATEGORY} categoryName="Billetterie" />

            <div className="overflow-hidden bg-[#F3F3F3] bg-repeat">
                <section className="pb-36">
                    <Tickets />
                    <div className="max-w-[1200px] m-auto">
                        <h1 className="mb-2 text-center font-heading_bold text-[40px] lg:text-[38px] tracking-[0.566667px] leading-[.95] uppercase text-black">{config.event_date}</h1>
                        <ul className="grid">
                            <div
                                className="text-white mt-20 w-full h-full"
                                id="div_id"
                            >
                                <a
                                    title="Logiciel billetterie en ligne"
                                    href="https://weezevent.com/?c=sys_widget"
                                    className="weezevent-widget-integration"
                                    data-src={`https://widget.weezevent.com/ticket/${config.ticket_link}/?code=${config.second_ticket_link}&locale=fr-FR&width_auto=1&color_primary=00AEEF`}
                                    data-width="650"
                                    data-height="600"
                                    data-id={config.ticket_link}
                                    data-resize="1"
                                    data-width_auto="1"
                                    data-noscroll="0"
                                    data-use-container="yes"
                                    data-type="neo"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Billetterie Weezevent

                                </a>
                            </div>

                        </ul>
                    </div>
                </section>
            </div>
            {/* <BeforeFooter /> */}
        </>

    );
}
