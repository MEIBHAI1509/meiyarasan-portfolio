export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (!element) {
    return;
  }

  const lenis = window.__lenis;

  if (lenis) {
    lenis.scrollTo(element, {
      offset: -80,
      duration: 1.2,
    });

    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function scrollToTop() {
  const lenis = window.__lenis;

  if (lenis) {
    lenis.scrollTo(0, {
      duration: 1.2,
    });

    return;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}