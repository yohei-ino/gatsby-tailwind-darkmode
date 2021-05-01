/* eslint-disable */
// Insert this script in your index.html right after the <body> tag.
// This will help to prevent a flash if dark mode is the default.

(function () {
  const storageKey = 'theme'
  const classNameDark = 'dark'

  function setClassOnDocumentBody() {
    const html = document.getElementsByTagName('html')[0]
    html.classList.add(classNameDark)
  }

  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const mql = window.matchMedia(preferDarkQuery)
  const supportsColorSchemeQuery = mql.media === preferDarkQuery
  const localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) { }
  const localStorageExists = localStorageTheme !== null

  if (localStorageExists) {
    if (localStorageTheme === classNameDark) {
      setClassOnDocumentBody()
    }
  } else if (supportsColorSchemeQuery) {
    setClassOnDocumentBody()
    localStorage.setItem(storageKey, classNameDark)
  }
})()
