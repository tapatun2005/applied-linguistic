export const general = {
methods: {
    readMore(event) {
        const target = event.currentTarget
        const book = target.parentNode.querySelector('.book')
        const isOpen = target.classList.contains('is-active')
        const action = isOpen ? 'remove' : 'add'
  
        target.classList[action]('is-active')
        book.classList[action]('is-active')
  
  
        if (isOpen) {
          const top = book.getBoundingClientRect().top
          window.scrollTo({
            top: window.scrollY + top - 100
          })
        }
    },
    expand(event) {
        const target = event.currentTarget
        const parent = target.parentNode
        const isOpen = parent.classList.contains('is-active')
        parent.classList[isOpen ? 'remove' : 'add']('is-active')

        if (!isOpen) {
            parent.querySelector('textarea').focus()
        }
    },
    showVideo(event) {
        console.log('event')
        const target = event.currentTarget
        const popup = target.parentNode.querySelector('.video__popup')
        const iframe = popup.querySelector('iframe')
        iframe.src = iframe.dataset.src
        popup.classList.add('is-active')
    },
    closeVideo(event) {
        const target = event.currentTarget
        const parent = target.parentNode
        const iframe = parent.querySelector('iframe')
        iframe.src = ''
        parent.classList.remove('is-active')
    },
    checkEmpty(event) {
        const target = event.currentTarget
        const parent = target.parentNode.parentNode
        console.log(target.value)
        if (target.value === '') {
        parent.classList.add('is-empty')
        parent.classList.remove('is-not-empty')
        } else {
        parent.classList.remove('is-empty')
        parent.classList.add('is-not-empty')
        }
    },
    sendEmail(){
        const subject = this.subject
        const mailtoBody = `
${Object.keys(this.answers).map((key, index) => `
${index + 1}. ${this.answers[key].title}%0A
${this.answers[key].value}%0A
%0A
`).join('')
}
`

        window.location.href = `mailto:you@example.com?subject=${subject}&body=${mailtoBody}`
    }
}
}