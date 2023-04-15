function searchData() {
    let inputValue = document.querySelector('input').value;
    let tableItem = document.querySelectorAll('.table__item');
    for(let i = 0; i < tableItem.length; i++) {
        let searchValue = tableItem[i].querySelector('.table__content p');
        if(searchValue.innerHTML.toUpperCase().indexOf(inputValue.toUpperCase()) > -1) {
            tableItem[i].style.display = 'block';
        } else {
            tableItem[i].style.display = 'none';
        }
    }
}