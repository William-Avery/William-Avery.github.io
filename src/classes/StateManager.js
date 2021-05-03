export async function ExportFile(array) {
    const fileName = `${+ new Date()}`;
    const json = JSON.stringify(array);
    const blob = new Blob([json],{type:'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export async function ImportFile() {
    
}
