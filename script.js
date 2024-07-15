document.getElementById('transfer-form').addEventListener('input', updateDisplay);

function updateDisplay() {
    document.getElementById('display-date-time').innerText = document.getElementById('date-time').value;
    document.getElementById('display-sender-name').innerText = document.getElementById('sender-name').value;
    document.getElementById('display-sender-account').innerText = document.getElementById('sender-account').value;
    document.getElementById('display-receiver-name').innerText = document.getElementById('receiver-name').value;
    document.getElementById('display-receiver-account').innerText = document.getElementById('receiver-account').value;
    document.getElementById('display-transaction-id').innerText = document.getElementById('transaction-id').value;
    document.getElementById('display-amount').innerText = document.getElementById('amount').value + ' บาท';
    document.getElementById('display-fee').innerText = '0.00 บาท';
    document.getElementById('display-bank').innerText = document.getElementById('bank').value;

    let bankLogoUrl = ''; // You need to set the appropriate logo URL based on the selected bank
    switch (document.getElementById('bank').value) {
        case 'ธ.กสิกรไทย':
            bankLogoUrl = 'https://github.com/useronlineid/document1/blob/main/KBANK.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.กรุงไทย':
            bankLogoUrl = 'https://github.com/useronlineid/document1/blob/main/KTB.png?raw=true'; // Replace with actual URL
            break;
        case 'ธ.ทหารไทยธนชาต':
            bankLogoUrl = 'https://github.com/useronlineid/Theslipcame/blob/main/TTB1.png?raw=true'; // Replace with actual URL
            break;
        // Add more cases for other banks
    }
    document.getElementById('display-bank-logo').src = bankLogoUrl;
    document.getElementById('display-qrcode').src = document.getElementById('qrcode').value;
}

function saveAsImage() {
    const displaySection = document.getElementById('display-section');
    const receipt = document.querySelector('.receipt');

    // Adjust the height of the display section to fit the receipt
    displaySection.style.height = `${receipt.scrollHeight}px`;

    html2canvas(displaySection, {
        useCORS: true, // Enable cross-origin images
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'receipt.png';
        link.href = canvas.toDataURL();
        link.click();

        // Reset the height of the display section after saving the image
        displaySection.style.height = 'auto';
    });
}

// Initial call to set display values
updateDisplay();
