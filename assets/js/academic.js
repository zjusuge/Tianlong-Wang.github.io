/*
 * Tianlong Wang — Academic homepage
 * Progressive enhancement without external JavaScript dependencies.
 * Retain the repository's MIT LICENSE.
 */

(() => {
  "use strict";

  const root = document.documentElement;
  const main = document.getElementById("tw-home");
  const header = document.querySelector(".site-header");
  const navigation = document.getElementById("site-nav");
  const menuButton = document.getElementById("menu-toggle");

  if (!main) return;

  const mobileQuery = window.matchMedia("(max-width: 900px)");

  /* ========================================================
     1. Mobile navigation
     ======================================================== */

  function setMenuState(open) {
    if (!navigation || !menuButton) return;

    navigation.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));

    const symbol = menuButton.querySelector("span");
    if (symbol) symbol.textContent = open ? "−" : "+";
  }

  if (navigation && menuButton) {
    menuButton.hidden = false;
    root.classList.add("has-js");

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        navigation.classList.contains("is-open")
      ) {
        setMenuState(false);
        menuButton.focus({ preventScroll: true });
      }
    });

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;

      if (
        mobileQuery.matches &&
        navigation.classList.contains("is-open") &&
        !event.target.closest(".site-header")
      ) {
        const focusWasInsideMenu =
          navigation.contains(document.activeElement);

        setMenuState(false);

        if (focusWasInsideMenu) {
          menuButton.focus({ preventScroll: true });
        }
      }
    });

    function handleViewportChange() {
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
        if (firstLink) firstLink.focus({ preventScroll: true });
      }

      setMenuState(false);
      scheduleNavigationUpdate();
    }

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", handleViewportChange);
    } else {
      mobileQuery.addListener(handleViewportChange);
    }
  }

  /* ========================================================
     2. Publication search and year filter
     ======================================================== */

  const controls = document.getElementById("publication-controls");
  const searchInput = document.getElementById("publication-search");
  const yearSelect = document.getElementById("publication-year");
  const resultStatus = document.getElementById("publication-status");
  const emptyState = document.getElementById("publication-empty");

  const publications = Array.from(
    main.querySelectorAll("#publication-list > .publication")
  );

  function normalize(value) {
    return String(value)
      .normalize("NFKC")
      .toLocaleLowerCase("en")
      .replace(/[‐‑‒–—−]/g, "-")
      .replace(/\s+/g, " ")
      .trim();
  }

  let resetPublicationFilters = () => {};

  if (
    controls &&
    searchInput &&
    yearSelect &&
    resultStatus &&
    emptyState &&
    publications.length
  ) {
    const records = publications.map((element) => {
      const linkAddresses = Array.from(
        element.querySelectorAll("a[href]")
      )
        .map((link) => link.getAttribute("href"))
        .join(" ");

      return {
        element,
        year: element.dataset.year || "",
        text: normalize(`${element.textContent} ${linkAddresses}`)
      };
    });

    const years = Array.from(
      new Set(records.map((record) => record.year).filter(Boolean))
    ).sort((a, b) => Number(b) - Number(a));

    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });

    function applyPublicationFilters() {
      const terms = normalize(searchInput.value)
        .split(" ")
        .filter(Boolean);

      const selectedYear = yearSelect.value;
      let visibleCount = 0;

      records.forEach((record) => {
        const matchesYear =
          selectedYear === "all" || record.year === selectedYear;

        const matchesSearch = terms.every((term) =>
          record.text.includes(term)
        );

        const visible = matchesYear && matchesSearch;
        record.element.hidden = !visible;

        if (visible) visibleCount += 1;
      });

      resultStatus.textContent =
        `${visibleCount} of ${records.length} publications shown`;

      emptyState.hidden = visibleCount !== 0;
      scheduleNavigationUpdate();
    }

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
      searchInput.focus({ preventScroll: true });
    });

    searchInput.addEventListener("input", applyPublicationFilters);
    yearSelect.addEventListener("change", applyPublicationFilters);

    controls.hidden = false;
    resultStatus.hidden = false;

    /*
     * Defer the first application until all navigation state below
     * has been initialized.
     */
    window.requestAnimationFrame(applyPublicationFilters);
  }

  /* ========================================================
     3. Active navigation
     ======================================================== */

  const sectionLinks = navigation
    ? Array.from(navigation.querySelectorAll('a[href^="#"]'))
        .map((link) => ({
          link,
          section: document.getElementById(
            link.getAttribute("href").slice(1)
          )
        }))
        .filter((item) => item.section)
    : [];

  let navigationFrame = null;
  let currentLink = null;
  let lastHeaderHeight = 0;

  function updateNavigation() {
    navigationFrame = null;

    const headerHeight = header
      ? Math.ceil(header.getBoundingClientRect().height)
      : 0;

    if (headerHeight !== lastHeaderHeight) {
      root.style.setProperty("--header-height", `${headerHeight}px`);
      lastHeaderHeight = headerHeight;
    }

    if (!sectionLinks.length) return;

    /*
     * Select the last section whose top has crossed the reading line.
     * No section is selected while the visitor is at the top of the hero.
     */
    const readingLine =
      headerHeight + Math.min(120, window.innerHeight * 0.18);

    let activeLink = null;

    sectionLinks.forEach(({ link, section }) => {
      if (section.getBoundingClientRect().top <= readingLine) {
        activeLink = link;
      }
    });

    const pageHeight = document.documentElement.scrollHeight;
    const atBottom =
      pageHeight > window.innerHeight + 2 &&
      window.scrollY + window.innerHeight >= pageHeight - 3;

    if (atBottom) {
      activeLink = sectionLinks[sectionLinks.length - 1].link;
    }

    if (activeLink === currentLink) return;

    sectionLinks.forEach(({ link }) => {
      if (link === activeLink) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    currentLink = activeLink;
  }

  function scheduleNavigationUpdate() {
    if (navigationFrame !== null) return;
    navigationFrame = window.requestAnimationFrame(updateNavigation);
  }

  window.addEventListener("scroll", scheduleNavigationUpdate, {
    passive: true
  });

  window.addEventListener("resize", scheduleNavigationUpdate, {
    passive: true
  });

  main.addEventListener("toggle", scheduleNavigationUpdate, true);

  if ("ResizeObserver" in window) {
    const layoutObserver = new ResizeObserver(
      scheduleNavigationUpdate
    );

    if (header) layoutObserver.observe(header);
    layoutObserver.observe(main);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(scheduleNavigationUpdate);
  }

  /* ========================================================
     4. Anchors, filtered papers, and collapsed records
     ======================================================== */

  function getHashTarget(hash) {
    if (!hash || hash === "#") return null;

    try {
      return document.getElementById(
        decodeURIComponent(hash.slice(1))
      );
    } catch {
      return null;
    }
  }

  function revealTarget(target) {
    const paper = target.closest(".publication");

    if (paper && paper.hidden) {
      resetPublicationFilters();
    }

    let current = target;

    while (current && current !== document.body) {
      if (current.tagName === "DETAILS") {
        current.open = true;
      }
      current = current.parentElement;
    }
  }

  function scrollToTarget(target, moveFocus = false) {
    revealTarget(target);

    window.requestAnimationFrame(() => {
      updateNavigation();

      if (moveFocus) {
        const normallyFocusable = target.matches(
          "a[href], button, input, select, textarea, summary, [tabindex]"
        );

        if (!normallyFocusable) {
          target.setAttribute("tabindex", "-1");
        }

        target.focus({ preventScroll: true });

        if (!normallyFocusable) {
          target.addEventListener(
            "blur",
            () => target.removeAttribute("tabindex"),
            { once: true }
          );
        }
      }

      target.scrollIntoView({ block: "start" });
      scheduleNavigationUpdate();
    });
  }

  document.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element)
    ) {
      return;
    }

    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    /*
     * Only enhance anchors belonging to this page.
     * No browser-extension icons or external links are altered.
     */
    const belongsToPage =
      link.classList.contains("skip-link") ||
      link.closest("#tw-home, .site-header, .site-footer");

    if (!belongsToPage) return;

    const hash = link.getAttribute("href");
    const target = getHashTarget(hash);
    if (!target) return;

    event.preventDefault();

    if (navigation && navigation.contains(link)) {
      setMenuState(false);
    }

    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }

    scrollToTarget(target, true);
  });

  function revealCurrentHash() {
    const target = getHashTarget(window.location.hash);

    if (target) {
      scrollToTarget(target);
    } else {
      scheduleNavigationUpdate();
    }
  }

  window.addEventListener("hashchange", revealCurrentHash);
  window.addEventListener("load", revealCurrentHash, { once: true });

  /* ========================================================
     5. Print the full profile
     ======================================================== */

  const printButton = document.getElementById("print-page");
  let detailsBeforePrint = null;

  function expandForPrint() {
    if (detailsBeforePrint !== null) return;

    detailsBeforePrint = Array.from(
      main.querySelectorAll("details")
    ).map((element) => ({
      element,
      open: element.open
    }));

    detailsBeforePrint.forEach(({ element }) => {
      element.open = true;
    });
  }

  function restoreAfterPrint() {
    if (detailsBeforePrint === null) return;

    detailsBeforePrint.forEach(({ element, open }) => {
      element.open = open;
    });

    detailsBeforePrint = null;
    scheduleNavigationUpdate();
  }

  window.addEventListener("beforeprint", expandForPrint);
  window.addEventListener("afterprint", restoreAfterPrint);

  if (printButton) {
    printButton.hidden = false;

    printButton.addEventListener("click", () => {
      expandForPrint();
      window.print();
    });
  }

  /* ========================================================
     6. Portrait fallback
     ======================================================== */

  const portrait = document.getElementById("portrait");

  if (portrait) {
    function hideUnavailablePortrait() {
      portrait.hidden = true;
      scheduleNavigationUpdate();
    }

    portrait.addEventListener("error", hideUnavailablePortrait);

    if (portrait.complete && portrait.naturalWidth === 0) {
      hideUnavailablePortrait();
    }
  }

  /* ========================================================
     7. Copyright year
     This is not a research-content "last updated" timestamp.
     ======================================================== */

  const copyrightYear = document.getElementById("copyright-year");

  if (copyrightYear) {
    copyrightYear.textContent = String(new Date().getFullYear());
  }

  updateNavigation();
})();
