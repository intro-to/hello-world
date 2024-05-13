 document.getElementById('numberOfBabies').addEventListener('change', function() {
    var numberOfBabies = parseInt(this.value);
    var paymentPerChild = 3000;
    var totalPayment = numberOfBabies * paymentPerChild;
    document.getElementById('totalPayment').value = "Ugx" + totalPayment;
  });