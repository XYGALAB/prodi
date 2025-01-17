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

// Pindahkan definisi fungsi sebelum pemanggilan fungsi
let kondisiSuggetion = () => {
    console.log('hai');

    let searchInput = document.querySelector('.search-kondisi input');
    let suggestionsContainer = document.querySelector('.search-kondisi .suggestions');
    
    const data = ['Apple','Banana','Orange','Grape','Pinaple'];
    
    searchInput.addEventListener('input', function() {
        const query = searchInput.value;
        console.log(query);
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
}

let statusKawinSuggestion = () => {
    console.log('hallo');
    let searchInput = document.querySelector('.search-status-kawin input');
    let suggestionsContainer = document.querySelector('.search-status-kawin .suggestions');
    
    const data = ['Kawin','Belum Kawin','Cerai'];
    
    searchInput.addEventListener('input', function() {
        const query = searchInput.value;
        console.log(query);
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
}

// Panggil fungsi setelah definisi
statusKawinSuggestion();
kondisiSuggetion();
