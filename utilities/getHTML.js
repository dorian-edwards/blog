const getHTML = element => {
  let html = element
  while (html.parentElement.tagName !== 'HTML') {
    html = html.parentElement
  }

  return html.parentElement
}

export default getHTML
