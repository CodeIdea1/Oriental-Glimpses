import { gsap } from 'gsap';

export const blinkTransition = (targetId: string) => {
  const overlay = document.getElementById('blink-overlay');
  if (!overlay) return;

  const tl = gsap.timeline();

  tl.to(overlay, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.inOut'
  }).call(() => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }).to(overlay, {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut'
  });
};
