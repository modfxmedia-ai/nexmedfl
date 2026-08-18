import Script from "next/script";

// LeadConnector (GoHighLevel) chat widget, loaded site-wide.
export function ChatWidget() {
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a848e697ecb78b58de452c5"
      strategy="lazyOnload"
    />
  );
}
