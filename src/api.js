export default async function getData() {
    const res = await fetch(new Request("https://api.livecoinwatch.com/coins/list"), {
        method: "POST",
        headers: new Headers(
            {"content-type": "application/json", "x-api-key": "b9f8f8b4-8830-4745-8269-268258937eea"}
        ),
        body: JSON.stringify(
            {
                
                currency: "USD",
                sort: "rank",
                order: "ascending",
                offset: 0,
                limit: 60,
                meta: true
            }
        )
    });
    const data = await res.json()
    console.log(data);
    return data;
}
