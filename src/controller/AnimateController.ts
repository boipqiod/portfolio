export default class AnimateController {
  static instance = new AnimateController()

  private constructor() { }

  addObserveAnimation(element: HTMLElement) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        element.classList.add('visible')
        observer.unobserve(element)
      }
    },
      {
        threshold: 1
      })
    observer.observe(element)
  }
}
