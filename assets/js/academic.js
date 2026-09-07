/* ==========================================================
   TIANLONG WANG — PROGRESSIVE ENHANCEMENT
   No framework, no analytics, no external API requests.
   ========================================================== */

(() => {
  "use strict";

  const root = document.documentElement;

  /* --------------------------------------------------------
     01. MOBILE NAVIGATION
     -------------------------------------------------------- */

  const menuButton = document.getElementById("menu-toggle");
  const navigation = document.getElementById("site-nav");

  if (menuButton && navigation) {
    const mobileQuery = window.matchMedia("(max-width: 900px)");

    const setMenuState = (open) => {
      navigation.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", String(open));

      const symbol = menuButton.querySelector("span");
      if (symbol) {
        symbol.textContent = open ? "−" : "+";
      }
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    navigation.addEventListener("click", (event) => {
      const link = event.target.closest("a");

      if (link && mobileQuery.matches) {
        /*
         Return focus to a visible control before collapsing the menu.
         The anchor's default action still performs the section jump.
        */
        menuButton.focus({ preventScroll: true });
        setMenuState(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        navigation.classList.contains("is-open")
      ) {
        setMenuState(false);
        menuButton.focus();
      }
    });

    const handleViewportChange = () => {
      const focusedElement = document.activeElement;

      if (
        mobileQuery.matches &&
        navigation.contains(focusedElement)
      ) {
        menuButton.focus({ preventScroll: true });
      } else if (
        !mobileQuery.matches &&
        focusedElement === menuButton
      ) {
        const firstLink = navigation.querySelector("a");
        if (firstLink) {
          firstLink.focus({ preventScroll: true });
        }
      }

      setMenuState(false);
    };

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", handleViewportChange);
    } else if (typeof mobileQuery.addListener === "function") {
      mobileQuery.addListener(handleViewportChange);
    }

    menuButton.hidden = false;
    root.classList.add("has-js");
  }

  /* --------------------------------------------------------
     02. PUBLICATION SEARCH & YEAR FILTER
     -------------------------------------------------------- */

  const controls = document.getElementById("publication-controls");
  const searchInput = document.getElementById("publication-search");
  const yearSelect = document.getElementById("publication-year");
  const resultStatus = document.getElementById("publication-status");
  const emptyState = document.getElementById("publication-empty");

  const publications = Array.from(
    document.querySelectorAll("#publication-list .publication")
  );

  const normalize = (value) =>
    String(value)
      .normalize("NFKC")
      .toLocaleLowerCase("en")
      .replace(/[‐‑‒–—−]/g, "-")
      .replace(/\s+/g, " ")
      .trim();

  let resetPublicationFilters = () => {};

  if (
    controls &&
    searchInput &&
    yearSelect &&
    resultStatus &&
    emptyState &&
    publications.length
  ) {
    const records = publications.map((element) => ({
      element,
      year: element.dataset.year || "",
      searchableText: normalize(element.textContent)
    }));

    const years = Array.from(
      new Set(records.map((record) => record.year).filter(Boolean))
    ).sort((a, b) => Number(b) - Number(a));

    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });

    const applyPublicationFilters = () => {
      const terms = normalize(searchInput.value)
        .split(" ")
        .filter(Boolean);

      const selectedYear = yearSelect.value;
      let visibleCount = 0;

      records.forEach((record) => {
        const matchesYear =
          selectedYear === "all" || record.year === selectedYear;

        const matchesSearch = terms.every((term) =>
          record.searchableText.includes(term)
        );

        const visible = matchesYear && matchesSearch;

        record.element.hidden = !visible;

        if (visible) {
          visibleCount += 1;
        }
      });

      const noun = visibleCount === 1 ? "publication" : "publications";

      resultStatus.textContent =
        `${visibleCount} of ${records.length} ${noun} shown`;

      emptyState.hidden = visibleCount !== 0;
    };

    resetPublicationFilters = () => {
      searchInput.value = "";
      yearSelect.value = "all";
      applyPublicationFilters();
    };

    controls.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    controls.addEventListener("reset", (event) => {
      event.preventDefault();
      resetPublicationFilters();
      searchInput.focus();
    });

    searchInput.addEventListener("input", applyPublicationFilters);
    yearSelect.addEventListener("change", applyPublicationFilters);

    controls.hidden = false;
    resultStatus.hidden = false;

    applyPublicationFilters();
  }

  /* --------------------------------------------------------
     03. ANCHORS INSIDE COLLAPSED OR FILTERED CONTENT
     -------------------------------------------------------- */

  const revealHashTarget = () => {
    if (!window.location.hash) {
      return;
    }

    let id;

    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }

    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const paper = target.closest(".publication");

    if (paper && paper.hidden) {
      resetPublicationFilters();
    }

    let current = target;

    while (current) {
      if (current.tagName === "DETAILS") {
        current.open = true;
      }

      current = current.parentElement;
    }

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ block: "start" });
    });
  };

  window.addEventListener("hashchange", revealHashTarget);
  revealHashTarget();

  /* --------------------------------------------------------
     04. ACTIVE NAVIGATION
     -------------------------------------------------------- */

  if (navigation && "IntersectionObserver" in window) {
    const navLinks = Array.from(
      navigation.querySelectorAll('a[href^="#"]')
    );

    const sectionLinks = new Map();

    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").slice(1);
      const section = document.getElementById(targetId);

      if (section) {
        sectionLinks.set(section, link);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (!visibleEntry) {
          return;
        }

        navLinks.forEach((link) => {
          link.removeAttribute("aria-current");
        });

        const activeLink = sectionLinks.get(visibleEntry.target);

        if (activeLink) {
          activeLink.setAttribute("aria-current", "location");
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0
      }
    );

    sectionLinks.forEach((link, section) => {
      observer.observe(section);
    });
  }

  /* --------------------------------------------------------
     05. PRINT FULL PROFILE
     -------------------------------------------------------- */

  const printButton = document.getElementById("print-page");
  let detailsBeforePrint = null;

  const expandForPrint = () => {
    if (detailsBeforePrint) {
      return;
    }

    detailsBeforePrint = Array.from(
      document.querySelectorAll("details")
    ).map((element) => ({
      element,
      open: element.open
    }));

    detailsBeforePrint.forEach(({ element }) => {
      element.open = true;
    });
  };

  const restoreAfterPrint = () => {
    if (!detailsBeforePrint) {
      return;
    }

    detailsBeforePrint.forEach(({ element, open }) => {
      element.open = open;
    });

    detailsBeforePrint = null;
  };

  window.addEventListener("beforeprint", expandForPrint);
  window.addEventListener("afterprint", restoreAfterPrint);

  if (printButton) {
    printButton.hidden = false;

    printButton.addEventListener("click", () => {
      window.print();
    });
  }

  /* --------------------------------------------------------
     06. PORTRAIT FALLBACK
     -------------------------------------------------------- */

  const portrait = document.getElementById("portrait");

  if (portrait) {
    const hideUnavailablePortrait = () => {
      portrait.hidden = true;
    };

    portrait.addEventListener("error", hideUnavailablePortrait);

    if (portrait.complete && portrait.naturalWidth === 0) {
      hideUnavailablePortrait();
    }
  }

  /* --------------------------------------------------------
     07. COPYRIGHT YEAR
     Does not pretend that the research content was updated.
     -------------------------------------------------------- */

  const copyrightYear = document.getElementById("copyright-year");

  if (copyrightYear) {
    copyrightYear.textContent = String(new Date().getFullYear());
  }
})();
