const runTest = () => {
    // Reset alert classes
    let alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        alert.classList.remove('alert-danger', 'alert-warning', 'alert-success');
    });

    try {
        start();
    }
    catch (err) {
        console.error(err);
        alerts.forEach(alert => {
            alert.classList.add('alert-danger');
            alert.textContent = '🚫 Check the console for errors!';
        });
        return;
    }

    // Check values
    let rows = document.querySelectorAll('tr');
    let isComplete = (
        // 4 products in the table (plus header row)
        rows.length === 5 &&

        // Reviews are correct
        rows[1].querySelectorAll('td')[4].textContent === '1.8' &&
        rows[2].querySelectorAll('td')[4].textContent === '5' &&
        rows[3].querySelectorAll('td')[4].textContent === '4.6' &&
        rows[4].querySelectorAll('td')[4].textContent === '2.3' &&

        // Discounts are correct
        rows[1].querySelectorAll('td')[5].textContent === '$8.75' &&
        rows[2].querySelectorAll('td')[5].textContent === '$0.00' &&
        rows[3].querySelectorAll('td')[5].textContent === '$5.94' &&
        rows[4].querySelectorAll('td')[5].textContent === '$2.25'
    );

    if (!isComplete) {
        alerts.forEach(alert => {
            alert.classList.add('alert-warning');
            alert.textContent = '🤔 Hmmm.... something is not quite right.';
        });
    }
    else {
        alerts.forEach(alert => {
            alert.classList.add('alert-success');
            alert.textContent = '🎉 You did it!';
        });
    }
}

runTest();