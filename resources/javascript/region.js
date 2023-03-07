function getCountry() {
    var countries = {
        TR: "tr-tr",
        US: "en-us",
    };

    var timeZones = {
        "Europe/Istanbul": {
            countryCode: ["TR"]
        }
    };

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (timezone === "" || !timezone) {
        return null;
    }

    const city = timeZones[timezone].countryCode[0];
    const languageSnippet = countries[city];

    return languageSnippet;
}

document.addEventListener("DOMContentLoaded", function () {
    const country = getCountry();

    if (!country || country == null) {
        country = "en-us"
    };

    if (country == "tr-tr"){
        window.location.href = "https://seemidtry.github.io/napolyn/tr-tr/index.html";
    }else{
        window.location.href = "https://seemidtry.github.io/napolyn/en-us/index.html";
    }
});
