"use client";

import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // Detect if running on local development machine
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "[::1]";

    if (!isLocalhost) {
      // Runs on all Vercel environments: Development, Preview, and Production deployments
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    } else {
      // On local machine dev server, unregister any leftover service workers to prevent HMR reload loops
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }
  }, []);

  return null;
}


