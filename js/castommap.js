$(document).ready(function() {
    var map,
        defAreasSettings = {
            autoZoom: false,
            color: "#DDE7F0",
            colorSolid: "#9DABB8",
            selectedColor: "#5F6E82",
            outlineColor: "#DDE7F0",
            rollOverColor: "#5F6E82",
            rollOverOutlineColor: "#9DABB8"
        },
        countryAreasSettings = {
            autoZoom: false,
            color: "#DDE7F0",
            colorSolid: "#9DABB8",
            selectedColor: "#5F6E82",
            outlineColor: "#9DABB8",
            rollOverColor: "#5F6E82",
            rollOverOutlineColor: "#9DABB8"
        },
        wordlDataProvider = {
            mapVar: AmCharts.maps.worldLow,
            getAreasFromMap: true,
            areas: [
                { id: "CA", rollOverColor: "#ffcc00", selectedColor: "#ffcc00", outlineColor: "#9DABB8", autoZoom: true },
                { id: "US", rollOverColor: "#ffcc00", selectedColor: "#ffcc00", outlineColor: "#9DABB8", autoZoom: true }
            ]
        };

    AmCharts.ready(function () {
        map = new AmCharts.AmMap();
        //map.pathToImages = "http://www.ammap.com/lib/images/";
        map.panEventsEnabled = true; // this line enables pinch-zooming and dragging on touch devices
        map.balloon = {
            adjustBorderColor: true,
            borderThickness: 0,
            color: "#ffffff",
            cornerRadius: 5,
            fillColor: "#192734",
            fillAlpha: 1,
            shadowAlpha: 0
        };
        map.projection = "miller";

        map.dataProvider = wordlDataProvider;
        map.areasSettings = defAreasSettings;

        map.zoomControl = {
            buttonIconColor: "#425365",
            //buttonSize : "40",
            top: "40",
            left: "20",
            maxZoomLevel: "8",
            zoomFactor: "2"
        }
        //map.smallMap = new AmCharts.SmallMap();

        map.addListener("clickMapObject", function (event) {
            if (event.mapObject.id == "CA") {
                loadNewMap("http://www.ammap.com/lib/maps/js/canadaLow.js", "canadaLow");
            }
            else if (event.mapObject.id == "US") {
                loadNewMap("http://www.ammap.com/lib/maps/js/usaLow.js", "usaLow");
            }
        });
        map.addListener("homeButtonClicked", function () {
            loadNewMap("http://www.ammap.com/lib/maps/js/worldLow.js", "worldLow");
        });
        map.write("mapdiv");

    });


    function loadNewMap(url, mapName) {
        if (AmCharts.maps[mapName] != undefined) {
            // the map was already loaded
            setNewMap(mapName);
        }
        else {
            // let's load the map
            jQuery.getScript(url, function () {
                setNewMap(mapName);
            });
        }
    }

    function setNewMap(mapName) {

        if (mapName == "usaLow") {

            map.projection = "mercator";
            map.dataProvider = {
                mapVar: AmCharts.maps[mapName],
                getAreasFromMap: true,
                areas: [
                    { id: "US-CA", color: "#FEFD9E", rollOverColor: "#ffcc00", selectedColor: "#ffcc00", outlineColor: "#9DABB8", autoZoom: true },
                    { id: "US-TX", color: "#FEFD9E", rollOverColor: "#ffcc00", selectedColor: "#ffcc00", outlineColor: "#9DABB8", autoZoom: true }
                ]
            };
            map.areasSettings = countryAreasSettings;
            map.validateData();

        } else if (mapName == "canadaLow") {
            map.projection = "miller";
            map.dataProvider = {
                mapVar: AmCharts.maps[mapName],
                getAreasFromMap: true
            };
            map.areasSettings = countryAreasSettings;
            map.validateData();
        } else {
            map.projection = "miller";
            map.dataProvider = wordlDataProvider;
            map.areasSettings = defAreasSettings;
            map.validateData();
        }


        }

    }
 );