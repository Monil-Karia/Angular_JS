const countries = [
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    { name: "Germany", code: "+49" },
];

function initializeDropdown() {
    const dropdown = document.getElementById('countryDropdown');

    countries.forEach(country => {
        const option = document.createElement('option');
        option.text = country.name;
        option.value = country.code;
        dropdown.add(option);
    });
}

function displayPhoneCode() {
    const dropdown = document.getElementById('countryDropdown');
    const resultParagraph = document.getElementById('result');
    
    const selectedCountry = dropdown.options[dropdown.selectedIndex].text;
    const phoneCode = dropdown.value;
    
    resultParagraph.textContent = `Selected Country: ${selectedCountry}, Phone Code: ${phoneCode}`;
}
