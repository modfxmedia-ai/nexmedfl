"use client";

import { useEffect } from "react";

type CherryQueueFn = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    _hw?: CherryQueueFn;
  }
}

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=Slabo+27px&family=Lato:wght@100;300;400;700;900&family=Raleway:wght@100..900&family=Montserrat:wght@100..900&family=Oswald:wght@200..700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100..900&family=Source+Sans+3:wght@200..900&family=PT+Sans:wght@400;700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";

/**
 * Cherry ("withcherry.com") patient financing widget — loader mirrors the
 * embed snippet provided by Cherry verbatim (stub-queue pattern, widget
 * script, and the exact `init` config/section list), adapted to run
 * inside a React effect instead of an inline <script> tag so it only
 * initializes once, client-side, on the payment plans page.
 */
export function CherryWidget() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${FONTS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = FONTS_HREF;
      document.head.appendChild(link);
    }

    if (!window._hw) {
      const stub: CherryQueueFn = (...args: unknown[]) => {
        (stub.q = stub.q || []).push(args);
      };
      window._hw = stub;
    }

    window._hw("init", {
      debug: false,
      variables: {
        slug: "nexmed",
        name: "NexMed",
        images: "none",
        customLogo: "",
        defaultPurchaseAmount: 1000,
        customImage: "",
        imageCategory: "other",
        language: "en",
      },
      styles: {
        primaryColor: "#3486f7",
        secondaryColor: "#3486f710",
        fontFamily: "Open Sans",
        headerFontFamily: "Open Sans",
      },
    }, ["hero", "calculator", "howitworks", "faq"]);

    if (!document.getElementById("_hw")) {
      const script = document.createElement("script");
      script.id = "_hw";
      script.src = "https://files.withcherry.com/widgets/widget.js";
      script.async = true;
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      } else {
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    <div id="all">
      <div id="hero" />
      <div id="calculator" />
      <div id="howitworks" />
      <div id="testimony" />
      <div id="faq" />
    </div>
  );
}
