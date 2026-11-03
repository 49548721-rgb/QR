// Registra el service worker para que la página funcione sin conexión
// y se pueda instalar como app.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .catch((error) => {
        console.error("No se pudo registrar el service worker:", error);
      });
  });
}