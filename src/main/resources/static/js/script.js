function togglePart(partId) {
    const part = document.getElementById(partId);
    const formContent = part.querySelector('.form-content');
    
    if (formContent.style.display === 'block') {
        formContent.style.display = 'none';
        part.classList.remove('open');
    } else {
        formContent.style.display = 'block';
        part.classList.add('open');
    }
}

// // Optional: Close dropdowns if clicked outside
// document.addEventListener('click', function(e) {
//     if (!e.target.closest('.form-part')) {
//         document.querySelectorAll('.form-content').forEach(function(menu) {
//             menu.style.display = 'none';
//         });
//         document.querySelectorAll('.form-part').forEach(function(dropdown) {
//             dropdown.classList.remove('open');
//         });
//     }
// });


  $(document).ready(function() {
    $(".tanggal-id").datepicker({
      dateFormat: "dd MM yy", // Format: 01 Januari 2025
      regional: "id" // Mengatur bahasa Indonesia
    });
  });


let searchInput = document.querySelector('.search-container input');
let suggestionsContainer = document.querySelector('.search-container .suggestions');

const data = ['Apple','Banana','Orange','Grape','Pinaple'];

searchInput.addEventListener('input', function() {
    const query = searchInput.value;
    console.log(query)
    suggestionsContainer.innerHTML = '';

    if(query){
        const filteredData = data.filter(item => item.toLowerCase().includes(query));
        filteredData.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.textContent = item;
            div.addEventListener('click',function(){
                searchInput.value = item;
                suggestionsContainer.innerHTML = '';
            });
            suggestionsContainer.appendChild(div);
        });
    }
});

document.addEventListener('click',function(event){
    if(!event.target.closest('.search-container')){
        suggestionsContainer.innerHTML = '';
    }
})
