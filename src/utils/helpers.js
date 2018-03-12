export const toggleBodyOverflow = (reset: boolean = false) => {
  const doc = document.body;
  if (doc && !reset) {
    if (doc.style.overflow === 'hidden') {
      doc.style.overflow = 'auto';
    } else {
      doc.style.overflow = 'hidden';
    }
  }

  if (reset && doc) {
    doc.style.overflow = 'auto';
  }
};
