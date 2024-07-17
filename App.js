let button = document.getElementById("getdog");
let image = document.getElementById("dogimage");

async function fetchDog() {
   try {
       let response = await axios.get("https://dog.ceo/api/breeds/image/random");
       console.log(response.data.message);  // Log the image URL to check

       // Set image src only if response is successful
       if (response.status === 200) {
           image.src = response.data.message;   // Set image src to the fetched URL
       } else {
           console.error('Failed to fetch dog image:', response.status);
       }
   } catch (error) {
       console.error('Error fetching dog image:', error);
   }
}

button.addEventListener("click", async () => {
    await fetchDog();
});

fetchDog();  // Initial fetch on page load