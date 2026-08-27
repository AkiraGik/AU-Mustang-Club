import { useEffect } from "react";

const CHECK_INTERVAL_MS = 15000;

export default function useAutoReload() {
  useEffect(() => {
    let knownVersion = null;
    let cancelled = false;

    const checkVersion = async () => {
      try {
        const res = await fetch(`/version.json?t=${Date.now()}`, {
          cache: "no-store",
        });
        if (!res.ok) return;
        const { version } = await res.json();
        if (cancelled) return;

        if (knownVersion === null) {
          knownVersion = version;
        } else if (version !== knownVersion) {
          window.location.reload();
        }
      } catch {
        // offline or version.json unavailable, ignore and retry next tick
      }
    };

    checkVersion();
    const id = setInterval(checkVersion, CHECK_INTERVAL_MS);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);
}
