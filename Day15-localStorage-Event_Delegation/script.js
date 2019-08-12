const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e){
  e.preventDefault()
  const text = (this.querySelector('[name=item]')).value //'this' correponds with the input
  const item = {
    text,
    done: false
  }

  items.push(item)
  populateList(items, itemList) 
  localStorage.setItem('items', JSON.stringify(items)) // data persistence
  this.reset() //'this' it's the form element, and we clean the input
}

// to persistences of data
function populateList(plates=[], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked': ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('')
}

function checkDone(e){
  if(!e.target.matches('input')) return // skip unless it's an input
  const checkIt = e.target
  index = checkIt.dataset.index
  items[index].done = !items[index].done
  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemList) 
}

addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', checkDone)
populateList(items, itemList) 

