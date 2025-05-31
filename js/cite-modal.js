// js/cite-modal.js

document.addEventListener("DOMContentLoaded", function () {
  // Create the modal overlay & container HTML and append to body
  const overlay = document.createElement("div");
  overlay.id = "cite-modal-overlay";
  // Initially hide the overlay
  overlay.style.display = "none";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  overlay.style.zIndex = "9999";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";

  overlay.innerHTML = `
    <div id="cite-modal" style="
        background-color: #1e1f26;
        color: #ffffff; /* Make modal text white by default */
        width: 90%;
        max-width: 700px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        padding: 1.5rem;
        position: relative;
        overflow: auto;
      ">
      <button id="cite-modal-close" aria-label="Close" style="
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: transparent;
          border: none;
          color: #ccc;
          font-size: 1.75rem;       /* Larger “×” */
          width: 2.25rem;           /* Make clickable area bigger */
          height: 2.25rem;
          line-height: 1;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.15s ease, color 0.15s ease;
        ">&times;</button>
      <h3 style="margin-top: 0; font-size: 1.25rem; color: #ffffff;">Cite</h3>
      <pre id="cite-modal-content" style="
          background-color: #2a2d36;
          color: #ffffff;            /* Brighter font color */
          padding: 1rem;
          border-radius: 5px;
          overflow-x: auto;
          max-height: 400px;
          white-space: pre-wrap;
          word-wrap: break-word;
          margin-bottom: 1rem;
          font-family: Menlo, Consolas, 'Courier New', monospace;
          font-size: 0.90rem;
        ">Loading...</pre>
      <div id="cite-modal-actions" style="
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          margin-top: 0.75rem;
        ">
        <button id="cite-copy" style="
            background-color: transparent;
            border: 1px solid #8857ff;
            color: #bb9cff;
            padding: 0.35rem 0.75rem;
            font-size: 0.85rem;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.15s ease, color 0.15s ease;
          ">Copy</button>
        <a id="cite-download" href="#" download>
          <button style="
              background-color: transparent;
              border: 1px solid #8857ff;
              color: #bb9cff;
              padding: 0.35rem 0.75rem;
              font-size: 0.85rem;
              border-radius: 6px;
              cursor: pointer;
              transition: background-color 0.15s ease, color 0.15s ease;
            ">Download</button>
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Delay binding event listeners one frame to ensure elements exist
  requestAnimationFrame(() => {
    const closeBtn = document.getElementById("cite-modal-close");
    const contentPre = document.getElementById("cite-modal-content");
    const copyBtn = document.getElementById("cite-copy");
    const downloadLink = document.getElementById("cite-download");

    if (!closeBtn || !contentPre || !copyBtn || !downloadLink) {
      console.warn("Cite modal: some elements not found");
      return;
    }

    // Function to display modal with fetched BibTeX
    function showCiteModal(bibText, bibUrl) {
      contentPre.textContent = bibText;
      downloadLink.href = bibUrl;
      overlay.style.display = "flex";
    }

    // Hide modal when clicking the “X” button
    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });

    // Hide modal when clicking outside the modal container
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    });

    // Copy BibTeX to clipboard
    copyBtn.addEventListener("click", () => {
      const text = contentPre.textContent;
      navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
      });
    });

    // Attach click handler to each “Cite” button in the listing
    document.querySelectorAll(".pub-cite-button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const bibUrl = btn.getAttribute("data-cite-url");
        fetch(bibUrl)
          .then((res) => res.text())
          .then((text) => {
            showCiteModal(text, bibUrl);
          })
          .catch(() => {
            contentPre.textContent = "Failed to load citation.";
            contentPre.style.color = "#ff4c4c"; /* Show error in red */
            overlay.style.display = "flex";
          });
      });
    });
  });
});
