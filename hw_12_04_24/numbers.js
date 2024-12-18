async function fetchNumbersAndSum() {
    const response = await fetch('https://kodaktor.ru/j/numbers');
    const data = await response.json();

    return data.numbers.reduce((acc, num) => acc + num.value, 0);
}

async function submitToGoogleForm(result) {
    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZyDJ_68Mj7io5vtjyNqul7ceNE1t5Z5KkkN7foqxbIcUsbg/formResponse';
    const formData = new URLSearchParams();

    formData.append('entry.364005965', `${result} (Кузнецов)`);

    const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
    });
    console.log(response);
}

const sum = await fetchNumbersAndSum();
await submitToGoogleForm(sum);
