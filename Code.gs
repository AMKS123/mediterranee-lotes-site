function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Lotes');
  const data = sheet.getDataRange().getValues();
  const lotes = [];
  for (let i = 1; i < data.length; i++) {
    const [id, nome, descricao, coordenadas, loteamento] = data[i];
    lotes.push({
      id: id,
      nome: nome,
      descricao: descricao,
      coordenadas: coordenadas,
      loteamento: loteamento || ''
    });
  }
  return ContentService.createTextOutput(JSON.stringify(lotes)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Lotes');
  const params = JSON.parse(e.postData.contents);
  if (params.action === 'add') {
    sheet.appendRow([params.id, params.nome, params.descricao, params.coordenadas, params.loteamento]);
  } else if (params.action === 'update') {
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === params.id) {
        sheet.getRange(i+1, 2, 1, 4).setValues([[params.nome, params.descricao, params.coordenadas, params.loteamento]]);
        break;
      }
    }
  } else if (params.action === 'delete') {
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === params.id) {
        sheet.deleteRow(i+1);
        break;
      }
    }
  }
  return ContentService.createTextOutput('OK');
}
