import { useState, useEffect, useMemo } from "react";
import * as React from "react";

import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import {
  APIProvider,
  Map,
  ControlPosition,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMap,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";

import { CustomMapControl } from "./map-control";
import MapHandler from "./map-handler";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import { Checkbox } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import { GeoJsonLayer } from "@deck.gl/layers/typed";
import { MVTLayer } from "@deck.gl/geo-layers/typed";
import { GoogleMapsOverlay } from "@deck.gl/google-maps/typed";
import { mapStyles } from "./mapstyles/WYmapStyles.js";

import { Tribe } from "./components/tribe";
import type { LayersList } from "@deck.gl/core/typed";

export type AutocompleteMode = { id: string; label: string };

const autocompleteModes: Array<AutocompleteMode> = [
  { id: "classic", label: "Google Autocomplete Widget" },
];

export type DataPoint = [number, number, number];

export type DeckglOverlayProps = { layers?: LayersList };
const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"};
    padding: 24px;
    color: ${theme.palette.mode === "dark" ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === "dark" ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `
);

const TriggerButton = styled("button")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px
        ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
      outline: none;
    }
  `
);
function App() {
  const position = { lat: 34.5134, lng: -110.0784 };

  const [clickInfo, setClickInfo] = useState(null);

  const [age, setAge] = useState("default");

  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(true);

  const [open1, setOpen1] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedAutocompleteMode, setSelectedAutocompleteMode] =
    useState<AutocompleteMode>({
      id: "classic",
      label: "Google Autocomplete Widget",
    });

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  const [markerRef, marker] = useMarkerRef();
  const [activePosition, setActivePosition] = useState(null);

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleInfoWindowClose = () => {
    setActivePosition(null);
  };

  let layers = [];

  let layer21 = new GeoJsonLayer({
    id: "tribe",
    data: Tribe,
    extruded: true,
    filled: true,
    getElevation: 30,
    getFillColor: (f) =>
      age === "default"
        ? f.properties.Name === "Zia Pueblo"
          ? [0, 163, 108, 255]
          : f.properties.Name === "Jemez Pueblo"
          ? [218, 112, 214, 255]
          : f.properties.Name === "Mescalero Apache"
          ? [93, 63, 211, 255]
          : f.properties.Name === "Nambe"
          ? [191, 64, 191, 255]
          : f.properties.Name === "Acoma Pueblo"
          ? [248, 131, 121, 255]
          : f.properties.Name === "Colorado River Indian Reservation"
          ? [255, 95, 31, 255]
          : f.properties.Name === "Zuni Pueblo"
          ? [160, 82, 45, 255]
          : [238, 75, 43, 255]
        : age === "mdd"
        ? f.properties.Nitrate < 5
          ? [65, 105, 225, 255]
          : f.properties.Nitrate < 10
          ? [255, 95, 31, 255]
          : [255, 49, 49, 255]
        : age === "material"
        ? f.properties.Arsenic < 0.005
          ? [65, 105, 225, 255]
          : f.properties.Arsenic < 0.01
          ? [255, 95, 31, 255]
          : [255, 49, 49, 255]
        : age === "zone"
        ? f.properties.Fe < 0.15
          ? [65, 105, 225, 255]
          : f.properties.Fe < 0.3
          ? [255, 95, 31, 255]
          : [255, 49, 49, 255]
        : age === "fire"
        ? f.properties.Mn < 0.025
        ? [65, 105, 225, 255]
        : f.properties.Mn < 0.05
        ? [255, 95, 31, 255]
        : [255, 49, 49, 255]
        : age === "quality"
        ? f.properties.Fluoride < 1
        ? [65, 105, 225, 255]
        : f.properties.Fluoride < 2
        ? [255, 95, 31, 255]
        : [255, 49, 49, 255]
        
        : age === "tds"
        ? [65, 105, 225, 255]
        : [65, 105, 225, 255],

    // getIconAngle: 0,
    // getIconColor: [0, 0, 0, 255],
    // getIconPixelOffset: [0, 0],
    // getIconSize: 1,
    getLineColor: [0, 0, 0, 255],
    getLineWidth: 1,
    getPointRadius: (f) =>
      age === "default"
        ? 8
        : age === "mdd"
        ? f.properties.Nitrate < 5
          ? 5
          : f.properties.Nitrate < 10
          ? 10
          : f.properties.Nitrate < 15
          ? 15
          : 25
        : age === "material"
        ? f.properties.Arsenic * 1000 < 5
          ? 5
          : f.properties.Arsenic * 1000 < 10
          ? 10
          : f.properties.Arsenic * 1000 < 20
          ? 15
          : 20
        : age === "zone"
        ? f.properties.Fe < 0.1
          ? 5
          : f.properties.Fe < 0.3
          ? 10
          : f.properties.Fe < 0.6
          ? 15
          : 20
        : age === "fire"
        ? f.properties.Mn < 0.01
          ? 5
          : f.properties.Mn < 0.025
          ? 10
          : f.properties.Mn < 0.05
          ? 15
          : 20
        : age === "quality"
        ? f.properties.Fluoride < 0.5
          ? 5
          : f.properties.Fluoride < 1
          ? 10
          : f.properties.Fluoride < 2
          ? 15
          : 20
        : age === "tds"
        ? f.properties.TDS < 100
          ? 5
          : f.properties.TDS < 500
          ? 10
          : f.properties.TDS < 1000
          ? 15
          : 20
        : 8,
    getText: (f) =>
      age === "default"
        ? f.properties.Name
        : age === "mdd"
        ? f.properties.Nitrate.toString()
        : age === "material"
        ? (f.properties.Arsenic * 1000).toFixed(0).toString()
        : age === "zone"
        ? f.properties.Fe.toFixed(2).toString()
        : age === "fire"
        ? f.properties.Mn.toFixed(2).toString()
        : age === "quality"
        ? f.properties.Fluoride.toFixed(1).toString()
        : age === "tds"
        ? f.properties.TDS.toString()
        : f.properties.Arsenic,
    getTextAlignmentBaseline: "center",
    getTextAnchor: "middle",
    getTextAngle: -1,
    getTextBackgroundColor: [255, 255, 255, 255],
    getTextBorderColor: [0, 0, 0, 255],
    getTextBorderWidth: 1,
    getTextColor: [0, 0, 0, 255],
    getTextPixelOffset: [0, -15],
    getTextSize: (f) =>
      age === "default"
        ? 25
        : age === "mdd"
        ? 20
        : age === "material"
        ? 20
        : age === "zone"
        ? 20
        : age === "fire"
        ? 20
        : age === "quality"
        ? 20
        : age === "tds"
        ? 20
        : 20,
    // iconAlphaCutoff: 0.05,
    // iconAtlas: null,
    // iconBillboard: true,
    // iconMapping: {},
    // iconSizeMaxPixels: Number.MAX_SAFE_INTEGER,
    // iconSizeMinPixels: 0,
    // iconSizeScale: 1,
    // iconSizeUnits: 'pixels',
    // lineBillboard: false,
    // lineCapRounded: false,
    // lineJointRounded: false,
    // lineMiterLimit: 4,
    // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
    lineWidthMinPixels: 1,
    lineWidthScale: 1,
    lineWidthUnits: "meters",
    // material: true,
    // pointAntialiasing: true,
    // pointBillboard: false,
    // pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER,
    pointRadiusMinPixels: 2,
    pointRadiusScale: 1,
    pointRadiusUnits: "pixels",
    pointType: "circle+text",
    stroked: true,

    // textBackground: false,
    // textBackgroundPadding: [0, 0, 0, 0],
    // textBillboard: true,
    // textCharacterSet: [' ', '!', '"', '#', '$', '%', '&', ''', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', ''],
    // textFontFamily: 'Monaco, monospace',
    // textFontSettings: {},
    // textFontWeight: 'normal',
    // textLineHeight: 1,
    // textMaxWidth: -1,
    // textOutlineColor: [0, 0, 0, 255],
    // textOutlineWidth: 0,
    // textSizeMaxPixels: Number.MAX_SAFE_INTEGER,
    // textSizeMinPixels: 0,
    // textSizeScale: 1,
    // textSizeUnits: 'pixels',
    // textWordBreak: 'break-word',
    // wireframe: false,

    /* props inherited from Layer class */

    autoHighlight: true,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    // opacity: 1,
    pickable: true,
  });

  layers.push(layer21);

  const DeckGlOverlay = ({ layers }: DeckglOverlayProps) => {
    // the GoogleMapsOverlay can persist throughout the lifetime of the DeckGlOverlay
    const deck = useMemo(
      () =>
        new GoogleMapsOverlay({
          interleaved: true,
          getTooltip: ({ object, layer }) =>
            (object &&
              layer.id === "mh" && {
                html: `\
          <div id="showup">
          Manhole <br>
          Facility ID: ${object.properties.ManHoleID}<br>
          Rim (ft): ${object.properties.RimElevati}<br>
          Invert (ft): ${object.properties.InvOutElev}<br>
          </div>

    `,
                style: {
                  backgroundColor: "#FFFFFF",
                  color: "#FF69B4",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "150px",
                },
              }) ||
            (object &&
              layer.id === "modelpipe" && {
                html: `\
          <div id="showup">
          Pipe<br>
          Diameter: ${object.properties.DIAMETER}<br>
          Material: ${object.properties.MATERIAL}<br>
          
          </div>

    `,
                style: {
                  backgroundColor: "#FFFFFF",
                  color: "#DA70D6",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "150px",
                },
              }) ||
            (object &&
              layer.id === "tank" && {
                html: `\
                  <div id="showup">
                  Tank<br>
                  Name: ${object.properties.Label}<br>
                  Volume (MG): ${object.properties.TOTAL_VOL}<br>
                  Elevation (ft): ${object.properties.ELEVATION}<br>
                  Zone (ft): ${object.properties.ZONE}<br>
                  Diameter (ft): ${object.properties.DIAMETER}<br>
                  Height (ft): ${object.properties.MAX_LEVEL}<br>

      
                  </div>
      
            `,
                style: {
                  backgroundColor: "#FFFFFF",
                  color: "#008080",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "150px",
                },
              }) ||
            (object &&
              layer.id === "pump" && {
                html: `\
                  <div id="showup">
                  Pump<br>
                  Name: ${object.properties.Label}<br>
                  </div>
      
            `,
                style: {
                  backgroundColor: "#FFFFFF",
                  color: "#DA70D6",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "150px",
                },
              }) ||
            (object &&
              layer.id === "valve" && {
                html: `\
                    <div id="showup">
                    Valve<br>
                    Elevation: ${object.properties.ELEVATION}<br>
                    Setting: ${object.properties.SETTING}<br>
                    Zone (ft): ${object.properties.ZONE}<br>
                    Diameter: ${object.properties.DIAMETER1}<br>
                    Valve Type: ${object.properties.VALVE_TYPE}<br>
                    </div>
        
              `,
                style: {
                  backgroundColor: "#FFFFFF",
                  color: "#0F52BA",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "150px",
                },
              }) ||
            (object &&
              layer.id === "hydrant" && {
                html: `\
                      <div id="showup">
                      Hydrant<br>
                      Hydrant ID: ${object.properties.FACILITYID}<br>
                      Fire Flow (GPM): ${object.properties.AFF}<br>
                      Zone (ft): ${object.properties.PRESSUREZO}<br>
                      Year: ${object.properties.HYDRANTYEA}<br>
                      Address: ${object.properties.Address}<br>
                      Jurisdiction: ${object.properties.JURISDICTI}<br>
                      </div>
          
                `,
                style: {
                  backgroundColor: "#FFFFFF",
                  color: "#800020",
                  fontSize: "12px",
                  fontWeight: "bold",
                  width: "150px",
                },
              }) ||
            (object &&
              layer.id === "modelnode" && {
                html: `\
                      <div id="showup">
                      <u>Node</u><br>
                      Demand: ${object.properties.DEMAND}<br>
                      Elevation (ft): ${object.properties.ELEVATION}<br>
                      MDD Pressure (psi): ${Math.round(
                        object.properties.MAX_PRESS
                      )}<br>
                      
                      </div>
          
                `,
                style: {
                  backgroundColor: "#FFFFFF",
                  color: "#CC7722",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "200px",
                },
              }) ||
            (object &&
              layer.id === "agenode" && {
                html: `\
                        <div id="showup">
                        <u>Node</u><br>
                        Water Age (hr): ${Math.round(
                          object.properties.QUALITY
                        )}<br>
                        
                        </div>
            
                  `,
                style: {
                  backgroundColor: "#FFFFFF",
                  color: "#CC7722",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "150px",
                },
              }) ||
            (object &&
              layer.id === "agepipe" && {
                html: `\
                          <div id="showup">
                          <u>Pipe</u><br>
                          Water Age (hr): ${Math.round(
                            object.properties.QUALITY
                          )}<br>
                          
                          </div>
              
                    `,
                style: {
                  backgroundColor: "#FFFFFF",
                  color: "#CC7722",
                  fontSize: "15px",
                  fontWeight: "bold",
                  width: "150px",
                },
              }),
        }),
      []
    );
    const map = useMap();
    useEffect(() => {
      deck.setMap(map);
      const contentString = '<div id="content">' + "</div>";
      map.addListener("click", (event) => {
        // console.log(event.latLng.lat(), event.latLng.lng());
        setActivePosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        const picked = deck.pickObject({
          x: event.pixel.x,
          y: event.pixel.y,
          radius: 4,
          layerIds: ["tribe"],
        });

        setClickInfo(picked);
        console.log(clickInfo);
        // console.log(activePosition);

        // console.log(picked ? picked.object.properties : "none");
      });
      // console.log(deck);
      return () => deck.setMap(null);
    }, [deck, map, show1, show2, show3, show4, show5]);

    // whenever the rendered data changes, the layers will be updated
    useEffect(() => {
      deck.setProps({ layers });
    }, [deck, layers, show1, show2, show3, show4, show5]);
    // no dom rendered by this component
    return null;
  };

  return (
    <>
      <APIProvider apiKey={""}>
        <div style={{ height: "100vh", width: "100%" }}>
          <Map
            zoom={8.2}
            center={position}
            mapId={"1925bbc5ceb21cb3"}
            gestureHandling={"greedy"}
          >
            <DeckGlOverlay layers={layers} />
            {clickInfo && (
              <InfoWindow
                position={activePosition}
                onCloseClick={handleInfoWindowClose}
              >
                {clickInfo.layer.id === "tribe" ? (
                  <div style={{ color: "blue", fontWeight: "bold" }}>
                    <h4>
                      Tribe <br />
                    </h4>
                    <p style={{ color: "grey", fontWeight: "regular" }}>
                      Facility ID: {clickInfo.object.properties.OASISID} <br />
                      Invert: {clickInfo.object.properties.Invert} <br />
                      RIM: {clickInfo.object.properties.RASTERVALU} <br />
                    </p>
                  </div>
                ) : (
                  <div style={{ color: "blue", fontWeight: "bold" }}>
                    <h4>
                      Node <br />
                    </h4>
                    <p style={{ color: "grey", fontWeight: "regular" }}>
                      Water Age (hr):{" "}
                      {Math.round(clickInfo.object.properties.QUALITY)} <br />
                    </p>
                  </div>
                )}
              </InfoWindow>
            )}
          </Map>
          <CustomMapControl
            controlPosition={ControlPosition.TOP}
            selectedAutocompleteMode={selectedAutocompleteMode}
            onPlaceSelect={setSelectedPlace}
          />
          <MapHandler place={selectedPlace} />
        </div>
      </APIProvider>
      <TriggerButton
        type="button"
        onClick={handleOpen}
        style={{
          position: "absolute",
          top: 60,
          left: 15,

          fontSize: "18px", // Smaller font size for a small button
          padding: "5px 10px", // Smaller padding
          // Add any additional styling you want for a small button

          // backgroundColor: "#FFBB34",
          // borderColor: "#555555",
          // borderWidth: 0,
          // borderRadius: 0,
          // fontWeight: "bold",
          // marginTop: 200,
          // justifyContent: "flex-start",
        }}
      >
        <u>Select a Water Parameter</u>
      </TriggerButton>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
        style={{
          alignItems: "left",
          justifyContent: "left",
        }}
      >
        <ModalContent sx={{ width: 400 }}>
          <u>
            <h3>Control Panel</h3>
          </u>
          <FormControl
            component="fieldset"
            style={{
              // position: "absolute",
              // top: 85,
              // left: 10,
              background: "rgb(232, 241, 250)",
              margin: 0,
            }}
          >
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={age}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setAge(event.target.value);
                if (event.target.value === "default") {
                  setShow1(true);
                  setShow2(false);
                  setShow3(false);
                  setShow4(false);
                  setShow5(true);
                } else if (event.target.value === "mdd") {
                  setShow1(true);
                  setShow2(false);
                  setShow3(true);
                  setShow4(false);
                  setShow5(true);
                } else if (event.target.value === "add") {
                  setShow1(true);
                  setShow2(false);
                  setShow3(true);
                  setShow4(false);
                  setShow5(true);
                } else if (event.target.value === "material") {
                  setShow1(true);
                  setShow2(false);
                  setShow3(false);
                  setShow4(false);
                  setShow5(true);
                } else if (event.target.value === "zone") {
                  setShow1(true);
                  setShow2(false);
                  setShow3(false);
                  setShow4(false);
                  setShow5(true);
                } else if (event.target.value === "fire") {
                  setShow1(true);
                  setShow2(false);
                  setShow3(false);
                  setShow4(true);
                  setShow5(true);
                } else {
                  setShow1(false);
                  setShow2(true);
                  setShow3(false);
                  setShow4(false);
                  setShow5(false);
                }
              }}
              // renderValue={(selected) => {
              //   if (selected) return age;
              // }}
            >
              <FormControlLabel
                value="default"
                label="Tribe"
                control={<Radio />}
                componentsProps={{
                  typography: { variant: "h6", fontSize: 15 },
                }}
              />
              <FormControlLabel
                value="mdd"
                label="Nitrate (mg/L) - MCL (10 mg/L)"
                control={<Radio />}
                componentsProps={{
                  typography: { variant: "h6", fontSize: 15 },
                }}
              />

              <FormControlLabel
                value="material"
                label="Arsenic (ug/L) - MCL (10 ug/L)"
                control={<Radio />}
                componentsProps={{
                  typography: { variant: "h6", fontSize: 15 },
                }}
              />
              <FormControlLabel
                value="zone"
                label="Fe (mg/L) - MCL (0.3 mg/L)"
                control={<Radio />}
                componentsProps={{
                  typography: { variant: "h6", fontSize: 15 },
                }}
              />
              <FormControlLabel
                value="fire"
                label="Mn (mg/L) - MCL (0.05 mg/L)"
                control={<Radio />}
                componentsProps={{
                  typography: { variant: "h6", fontSize: 15 },
                }}
              />
              <FormControlLabel
                value="quality"
                label="Fluoride (mg/L) - MCL (2 mg/L)"
                control={<Radio />}
                componentsProps={{
                  typography: { variant: "h6", fontSize: 15 },
                }}
              />
              <FormControlLabel
                value="tds"
                label="TDS (mg/L)"
                control={<Radio />}
                componentsProps={{
                  typography: { variant: "h6", fontSize: 15 },
                }}
              />
            </RadioGroup>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
