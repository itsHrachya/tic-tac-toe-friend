document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector('#player')
  const blocks = document.querySelectorAll('td')

  const getTurn = (elem, turn, color) => {
    elem.innerHTML = turn
    elem.style.color = color
  }

  let counter = 0
  let array = []
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].onclick = () => {
      if (blocks[i].innerHTML === '') {
        counter++
        if (counter % 2 === 1) {
          getTurn(blocks[i], 'X', '#09C372')
          getTurn(player, 'O', '#498AFB ')
        } else {
          getTurn(blocks[i], 'O', '#498AFB')
          getTurn(player, 'X', '#09C372')
        }
      }

      const check = (arg1, arg2, arg3) => {
        return blocks[arg1].innerHTML === 'X' && blocks[arg2].innerHTML === 'X' && blocks[arg3].innerHTML === 'X' ||
          blocks[arg1].innerHTML === 'O' && blocks[arg2].innerHTML === 'O' && blocks[arg3].innerHTML === 'O'
      }

      let checkCount = 0
      if (check(0, 1, 2) || check(3, 4, 5) || check(6, 7, 8) || check(0, 3, 6) ||
        check(1, 4, 7) || check(2, 5, 8) || check(0, 4, 8) || check(2, 4, 6)) {
        checkCount++
        swal('Good job!', `Reset game: Click to 'R'`, 'success')
      }

      array.push(i)
      const removeDublicates = array.filter((c, index) => array.indexOf(c) === index)
      if (removeDublicates.length === 9 && checkCount <= 0) swal('Tie!', `Reset game: Click to 'R'`)
    }
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'R' || event.key === 'r') location.reload(true)
  })
})