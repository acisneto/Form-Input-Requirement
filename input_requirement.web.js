import wixData from 'wix-data';

wixData.get("ConfigDB", "#COLUMN_TABLE_ID")
  .then((item) => {
    let obgvalue = item.dfnObg
    //console.log(obgvalue); //see item below
    if (obgvalue==false) {
      $w('#input9, #dropdown26, #input50, #input11, #dropdown27, #addressInput1, #input17, #input18, #input29, #input30, #dropdown29, #input31, #dropdown30, #dropdown31, #dropdown36, #dropdown37, #dropdown38, #dropdown40, #dropdown39, #dropdown43, #dropdown44, #dropdown45, #dropdown46, #dropdown47, #dropdown48, #dropdown49').required = false
      $w('#dropdown50, #input46, #input47, #input48, #checkbox1').required = false
} 
  })
  .catch((err) => {
    console.log(err);
  });
