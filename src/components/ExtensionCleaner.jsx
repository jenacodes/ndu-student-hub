"use client";

import { useEffect } from "react";

export default function ExtensionCleaner() {
  useEffect(() => {
    const cleanExtensions = () => {
      document.body.removeAttribute("cz-shortcut-listen");
      document.body.removeAttribute("g_editable");
      document.body.removeAttribute("jstcache");
    };

    // Run immediately
    cleanExtensions();

    // Run after DOM changes
    const observer = new MutationObserver(cleanExtensions);
    observer.observe(document.body, { attributes: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
