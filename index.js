const modal = $.modal({
  title: 'Modal',
  closable: true,
  content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ок', type: 'primary', handler() {
      modal.close()
    }},
    {text: 'Cancel', type: 'danger', handler() {
        modal.close()
      }}
  ]
})

modal.open();
