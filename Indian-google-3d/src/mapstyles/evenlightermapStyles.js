export const mapStyles = [
  {
    featureType: "administrative.country",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },

  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  // {
  //   featureType: "administrative",
  //   elementType: "labels.text.fill",
  //   stylers: [
  //     {
  //       color: "#6195a0",
  //     },
  //   ],
  // },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        hue: "#0051ff",
      },
      {
        saturation: "-100",
      },
      {
        lightness: "0",
      },
      {
        gamma: "1.00",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        gamma: "0.25",
      },
      {
        lightness: "0",
      },
      {
        saturation: "0",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "on",
      },
      {
        lightness: "47",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        hue: "#ff0000",
      },
      {
        weight: "0.50",
      },
      {
        saturation: "-100",
      },
      {
        lightness: "-10",
      },
      {
        gamma: "1.00",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "off",
      },
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry.fill",
    stylers: [
      {
        visibility: "off",
      },
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off",
      },
      {
        saturation: "-100",
      },
    ],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#e6f3d6",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#f4d2c5",
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#f4f4f4",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#787878",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#eaf6f8",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eaf6f8",
      },
    ],
  },
];
