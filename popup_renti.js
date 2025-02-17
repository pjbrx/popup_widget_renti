document.addEventListener("DOMContentLoaded", function () {
  // ✅ Création de l'overlay (fond sombre)
  let overlay = document.createElement("div");
  overlay.id = "popup-overlay";
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.6); display: flex;
    align-items: center; justify-content: center; z-index: 10000;
  `;

  // ✅ Création du popup
  let popup = document.createElement("div");
  popup.id = "popup-content";
  popup.style.cssText = `
    background: white; padding: 20px; border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); text-align: center;
    position: relative; width: 350px; padding: 20px;
  `;

  // ✅ Ajout du contenu HTML du popup
  popup.innerHTML = `
    <button id="popup-close" style="position: absolute; top: 10px; right: 10px; font-size: 18px; background: none; border: none; cursor: pointer;">✖</button>
    <h2 style="font-size: 18px; margin-bottom: 10px;">🎙️ Découvrez notre outil vocal !</h2>
    <p style="margin-bottom: 15px;">Testez notre assistant vocal interactif pour une expérience inédite.</p>
    <elevenlabs-convai agent-id="lrlluI50KDXyFTccRXwv"></elevenlabs-convai>
  `;

  // ✅ Ajout du popup à l'overlay
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // ✅ Charger dynamiquement le script ElevenLabs
  let script = document.createElement("script");
  script.src = "https://elevenlabs.io/convai-widget/index.js";
  script.async = true;
  document.body.appendChild(script);

  // ✅ Gestion de la fermeture du popup
  function closePopup() {
    overlay.remove();
  }

  document.getElementById("popup-close").addEventListener("click", closePopup);
  overlay.addEventListener("click", closePopup);
  popup.addEventListener("click", (e) => e.stopPropagation());

  // ✅ Ouvre automatiquement le popup après 3 secondes
  setTimeout(() => {
    overlay.style.display = "flex";
  }, 3000);
});
