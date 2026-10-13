import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Envoie un event "virtual_page_view" au dataLayer GTM à chaque changement de route (SPA).
// Le premier chargement est ignoré : GTM le compte déjà via son trigger "All Pages".
export default function PageViewTracker() {
    const { pathname, search } = useLocation();
    const isFirstLoad = useRef(true);

    useEffect(() => {
        if (isFirstLoad.current) {
            isFirstLoad.current = false;
            return;
        }

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event:         'virtual_page_view',
            page_path:     pathname + search,
            page_location: window.location.href,
            page_title:    document.title,
        });
    }, [pathname, search]);

    return null;
}
