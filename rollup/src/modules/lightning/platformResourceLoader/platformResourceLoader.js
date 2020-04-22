export function loadScript(ctx, url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    document.body.appendChild(script);
  });
}
