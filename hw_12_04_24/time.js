async function fetchTime() {
    const response = await fetch("https://www.worldtimeserver.com/current_time_in_RU-SPE.aspx?city=Saint_Petersburg");
    const data = await response.text();
    const time = data.match(/\d{2}\:\d{2}\:\d{2}/)?.[0];
    console.log(time?time:"Не найдено");
}
await fetchTime();