/** Reading-progress bar. Pure CSS (scroll-driven animation, see globals.css):
 *  no scroll listener and no spring running on the main thread. Browsers
 *  without scroll timelines don't show it. */
export default function ScrollProgress() {
  return <div aria-hidden className="scroll-progress" />;
}
