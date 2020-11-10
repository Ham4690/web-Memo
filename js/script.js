document.querySelector('#DLlink').onclick = () => {
    let text = document.querySelector('#txtarea').value;
    this.href = 'data:text/plain;charset=utf-8,'+ encodeURIComponent(text);
}

function save() {
    const txt = document.getElementById('txtarea').value;
    const file_name = document.getElementById('title').value;
    if( !txt || !file_name ) { 
        alert('No value Title , documet');
        return; 
    }

    const blob = new Blob([txt], { type: 'text/plain' });
    
    const a = document.createElement('a');

    a.href = URL.createObjectURL(blob)
    a.download = file_name + '.txt';
    a.click();
}