function doGet(e) {
  const output = ContentService.createTextOutput(JSON.stringify({message: 'GET not implemented'}));
  output.setMimeType(ContentService.MimeType.JSON);
  output.setHeader('Access-Control-Allow-Origin', '*');
  output.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  return output;
}

function doPost(e) {
  const output = ContentService.createTextOutput(JSON.stringify({message: 'POST not implemented'}));
  output.setMimeType(ContentService.MimeType.JSON);
  output.setHeader('Access-Control-Allow-Origin', '*');
  output.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  return output;
}
