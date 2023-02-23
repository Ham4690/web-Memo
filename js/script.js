
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

function copyToClipboard() {
    const copyTarget = document.getElementById("txtarea");
    copyTarget.select();
    copyTarget.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // navigator.clipboard.writeText(copyTarget.value);
    alert("Copied the text: " + copyTarget.value);
}