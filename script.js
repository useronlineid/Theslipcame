document.getElementById('transfer-form').addEventListener('input', updateDisplay);

function updateDisplay() {
    document.getElementById('display-date-time').innerText = document.getElementById('date-time').value;
    document.getElementById('display-sender-name').innerText = document.getElementById('sender-name').value;
    document.getElementById('display-sender-account').innerText = document.getElementById('sender-account').value;
    document.getElementById('display-receiver-name').innerText = document.getElementById('receiver-name').value;
    document.getElementById('display-receiver-account').innerText = document.getElementById('receiver-account').value;
    document.getElementById('display-transaction-id').innerText = document.getElementById('transaction-id').value;
    document.getElementById('display-amount').innerText = document.getElementById('amount').value + ' บาท';
    document.getElementById('display-bank').innerText = document.getElementById('bank').value;

    let bankLogoUrl = ''; // You need to set the appropriate logo URL based on the selected bank
    switch (document.getElementById('bank').value) {
        case 'ธ.กสิกรไทย':
            bankLogoUrl = 'https://github.com/useronlineid/document1/blob/main/KBANK.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.กรุงไทย':
            bankLogoUrl = 'https://github.com/useronlineid/document1/blob/main/KTB.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.กรุงเทพ':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/BBL.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.ไทยพาณิชย์':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/SCB.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.กรุงศรีอยุธยา':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/BAY.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.ทหารไทยธนชาต':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/TTB1.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.ออมสิน':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/O.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.ก.ส.':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/T.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.อาคารสงเคราะห์':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/C.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.เกียรตินาคินภัทร':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/K.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.ซีไอเอ็มบีไทย':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/CIMB.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.ยูโอบี':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/UOB.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.แลนด์ แอนด์ เฮาส์':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/LHBANK.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.ไอซีบีซี':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/ICBC.png?raw=true'; // Replace with actual URL
            break;
          
            
        // Add more cases for other banks
    }
    document.getElementById('display-bank-logo').src = bankLogoUrl;
    document.getElementById('display-qrcode').src = document.getElementById('qrcode').value;
}

function saveAsImage() {
    html2canvas(document.getElementById('display-section')).then(canvas => {
        const link = document.createElement('a');
        link.download = 'receipt.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Initial call to set display values
updateDisplay();
