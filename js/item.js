document.getElementById("btnAddItem").addEventListener('click', () => {
    let name = document.getElementById("txtItemName").value;
    let qty = document.getElementById("txtItemQty").value;
    let price = document.getElementById("txtItemPrice").value;

    if (name !== null && qty > 0 && price !== null) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "description": name,
            "quantity": qty,
            "unitPrice": price
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/item/create", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    } else {
        alert("Enter All Details !");
    }
});