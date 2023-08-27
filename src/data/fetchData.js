const url = '';

const request = new Request(url, {
  headers: {},
});

async function getData() {
  try {
    const response = await fetch(request);
    const data = await response.json();
    if (response.status !== 200) {
      console.log('Success', data);
    } else {
      console.log('Server Error', data);
    }
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

getData();
