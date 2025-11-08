mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhbndpZXJzbWEiLCJhIjoiY21oOXMzMWZxMTdiMTJrcTNjMGRyb2NtbSJ9.KVDmztD9nwgkx6cyE0_pHg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/evanwiersma/cmhpgzj5i000b01r6cjw2fsbe',
    center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});