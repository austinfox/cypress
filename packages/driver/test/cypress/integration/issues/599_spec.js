describe('issue #599', () => {
  it('continues to be a defined properties', () => {
    cy.visit('/fixtures/issue-599.html')
    cy.window().then(() => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', '/basic_auth')
      xhr.setRequestHeader('Authorization', `Basic ${btoa('cypress:password123')}`)
      Object.defineProperty(xhr, 'onreadystatechange', {
        get: () => 'tst1',
        configurable: true,
      })
      Object.defineProperty(xhr, 'onreadystatechange', {
        get: () => 'tst2',
      })
      xhr.send()
    })
  })
})
